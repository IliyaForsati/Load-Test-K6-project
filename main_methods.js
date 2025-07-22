// k6 imports
import csv from 'k6/experimental/csv';
import http from 'k6/http';
import { open } from 'k6/experimental/fs';
import encoding from 'k6/encoding';

// other imports
import * as APIs from './APISenders/APIs.js';
import {url} from './loadtest.js';

const file = await open('data.csv');
const csvRecords = await csv.parse(file, { delimiter: ',' });

let token = "";
export function getToken() {
    if (token === "") {
        const res = APIs.Account.login_post_Req(url);

        if (res.status === 200) 
            token = JSON.parse(res.body).token;
    }

    return token;
}

export function getAllUsers() {
    return csvRecords.map(row => row[0]);
}

export function getCurrentUser() {
    return csvRecords[__VU + 40][0];
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
    const payload = hasBody ? ((body === null) ? encoding.b64decode(reqJson.data) : body) : undefined;

    switch (method) {
        case 'GET':
            return http.get(reqJson.url, { headers });

        case 'POST':
            return http.post(reqJson.url, payload, { headers });

        case 'PUT':
            return http.put(reqJson.url, payload, { headers });

        case 'PATCH':
            return http.patch(reqJson.url, payload, { headers });

        case 'DELETE':
            return http.del(reqJson.url, payload, { headers });

        default:
            throw new Error(`Unsupported HTTP method: ${method}`);
    }
}