import './App.css'
import {Route, Routes} from "react-router-dom";
import Dragons from "./pages/Dragons.jsx";
import Navbar from "./components/Navbar.jsx";
import Knights from "./pages/Knights.jsx";
import DragonKnight from "./pages/DragonKnight.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Dragons/>}/>
                <Route path={"/knights"} element={<Knights />}/>
                <Route path={"/couple"} element={<DragonKnight />}/>
            </Routes>
        </>
    )

}

export default App
