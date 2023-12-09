import Link from "next/link";
import Image from "next/image";
import designer from '../../../assets/designer.svg'
import designerIlustran from '../../../assets/designer-ilustran.svg'   

export default function Designer() {
    return (
        <div className="Designer">
            <div className="Designer-image">
                <Image
                    src={designer}
                    alt="designer"
                />
            </div>
            <div className="Designer-content">
                <Image
                    src={designerIlustran}
                    width={122}
                    height={87}
                    alt="designer" 
                />
                <h2>Designer</h2>
                <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis 
                    nostrud exercitation
                </p>
                <Link href={'#'}>Saber Mais</Link>
            </div>
        </div>
    )
}