import Link from "next/link";
import Image from "next/image";
import marketing from '../../../assets/Marketing.svg'
import designerIlustran from '../../../assets/Frame 13.svg' 

export default function Marketing() {
    return (
        <div className="Marketing">
            <div className="Marketing-content">
                <Image
                    src={designerIlustran}
                    width={122}
                    height={87}
                    alt="designer" 
                />
                <h2>Marketing <span>Digital</span></h2>
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

            <div className="Marketing-image">
                <Image
                    src={marketing}
                    alt="marketing"
                />
                <div className="rectangle"></div>
            </div>
        </div>
    )
}