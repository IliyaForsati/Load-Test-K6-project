import * as APIs from './APISenders/APIs.js';
import { randomInt } from './util.js';
import { logger } from './main_methods.js';

export const url = "http://192.168.1.54:8051";

// set up
export const options = {
  vus: 5,
  iterations: 5,
  duration: '5m',
};

// main func
export default function () {
  try {
    APIs.MainMenuDevelopment._post_req(url);

    const getAllRes = APIs.Order.getAllSummary_post_Req(url);

    const orderNoList = JSON.parse(getAllRes.body).model.gridData.data.map(row => row[0]);

    const randomRecNo = orderNoList[randomInt(0, orderNoList.length)];

    const getRecNumRes = APIs.Order.getRecNo_get_req(url, randomRecNo);

    const _POSTRes = APIs.OrderRevision._post_req(url, randomRecNo);
  }
  catch (err) {
    console.error(err.toString());
  }

  logger();
}