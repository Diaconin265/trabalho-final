import react, {FC} from "react";
import './style.scss'
import {Route} from 'react-router-dom'
import routerConfig from '../../routerConfig'
import Github from "../github";
import Lupa from "../images/lupa.png";

const Cabecalho: FC = () => {
    return <>
        <div className="container ">
            <div className="row">
                <span className="container-fluid col-1 estilo-big left d-inline">
                    M
                    <span className="estilo">
                        Place
                    </span>
                </span>
                <p/>
                <nav id="instrumentos" className=" container-fluid left col-5 ">
                    <a href="./" className="link">
                        Instrumentos
                    </a>
                    
                    <nav className="trave d-inline"> | </nav>
                    
                    <a href="./git" className="link ">
                        Github
                    </a>
                    
                    <nav className="trave d-inline"> | </nav>
                    
                    <a href="./cs" className="link ">
                        Cursos 
                    </a>

                    <nav className="trave d-inline"> | </nav>
                    
                    <a href="./saiba" className="link ">
                        Saiba mais 
                    </a>
                                    
                </nav>
                <div className="col-2"/>
                <input type="text" className="col-4 round" placeholder="Procure algo de seu interesse: " />
                <button className="col-1 round search right">
                    <img alt="search" src={Lupa} />
                </button>
            <div className="col-12 border d-hidden-top d-hidden-left d-hidden-right" /> 
            </div>
        </div>
        {routerConfig.map((value, key) => {
            return <Route 
                path={value.path} 
                component={value.component} 
                exact={value.exact} key={key} />
            })}
    </>
};



export default Cabecalho;