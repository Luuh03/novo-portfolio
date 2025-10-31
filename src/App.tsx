import { useState } from 'react'
import './App.css'
import About from './components/about/About'
import Habilities from './components/habilities/Habilities'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Experiences from './components/experiences/Experiences'
import Masonry from 'react-masonry-css'

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
        <Masonry breakpointCols={{default: 2, 1280: 1}} className='flex container max-xl:max-w-fit mx-auto gap-x-[6.875rem] py-14 px-5'>
          <About />
          <Habilities />
          <Experiences />
        </Masonry>
      </main>
    </>
  )
}

export default App
