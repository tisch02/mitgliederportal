import {useContext} from "react";
import {UserContext} from "../App";
import {User, UserContextType} from "../models/UserManagement";

interface parameter{
    children: JSX.Element,
}

export function isLoggedIn(context: UserContextType){
    const user: User = context.state;
    return user.username !== ""
}

const LoggedIn = (props: parameter) => {
    const userContext = useContext(UserContext);
    return isLoggedIn(userContext) ? props.children : <></>;
}
export default LoggedIn;