import { useState } from 'react'
import './App.css'
import About from './components/about/About'
import Habilities from './components/habilities/Habilities'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'

type MenuState = 'closed' | 'open'

function App() {

  const [menuState, setMenuState] = useState<MenuState>('closed')

  const toggleMenu = (): void => {
    setMenuState(prevState => prevState === 'closed' ? 'open' : 'closed')
  }

  const closeMenu = (): void => {
    setMenuState('closed')
  }

  return (
    <>
      <Navbar
        menuState={menuState}
        onMenuToggle={toggleMenu}
        onMenuClose={closeMenu}
      />
      <main className='pt-[4.061rem]'>
        <Home />
        <article className='container max-xl:max-w-fit mx-auto grid xl:grid-cols-2 gap-x-[6.875rem] py-14 px-5'>
          <About />
          <Habilities />
        </article>
      </main>
    </>
  )
}

export default App
