import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="md:px-[15%] px-[30px] py-8 lg:py-[120px] text-white min-h-screen">
      <div className="hero lg:relative ">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse items-center justify-between">
          {/* image */}
          <div className="lg:absolute top-0 right-0 mt-12 ">
            <img
                src='../../public/images/image 1.jpg'
                className="lg:max-w-[590px] lg:max-h-[500px] rounded-none z-0 "
            />
          </div>
          {/* headings with button */}
          <div className="lg:max-w-[945px] z-[1] lg:absolute lg:top-28 lg:left-0">
            <div style={{background: `linear-gradient(90deg, rgba(189, 31, 23, 0.00) 33%, rgba(189, 31, 23, 0.70) 100%)`}}>
                <h1 className="text-5xl lg:text-[100px] bebas-neue font-bold lg:py-5 lg:pr-6">Taste the authentic <br/> Saudi cuisine</h1>
            </div>
            <p className="pt-4 pb-8 lg:pb-10 lg:max-w-[510px] roboto lg:text-2xl font-normal">
            Among the best Saudi chefs in the world, serving you something beyond flavor.
            </p>
            <Link className="roboto text-sm font-bold text-black px-6 py-4 rounded-none bg-[#FEBF00] uppercase ">
            Explore Menu
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
