import * as funcs from '../main_methods.js'
import * as JSONFiles from '../resquests/index.js'

// POST: api/OrderRevision
export function _post_req(url, recNo) {
    const variables = {
        base_url: url,
        token: funcs.getToken(),
        recNo: recNo,
    };

    const body = JSON.stringify({
        orderNo: recNo,
        saveRevision: true,
    });

    const res = funcs.sendRequest(JSONFiles.OrderRevision__post, variables, body);

    return res;
}