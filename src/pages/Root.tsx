import {Route, Routes} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Account from "./Account";

const Root = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route  path="/account" element={<Account/>}/>
        </Routes>
    );
}
export default Root;