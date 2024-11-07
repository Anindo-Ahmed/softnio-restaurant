import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PiPhoneCall } from "react-icons/pi";
import "./Tabs.css";

const About = () => {
  return (
    <div className="md:px-[15%] px-[30px] py-8 lg:py-[120px] ">
      <div className="flex justify-start items-stretch gap-[74px]">
        <div>
          <img
            src="../../public/images/image 2.png"
            alt="image2"
            className="lg:max-w-[617px]"
          />
        </div>
        <div>
          <Tabs>
            <TabList>
              <Tab>About</Tab>
              <Tab>Experience</Tab>
              <Tab>Contact</Tab>
            </TabList>

            {/* About tab */}
            <TabPanel>
              <h2 className="bebas-neue lg:text-6xl font-bold pt-8">
                Exceptional culinary experience and delicious food
              </h2>
              <p className="roboto text-base font-normal pt-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>
              <div className="flex gap-8 items-center pt-8">
                <Link className="roboto text-[18px] font-bold text-black px-6 py-4 rounded-none bg-[#FEBF00] uppercase ">
                  About more
                </Link>
                <span className="flex gap-2">
                  <PiPhoneCall className="text-2xl text-[#B52B1D]" /> +88 3426
                  739 485
                </span>
              </div>
            </TabPanel>

            {/* Experience tab */}
            <TabPanel>
              <h2 className="bebas-neue lg:text-6xl font-bold pt-8">
                Experience with delicious food
              </h2>
              <p className="roboto text-base font-normal pt-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>
              <div className="flex gap-8 items-center pt-8">
                <Link className="roboto text-[18px] font-bold text-black px-6 py-4 rounded-none bg-[#FEBF00] uppercase ">
                  Book a table
                </Link>
                <span className="flex gap-2">
                  <PiPhoneCall className="text-2xl text-[#B52B1D]" /> +88 3426
                  739 485
                </span>
              </div>
            </TabPanel>

            {/* Contact tab */}
            <TabPanel>
              <h2 className="bebas-neue lg:text-6xl font-bold pt-8">
                Get in touch
              </h2>
              <p className="roboto text-base font-normal pt-[18px]">
                Our friendly team is always here to chat.
              </p>
              <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <span class="inline-block p-3 text-[#B52B1D] rounded-full border shadow-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>

                  <h2 class="mt-4 text-lg font-medium text-gray-800">Email</h2>
                  <p class="mt-2 text-gray-500 ">
                    Our friendly team is here to help.
                  </p>
                  <p class="mt-2 text-gray-500">hello@merakiui.com</p>
                </div>

                <div>
                  <span class="inline-block p-3 text-[#B52B1D] rounded-full border shadow-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>

                  <h2 class="mt-4 text-lg font-medium text-gray-800 ">
                    Office
                  </h2>
                  <p class="mt-2 text-gray-500 ">
                    Come say hello at our office HQ.
                  </p>
                  <p class="mt-2 text-gray-500">
                    100 Smith Street Collingwood VIC 3066 AU
                  </p>
                </div>

                <div>
                  <span class="inline-block p-3 text-[#B52B1D] rounded-full border shadow-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>

                  <h2 class="mt-4 text-lg font-medium text-gray-600">Phone</h2>
                  <p class="mt-2 text-gray-500 ">Mon-Fri from 8am to 5pm.</p>
                  <p class="mt-2 text-gray-500">+88 3426 739 485</p>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      {/* services */}
      <div className="lg:mt-[74px]">
        <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Fast delivery */}
          <div className="lg:flex items-center gap-4">
            <div>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="122"
            height="122"
            viewBox="0 0 122 122"
            fill="none"
          >
            <g filter="url(#filter0_d_1_753)">
              <circle cx="61" cy="54.0001" r="45" fill="white" />
              <g transform="translate(41, 34)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M34.13 9.46181L22.4684 3.13015C21.755 2.73681 20.905 2.50348 20 2.50348C19.0984 2.50348 18.25 2.73348 17.5117 3.14015L17.5384 3.12681L5.86836 9.46515C4.36002 10.2901 3.35169 11.8585 3.33502 13.6635V26.3351C3.35169 28.1435 4.36336 29.7135 5.84669 30.5251L5.87169 30.5385L17.5334 36.8685C18.2217 37.2468 19.0417 37.4735 19.9134 37.4835H19.9167C19.9467 37.4851 19.9717 37.5001 20.0017 37.5001C20.0317 37.5001 20.0534 37.4851 20.0817 37.4835C20.955 37.4751 21.775 37.2485 22.49 36.8568L22.4634 36.8701L34.1367 30.5318C35.6434 29.7068 36.65 28.1401 36.6684 26.3368V13.6618C36.65 11.8535 35.64 10.2835 34.1567 9.47348L34.1317 9.46015L34.13 9.46181ZM19.135 6.05348C19.385 5.91515 19.6834 5.83515 20 5.83515C20.32 5.83515 20.62 5.91681 20.88 6.06181L20.87 6.05681L31.15 11.6385L27.1317 13.9635L16.1884 7.65181L19.135 6.05348ZM20 18.0901L8.84836 11.6385L12.7534 9.51848L23.8034 15.8901L20 18.0901ZM7.46836 27.6135C6.99836 27.3668 6.68169 26.8885 6.66669 26.3351V14.2285L18.3334 20.9785V33.5118L7.46836 27.6135ZM32.5384 27.6085L21.6684 33.5101V20.9768L33.335 14.2268V26.3301C33.3217 26.8835 33.0067 27.3618 32.5467 27.6035L32.5384 27.6068V27.6085Z"
                    fill="#BD1F17"
                  />
                </svg>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_1_753"
                x="0"
                y="0.00012207"
                width="122"
                height="122"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_753"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_753"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
            </div>
            <div>
                <h2 class="bebas-neue uppercase text-3xl font-bold text-[#0A1425]">
              fast delivery
            </h2>
            <p class="inter text-xl font-normal text-[#0A1425] ">
              Within 30 minutes
            </p>
            </div>       
          </div>

          {/* Absolute dining */}
          <div className="lg:flex items-center gap-4">
            <div>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="122"
            height="122"
            viewBox="0 0 122 122"
            fill="none"
          >
            <g filter="url(#filter0_d_1_753)">
              <circle cx="61" cy="54.0001" r="45" fill="white" />
              <g transform="translate(41, 34)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M34.13 9.46181L22.4684 3.13015C21.755 2.73681 20.905 2.50348 20 2.50348C19.0984 2.50348 18.25 2.73348 17.5117 3.14015L17.5384 3.12681L5.86836 9.46515C4.36002 10.2901 3.35169 11.8585 3.33502 13.6635V26.3351C3.35169 28.1435 4.36336 29.7135 5.84669 30.5251L5.87169 30.5385L17.5334 36.8685C18.2217 37.2468 19.0417 37.4735 19.9134 37.4835H19.9167C19.9467 37.4851 19.9717 37.5001 20.0017 37.5001C20.0317 37.5001 20.0534 37.4851 20.0817 37.4835C20.955 37.4751 21.775 37.2485 22.49 36.8568L22.4634 36.8701L34.1367 30.5318C35.6434 29.7068 36.65 28.1401 36.6684 26.3368V13.6618C36.65 11.8535 35.64 10.2835 34.1567 9.47348L34.1317 9.46015L34.13 9.46181ZM19.135 6.05348C19.385 5.91515 19.6834 5.83515 20 5.83515C20.32 5.83515 20.62 5.91681 20.88 6.06181L20.87 6.05681L31.15 11.6385L27.1317 13.9635L16.1884 7.65181L19.135 6.05348ZM20 18.0901L8.84836 11.6385L12.7534 9.51848L23.8034 15.8901L20 18.0901ZM7.46836 27.6135C6.99836 27.3668 6.68169 26.8885 6.66669 26.3351V14.2285L18.3334 20.9785V33.5118L7.46836 27.6135ZM32.5384 27.6085L21.6684 33.5101V20.9768L33.335 14.2268V26.3301C33.3217 26.8835 33.0067 27.3618 32.5467 27.6035L32.5384 27.6068V27.6085Z"
                    fill="#BD1F17"
                  />
                </svg>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_1_753"
                x="0"
                y="0.00012207"
                width="122"
                height="122"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_753"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_753"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
            </div>
            <div>
                <h2 class="bebas-neue uppercase text-3xl font-bold text-[#0A1425]">
                absolute dining
            </h2>
            <p class="inter text-xl font-normal text-[#0A1425] ">
            Best buffet restaurant
            </p>
            </div>       
          </div>

          {/* Pickup delivery */}
          <div className="lg:flex items-center gap-4">
            <div>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="122"
            height="122"
            viewBox="0 0 122 122"
            fill="none"
          >
            <g filter="url(#filter0_d_1_753)">
              <circle cx="61" cy="54.0001" r="45" fill="white" />
              <g transform="translate(41, 34)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M34.13 9.46181L22.4684 3.13015C21.755 2.73681 20.905 2.50348 20 2.50348C19.0984 2.50348 18.25 2.73348 17.5117 3.14015L17.5384 3.12681L5.86836 9.46515C4.36002 10.2901 3.35169 11.8585 3.33502 13.6635V26.3351C3.35169 28.1435 4.36336 29.7135 5.84669 30.5251L5.87169 30.5385L17.5334 36.8685C18.2217 37.2468 19.0417 37.4735 19.9134 37.4835H19.9167C19.9467 37.4851 19.9717 37.5001 20.0017 37.5001C20.0317 37.5001 20.0534 37.4851 20.0817 37.4835C20.955 37.4751 21.775 37.2485 22.49 36.8568L22.4634 36.8701L34.1367 30.5318C35.6434 29.7068 36.65 28.1401 36.6684 26.3368V13.6618C36.65 11.8535 35.64 10.2835 34.1567 9.47348L34.1317 9.46015L34.13 9.46181ZM19.135 6.05348C19.385 5.91515 19.6834 5.83515 20 5.83515C20.32 5.83515 20.62 5.91681 20.88 6.06181L20.87 6.05681L31.15 11.6385L27.1317 13.9635L16.1884 7.65181L19.135 6.05348ZM20 18.0901L8.84836 11.6385L12.7534 9.51848L23.8034 15.8901L20 18.0901ZM7.46836 27.6135C6.99836 27.3668 6.68169 26.8885 6.66669 26.3351V14.2285L18.3334 20.9785V33.5118L7.46836 27.6135ZM32.5384 27.6085L21.6684 33.5101V20.9768L33.335 14.2268V26.3301C33.3217 26.8835 33.0067 27.3618 32.5467 27.6035L32.5384 27.6068V27.6085Z"
                    fill="#BD1F17"
                  />
                </svg>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_1_753"
                x="0"
                y="0.00012207"
                width="122"
                height="122"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_753"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_753"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
            </div>
            <div>
                <h2 class="bebas-neue uppercase text-3xl font-bold text-[#0A1425]">
              fast delivery
            </h2>
            <p class="inter text-xl font-normal text-[#0A1425] ">
              Within 30 minutes
            </p>
            </div>       
          </div>       
        </div>
      </div>
    </div>
  );
};

export default About;
