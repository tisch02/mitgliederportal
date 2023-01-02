import {Anchor, Avatar, Box, Header, Heading, Menu, ResponsiveContext, Text} from "grommet";
import {AppsRounded, Login} from "grommet-icons";
import logo_img from "../resources/evev_logo_highres.png";
import {useContext} from "react";
import {UserContext} from "../App";
import {useNavigate} from "react-router-dom";
import LoggedIn, {isLoggedIn} from "./LoggedIn";
import ConditionalRendering, {isRendered} from "./ConditionalRendering";

interface navbarItem {
    label: string,
    link: string,
    loggedIn?: boolean,
    roles?: string[],
}

const items: navbarItem[] = [
    {label: "Profil", link: "/account", loggedIn: true},
    {label: "Personen", link: "/members", loggedIn: true},
    {label: "Admin", link: "/admin", loggedIn: true, roles: ["admin"]},
];

const SiteHeader = () => {

    const userContext = useContext(UserContext);
    const navigate = useNavigate();


    return (
      <Header background={"light-3"} pad={"medium"} height={"xsmall"}>

          <Box direction="row" align="center" gap="medium">
              <Avatar src={logo_img} round={false} size="large"/>
              <Box>
                  <Heading level={2} color="black" weight={100} margin={"none"}>
                      <Anchor
                          onClick={() => navigate("/")}
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

                                const element = {
                                    label: <Box pad="small">{item.label}</Box>,
                                    onClick: () => navigate(item.link),
                                }

                                if (((item.loggedIn ?? false) || (item.roles !== undefined))
                                    && isLoggedIn(userContext)
                                    && isRendered(userContext, item.roles ?? [])){
                                        return element;
                                }

                                return {label: "hide"};

                            }).filter((item) => item.label !== "hide")}
                        />
                    </Box>
                  ) : (
                      <Box justify="end" direction="row" gap="medium">
                          {items.map(item => {

                              const link = <Anchor key={item.label} onClick={() => navigate(item.link)}>{item.label}</Anchor>

                              if ((item.loggedIn ?? false) || (item.roles !== undefined)){
                                  return (
                                      <>
                                        <LoggedIn>
                                            <ConditionalRendering roles={item.roles ?? []}>
                                                {link}
                                            </ConditionalRendering>
                                        </LoggedIn>
                                      </>);
                              }

                              return link;
                          })}
                      </Box>
                  )
              }


          </ResponsiveContext.Consumer>
              <Anchor onClick={() => navigate("login")}>
                  <Avatar background={"dark-4"}>
                      {userContext.state.name !== ""
                          ? userContext.state.name.toUpperCase().split(" ").slice(0, 2).map((s) => s[0]).join("")
                          : <Login color="light-2" />}
                  </Avatar>
              </Anchor>

          </Box>

      </Header>
    );
}
export default SiteHeader;