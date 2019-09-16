interface Person {
    name: string
    age: number
}

type PersonType = keyof Person // 'name' | 'age'

let keyName: PersonType = 'name';
keyName = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, '_id' | 'createdAt'> // '_id' | 'createdAt'

let u1: UserKeysNoMeta1 = 'name'
// u1 = '_id'
