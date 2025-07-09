

type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '323232': {id: 323232, name: 'Natasha'},
        '2121': {id: 2121, name: 'Valera'},
        '3333': {id: 3333, name: 'Katya'}
    }

})

test('should select corresponding user from obj', () => {
    users['3333'].name = 'Ekaterina'

    expect(users['3333'].name).toBe('Ekaterina')
    expect(users['3333']).toEqual({id: 3333, name: 'Ekaterina'})
})

test('should delete corresponding user', () => {
    delete users['3333']

    expect(users['3333']).toBeUndefined()

})