import * as APIs from './APISenders/APIs.js';
import { randomInt } from './util.js';
import { getCurrentUser } from './main_methods.js';

export const url = "http://rentx.npgnasr.com";

// set up
export const options = {
  vus: 4,
  iterations: 4,
  duration: '5m',
};

// main func
export default function () {
  const getAllRes = APIs.Order.getAllSummary_post_Req(url);

  const orderNoList = JSON.parse(getAllRes.body).model.gridData.data.map(row => row[0]);

  const randomRecNo = randomInt(0, orderNoList.length);

  const getRecNumRes = APIs.Order.getRecNo_get_req(url, randomRecNo);

  const _POSTRes = APIs.OrderRevision._post_req(url, randomRecNo);

  console.log(`${getCurrentUser().padEnd(12)} => getAllSummary(${getAllRes.status}) , getRecNo(${getRecNumRes.status}), _POST(${_POSTRes.status})`);
}