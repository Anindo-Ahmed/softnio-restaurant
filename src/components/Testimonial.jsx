import { FaSquareFull } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
const Testimonial = () => {
  const testimonials = [
    {
      description:
        "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
      clientName: "Khalid Al Dawsry",
      videoLink:
        "https://videos.pexels.com/video-files/3298229/3298229-uhd_2732_1440_25fps.mp4",
      address: "Jeddah, Saudi",
      next: "#slide2",
      previous: "#slide3",
    },
    {
      description:
        "The Spicy Chicken Pizza was a delight! The crust was perfectly crispy, and the blend of spices brought out the flavors wonderfully. Definitely my new favorite spot for a quick and delicious meal!",
      clientName: "Emma Rogers",
      videoLink:
        "https://videos.pexels.com/video-files/852299/852299-hd_1920_1080_30fps.mp4",
      address: "New York, NY",
      next: "#slide3",
      previous: "#slide1",
    },
    {
      description:
        "Loved the Vegan Veggie Burger! It was packed with fresh vegetables and had the perfect balance of flavors. I highly recommend this place for anyone looking for a healthy, tasty option.",
      clientName: "Liam Johnson",
      videoLink:
        "https://videos.pexels.com/video-files/1111421/1111421-sd_640_360_30fps.mp4",
      address: "Los Angeles, CA",
      next: "#slide1",
      previous: "#slide2",
    },
  ];
  return (
    <div className="md:px-[15%] px-7 py-8 lg:py-[120px]">
  <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
    <div>
      <span className="roboto text-base lg:text-xl font-bold text-[#BD1F17] flex items-center gap-2">
        <FaSquareFull className="text-xs" />
        Crispy, Every Bite Taste
      </span>
      <h2 className="bebas-neue text-4xl lg:text-6xl font-bold pt-2 lg:pt-4">
        What Some of my Customers Say
      </h2>
    </div>
  </div>
  <div className="carousel pt-6 lg:pt-16">
    {/* Slides */}
    {testimonials.map((testimonial, index) => (
      <div
        id={`slide${index + 1}`}
        key={index}
        className="carousel-item relative w-full"
      >
        <div className="flex flex-col lg:flex-row justify-center lg:h-[464px] lg:w-full ">
          {/* Content Section */}
          <div className="bg-[#FEBF00] w-full lg:w-1/2 flex items-center">
            <div className="w-full lg:max-w-sm max-w-xs mx-auto">
              <RiDoubleQuotesL className="text-xl" />
              <h4 className="roboto text-lg lg:text-xl ml-4">
                {testimonial.description}
              </h4>
              <div className="flex justify-between lg:mt-40 mt-10 ml-4">
                <div>
                  <p className="bebas-neue text-lg font-bold">
                    {testimonial.clientName}
                  </p>
                  <span className="roboto text-sm">
                    {testimonial.address}
                  </span>
                </div>
                <div>
                  <img
                    src="../../public/images/client1.jpg"
                    alt="client1"
                    className="rounded-full w-12 h-12 lg:w-auto lg:h-auto"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center lg:mt-5 ml-4">
                <hr className="border-[#0A1425] border-1 w-full" />
                <hr className="border-2 border-[#BD1F17] w-14" />
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div className="w-full lg:w-1/2 bg-black flex items-center">
            <video className="w-full h-[180px] lg:h-full" controls>
              <source src={testimonial.videoLink} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-5 right-5 -bottom-10 lg:top-2/3 flex lg:justify-between justify-center gap-4">
          <a href={testimonial.previous} className="btn btn-circle">
            ❮
          </a>
          <a
            href={testimonial.next}
            className="btn btn-circle text-[#BD1F17]"
          >
            ❯
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Testimonial;
