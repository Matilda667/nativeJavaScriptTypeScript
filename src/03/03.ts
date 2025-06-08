import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";


export const sum = (a: number, b: number) => {
    return a + b
}

export function sum2(a: number, b: number) {
    return a + b
}

// const res = sum(sum(1, 2), sum(1, 3))

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true
}

export const doesStudentLiveIn = (st: StudentType, cityName: string) => {
    return st.address.city.title === cityName
}


export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff=(building: GovernmentBuildingType, staffCountToFire: number)=>{
building.staffCount -=staffCountToFire
}

export const toHareStaff=(building: GovernmentBuildingType, staffCountToFire: number)=>{
    building.staffCount +=staffCountToFire
}

export const createMessage=(props: CityType)=>{
    return `Hello ${props.title} citizens. I want yuo be happy. All ${props.citizensNumber} men`
}