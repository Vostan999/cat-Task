import './App.css';
import {
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import {
    Boxes,
    Clothes,
    Hats,
    Home,
    Sinks,
    Space,
    Sunglasses,
    Ties
} from "./app/Pages";

function App() {

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/boxes"} element={<Boxes/>}/>
                <Route path={"/clothes"} element={<Clothes/>}/>
                <Route path={"/hats"} element={<Hats/>}/>
                <Route path={"/sinks"} element={<Sinks/>}/>
                <Route path={"/space"} element={<Space/>}/>
                <Route path={"/sunglasses"} element={<Sunglasses/>}/>
                <Route path={"/ties"} element={<Ties/>}/>
            </Routes>
        </Router>
    );
}

export default App;
