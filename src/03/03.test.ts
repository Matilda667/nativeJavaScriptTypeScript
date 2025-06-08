import {StudentType} from "../02/02";
import {addSkill, makeStudentActive, doesStudentLiveIn} from "./03";


let student: StudentType
beforeEach(()=>{
    student={
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
})

test("new tech skill should be added to student",()=>{
    expect(student.technologies.length).toBe(3)

    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test("student should be made active",()=>{
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)

})

test("does student live in Moscow?",()=>{
    let result1= doesStudentLiveIn(student, "Moscow")
    let result2= doesStudentLiveIn(student, "Minsk")

    expect(result1).toBe(false)
    expect(result2).toBe(true)

})