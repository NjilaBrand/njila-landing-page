import Image from 'next/image'
import Lustran from '../../../assets/Pedro Barroso - Image – SAVEE 1.svg'
import './About.scss'

export const About = () => {
  return (
    <div className='About'>
        <div className="about-image">
            <Image
                src={Lustran}
                width={675}
                height={675}
                alt='About'
            />
        </div>
        <div className="about-content">
            <p className="about-title">Sobre nós</p>
            <h2 className="about-intro">
                Ignorar as <span>grandes</span> promessas contratar 
                especialistas em <span>marketing</span> com base em dados
            </h2>
            <div className="about-descripition">
                <p>
                    Somos uma empresa atuante nas áreas de Marketing 
                    e Publicidade desenvolvendo produtos e serviços que 
                    sirvam de auxílio para o seu público alvo.
                </p>
                <br />
                <p>
                    Mais do que apenas criar canais de tração, nós 
                    antecipamos a sua empresa às necessidades do mercado, 
                    tornando-a diferente da concorrência e fazendo com que 
                    criem conexões futurísticas com o seu público alvo.
                </p>
            </div>
        </div>
    </div>
  )
}
