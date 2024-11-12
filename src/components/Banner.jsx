import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="md:px-[15%] px-[30px] py-8 lg:py-[120px] text-white bg-[#BD1F17] lg:min-h-screen">
      <div className="hero relative lg:mt-[130px] lg:mb-[160px]">
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-between">
          {/* image */}
          <div className="lg:ml-auto lg:mr-5 lg:w-1/2">
            <img
              src="../../public/images/image 1.jpg"
              className="lg:max-w-lg max-w-full  rounded-none z-0"
            />
          </div>
          {/* headings with button */}
          <div className="lg:max-w-2xl left-0 z-[1] bottom-5 lg:absolute py-14">
            <div>
              <div
                style={{
                  background: `linear-gradient(90deg, rgba(189, 31, 23, 0.00) 33%, rgba(189, 31, 23, 0.70) 100%)`,
                }}
              >
                <h1 className="text-5xl lg:text-[100px] bebas-neue font-bold">
                  Taste the authentic Saudi cuisine
                </h1>
              </div>
              <p className="pt-4 pb-8 lg:pb-10 lg:max-w-[500px] roboto lg:text-2xl font-normal">
                Among the best Saudi chefs in the world, serving you something
                beyond flavor.
              </p>
              <Link className="roboto text-sm font-bold text-black px-6 py-4 rounded-none bg-[#FEBF00] uppercase ">
                Explore Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
