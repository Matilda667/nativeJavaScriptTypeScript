import {GovernmentBuildingType, HouseType} from "../02/02_02";

export const getStreetsTitleOfGovernmentsBuilding = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitleOfHouses = (houses: Array<HouseType>) => {
    return houses.map(b => b.address.street.title)
}

export function createMessages(houses:Array<HouseType>){
    return houses.map(h =>`Hello guys from ${h.address.street.title}`)
}