import './Portfolio.scss'
import { SliderPortfolio } from './SliderPortfolio'

export const Portfolio = () => {
  return (
    <div className='Portfolio'>
        <div className="Portfolio-content-text">
            <h2>Nosso <span>Portfolio</span></h2>
            <p>
                Somos uma empresa atuante nas áreas de 
                Marketing e Publicidade desenvolvendo 
                produtos e serviços que sirvam de 
                auxílio para o seu público alvo.
            </p>
        </div>

        <div className="Portfolio-content-slider">
            <SliderPortfolio />
        </div>
    </div>
  )
}