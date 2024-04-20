import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Home} from "./components/Home";
import {TopNavbar} from "./components/TopNavbar";
import {Admin} from "./components/Admin";

function App() {
    return (<BrowserRouter>
        <TopNavbar/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </BrowserRouter>);
}

export default App;
