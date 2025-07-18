export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
type CompanyType = { id:number, title:string}
export type WithCompaniesType = {
companies: Array<CompanyType>

}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

// copy.address = {
//     ...copy.address,
//     city:city
// }

//     return copy
//
export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: laptop}
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: []) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function addNewBooksUser(u: UserWithLaptopType & UserWithBooksType, newBook: Array<string>) {
    return {
        ...u, books: [...u.books, newBook]
    }
    // copy.books.push(newBooks)
    // return copy
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string,) => ({
    ...u,
    books: u.books.filter(b => b !== bookForDelete)
})

export const updateCompanyTitle = (u: WithCompaniesType, companyId: number, newTitle: string) => ({
    ...u,
    companies: u.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
})

export const updateCompanyTitle2=(companies: {[key:string]:Array<CompanyType> }, userName:string, companyId:number, newTitle:string)=>{
    let companyCopy={...companies}
    companyCopy[userName]=companyCopy[userName].map(c=>c.id===companyId ? {...c, title:newTitle}:c)

    return companyCopy
        }
