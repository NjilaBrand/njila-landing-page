import './SuaVisao.scss'
import { EffectElastic } from './EffectElastic';

export const SuaVisao = () => {
  return (
    <div className='SuaVisao'>
        <div className="intro">
            <h2><span>Partilhe</span> sua visão</h2>
            <br />
            <p>
                Somos uma empresa atuante nas áreas de 
                Marketing e Publicidade desenvolvendo 
                produtos e serviços que sirvam de auxílio 
                para o seu público alvo.
            </p>
        </div>

        <div className="content">
            <EffectElastic />
             <div className="content-card">
                <div className="card h-[351.34px] c0">
                    <div className="card-title">
                        <h2>Nossa Missão</h2>
                    </div>
                    <div className="card-desc">
                        <p>
                        Agregar valor aos seus negócios, potencializar o 
                        crescimento das suas operações e promover 
                        relacionamento com o seu público alvo.
                        </p>
                    </div>
                </div>

                <div className="card h-[393px] c1">
                    <div className="card-title">
                        <h2>Nossa Visão</h2>
                    </div>
                    <div className="card-desc">
                        <p>
                            Ser uma referência exponencial no mundo digital
                            englobando Marketing e Publicidade através da 
                            inovação, bom relacionamento e a excelência em 
                            nossos produtos e serviços.
                        </p>
                    </div>
                </div>

                <div className="card h-[240px] c2">
                    <div className="card-title">
                        <h2>Nossos Valores</h2>
                    </div>
                    <div className="card-desc">
                        <p>
                            Inovação ,Criatividade, Divergência, 
                            Profissionalismo, União Comprometimento.
                        </p>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}