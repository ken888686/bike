export default class Position {
  constructor(lng = 0.0, lat = 0.0, geoHash = '') {
    this.lng = lng;
    this.lat = lat;
    this.geoHash = geoHash;
  }
}
