// k6 imports
import csv from 'k6/experimental/csv';
import http from 'k6/http';
import { open } from 'k6/experimental/fs';
import encoding from 'k6/encoding';

// other imports
import * as APIs from './APISenders/APIs.js';
import {url} from './loadtest.js';

const file = await open('USERS.csv');
const csvRecords = (await csv.parse(file, { delimiter: ',' })).slice(1);

let token = "";
const max_login_retry = 5;
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

export function getAllUsers() {
    return csvRecords.map(row => row[0]);
}

export function getCurrentUser() {
    return csvRecords[__VU - 1][0];
}

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
function AddToOutput(res) {
    const fullUrl = res?.request?.url || 'unknown url';
    const url = fullUrl.includes('/api/')
        ? fullUrl.substring(fullUrl.indexOf('/api/'))
        : fullUrl;

    const status = res?.status || 'no status';
    let message = '';

    if (status === 200) {
        message = `${getCurrentUser().padEnd(12)}:  ${url.padEnd(40)} => status = 200`;
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
export function logger() {
    console.log("\n" + output.join("\n") + "\n\n----------");
}