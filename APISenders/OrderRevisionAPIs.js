import * as funcs from '../funcs.js'
import * as JSONFiles from '../resquests/index.js'

// POST: api/OrderRevision
export function _Post(url, recNo) {
const variables = {
    base_url: url,
    token: funcs.token,
    recNo: recNo,
};

const body = JSON.stringify({
    orderNo: recNo,
    saveRevision: true,
});

const res = funcs.sendRequest(JSONFiles._Post, variables, body);

funcs.setToken(JSON.parse(res.body).token);

return res;
}