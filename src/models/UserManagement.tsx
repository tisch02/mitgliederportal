


export interface UserContextType{
    state: User,
    setState: (state: User) => void
}

export const defaultUser: User =  {name: "", username: "", roles: []}

export const userContextDefaultValue: UserContextType = {
    state: defaultUser,
    setState: (state: User) => {}
}

export interface User {
    name: string,
    username: string,
    roles: string[]
}