import {stringify} from "node:querystring";

type CityType = {

    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: CityType

}
type TechType={
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

const student: StudentType = {
    id: 1,
    name: 'Mary',
    age: 45,
    isActive: false,
    address: {
        streetTitle: 'Street',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        },
    ]
}

console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies[2].title)