export {logger} from './../utils.js'


// export function english(url, token, output) {
//   const api = "/api/Translate/GetTranslatesBylanguage/ENGLISH";

//   const headers = {
//     'Accept': 'application/json, text/plain, */*',
//     'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8',
//     'Authorization': `Bearer ${token}`,
//     'ClientTimeZone': '210',
//     'Connection': 'keep-alive',
//     'DeviceType': 'desktop',
//     'HubId': '6OkvKljJNW+y4NxfjTYipg==',
//     'Language': 'ENGLISH',
//     'Location': 'ANAHEIM',
//     'Referer': 'http://rentx.npgnasr.com/login',
//     'Region': 'Asia/Tehran',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
//     'WorkstationID': '408479161',
//     'X-Frame-Options': 'DENY',
//     'appInstanceId': 'b85ae3b1-00ab-4f9c-a6b9-3ad129c2b232',
//     'isPublicRequest': 'false',
//     'stopDisplayingDefaultError': 'false',
//     'Cookie': 'sessionStarted=true',
//   }

//   const response = http.get(url + api, {headers});
//   if (response.status >= 400 && response.status < 500) {
//     output.push(`${(csvRecords[__VU][0] + ':').padEnd(16)} ${api.padEnd(64)} =>    ${response.status}   \n`);
//     output.push(response.body + "\n");
//   }
//   return response;
// }

// export function getAllMisc(url, token, output) {
//   const api = "/api/RentalDetail/GetAllMisc";

//   const headers = {
//       'Accept': 'application/json, text/plain, */*',
//       'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8',
//       'Authorization': `Bearer ${token}`,
//       'ClientTimeZone': '210',
//       'Connection': 'keep-alive',
//       'Content-Type': 'application/json',
//       'DeviceType': 'desktop',
//       'HubId': 'Fopw5Kdhw/pG8znsPGNi6g==',
//       'Language': 'ENGLISH',
//       'Location': 'ANAHEIM',
//       'Origin': 'http://rentx.npgnasr.com',
//       'Referer': 'http://rentx.npgnasr.com/rental-order?orderNo=405565',
//       'Region': 'Asia/Tehran',
//       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
//       'WorkstationID': '408479161',
//       'X-Frame-Options': 'DENY',
//       'appInstanceId': '5876d6af-5f58-4cf0-b4f1-9d3130770770',
//       'delayedApiKey': '',
//       'doNotHandleAlertMessage': 'true',
//       'Cookie': 'sessionStarted=true',
//   }

//   const payload = 'eyJlbnRpdHlGaWx0ZXJzIjp7Im9yZGVyTm8iOjQwNTU2NSwiQXZhaWxhYmlsaXR5IjpmYWxzZSwiYXZhaWxhYmxlTW9kZSI6IlB1bGwiLCJNYWluQXZhaWxhYmlsaXR5IjpmYWxzZSwiaXNDaGFuZ2VBdmFpbGFiaWxpdHkiOmZhbHNlLCJpc0NoYW5nZU1haW5BdmFpbGFiaWxpdHkiOmZhbHNlfX0='
  
//   const response = http.post(url + api, payload, {headers});
//   if (response.status >= 400 && response.status < 500) {
//     output.push(`${(csvRecords[__VU][0] + ':').padEnd(16)} ${api.padEnd(64)} =>    ${response.status}   \n`);
//     output.push(response.body + "\n");
//   }
//   return response;
// }

// export function getComboDiscibtion(url, token, output) {
//   const api = "/api/Common/GetComboDescription";

//   const headers = {
//     'Accept': 'application/json, text/plain, */*',
//     'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8',
//     'Authorization': `Bearer ${token}`,
//     'ClientTimeZone': '210',
//     'Connection': 'keep-alive',
//     'Content-Type': 'application/json',
//     'DeviceType': 'desktop',
//     'HubId': 'Fopw5Kdhw/pG8znsPGNi6g==',
//     'Language': 'ENGLISH',
//     'Location': 'ANAHEIM',
//     'Origin': 'http://rentx.npgnasr.com',
//     'Referer': 'http://rentx.npgnasr.com/rental-order?orderNo=405565',
//     'Region': 'Asia/Tehran',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
//     'WorkstationID': '408479161',
//     'X-Frame-Options': 'DENY',
//     'appInstanceId': '313b9a18-3196-4cac-b634-4a68a3b21b65',
//     'hasNotLoading': 'true',
//     'isPublicRequest': 'false',
//     'stopDisplayingDefaultError': 'false',
//     'Cookie': 'sessionStarted=true',
// }

//   const payload = 'eyJlbnRpdHlGaWx0ZXJzIjp7Im9yZGVyTm8iOjQwNTU2NSwiQXZhaWxhYmlsaXR5IjpmYWxzZSwiYXZhaWxhYmxlTW9kZSI6IlB1bGwiLCJNYWluQXZhaWxhYmlsaXR5IjpmYWxzZSwiaXNDaGFuZ2VBdmFpbGFiaWxpdHkiOmZhbHNlLCJpc0NoYW5nZU1haW5BdmFpbGFiaWxpdHkiOmZhbHNlfX0='
  
//   const response = http.post(url + api, payload, {headers});
//   if (response.status >= 400 && response.status < 500) {
//     output.push(`${(csvRecords[__VU][0] + ':').padEnd(16)} ${api.padEnd(64)} =>    ${response.status}   \n`);
//     output.push(response.body + "\n");
//   }
//   return response;
// }

// export function GetAll(url,token, output) {
//   const api = "/api/RentalDetail/GetAll";

//   const headers = {
//     'Accept': 'application/json, text/plain, */*',
//     'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8',
//     'Authorization': `Bearer ${token}`,
//     'ClientTimeZone': '210',
//     'Connection': 'keep-alive',
//     'Content-Type': 'application/json',
//     'DeviceType': 'desktop',
//     'HubId': 'Fopw5Kdhw/pG8znsPGNi6g==',
//     'Language': 'ENGLISH',
//     'Location': 'ANAHEIM',
//     'Origin': 'http://rentx.npgnasr.com',
//     'Referer': 'http://rentx.npgnasr.com/rental-order?orderNo=405565',
//     'Region': 'Asia/Tehran',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
//     'WorkstationID': '408479161',
//     'X-Frame-Options': 'DENY',
//     'appInstanceId': '313b9a18-3196-4cac-b634-4a68a3b21b65',
//     'delayedApiKey': '',
//     'doNotHandleAlertMessage': 'true',
//     'Cookie': 'sessionStarted=true',
// }

//   const payload = 'eyJlbnRpdHlGaWx0ZXJzIjp7Im9yZGVyTm8iOjQwNTU2NSwiU2hvd09ubHlNYWluIjpmYWxzZSwiUmVzZXQiOmZhbHNlLCJJc1JlY2FsY3VsYXRlIjpmYWxzZSwicmV0dXJuUXR5IjpmYWxzZSwiQXZhaWxhYmxlIjp7IkF2YWlsYWJpbGl0eSI6ZmFsc2UsIk1haW5BdmFpbGFiaWxpdHkiOmZhbHNlLCJBdmFpbGFibGVNb2RlIjoiUHVsbCIsIklzQ2hhbmdlQXZhaWxhYmlsaXR5IjpmYWxzZSwiSXNDaGFuZ2VNYWluQXZhaWxhYmlsaXR5IjpmYWxzZX19fQ=='
  
//   const response = http.post(url + api, payload, {headers});
//   if (response.status >= 400 && response.status < 500) {
//     output.push(`${(csvRecords[__VU][0] + ':').padEnd(16)} ${api.padEnd(64)} =>    ${response.status}   \n`);
//     output.push(response.body + "\n");
//   }
//   return response;
// }


// new
// export function GetAllSummary(url, token, output) {
//   const api = "/api/order/getAllSummary";

//   const headers = {
//     'Accept': 'application/json, text/plain, */*',
//     'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8',
//     'Authorization': `Bearer ${token}`,
//     'ClientTimeZone': '210',
//     'Connection': 'keep-alive',
//     'DeviceType': 'desktop',
//     'HubId': 'o+sywjFiueeaMIlkVemgqQ==',
//     'Language': 'ENGLISH',
//     'Location': '',
//     'Origin': 'http://192.168.1.54:8051',
//     'Page': 'OrdersSummary',
//     'Referer': 'http://192.168.1.54:8051/order',
//     'Region': 'Asia/Tehran',
//     'RestrictedValue': 'picture,orderNo,orderType,transferTo,orderStatus',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
//     'WorkstationID': '601339697',
//     'X-Frame-Options': 'DENY',
//     'appInstanceId': '1fa94e57-449e-42e2-8ead-3aa98dc0331e',
//     'delayedApiKey': 'a7485a73-1243-4e3a-bbb5-56abfe63355b',
//     'doNotHandleAlertMessage': 'true',
//   }

//   const payload = 'eyJlbnRpdHlGaWx0ZXJzIjp7Im9yZGVyVHlwZSI6WyJxdW90ZSIsIm9yZGVyIl0sInJlbnRhbHNTYWxlcyI6MywiZmlsdGVyQnlVc2VyIjoiZmFsc2UiLCJoaXN0b3J5IjpmYWxzZX19';

//   const response = http.post(url + api, payload, {headers});
  
//   return response;
// }

export function OrderRevision(url, token, output, http) {
  const api = "/api/OrderRevision";

  const headers = {
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8',
      'Authorization': `Bearer ${token}`,
      'ClientTimeZone': '210',
      'Connection': 'keep-alive',
      'Content-Type': 'application/json',
      'DeviceType': 'desktop',
      'HubId': 'o+sywjFiueeaMIlkVemgqQ==',
      'Language': 'ENGLISH',
      'Location': '',
      'Origin': 'http://192.168.1.54:8051',
      'Referer': 'http://192.168.1.54:8051/order?detailMode=full-screen&hideCloseButton=true&detailId=108651',
      'Region': 'Asia/Tehran',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
      'WorkstationID': '601339697',
      'X-Frame-Options': 'DENY',
      'doNotHandleErrorMessage': 'true',
  }

  const payload = {
    'eyJvcmRlck5vIjoxMDg2NTEsInNhdmVSZXZpc2lvbiI6dHJ1ZX0': '',
};

  const response = http.post(url + api, payload, {headers});
  if (response.status != 200) {
    output.push(`${api.padEnd(64)} =>    ${response.status}   \n`);

    console.log(response.body + "\n");
  }
  return response;
}

export function MainMenuDevelopment(url, token, output, http) {
  const api = "/api/MainMenuDevelopment";

  const headers = {
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8',
      'Authorization': `Bearer ${token}`,
      'ClientTimeZone': '210',
      'Connection': 'keep-alive',
      'DeviceType': 'desktop',
      'HubId': 'o+sywjFiueeaMIlkVemgqQ==',
      'Language': 'ENGLISH',
      'Location': '',
      'Origin': 'http://192.168.1.54:8051',
      'Referer': 'http://192.168.1.54:8051/order?detailMode=full-screen&hideCloseButton=true&detailId=108651',
      'Region': 'Asia/Tehran',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
      'WorkstationID': '601339697',
      'X-Frame-Options': 'DENY',
      'appInstanceId': '1fa94e57-449e-42e2-8ead-3aa98dc0331e',
      'hasNotLoading': 'true',
      'isPublicRequest': 'false',
      'stopDisplayingDefaultError': 'false',
  }

  const payload = "eyJub2RlVHlwZSI6InRvb2xib3giLCJub2RlTmFtZSI6Ik9yZGVyc1N1bW1hcnkiLCJsaW5rUGFnZSI6Ii9vcmRlciIsIml0ZW1MaXN0IjpbeyJub2RlTmFtZSI6Ik1PUkVfVE9PTF9EUk9QRE9XTiIsIm5vZGVUeXBlIjoiRFJPUERPV05fVE9PTF9JVEVNX1RZUEUiLCJpdGVtTGlzdCI6W3sibm9kZU5hbWUiOiJBRERfQV9ORVdfUFJPRFVDVElPTiIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiUkVOVEFMX09SREVSIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJTQUxFU19PUkRFUiIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiT1JERVJfVE9UQUwiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IlJFTlRBTF9DSEVDS09VVCIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiU0FMRVNfQ0hFQ0tPVVQiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IlJFTlRBTF9DSEVDS0lOIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJDSEVDS0lOX0JZX1NFTEVDVEVEIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJBRERfUE9TIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9XX0seyJub2RlTmFtZSI6IlBSSU5UIiwibm9kZVR5cGUiOiJEUk9QRE9XTl9UT09MX0lURU1fVFlQRSIsIml0ZW1MaXN0IjpbeyJub2RlTmFtZSI6IlFVSUNLX0xJU1QiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IlFVT1RFX1NIRUVUIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJQVUxMX0xJU1QiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IkNIRUNLT1VUX1NIRUVUX0NPTlRSQUNUIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJFWENIQU5HRV9TSEVFVCIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiU1dBUF9TSEVFVCIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiQkFSQ09ERVNfT1VUX0xJU1QiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IlJFVFVSTl9MSVNUIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJDSEVDS0lOX1NIRUVUIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJDSEVDS0lOX1NIRUVUX0JZX1BST0RVQ1RJT05fTUVOVSIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiU0FMRVNfUkVUVVJOX1NIRUVUIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJDT05UQUlORVJfTEFCRUwiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6Ik9SREVSX0lOUVVJUllfUkVQT1JUIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJWQUxVRV9TSEVFVCIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiQ09TVF9TSEVFVCIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiUFJPRFVDVElPTl9SRVBMQUNFTUVOVF9DT1NUX1NIRUVUIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJTSElQUElOR19MQUJFTFMiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IkRSSVZJTkdfRElSRUNUSU9OIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJTVUJSRU5UQUxfUFVSQ0hBU0VfT1JERVIiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IlNVQlJFTlRBTF9QT19QVUxMX0xJU1QiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IlNVQlJFTlRBTF9WRU5ET1JfUkVUVVJOX1JFQ0VJUFQiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6Ik9SREVSX0FDVElWSVRZX0JZX1BST0RVQ1RJT04iLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IkdBTlRUX0NIQVJUX0ZPUl9PUEVOX09SREVSUyIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiR0FOVFRfQ0hBUlRfRk9SX0VRVUlQTUVOVF9BVkFJTEFCSUxJVFkiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IlBBUlRORVJfUVVPVEUiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IlBPX0JBTEFOQ0VfUkVQT1JUIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9XX0seyJub2RlTmFtZSI6IlJFTlRBTCIsIm5vZGVUeXBlIjoiRFJPUERPV05fVE9PTF9JVEVNX1RZUEUiLCJpdGVtTGlzdCI6W3sibm9kZU5hbWUiOiJSRU5UQUxfT1JERVIiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IlJFTlRBTF9DSEVDS09VVCIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiUkVOVEFMX0NIRUNLSU4iLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IkNIRUNLSU5fQllfU0VMRUNURUQiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IkNIQU5HRV9DSEVDS09VVF9EQVRFIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJDSEFOR0VfQ0hFQ0tJTl9EQVRFX0FDUk9TU19PUkRFUiIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiQ0hBTkdFX0NIRUNLSU5fREFURV9BQ1JPU1NfUFJPRFVDVElPTiIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiU1VCUkVOVEFMX1JFQ09SRFMiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IkNIQU5HRV9TVUJSRU5UQUxfVkVORE9SIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9XX0seyJub2RlTmFtZSI6IlNBTEVTIiwibm9kZVR5cGUiOiJEUk9QRE9XTl9UT09MX0lURU1fVFlQRSIsIml0ZW1MaXN0IjpbeyJub2RlTmFtZSI6IlNBTEVTX09SREVSIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJTQUxFU19DSEVDS09VVCIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiQ0hFQ0tJTl9TQUxFU19CWV9TRUxFQ1RFRCIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifV19LHsibm9kZU5hbWUiOiJPUkRFUiIsIm5vZGVUeXBlIjoiRFJPUERPV05fVE9PTF9JVEVNX1RZUEUiLCJpdGVtTGlzdCI6W3sibm9kZU5hbWUiOiJORVdfT1JERVIiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IkRFTEVURV9PUkRFUiIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiRFVQTElDQVRFX0NVUlJFTlRfT1JERVIiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6Ik9SREVSX0hFQURFUl9TQ1JFRU4iLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6Ik9SREVSX1RPVEFMX1NDUkVFTiIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiUkVGUkVTSF9TVEFUVVMiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6InNhbXBsZSIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoic2FtcGxlIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJSRVNVUlJFQ1RfUkVWSVNJT04iLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IkVYQ0VQVElPTl9MSVNUIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJTVUJSRU5UQUxfUE9fTElTVCIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifSx7Im5vZGVOYW1lIjoiQ09OVEFJTkVSX0xJU1QiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IkNSRURJVF9CQUxBTkNFIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9XX0seyJub2RlTmFtZSI6IkJJTExJTkciLCJub2RlVHlwZSI6IkRST1BET1dOX1RPT0xfSVRFTV9UWVBFIiwiaXRlbUxpc3QiOlt7Im5vZGVOYW1lIjoiTElTVF9PRl9BTExfSU5WT0lDRVMiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6IkNSRUFURV9ORVdfSU5WT0lDRSIsIm5vZGVUeXBlIjoic3ViLWl0ZW0ifV19LHsibm9kZU5hbWUiOiJMQUJPUl9TUEFDRSIsIm5vZGVUeXBlIjoiRFJPUERPV05fVE9PTF9JVEVNX1RZUEUiLCJpdGVtTGlzdCI6W3sibm9kZU5hbWUiOiJMQUJPUl9TQ0hFRFVMSU5HIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJTUEFDRV9TQ0hFRFVMSU5HIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJMQUJPUl9TUEFDRV9HUklEIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9XX0seyJub2RlTmFtZSI6IldFQlNJVEUiLCJub2RlVHlwZSI6IkRST1BET1dOX1RPT0xfSVRFTV9UWVBFIiwiaXRlbUxpc3QiOlt7Im5vZGVOYW1lIjoiTUFOQUdFX1dFQl9SRVFVRVNUIiwibm9kZVR5cGUiOiJzdWItaXRlbSJ9LHsibm9kZU5hbWUiOiJXRUJfVVNFUlMiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn0seyJub2RlTmFtZSI6Ik9OX0hPTERfSVRFTVMiLCJub2RlVHlwZSI6InN1Yi1pdGVtIn1dfV19";

  const response = http.post(url + api, payload, {headers});
  
  if (response.status != 200) {
    output.push(`${api.padEnd(64)} =>    ${response.status}   \n`);

    console.log(response.body + "\n");
  }

  return response;
}

export function Order108651(url, token, output, http) {
  const api = "/api/order/108651";

  const headers = {
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8',
      'Authorization': `Bearer ${token}`,
      'ClientTimeZone': '210',
      'Connection': 'keep-alive',
      'DeviceType': 'desktop',
      'HubId': 'o+sywjFiueeaMIlkVemgqQ==',
      'Language': 'ENGLISH',
      'Location': '',
      'Referer': 'http://192.168.1.54:8051/order?detailMode=full-screen&hideCloseButton=true&detailId=108651',
      'Region': 'Asia/Tehran',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
      'WorkstationID': '601339697',
      'X-Frame-Options': 'DENY',
      'appInstanceId': '1fa94e57-449e-42e2-8ead-3aa98dc0331e',
      'isPublicRequest': 'false',
      'stopDisplayingDefaultError': 'false',
  }

  const response = http.get(url + api, {headers});
  if (response.status != 200) {
    output.push(`${api.padEnd(64)} =>    ${response.status}   \n`);

    console.log(response.body + "\n");
  }
  return response;
}

export function GetComboGridLookupAll(url, token, output, http) { 
  const api = "/api/Order/GetComboGridLookupAll?ProductionId=F70Y00KMUK&ParentId=KKIA0NDQA4&ContactId=DAVIDSOFER";

  const headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9,fa;q=0.8',
    'Authorization': `Bearer ${token}`,
    'ClientTimeZone': '210',
    'Connection': 'keep-alive',
    'DeviceType': 'desktop',
    'HubId': 'o+sywjFiueeaMIlkVemgqQ==',
    'Language': 'ENGLISH',
    'Location': '',
    'Referer': 'http://192.168.1.54:8051/order?detailMode=full-screen&hideCloseButton=true&detailId=108651',
    'Region': 'Asia/Tehran',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
    'WorkstationID': '601339697',
    'X-Frame-Options': 'DENY',
    'appInstanceId': '1fa94e57-449e-42e2-8ead-3aa98dc0331e',
    'hasNotLoading': 'true',
}

  const response = http.get(url + api, {headers});
  if (response.status != 200) {
    output.push(`${api.padEnd(64)} =>    ${response.status}   \n`);

    console.log(response.body + "\n");
  }
  return response;
}