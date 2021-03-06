import React, {FC} from "react";
import './style.scss';
import Violao from "../../imagens do projeto/main_images/violao.png";
import Guitarra from "../../imagens do projeto/main_images/guitar.png";
import Violino from "../../imagens do projeto/main_images/violino.png";
import Percussao from "../../imagens do projeto/main_images/baqueta.png";
import Edicao from "../../imagens do projeto/main_images/pc.png";
import Gravacao from "../../imagens do projeto/main_images/gravacao.png";
import Sopro from "../../imagens do projeto/main_images/saxofone.png";
import Mais from "../../imagens do projeto/main_images/mais.png";
import routerConfig from "../../routerConfig";

const Principal: FC = () => {
    const categorias = [
        {name: "Violao", photo: Violao, link: "./viola", write: "Violões" },
        {name: "Guitarra", photo: Guitarra, link: "./guitarras", write: "Guitarras" },
        {name: "Violino", photo: Violino, link:  "./violinos", write: "Violinos"},
        {name: "Percussão", photo: Percussao, link: "./percu", write: "Percussão" },
        {name: "Edição", photo: Edicao, link: "./edit", write: "Edição"},
        {name: "Gravação", photo: Gravacao, link:"./rec", write: "Gravação"},
        {name: "Sopro", photo: Sopro, link: "./sopro", write: "Sopro"},
        {name: "Mais", photo: Mais, lank: "./mais", write:"Mais"},
    ];
    
    return <>
        <div className="row"> 
            {categorias.map( (value)=> {
                return <>
                <a href={value.link} className="border imagem round anima">
                    <div className="link-mean">
                        <img alt={value.name} className="jedi" src={value.photo} />
                        <span className="link-mean-div" > {value.write} </span>
                    </div> 
                </a>
            </>
            }   )}
                   
        </div>
    </>
};

export default Principal;