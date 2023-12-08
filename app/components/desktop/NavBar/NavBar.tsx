import Link from 'next/link'
import Logo from '../../../assets/logotipo.png'
import Image from 'next/image'
import './NavBar.scss'

export const NavBar = () => {
  return (
    <nav id='menu'>
        <Link 
          href={'/'} 
          className='logo-njila-link'>
            <Image
                src={Logo}
                alt='Logo NjilaBrand'
                className='logo-njila'
            />
        </Link>

        <div className="menu-navigation">
            <Link href={'#'} className='active'>Inicio</Link>
            <Link href={'#about'}>Sobre nós</Link>
            <Link href={'#portfolio'}>Portfólio</Link>
            <Link href={'#equipe'}>Nosso Team</Link>
            <Link href={'#servicos'}>Serviços</Link>
            <Link href={'#'}>Contactos</Link>
        </div>
    </nav>
  )
}
