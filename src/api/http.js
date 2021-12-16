/* eslint-disable new-cap */
import jsSHA from 'jssha';
import axios from 'axios';
import config from '@/api/config';

const instance = axios.create({
  baseURL: config.baseUrl,
  timeout: 60000,
});

// Header
/**
 * Create Header
 * @returns any
 */
function getAuthorizationHeader() {
  const AppID = '89addd4fa214427d9c23dc4f66699d02';
  const AppKey = 'j8SMq9XgELj2lAfJhSs87abLuKs';

  const GMTString = new Date().toGMTString();
  const ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update(`x-date: ${GMTString}`);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  return {
    Authorization,
    'X-Date': GMTString,
  };
}

/**
 * get請求
 * @param {String} url 路徑
 * @param {any} params 搜尋參數
 * @returns Promise
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params: { $format: 'JSON', ...params },
        headers: getAuthorizationHeader(),
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * post請求
 * @param {String} url 路徑
 * @param {Object} data 參數
 * @returns Promise
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
}
