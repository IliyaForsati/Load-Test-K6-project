import * as funcs from '../funcs.js'
import * as JSONFiles from '../resquests/index.js'

// POST: api/Order/GetAllSummary
export function getAllSummary_post_Req(url) {
    const variables = {
        base_url: url,
        token: funcs.token,
    };

    const res = funcs.sendRequest(JSONFiles.getAllSummary_post, variables);

    return res;
}

// GET: api/Order/{orderNo}
export function getRecNo_get_req(url, recNo) {
    const variables = {
        base_url: url,
        token: funcs.token,
        recNo: recNo,
    };

    const res = funcs.sendRequest(JSONFiles.getAllSummary_post, variables);

    return res;
}