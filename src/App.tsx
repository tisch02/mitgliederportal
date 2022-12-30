import React, {createContext, useState} from 'react';
import {Grommet} from 'grommet';
import Main from "./Main";
import * as themes from './theme';
import SideHeader from "./components/SideHeader";
import {userContextDefaultValue} from "./models/UserManagement";


export const UserContext = createContext(userContextDefaultValue);

function App() {
    const [user, setUser] = useState(userContextDefaultValue.state);


  return (
      <>
          <UserContext.Provider value={{state: user, setState: setUser}}>
              <Grommet theme={themes.theme_evev}>
                <SideHeader />
                <Main/>
             </Grommet>
          </UserContext.Provider>
      </>
  )
}

export default App;
