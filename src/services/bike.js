import * as api from '@/api';
import { StationMapping, RouteMapping, AvailabilityMapping } from './mapping';

function getRouteByCity(city, params) {
  return new Promise((resolve, reject) => {
    api
      .getRoute(city, params)
      .then((res) => {
        const result = res.data.map((item) => RouteMapping(item));
        return resolve(result);
      })
      .catch((err) => reject(err));
  });
}

function getStationByCity(city, params) {
  return new Promise((resolve, reject) => {
    api
      .getStation(city, params)
      .then((res) => {
        const result = res.data.map((item) => StationMapping(item));
        return resolve(result);
      })
      .catch((err) => reject(err));
  });
}

export function getAvailabilityByCity(city, params) {
  return new Promise((resolve, reject) => {
    api
      .getAvailability(city, params)
      .then((res) => {
        const result = res.data.map((item) => AvailabilityMapping(item));
        return resolve(result);
      })
      .catch((err) => reject(err));
  });
}

export async function getStationInfoList(city, params) {
  const stations = await getStationByCity(city, params).then((res) => {
    const temp = res.map((item) => ({
      uid: item.stationUID,
      name: item.stationName,
      position: item.stationPosition,
    }));
    return temp;
  });
  // console.log(stations);

  // const result = stations.map(async (item) => {
  //   const info = await getAvailabilityByCity(city, { $filter: `StationUID eq '${item.uid}'` }).then((res) => ({
  //     ...item,
  //     rent: res[0].rent,
  //     parkingSpace: res[0].parkingSpace,
  //   }));
  //   return info;
  // });
  const result = [];
  stations.forEach(async (item) => {
    const info = await getAvailabilityByCity(city, { $filter: `StationUID eq '${item.uid}'` }).then((res) => ({
      ...item,
      rent: res[0].rent,
      parkingSpace: res[0].parkingSpace,
    }));
    result.push(info);
  });
  console.log(result);

  return stations;

  /*
  getAvailabilityByCity(city, { $filter: `StationUID eq '${item.stationUID}'` })
    .then((response) => resolve(response))
    .catch((err) => reject(err));
  */

  // return new Promise((resolve, reject) => {
  //   api
  //     .getAvailability(city, params)
  //     .then((res) => {
  //       const result = res.data.map((item) => AvailabilityMapping(item));
  //       return resolve(result);
  //     })
  //     .catch((err) => reject(err));
  // });
}
