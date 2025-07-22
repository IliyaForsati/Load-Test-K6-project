import * as funcs from '../funcs.js'
import * as JSONFiles from '../resquests/index.js'

// POST: api/Account/login
export function loginReq(url) {
    const variables = {
        base_url: url
    };

    const body = JSON.stringify({
      username: funcs.getCurrentUser(),
      password: "hd",
      CaptchaCode: null,
      isDashboard: false,
    });

    const res = funcs.sendRequest(JSONFiles.login, variables, body);

    funcs.setToken(JSON.parse(res.body).token);
    
    return res;
}