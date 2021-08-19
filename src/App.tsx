import React from "react";
import Rodape from "./pages/rodape"
import Cabecalho from "./pages/cabecalho";
import './App.css';
import Video from "./pages/cabecalho/videos/guitavideo.mp4";

function App() {
    return (
        <div className= "App">
            <Cabecalho />
            <div className="video-background">
                <video className="bgvid" autoPlay loop muted playsInline>
                    <source src= {Video}  type= "video/mp4" />
                </video>
            </div>
            <Rodape /> 
        </div>
    );
}

export default App;