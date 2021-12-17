/* eslint-disable camelcase */
import mapper from '@cookbook/mapper-js';

const StationMapping = mapper((map) => ({
  stationUID: map('StationUID').value,
  stationID: map('StationID').value,
  stationName: map('StationName').transform(({ Zh_tw, En }) => ({
    tw: Zh_tw.substr('YouBike1.0_'.length),
    en: En.substr('YouBike1.0_'.length),
  })).value,
  stationPosition: map('StationPosition').transform(({ PositionLon, PositionLat, GeoHash }) => ({
    lng: PositionLon,
    lat: PositionLat,
    geoHash: GeoHash,
  })).value,
  stationAddress: map('StationAddress').transform(({ Zh_tw, En }) => ({
    tw: Zh_tw,
    en: En,
  })).value,
  serviceType: map('ServiceType').value,
  srcUpdateTime: map('SrcUpdateTime').value,
  updateTime: map('UpdateTime').value,
}));

const AvailabilityMapping = mapper((map) => ({
  stationUID: map('StationUID').value,
  stationID: map('StationID').value,
  serviceStatus: map('ServiceStatus').value,
  serviceType: map('ServiceType').value,
  rent: map('AvailableRentBikes').value,
  parkingSpace: map('AvailableReturnBikes').value,
  srcUpdateTime: map('SrcUpdateTime').value,
  updateTime: map('UpdateTime').value,
}));

const RouteMapping = mapper((map) => ({
  routeName: map('RouteName').value,
  authorityName: map('AuthorityName').value,
  cityCode: map('CityCode').value,
  city: map('City').value,
  start: map('RoadSectionStart').value,
  end: map('RoadSectionEnd').value,
  cyclingLength: map('CyclingLength').value,
  finishedTime: map('FinishedTime').value,
  updateTime: map('UpdateTime').value,
  geometry: map('Geometry').transform((geo) => {
    const result = [];
    geo
      .substr('MULTILINESTRING '.length)
      .replace('((', '')
      .replace('))', '')
      .split(',')
      .forEach((item) => {
        const temp = item.split(' ');
        result.push([temp[1], temp[0]]);
      });
    return result;
  }).value,
}));

export { StationMapping, AvailabilityMapping, RouteMapping };
