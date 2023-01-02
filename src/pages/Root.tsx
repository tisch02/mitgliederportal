import {Route, Routes} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Account from "./Account";
import NotFound from "./NotFound";
import Members from "./Members";
import Admin from "./Admin";

const Root = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/members" element={<Members/>}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}
export default Root;