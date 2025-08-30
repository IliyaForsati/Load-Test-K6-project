import * as funcs from '../main_methods.js'
import * as JSONFiles from '../resquests/index.js'

// POST: api/UserWorkstationSetting/UserWorkstationSettingsUpsert
export function UserWorkstationSettingsUpsert_post_req(url) {
    const variables = {
        base_url: url,
        token: funcs.getToken(),
    };
    
    const res = funcs.sendRequest(JSONFiles.UserWorkstationSettingsUpsert_post, variables);

    return res;
}