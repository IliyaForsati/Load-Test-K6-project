// k6 imports
import http from 'k6/http';

// other imports
import * as APIs from './APISenders/APIs.js';
import { logger, refreshToken } from './main_methods.js';
import { randomInt } from './util.js'

// globals
export let url = ''
export let database = ''

// script info
const script_host = "http://localhost:5000"
export const get_databases_api = script_host + "/api/getDataBases"
export const get_usernames_api = {
    get get() {
        return `${script_host}/api/getUsersAndPasswords?database=${database}`;
    }
}

export const options = {
  vus: 50,
  iterations: 50,
}

export function setup() {
  let res = http.get(get_databases_api)
  let servers = res.json();  // parse JSON
  return { servers };
}

export default function (data) {
  try {
    servers_check(data)
  }
  catch (err) {
    console.error(err.toString());
  }
  logger();
}

// test: 1 server - for users
function check_tests() {
  
}

// test: check all servers - for users
function servers_check(data) {
  for (let server of data.servers) {
    url = server.base_url
    database = server.database
    
    run_all_apis()

    refreshToken()
  }
}

function run_all_apis()
{
  const getAllRes = APIs.Order.getAllSummary_post_Req(url)

  const orderNoList = JSON.parse(getAllRes.body).model.gridData.data.map(row => row[0]);

  const randomRecNo = orderNoList[randomInt(0, orderNoList.length)];

  APIs.Order.getRecNo_get_req(url, randomRecNo)

  APIs.MainMenuDevelopment._post_req(url)

  APIs.OrderRevision._post_req(url, randomRecNo)

  // APIs.UserSecuritySetupTemp.AssignRights_put_req(url)

  APIs.UserWorkstationSetting.UserWorkstationSettingsUpsert_post_req(url)
}