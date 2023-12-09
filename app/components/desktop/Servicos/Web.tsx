import Link from "next/link";
import Image from "next/image";
import web from '../../../assets/Web.svg'
import designerIlustran from '../../../assets/Saly-21.svg' 

export default function Web() {
    return (
        <div className="Web">
            <div className="Web-image">
                <Image
                    src={web}
                    alt="Desenvolvimento Web"
                />
            </div>
            <div className="Web-content">
                <h2>Desenvolvimento <span>Web</span></h2>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis 
                    nostrud exercitation
                </p>
                <Link href={'#'}>Saber Mais</Link>

                <Image
                    src={designerIlustran}
                    alt="designer" 
                />
            </div>
        </div>
    )
}