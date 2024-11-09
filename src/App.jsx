import About from './components/About'
import Banner from './components/Banner'
import Booking from './components/Booking'
import Foods from './components/Foods'
import Navbar from './shared/Navbar'

function App() {

  return (
    <div className=''>
      <div className='bg-[#BD1F17]'>
        <Navbar/>
        <Banner/>
      </div>
       <About/>
       <div>
        <Foods/>
        <Booking/>
       </div>
    </div>
  )
}

export default App
