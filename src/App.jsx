import About from "./components/About";
import Banner from "./components/Banner";
import Booking from "./components/Booking";
import Foods from "./components/Foods";
import Testimonial from "./components/Testimonial";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Banner/>
      <About />
      <Foods />
      <Booking />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
