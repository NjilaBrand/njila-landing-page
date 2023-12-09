import Designer from "./Designer";
import Marketing from "./Marketing";
import Web from "./Web";
import NjilaContent from '../../../assets/element 1.svg' 
import NjilaContent2 from '../../../assets/element 2.svg' 
import Image from "next/image";
import "./Servicos.scss"

export default function Servicos() {
    return (
        <div className="Servicos" id="servicos">
            <Image 
                src={NjilaContent}
                alt="Njila"
                className="NjilaContent"
            />
            <div className="Servicos-content-text">
                <h2>O que podemos <span>fazer por ti</span></h2>
                <p>
                    Somos uma empresa atuante nas áreas de Marketing 
                    e Publicidade desenvolvendo produtos e serviços 
                    que sirvam de auxílio para o seu público alvo.
                </p>
            </div>

            <Designer />
            <br /><br /><br />
            <Image 
                src={NjilaContent2}
                alt="Njila"
                className="NjilaContent2"
            />
            <Marketing />
            <br /><br /><br /><br /><br /><br />
            <Web />
        </div>
    )
}