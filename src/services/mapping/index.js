/* eslint-disable camelcase */
import mapper from '@cookbook/mapper-js';

const mapping = mapper((map) => ({
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

export { mapping, StationMapping };
