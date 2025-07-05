function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: {
        title: 'Minsk'
    }
}

test('big reference test', () => {
    var user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    var users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }
    ]
    var admins = users
    admins.push({name: 'Bandit', age: 10})

    expect(users[2]).toEqual({name: 'Bandit', age: 10})

})

test('value type test', () => {
    let usersCount = 100

    let adminsCount = usersCount
    adminsCount = 101

    expect(adminsCount).toBe(101)

})

test('reference test', () => {
    const address={
        title: 'Minsk'
    }

    var user = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    // let addr = user.address
    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }
    address.title='Kanary'

    expect(user.address).toBe(user2.address)

    expect(user.address.title).toBe('Kanary')
})

test('array type reference test', () => {
    const address={
        title: 'Minsk'
    }

    var user = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    // let addr = user.address
    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users=[user, user2, {name:'Misha', age:4, address: address}]

    const admins=[user, user2]
    admins[0].name='Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {
    const letters=['c', 'd', 'a', 'z', 'e']
letters.sort()
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})