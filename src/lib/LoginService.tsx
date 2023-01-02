import {API_URL} from "./API";
import Cookies from "universal-cookie";
import {useContext, useEffect} from "react";
import {UserContext} from "../App";
import {UserContextType} from "../models/UserManagement";
import {useNavigate} from "react-router-dom";


export interface LoginReturn{
    result: boolean,
    data: any
}

export function loginWithSession(sessionKey: string, context: UserContextType){

    fetch(API_URL + "/login/session", {
        method: "POST",
        headers: {
            "Authorization": "Session " + encodeURIComponent(sessionKey),
        }
    }).then(async (response) => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const result = (await response.json()) as LoginReturn

        if (result.result){
            // Store sessionKey as Cookie => Cookie lives 100 days
            const cookies = new Cookies()
            cookies.set('sessionKey', result.data.sessionKey, { path: '/', maxAge: 60*60*24*100 });

            // Set state
            context.setState(result.data)
        }else{
            console.log(result.data["message"])
        }
    })
}


export async function loginWithPassword(username: string, password: string, rememberMe: boolean = false) {

    const response = await fetch(API_URL + "/login/password", {
        method: "POST",
        body: JSON.stringify({rememberMe: rememberMe}),
        headers: {
            "Authorization": "Basic " + encodeURIComponent(username + ":" + password),
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    const result = (await response.json()) as LoginReturn

    if (rememberMe && result.result){
        // Store sessionKey as Cookie => Cookie lives 100 days
        const cookies = new Cookies()
        cookies.set('sessionKey', result.data.sessionKey, { path: '/', maxAge: 60*60*24*100 });
    }

    return result
}



const LoginService = () => {

    const userContext = useContext(UserContext);
    const navigate = useNavigate()

    useEffect(() => {

        const cookies = new Cookies()
        const sessionKey = cookies.get('sessionKey')

        if (sessionKey !== undefined) {
            loginWithSession(sessionKey, userContext)
        }else{
            navigate("/login")
        }

    }, [])

    return <></>;
}
export default LoginService;
