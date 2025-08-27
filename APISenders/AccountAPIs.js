import * as funcs from '../main_methods.js'
import * as JSONFiles from '../resquests/index.js'

// POST: api/Account/login
export function login_post_Req(url) {
    const variables = {
        base_url: url
    };

    const body = JSON.stringify({
      username: "DBATTISTA",
      password: "hd",
      CaptchaCode: null,
      isDashboard: false,
    });

    const res = funcs.sendRequest(JSONFiles.Account_login_post, variables, body);
    
    return res;
}