
export interface UserContextType{
    state: User,
    setState: (state: User) => void
}

export const defaultUser: User =  {name: "", username: "", sessionKey: "", roles: [], expiration: new Date()}

export const userContextDefaultValue: UserContextType = {
    state: defaultUser,
    setState: (state: User) => {}
}

export interface User {
    name: string,
    username: string,
    sessionKey: string,
    expiration: Date,
    roles: string[]
}

export interface UserModel{
    id: string,
    username: string,
    name: string,
    roles: string[]
}