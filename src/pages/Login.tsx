import {Box, Button, CheckBox, Heading, TextInput} from "grommet";
import {FormView, Hide, User} from "grommet-icons";
import {useContext, useState} from "react";
import {UserContext} from "../App";
import {UserContextType} from "../models/UserManagement";
import {useNavigate} from "react-router-dom";

function PerformLogin(username: string, pass: string, rememberMe: boolean, context: UserContextType): boolean {
    context.setState({name: username, username: username, roles: ["admin"]})
    return true;
}

const Login = () => {
    const [usernameValue, setUsernameValue] = useState('')
    const [passValue, setPassValue] = useState('');
    const [reveal, setReveal] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const userContext = useContext(UserContext);

    const navigate = useNavigate();


    return (
        <>
            <Box align={"center"}  margin={{top: "xlarge"}}>
                <Box background={"light-2"} width={"medium"} round={"xsmall"} border pad={"medium"}>

                    <Heading level={3} alignSelf={"center"} margin={"none"}>Login</Heading>

                    <Box
                        pad={{top: "xxsmall", bottom: "xxsmall"}}
                        direction="row"
                        align="center"
                        round="xsmall"
                        margin={{top: "medium", bottom: "xsmall"}}
                        border
                        background={"white"}
                    >
                    <TextInput
                        plain
                        icon={<User/>}
                        reverse
                        focusIndicator={false}
                        placeholder="Nutzername oder E-Mail"
                        value={usernameValue}
                        onChange={(event: any) => setUsernameValue(event.target.value)}
                    />

                    </Box>

                    <Box
                        direction="row"
                        align="center"
                        round="xsmall"
                        background={"white"}
                        margin={{bottom: "medium"}}
                        border
                    >
                        <TextInput
                            plain
                            type={reveal ? 'text' : 'password'}
                            value={passValue}
                            onChange={(event) => setPassValue(event.target.value)}
                            placeholder="Passwort"
                            focusIndicator={false}
                        />

                        <Button
                            margin={"none"}
                            icon={reveal ? <FormView size="medium"  /> : <Hide size="medium" />}
                            onClick={() => setReveal(!reveal)}
                        />
                    </Box>
                    <Box margin={{bottom: "medium"}}>
                        <CheckBox

                            checked={rememberMe}
                            label="Angemeldet bleiben"
                            onChange={(event) => setRememberMe(event.target.checked)}
                        />
                    </Box>


                    <Button primary label={"Anmelden"} onClick={() => {
                        if (PerformLogin(usernameValue, passValue, rememberMe, userContext)) {
                            navigate("/");
                        }
                    }}/>
                </Box>
            </Box>


        </>
    );
}
export default Login;