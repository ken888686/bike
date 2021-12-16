export default class Route {
  constructor(routeName = '', authorityName = '', cityCode = '', city = '', roadSectionStart = '', roadSectionEnd = '', cyclingLength = 0.0, finishedTime = '', updateTime = '', geometry = '') {
    this.routeName = routeName;
    this.authorityName = authorityName;
    this.cityCode = cityCode;
    this.city = city;
    this.roadSectionStart = roadSectionStart;
    this.roadSectionEnd = roadSectionEnd;
    this.cyclingLength = cyclingLength;
    this.finishedTime = finishedTime;
    this.updateTime = updateTime;
    this.geometry = geometry;
  }
}
