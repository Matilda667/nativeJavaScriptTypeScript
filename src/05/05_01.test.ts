import {creatGreetingMessage, ManType} from "./05_1";


let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}
    ]
})

test("should get array of greeting messages", () => {
    let messages = creatGreetingMessage(people)

expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Andrew. Welcom to IT-Incubator")
    expect(messages[1]).toBe("Hello Alexander. Welcom to IT-Incubator")
    expect(messages[2]).toBe("Hello Dmitry. Welcom to IT-Incubator")
})