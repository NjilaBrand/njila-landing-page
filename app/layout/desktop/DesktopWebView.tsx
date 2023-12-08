import Image from 'next/image'
import { NavBar } from '../../components/desktop/NavBar/NavBar';
import Agrupar from '../../assets/Agrupar.svg'
import '../../components/sass/homeDesktop.scss'
import { AgenciaDigital } from '@/app/components/desktop/AgenciaDigital/AgenciaDigital';
import { GrupoCard } from '@/app/components/desktop/GrupoCard/GrupoCard';
import Equipe from '@/app/components/desktop/Equipe/Equipe';
import Servicos from '@/app/components/desktop/Servicos/Servicos';
import { About } from '@/app/components/desktop/About/About';
import { SuaVisao } from '@/app/components/desktop/SuaVisao/SuaVisao';
import { Portfolio } from '@/app/components/desktop/Portfolio/Portfolio';

export default function DesktopWebView() {
  return (
    <main className='home'>
        <header className='header-desk'>
          <NavBar />
          <div className="intro-content">
            <div className="introduction-info">
              <div className="info-content">
                  Trabalhe com os melhores 
                  <span> profissionais</span> de <span>marketing </span> 
                  para a sua <span>empresa.</span>
              </div>
              <div className="bg-lustran">
                <Image
                  src={Agrupar}
                  alt='Agrupar'
                />
              </div>
                <div className="marketing">
                  <div className="bg-border"></div>
                  <div className="content">
                    <p>Marketing</p>
                    <span>Crescemos consigo!</span>
                  </div>
                </div>
                <div className="dev-web">
                  <div className="bg-border"></div>
                  <div className="content">
                    <p>Desenvolvimento Web</p>
                    <span>Crescemos consigo!</span>
                  </div>
                </div>
            </div>
          </div>
        </header>
        <AgenciaDigital />
        <GrupoCard />
        <About />
        <br /><br />
        <SuaVisao />
        <Portfolio />
        <Equipe />
        <Servicos />
    </main>
  )
}