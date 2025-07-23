import * as funcs from '../main_methods.js'
import * as JSONFiles from '../resquests/index.js'

// POST: api/MainMenuDevelopment
export function _post_req(url) {
    const variables = {
        base_url: url,
        token: funcs.getToken(),
    };
    
    const res = funcs.sendRequest(JSONFiles.MainMenuDevelopment__post, variables);
    
    return res;
}