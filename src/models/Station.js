import Languages from './Languages';
import Position from './Position';

export default class Station {
  constructor(stationUID, stationID, authorityID, stationNameTW, stationNameEN, lng, lat, geoHash, stationAddressTW, stationAddressEN, bikesCapacity, serviceType, srcUpdateTime, updateTime) {
    this.stationUID = stationUID;
    this.stationID = stationID;
    this.authorityID = authorityID;
    this.stationName = new Languages(stationNameTW, stationNameEN);
    this.stationPosition = new Position(lng, lat, geoHash);
    this.stationAddress = new Languages(stationAddressTW, stationAddressEN);
    this.bikesCapacity = bikesCapacity;
    this.serviceType = serviceType;
    this.srcUpdateTime = srcUpdateTime;
    this.updateTime = updateTime;
  }
}
