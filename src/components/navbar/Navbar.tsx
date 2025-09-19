import logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <header className='w-full bg-(--card-background)/40 flex justify-around items-center backdrop-blur-sm border-b-1 border-(--blue)'>

        <a href="#inicio">
          <img src={logo} alt="Logo com iniciais LQ" className='max-h-16' />
        </a>

        <nav>
          <ul className='flex flex-row text-xl text-white font-medium'>
            <li>
              <a href="">Sobre mim</a>
            </li>
            <li>
              <a href="">Habilidades</a>
            </li>
            <li>
              <a href="">Experiências</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar