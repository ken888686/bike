import { get } from '@/api/http';

const getStation = (city, params) => get(`/v2/Bike/Station/${city}`, params);
const getAvailability = (city, params) => get(`/v2/Bike/Availability/${city}`, params);
const getRoute = (city, params) => get(`/v2/Cycling/Shape/${city}`, params);

export { getStation, getAvailability, getRoute };
