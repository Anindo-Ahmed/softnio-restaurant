import React from "react";

const test = () => {
  return (
    <div className="md:px-[15%] px-[30px] py-8 lg:py-[120px]">
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
      <div className="carousel pt-6 lg:pt-16 ">
        {/* Slides */}
        {testimonials.map((testimonial, index) => (
          <div
            id={`slide${index + 1}`}
            key={index}
            className="carousel-item relative w-full "
          >
            <div className="lg:flex lg:h-[464px] flex-col lg:flex-row justify-center">
              {/* Content Section */}
              <div className="bg-[#FEBF00] lg:p-10 p-6 w-full lg:w-1/2 flex items-center">
                <div className="w-full max-w-sm mx-auto">
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
                <video className="w-full h-[200px] lg:h-full" controls>
                  <source src={testimonial.videoLink} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute left-5 right-5 bottom-4 lg:top-2/3 flex lg:justify-between justify-center gap-4">
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

export default test;
