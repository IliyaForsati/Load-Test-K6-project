import * as APIs from './APISenders/APIs.js';
import { logger } from './main_methods.js';


export const url = "http://rentex.hd.sl.npgnasr.com"
const database = 'SL-PV-TVCS'
export const script_api = `http://localhost:5000/api/getUsersAndPasswords?database=${database}`

// 1. init code

export const options = {
  vus: 20,
  iterations: 20,
  // duration: '1m',
  // ...
};

export function setup() {
  // 2. setup code
}

// main func
export default function () {
  // 3. VU code

  // here is your flow like here

  try {
    APIs.UserWorkstationSetting.UserWorkstationSettingsUpsert_post_req(url);
  }
  catch (err) {
    console.error(err.toString());
  }
  logger();
}

export function teardown(data) {
  // 4. teardown code
}