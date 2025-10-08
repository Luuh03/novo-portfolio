import './App.css'
import About from './components/about/About'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <article className='container max-xl:max-w-fit mx-auto grid max-xl:mx-20 xl:grid-cols-2 gap-[6.875rem] py-14'>
          <About />
        </article>
      </main>
    </>
  )
}

export default App
