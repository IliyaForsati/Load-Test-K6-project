import * as APIs from './APISenders/APIs.js';
import { randomInt } from './util.js';
import { getCurrentUser } from './funcs.js';


const url = "http://rentx.npgnasr.com";

// set up
export const options = {
  vus: 4,
  iterations: 4,
  duration: '5m',
};

// main func
export default function () {
  const loginRes = APIs.Account.loginReq(url);

  const getAllRes = APIs.Order.getAllSummaryReq(url);
  const orderNoList = JSON.parse(getAllRes.body).model.gridData.data.map(row => row[0]);

  const getRecNumRes = APIs.Order.getRecNo(url, randomInt(orderNoList.length));

  console.log(`${getCurrentUser().padEnd(16)} => login(${loginRes.status}) , getAllSummary(${getAllRes.status}) , getRecNo(${getRecNumRes.status})`);
}