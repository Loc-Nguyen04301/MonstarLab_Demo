export type User = {
    id: number
    email: string
    name: {
        firstname: string,
        lastname: string
    }
    address: {
        city: string
        street: string
    }
    phone: string
}

export type UserState = {
    userList: User[]
}