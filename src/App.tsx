import React, {createContext, useState} from 'react';
import {Grommet} from 'grommet';
import * as themes from './theme';
import SideHeader from "./components/SideHeader";
import {userContextDefaultValue} from "./models/UserManagement";
import {BrowserRouter} from "react-router-dom";
import Root from "./pages/Root";



export const UserContext = createContext(userContextDefaultValue);

function App() {
    const [user, setUser] = useState(userContextDefaultValue.state);


  return (
      <>
          <BrowserRouter>
            <UserContext.Provider value={{state: user, setState: setUser}}>
                <Grommet theme={themes.theme_evev}>
                    <SideHeader/>
                    <Root />
                </Grommet>
            </UserContext.Provider>
          </BrowserRouter>
      </>
  )
}

export default App;
