import apiRequest from "#services/apiRequest";
import { defer } from "react-router-dom";

const route = "/property";

const createProperty = async (body) => {
    const requestBody = createPropertyBody(body);

    return await apiRequest.post(route, requestBody);
}

const updateProperty = async (id, body) => {
    const requestBody = createPropertyBody(body);

    return await apiRequest.put(route + `/${id}`, requestBody);
}

const deleteProperty = async (id, body) => {
    return await apiRequest.delete(route + `/${id}`, body);
}

const getProperties = async (id = null) => {
    return await apiRequest.get(route + (id ? `/${id}` : ""));
}

const singlePageLoader = async ({request, params}) => {
    return (await getProperties(params.id)).data;
}

const listPageLoader = ({ request, params }) => {
  const query = request.url.split("?")[1];
  const proeprtyPromise = apiRequest.get(route + "?" + query);

  console.log(proeprtyPromise)

  return defer({
    propertyResponse: proeprtyPromise
  });
}

const PropertyService = {
    createProperty,
    updateProperty,
    deleteProperty,
    getProperties,
    singlePageLoader,
    listPageLoader
}

function createPropertyBody(data) {
  const coordinates = extractCordinatesFromUrl(data.maps);
  const propertyData = {
    branchId: data.branchId,
    landlordId: data.landlordId,
    userId: data.userId,
    userIdAssigned: data.userIdAssigned,
    consecutive: parseInt(data.consecutive),
    title: data.title,
    description: data.description,
    descriptionPrivate: data.descriptionPrivate,
    price: parseFloat(data.price),
    images: data.images.length ? data.images : [],
    street: data.street,
    street2: data.street2,
    city: data.city,
    state: data.state,
    zipCode: data.zipCode,
    country: data.country,
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
    type: data.type,
    rent: data.rent === 'true',
    currency: data.currency,
    commission: parseFloat(data.commission),
    exclusive: data.exclusive === 'true',
    status: parseInt(data.status)
  };

  const propertyDetail = {
    surface: parseFloat(data.surface),
    squareMeters: parseFloat(data.squareMeters),
    bedrooms: parseInt(data.bedrooms),
    bathrooms: parseInt(data.bathrooms),
    parking: parseInt(data.parking),
    coveredParking: data.coveredParking === 'true' ? 1 : 0,
    laundryRoom: data.laundryRoom === 'true' ? 1 : 0,
    serviceRoom: data.serviceRoom === 'true' ? 1 : 0,
    walkInCloset: data.walkInCloset === 'true' ? 1 : 0,
    furnished: data.furnished === 'true' ? 1 : 0,
    fullyEquippedKitchen: data.fullyEquippedKitchen === 'true' ? 1 : 0,
    jacuzzi: data.jacuzzi === 'true' ? 1 : 0,
    airConditioning: data.airConditioning === 'true' ? 1 : 0,
    heating: data.heating === 'true' ? 1 : 0,
    garden: data.garden === 'true' ? 1 : 0,
    roofGarden: data.roofGarden === 'true' ? 1 : 0,
    gymnasium: data.gymnasium === 'true' ? 1 : 0,
    library: data.library === 'true' ? 1 : 0,
    wineCellar: data.wineCellar === 'true' ? 1 : 0,
    bar: data.bar === 'true' ? 1 : 0,
    study: data.study === 'true' ? 1 : 0,
    tvRoom: data.tvRoom === 'true' ? 1 : 0,
    livingRoom: data.livingRoom === 'true' ? 1 : 0,
    diningRoom: data.diningRoom === 'true' ? 1 : 0,
    gameRoom: data.gameRoom === 'true' ? 1 : 0,
    pets: data.pets === 'true' ? 1 : 0,
    surveillance: data.surveillance === 'true' ? 1 : 0,
    partyRoom: data.partyRoom === 'true' ? 1 : 0,
    greenAreas: data.greenAreas === 'true' ? 1 : 0,
    pool: data.pool === 'true' ? 1 : 0,
    indoorPool: data.indoorPool === 'true' ? 1 : 0,
    tennisCourt: data.tennisCourt === 'true' ? 1 : 0,
    golfCourse: data.golfCourse === 'true' ? 1 : 0,
    playArea: data.playArea === 'true' ? 1 : 0,
    horizontalCondo: data.horizontalCondo === 'true' ? 1 : 0,
    clubhouse: data.clubhouse === 'true' ? 1 : 0,
    terrace: data.terrace === 'true' ? 1 : 0,
    spa: data.spa === 'true' ? 1 : 0,
    laundryDryCleaning: data.laundryDryCleaning === 'true' ? 1 : 0,
    helipad: data.helipad === 'true' ? 1 : 0,
    securitySystem: data.securitySystem === 'true' ? 1 : 0,
    closedCircuit: data.closedCircuit === 'true' ? 1 : 0,
    networkInstallation: data.networkInstallation === 'true' ? 1 : 0,
    elevator: data.elevator === 'true' ? 1 : 0,
    serviceElevator: data.serviceElevator === 'true' ? 1 : 0,
    beach: data.beach === 'true' ? 1 : 0,
    marina: data.marina === 'true' ? 1 : 0,
    residentialLandUse: data.residentialLandUse === 'true' ? 1 : 0,
    residentialCommercial: data.residentialCommercial === 'true' ? 1 : 0,
    residentialOffice: data.residentialOffice === 'true' ? 1 : 0,
    residentialMixed: data.residentialMixed === 'true' ? 1 : 0,
    industry: data.industry === 'true' ? 1 : 0,
    trailerEntrance: data.trailerEntrance === 'true' ? 1 : 0,
    maneuveringYard: data.maneuveringYard === 'true' ? 1 : 0,
    warehouseArea: data.warehouseArea ? parseFloat(data.warehouseArea) : 0.00,
    loadingArea: data.loadingArea === 'true' ? 1 : 0,
    office: data.office === 'true' ? 1 : 0,
    dock: data.dock === 'true' ? 1 : 0,
    railway: data.railway === 'true' ? 1 : 0,
    officeArea: data.officeArea ? parseFloat(data.officeArea) : 0.00,
    warehouseHeight: data.warehouseHeight ? parseFloat(data.warehouseHeight) : 0.00,
    houseWarehouse: data.houseWarehouse === 'true' ? 1 : 0,
    crossdock: data.crossdock === 'true' ? 1 : 0,
    frontMeters: parseFloat(data.frontMeters),
    backMeters: parseFloat(data.backMeters),
    constructionMeters: parseFloat(data.constructionMeters),
  };
    
  return {
    propertyData,
    propertyDetail
  }
}

function extractCordinatesFromUrl(url) {
  const regex = new RegExp('@(.*),(.*),');
  const lat_long_match = url.match(regex);

  return {
    latitude: lat_long_match[1],
    longitude: lat_long_match[2],
  }
}

export default PropertyService;