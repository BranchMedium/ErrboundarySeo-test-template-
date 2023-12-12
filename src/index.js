import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout";
import About from "./about";
import Service from "./service";
import Pads from "./pads";
import ErTestTemplate from './Errboundarytemplate';
import {HighTab} from "./hightab";
import {NoteTab} from "./notetab";
import {MinitabNote} from "./minitabnote";
import {TileNote} from "./tilenote";
import Home from "./Home";


const MySite = () => {
    return(
        <BrowserRouter>
            <Routes>
            <Route index element={<ErTestTemplate theError="Home page"><Home/></ErTestTemplate>} />
            <Route  path= "/tiles" element={<ErTestTemplate theError= "tile note page"><TileNote/></ErTestTemplate>}/>
            <Route  path= "/minitab-note" element={<ErTestTemplate theError= "mini tab note page"><MinitabNote/></ErTestTemplate>}/>
            <Route  path= "/note-tab" element={<ErTestTemplate theError= "note tab page"><NoteTab/></ErTestTemplate>}/>
            <Route path= "/high-tab" element={<ErTestTemplate theError= "high tab page"><HighTab/></ErTestTemplate>}/>
                {/* <Route path="/" element={<ErTestTemplate theError= "Layout page"><Layout/></ErTestTemplate>}/> */}
                <Route path= "/pads" element={<ErTestTemplate theError="pads page"><Pads/></ErTestTemplate>} />
                <Route path= "/about" element={<ErTestTemplate theError="About page"><About/></ErTestTemplate>}/>
                <Route path="/service" element={<ErTestTemplate theError="Service page"><Service/></ErTestTemplate>}/>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MySite/>);