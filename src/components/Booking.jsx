import { FaSquareFull } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

const Booking = () => {
  const {
    register,
    resetField,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {  
    console.log(data)
    if(data){
      resetField("name");
      resetField("email");
      resetField("date");
      resetField("people");
      resetField("message");
    }  
  }

  return (
    <div className="md:px-[15%] px-[30px] py-8 lg:py-[120px] bg-[url('../../public/images/bg_form.jpeg')] bg-no-repeat bg-cover">
      <div>
        <div>
          <span className="roboto test-base lg:text-xl font-bold text-[#BD1F17] flex items-center gap-2">
            {" "}
            <FaSquareFull className="text-xs" />
            Book Now
          </span>
          <h2 className="bebas-neue text-4xl lg:text-6xl font-bold pt-2 lg:pt-4 text-white">
            Book Your Table
          </h2>
          <p className="roboto text-base font-normal text-white mt-2 lg:mt-4 lg:mb-10 lg:w-1/2">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>

        {/* Form */}
        <section class="max-w-xl mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="grid grid-cols-1 gap-6 mt-4 ">
                <div className="flex lg:flex-row flex-col gap-7 justify-between">
                    <div>
                <label class="text-white " for="username">
                  Your Name
                </label>
                <input
                  placeholder="Your Name"
                  id="username"
                  type="text"
                  class="w-full px-4 py-2 mt-2 text-black border border-white roboto focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                  {...register("name", {required: true})}
                />
              </div>
              <div>
                <label
                  class="text-white  "
                  for="emailAddress"
                >
                  Your Email
                </label>
                <input
                placeholder="Your Email"
                  id="emailAddress"
                  type="email"
                  class="w-full px-4 py-2 mt-2 text-black border border-white roboto focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                  {...register("email")}
                />
              </div>
                </div>
              <div className="flex lg:flex-row flex-col gap-7 justify-between">
                <div>
                <label class="text-white " for="date">
                  Reservation Date
                </label>
                <input
                placeholder="Reservation Date"
                onFocus="{this.type='date'}"
                onBlur="{this.type=''}"
                  id="date"
                  type="date"
                  class="w-full px-4 py-2 mt-2 text-black border border-white roboto focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                  {...register("date")}
                />
              </div>
              <div>
                <label
                  class="text-white  "
                  for="totalPeople"
                >
                  Total People
                </label>
                <input
                placeholder="Total People"
                  id="totalPeople"
                  type="number"
                  class="w-full px-4 py-2 mt-2 text-black border border-white roboto focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                  {...register("people")}
                />
              </div>
              </div>  
              <div>
              <label
                  class="text-white  "
                  for="totalPeople"
                >
                  Message
                </label>
                <textarea
                placeholder="Message"
                  id="message"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-black border border-white roboto focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                  {...register("message")}
                />
              </div>
            </div>

            <div class="flex justify-srart mt-6">
            <button className="roboto text-sm font-bold text-black px-6 py-4 rounded-none bg-[#FEBF00] uppercase ">
            Book Now
            </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Booking;
