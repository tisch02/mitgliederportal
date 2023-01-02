import {Button} from "grommet";
import ConditionalRendering from "../components/ConditionalRendering";
import LoggedIn from "../components/LoggedIn";
import LoggedOut from "../components/LoggedOut";
import {Navigate} from "react-router-dom";

const Home = () => {
    return (<>

            <p>Home</p>
            <Button primary label={"Test"}/>
            <ConditionalRendering roles={["admin", "user"]}>
                <p>Render</p>
            </ConditionalRendering>
            <LoggedIn>
                <p>LoggedIn</p>
            </LoggedIn>

        </>
    );
}
export default Home;