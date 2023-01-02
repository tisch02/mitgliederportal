import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import {UserModel} from "../models/UserManagement";
import {Box, DataTable, Text} from "grommet";



const Admin = () => {

    const {data, error} = useFetch<UserModel[]>("http://localhost:5000/users");

    if (error) return <p>There is an error.</p>
    if (!data) return <Spinner />


    return <Box align={"center"} pad={{top: "medium"}}><Box width={"xlarge"}><DataTable
        background={{body: ["white", "light-2"]}}
        fill
        columns={[
            {
                property: 'id',
                header: <Text>#</Text>,
                primary: true,
            },
            {
                property: 'name',
                header: <Text>Name</Text>,
            },
            {
                property: 'username',
                header: <Text>Nutzername</Text>,
            },
            {
                property: 'roles',
                header: <Text>Rollen</Text>,
                render: datum => <Box direction={"row"} gap={"xsmall"}>{
                    datum.roles.map((role) => (
                        <Box background={"brand"} round={"small"} pad={{left: "small", right: "small"}}><Text color={"white"}>{role} </Text></Box>
                    ))}
                </Box>
            }
        ]}
        data={data}
    /></Box></Box>
}
export default Admin;