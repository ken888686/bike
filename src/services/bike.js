import * as api from '@/api';
import mapping from './mapping';

function getRoute(city) {
  return new Promise((resolve, reject) => {
    api
      .getRoute(city, { $filter: "RouteName eq '三元街(東北側1)'" })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
}

function getStation(city, params) {
  return new Promise((resolve, reject) => {
    api
      .getStation(city, params)
      .then((res) => {
        const result = res.data.map((item) => mapping(item));
        return resolve(result);
      })
      .catch((err) => reject(err));
  });
}

export { getStation, getRoute };
