import {useContext} from "react";
import {UserContext} from "../App";
import {User, UserContextType} from "../models/UserManagement";

interface parameter{
    children: JSX.Element,
    roles: string[],
    allRequired?: boolean,
}

export function isRendered(context: UserContextType, roles: string[], allRequired?: boolean){
    const user: User = context.state;

    const render = allRequired ?? false
        ? roles.every((role) => user.roles.includes(role))
        : roles.some((role) => user.roles.includes(role));

    return render || roles.length === 0
}

const ConditionalRendering = (props: parameter) => {
    const userContext = useContext(UserContext);
    return isRendered(userContext, props.roles, props.allRequired) ? props.children : <></>;
}
export default ConditionalRendering;