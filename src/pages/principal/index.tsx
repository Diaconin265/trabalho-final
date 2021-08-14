import react, {FC} from "react";
import './style.scss';
import Violao from "../images/violao.png";
import Guitarra from "../images/guitar.png";
import Violino from "../images/violino.png";
import Percussao from "../images/baqueta.png";
import Edicao from "../images/pc.png";
import Gravacao from "../images/gravacao.png";
import Sopro from "../images/saxofone.png";
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
    ];
    
    return <>
        <div className="row"> 
            {categorias.map( (value)=> {
                return <a href={value.link} className="border imagem round anima">
                            <div>
                                <img alt={value.name} className="jedi" src={value.photo} />
                                <span className="link" >{value.write}</span>
                            </div> 
                        </a>
            }   )}
            <a href="./mais" className="border imagem round anima">
                <span className="mais link">
                    M
                </span> 
            </a>       
        </div>
    </>
};

export default Principal;