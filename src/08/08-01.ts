export const usersArray = ['Dimych', 'Natasha', 'Valera', 'Katya']

export const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '3': 'Valera',
    '4': 'Katya'
}

// users[1] доставание
var user = {id: 100500, name: 'Igor'}//добавление
users[user.id] = user
delete users[user.id]

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 323232, name: 'Natasha'},
    {id: 2121, name: 'Valera'},
    {id: 3333, name: 'Katya'}
]
// usersArray.findIndex()
// usersArray.find(u => u.id === 1)
// var usersCopy=[...usersArray.filter(),user]
var usersArray = usersArray.filter(u=>u.id !== user.id)