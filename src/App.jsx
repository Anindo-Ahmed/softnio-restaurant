import About from './components/About'
import Banner from './components/Banner'
import Navbar from './shared/Navbar'

function App() {

  return (
    <div className=''>
      <div className='bg-[#BD1F17]'>
        <Navbar/>
        <Banner/>
      </div>
       <About/>
    </div>
  )
}

export default App
