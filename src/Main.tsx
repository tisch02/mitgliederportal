import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Account from './pages/Account';
import Members from './pages/Members';
import Login from "./pages/Login";


const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/members' element={<Members/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    );
}
export default Main;