import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout";
import About from "./about";
import Service from "./service";
import Home from "./home";
import ErTestTemplate from './Errboundarytemplate';



const MySite = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ErTestTemplate theError= "Layout page"><Layout/></ErTestTemplate>}/>
                <Route index element={<ErTestTemplate theError="Home page"><Home/></ErTestTemplate>} />
                <Route path= "/about" element={<ErTestTemplate theError="About page"><About/></ErTestTemplate>}/>
                <Route path="/service" element={<ErTestTemplate theError="Service page"><Service/></ErTestTemplate>}/>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MySite/>);