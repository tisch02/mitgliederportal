import {useContext} from "react";
import {UserContext} from "../App";
import {User, UserContextType} from "../models/UserManagement";

interface parameter{
    children: JSX.Element,
}

export function isLoggedOut(context: UserContextType){
    const user: User = context.state;
    return user.username === ""
}

const LoggedOut = (props: parameter) => {
    const userContext = useContext(UserContext);
    return isLoggedOut(userContext) ? props.children : <></>;

}
export default LoggedOut;