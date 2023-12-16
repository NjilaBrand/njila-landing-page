import Image from 'next/image'
import element3 from '../../../assets/element 3.svg'
import './Contactos.scss'
import Link from 'next/link'
import icons8_phone1 from '../../../assets/icons8_phone 1.svg'
import icons8_Email1 from '../../../assets/icons8_Email 1.svg'
import icons8_Location_11 from '../../../assets/icons8_Location_1 1.svg'
import Saly37 from "../../../assets/Saly-37.svg" 

export default function Contactos() {
    return (
        <div className='Contactos' id='contactos'>
            <div className="content-conecte-njila">
                <div className="content-image">
                    <Image
                        src={element3}
                        alt='Njila'
                    />
                </div>
                <div className="content">
                    <h2>Conecte-se a <span>Njilabrand</span></h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris
                    </p>

                    <form action="" method="post">
                        <input 
                            type="email" 
                            name="" 
                            id="" 
                            placeholder='Digite seu email'
                        />
                        <button>Saber mais</button>
                    </form>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
            <div className="content-contactos-njila">
                <Image
                    src={Saly37}
                    width={944}
                    height={1071}
                    alt='frame'
                    className='frame' 
                />
                <div className="contactos-content">
                    <h2>Contactos</h2>
                    <p className='text'>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, 
                        sed do eiusmod.
                    </p>

                    <div className="links">
                        <p>
                            <Image 
                                src={icons8_phone1}
                                width={19}
                                height={19}
                                alt='telefone'
                            />
                            <span>+244 923 123 456</span>
                        </p>

                        <p>
                            <Image 
                                src={icons8_Email1}
                                width={19}
                                height={19}
                                alt='email'
                            />
                            <span>exemplo.@gmail.com</span>
                        </p>

                        <p>
                            <Image 
                                src={icons8_Location_11}
                                width={19}
                                height={19}
                                alt='location'
                            />
                            <span>Angola, Luanda, Cuca, Rua do Jornal de Angola, Endereço #24431</span>
                        </p>
                    </div>
                </div>

                <div className="footer">
                    <p>Todos os direitos reservados a Njilabrand 2023.</p>
                </div>
            </div>
        </div>
    )
}
