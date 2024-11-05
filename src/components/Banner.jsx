import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="md:px-[15%] lg:py-32 text-white min-h-screen">
      <div className="hero relative ">
        <div className="hero-content flex-col lg:flex-row-reverse items-center justify-between">
          <div className="absolute top-0 right-0">
            <img
                src='../../public/images/image 1.jpg'
                className="max-w-[700px] rounded-none shadow-2xl z-0 "
            />
          </div>
          <div className="lg:max-w-[945px] z-[1] absolute lg:top-28 left-0">
            <div style={{background: `linear-gradient(90deg, rgba(189, 31, 23, 0.00) 33%, rgba(189, 31, 23, 0.70) 100%)`}}>
                <h1 className="lg:text-9xl bebas-neue font-bold lg:py-5 lg:pr-6">Taste the authentic <br/> Saudi cuisine</h1>
            </div>
            <p className="pt-4 pb-10 max-w-[560px]">
            Among the best Saudi chefs in the world, serving you something beyond flavor.
            </p>
            <Link className="roboto text-sm font-bold text-black lg:px-6 py-4 rounded-none bg-[#FEBF00] uppercase ">
            Explore Menu
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
