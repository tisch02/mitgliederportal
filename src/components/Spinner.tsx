import {Box, Image} from "grommet";
import spinner_gif from "../resources/duck.gif";

const Spinner = () => {
    return (
        <Box align={"center"} justify={"center"}>
            <Box width={"medium"}>
                <Image src={spinner_gif}/>
            </Box>

        </Box>
    );
}
export default Spinner;