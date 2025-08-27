// k6 imports
import http from 'k6/http';
import encoding from 'k6/encoding';

// other imports
import * as APIs from './APISenders/APIs.js';
import {url} from './loadtest.js';



let token = "";
/**
 * this method return valid token, and send login request if needed.
 * @returns {String}
 */
export function getToken() {
    if (token === "") {
        const res = APIs.Account.login_post_Req(url);

        if (res.status === 200) {
            token = JSON.parse(res.body).token;
        } else {
            throw new Error("can not login with user: " + getCurrentUser() + `(${res.status})`);
        }
    }

    return token;
}

/**
 * get list of all users with password. from api
 * @returns list of users and passwords
 * @example
 *    [
 *      {
 *        "username": "iliya",
 *        "password": "*****"
 *      },
 *      ...
 *    ]
 */
export function getAllUsers() {
    
}

export function getCurrentUser() {
    
}

/**
 * this method replace variable in JSON object.
 * @param {Object} jsonObj 
 * @param {Object} variables 
 * @returns 
 */
function replaceJsonVariables(jsonObj, variables) {
    const jsonString = JSON.stringify(jsonObj);

    const newJsonStr = jsonString.replace(/\{\{(\w+)\}\}/g, (_, key) => {
        if (variables.hasOwnProperty(key)) {
        return variables[key];
        } else {
        console.warn(`Variable ${key} not found in variables object.`);
        return '';
        }
    });

    return JSON.parse(newJsonStr);
}

/**
 * send request according to JSON file.
 * @param {Object} reqJsonTemplate 
 * @param {Object} variables 
 * @param {String} body 
 * @returns 
 */
export function sendRequest(reqJsonTemplate, variables, body = null) {
    const reqJson = replaceJsonVariables(reqJsonTemplate, variables);

    const method = reqJson.method.toUpperCase();
    const headers = reqJson.headers || {};
    
    const hasBody = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method);
    
    const payload = hasBody 
        ? ((body === null) 
            ? (() => { 
                try {
                    return encoding.b64decode(reqJson.data);
                } catch {
                    return reqJson.data;
                }
            })()
            : body
        ) 
        : undefined;

    switch (method) {
        case 'GET':
            const getRes = http.get(reqJson.url, { headers });
            AddToOutput(getRes);
            return getRes;

        case 'POST':
            const postRes = http.post(reqJson.url, payload, { headers });
            AddToOutput(postRes);
            return postRes;

        case 'PUT':
            const putRes = http.put(reqJson.url, payload, { headers });
            AddToOutput(putRes);
            return putRes;

        case 'PATCH':
            const patchRes = http.patch(reqJson.url, payload, { headers });
            AddToOutput(patchRes);
            return patchRes;

        case 'DELETE':
            const delRes = http.del(reqJson.url, payload, { headers });
            AddToOutput(delRes);
            return delRes;

        default:
            throw new Error(`Unsupported HTTP method: ${method}`);
    }
}

const output = [];
/**
 * create output string.
 * @param {object} res 
 */
function AddToOutput(res) {
    const fullUrl = res?.request?.url || 'unknown url';
    const url = fullUrl.includes('/api/')
        ? fullUrl.substring(fullUrl.indexOf('/api/'))
        : fullUrl;

    const status = res?.status || 'no status';
    let message = '';

    if (status === 200) {
        message = `${getCurrentUser().padEnd(12)}:  ${url.padEnd(40)} => status = ${status} \n`;
    } else {
        let errorSummary = '';

        try {
            const body = res?.body ? JSON.parse(res.body) : {};
            errorSummary = JSON.stringify(body?.messages, null, 2);
        } catch (e) {
            errorSummary = 'Response is not valid JSON';
        }

        message = `${getCurrentUser().padEnd(12)}:  ${url.padEnd(40)} => status = ${status} | error: \n${errorSummary} \n`;
    }

    output.push(message);
}
/**
 * this methods show results of all requests that current __VU sent in this round.
 */
export function logger() {
    if (output.length > 0 && output[0] != '') {
        console.log("\n" + output.join("\n") + "\n\n----------");
        output.length = 0;
    }
}