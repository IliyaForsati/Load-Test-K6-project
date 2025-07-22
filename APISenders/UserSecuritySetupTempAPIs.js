import * as funcs from '../main_methods.js'
import * as JSONFiles from '../resquests/index.js'

// PUT: api/UserSecuritySetupTemp/AssignRights
export function AssignRights_put_req(url) {
    const variables = {
        base_url: url,
        token: funcs.getToken(),
        username: funcs.getCurrentUser(),
    };

    const res = funcs.sendRequest(JSONFiles.AssignRights_put, variables);

    return res;
}