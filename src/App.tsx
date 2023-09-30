import './App.css'
import { useLocation } from "react-router-dom";
import {Routes, Route} from "react-router-dom"
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import SingleSignOn from "./pages/login/single-sign-on";

function App() {
    const location = useLocation()

    const loginPath = ['/Login', '/single', '/signin','/twostep']

    return (
        <div className="App">
            {!loginPath.includes(location.pathname) && <Navbar/>}
            <Routes>
                <Route path={"/"} element={<Dashboard/>}/>
                <Route path={"/login"} element={<Login />}/>
                <Route path={"/single"} element={<Login />}/>
                <Route path={"/signin"} element={<Login />}/>
                <Route path={"/twostep"} element={<Login />}/>
                <Route path="*" element={<Dashboard/>}/>
            </Routes>
        </div>
    )
}

export default App
