import Link from 'next/link'
import Image from 'next/image'
import ArrowDown from '../../../assets/Arrow - Down.svg'
import RectangleImage01 from '../../../assets/RectangleImage01.png'
import RectangleImage02 from '../../../assets/RectangleImage02.png'
import RectangleImage03 from '../../../assets/RectangleImage03.png'
import RectangleImage04 from '../../../assets/RectangleImage04.png'
import './AgenciaDigital.scss'

export const AgenciaDigital = () => {
  return (
    <div className='AgenciaDigital'>
        <p className='p-content'>Comece agora!</p>
        <Link 
            href={'#'} 
            className='btn-comecar'
        >
            <Image 
                src={ArrowDown}
                width={55}
                height={55}
                alt='Arrow - Down'
            />
        </Link>

        <div className="content">
            <div className="content-bg-01">
                <Image 
                    src={RectangleImage01}
                    width={170}
                    height={219}
                    alt='RectangleImage'
                />
                <Image 
                    src={RectangleImage02}
                    width={170}
                    height={219}
                    alt='RectangleImage'
                    className='RectangleImage02'
                />
            </div>
            <div className="content-intro">
                <h2>
                    Agência digital criativa para
                    a sua empresa.
                </h2>
                <p>
                    Trabalhar nas suas ideias para 
                    fazer sorrir os seus utilizadores 
                    em todo o mundo
                </p>
            </div>
            <div className="content-bg-02">
                <Image 
                    src={RectangleImage04}
                    width={170}
                    height={219}
                    alt='RectangleImage'
                />
                <Image 
                    src={RectangleImage03}
                    width={170}
                    height={219}
                    alt='RectangleImage'
                    className='RectangleImage03'
                />
            </div>
        </div>
    </div>
  )
}
