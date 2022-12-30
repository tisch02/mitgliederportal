import {Anchor, Avatar, Box, Header, Heading, Menu, ResponsiveContext, Text} from "grommet";
import {AppsRounded, Login} from "grommet-icons";
import logo_img from "../resources/evev_logo_highres.png";
import {useContext} from "react";
import {UserContext} from "../App";

const items = [
    {label: "Profil", link: "account"},
    {label: "Personen", link: "members"},
    {label: "Admin", link: "admin"},
];

const SideHeader = () => {

    const userContext = useContext(UserContext);

    return (
      <Header background={"light-3"} pad={"medium"} height={"xsmall"}>

          <Box direction="row" align="center" gap="medium">
              <Avatar src={logo_img} round={false} size="large"/>
              <Box>
                  <Heading level={2} color="black" weight={100} margin={"none"}>
                      <Anchor
                      href="/"
                      label="Mitgliederportal"
                      margin={"none"}
                      />
                  </Heading>
                  <Text>Ehemaligenvereinigung PMG Meine e.V.</Text>
              </Box>

          </Box>

          <Box direction={"row"} align={"center"} gap={"medium"}>
          <ResponsiveContext.Consumer>
              {
                  (size) => size === "small" ? (
                    <Box justify="end">
                        <Menu
                            dropProps={{ align: { top: 'bottom', right: 'right' } }}
                            icon={<AppsRounded color="brand" />}
                            items={items.map((item) => {
                                return {
                                    label: <Box pad="small">{item.label}</Box>,
                                    href: item.link,
                                }
                            })}
                        />
                    </Box>
                  ) : (
                      <Box justify="end" direction="row" gap="medium">
                          {items.map(item => (
                              <Anchor href={item.link} label={item.label} key={item.label}/>
                          ))}
                      </Box>
                  )
              }


          </ResponsiveContext.Consumer>
              <Anchor href={"login"}>
                  <Avatar background="dark-4">
                      {userContext.state.name !== ""
                          ? userContext.state.name.toUpperCase().split(" ").slice(0, 2).map((s) => s[0]).join("")
                          : <Login color="light-2" />}

                  </Avatar>
              </Anchor>

          </Box>

      </Header>
    );
}
export default SideHeader;