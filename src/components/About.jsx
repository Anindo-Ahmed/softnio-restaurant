import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PiPhoneCall } from "react-icons/pi";
import "./Tabs.css";

const About = () => {
  return (
    <div className="md:px-[15%] px-[30px] py-8 lg:py-[120px] ">
      <div className="lg:flex justify-start items-stretch lg:gap-[63px]">
        <div>
          <img
            src="../../public/images/image 2.png"
            alt="image2"
          />
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <Tabs>
            <TabList>
              <Tab>About</Tab>
              <Tab>Experience</Tab>
              <Tab>Contact</Tab>
            </TabList>

            {/* About tab */}
            <TabPanel>
              <h2 className="bebas-neue text-4xl lg:text-6xl font-bold pt-6 lg:pt-8">
                Exceptional culinary experience and delicious food
              </h2>
              <p className="roboto text-base font-normal lg:pt-[18px] pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum, facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>
              <div className="flex lg:gap-8 gap-4 items-center pt-8">
                <Link className="roboto lg:text-lg text-base font-bold text-black px-6 py-3 lg:py-4 rounded-none bg-[#FEBF00] uppercase ">
                  About more
                </Link>
                <span className="flex lg:gap-2 gap-1 text-sm lg:text-lg items-center">
                  <PiPhoneCall className="text-sm lg:text-xl text-[#B52B1D]" /> +883426739485
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
          <div className="flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 lg:w-28 lg:h-28"
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
              <h2 class="bebas-neue uppercase text-2xl lg:text-3xl font-bold text-[#0A1425]">
                fast delivery
              </h2>
              <p class="inter text-lg lg:text-xl font-normal text-[#0A1425] ">
                Within 30 minutes
              </p>
            </div>
          </div>

          {/* Absolute dining */}
          <div className="flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 lg:w-28 lg:h-28"
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
                        d="M11.0033 29.5034C11.1583 29.7368 11.3167 29.9751 11.4783 30.2234C11.8333 30.8618 12.505 31.2851 13.275 31.2851C13.4083 31.2851 13.5383 31.2718 13.665 31.2484L13.6517 31.2501C14.5917 31.1301 15.545 31.0118 16.4867 30.9184C16.7217 31.0634 16.9517 31.2134 17.1817 31.3634L17.34 31.4668C16.8922 32.8445 16.4489 34.2201 16.01 35.5934L13.6783 33.7284L13.5233 33.6501C13.1917 33.4784 12.7983 33.3784 12.3833 33.3784C12.285 33.3784 12.1883 33.3834 12.0933 33.3951L12.105 33.3934L9.70999 33.5301L11.0033 29.5034ZM10.315 26.1968L7.38999 35.3068C7.46555 35.3112 7.54055 35.3134 7.61499 35.3134C7.68944 35.3134 7.76444 35.3112 7.83999 35.3068L12.2533 35.0568C12.2917 35.0501 12.335 35.0468 12.38 35.0468C12.5233 35.0468 12.6567 35.0818 12.7767 35.1418L12.7717 35.1401L16.7667 38.3318H17V37.9634C17.735 35.6568 18.4717 33.3668 19.2233 31.0584C19.3067 30.8084 19.2567 30.6901 19.0233 30.5568C18.3883 30.1718 17.7867 29.7534 17.1517 29.3701C16.9967 29.2851 16.81 29.2351 16.6133 29.2351L16.55 29.2368C15.4967 29.3368 14.4267 29.4701 13.3733 29.6051C13.3433 29.6134 13.31 29.6184 13.2733 29.6184C13.1167 29.6184 12.9817 29.5251 12.9217 29.3918L12.92 29.3901C12.3183 28.4534 11.75 27.6684 11.2483 26.7818C11.0533 26.4518 10.71 26.2284 10.315 26.1968ZM29.0617 29.4851L30.3583 33.5318L27.9433 33.4018C27.81 33.3734 27.6567 33.3568 27.5 33.3568C27.2217 33.3568 26.955 33.4084 26.71 33.5034L26.725 33.4984L26.4733 33.5934L24.055 35.5601C24.0117 35.419 23.9672 35.2773 23.9217 35.1351L23.6383 34.2451C23.345 33.3218 23.05 32.3934 22.75 31.4701C23.0333 31.2918 23.3233 31.1034 23.625 30.9034L26.4217 31.2518C26.5333 31.2734 26.6633 31.2868 26.795 31.2868C27.5733 31.2868 28.25 30.8534 28.5967 30.2151L28.6017 30.2051C28.7517 29.9618 28.9033 29.7234 29.0583 29.4851H29.0617ZM29.7567 26.1968C29.3583 26.2334 29.02 26.4568 28.8233 26.7768L28.82 26.7818C28.235 27.7184 27.6833 28.5201 27.1483 29.3901C27.0867 29.5268 26.9533 29.6201 26.7967 29.6201C26.7617 29.6201 26.7267 29.6151 26.695 29.6068H26.6983L23.605 29.2218C23.56 29.2134 23.5067 29.2101 23.4533 29.2101C23.2333 29.2101 23.03 29.2834 22.8667 29.4068L22.8683 29.4051C22.2667 29.8068 21.665 30.1901 21.0467 30.5584C20.9967 30.5768 20.955 30.6051 20.92 30.6401C20.8567 30.7034 20.8183 30.7918 20.8183 30.8884C20.8183 30.9518 20.835 31.0118 20.865 31.0618L20.8633 31.0601C21.365 32.5818 21.85 34.1201 22.335 35.6401C22.62 36.5434 22.8867 37.4451 23.1533 38.3318H23.2867L27.3167 35.0568C27.3717 35.0351 27.435 35.0234 27.5 35.0234C27.565 35.0234 27.63 35.0351 27.6867 35.0584L27.6833 35.0568L32.6817 35.3234L29.7567 26.1968ZM17.0517 26.9818L14.41 27.3001C14.3783 27.3101 14.34 27.3151 14.3017 27.3151C14.1383 27.3151 13.9983 27.2134 13.9433 27.0684L13.9417 27.0651C13.5067 26.3468 13.0717 25.6268 12.6217 24.9251C12.4883 24.7384 12.3067 24.5934 12.095 24.5101L12.0867 24.5068C11.3017 24.2051 10.415 23.9384 9.67999 23.6718C9.62499 23.6634 9.57499 23.6434 9.52999 23.6168L9.53166 23.6184C9.42333 23.5501 9.35166 23.4301 9.35166 23.2934C9.35166 23.2618 9.35499 23.2318 9.36166 23.2034V23.2068C9.30999 22.2068 9.20999 21.2818 9.05833 20.3718L9.07833 20.5151C9.03833 20.3784 8.96999 20.2601 8.87833 20.1634C8.25999 19.5284 7.62499 18.9101 6.98999 18.2918C6.89166 18.2251 6.82666 18.1134 6.82666 17.9868C6.82666 17.9218 6.84333 17.8584 6.87499 17.8051L6.87333 17.8068C7.17333 16.9868 7.47499 16.1351 7.75999 15.3501C7.78333 15.2668 7.79666 15.1718 7.79666 15.0751C7.79666 14.9784 7.78333 14.8818 7.75833 14.7918L7.75999 14.7984C7.47499 13.9801 7.17499 13.1268 6.87333 12.3401C6.84666 12.2868 6.82999 12.2251 6.82999 12.1584C6.82999 12.0284 6.89166 11.9118 6.98833 11.8384L8.81166 10.1151C8.97833 9.9601 9.08666 9.74177 9.09499 9.49843C9.09499 8.6451 9.27833 7.8251 9.36333 6.92177C9.36333 6.9201 9.36333 6.91843 9.36333 6.91677C9.36333 6.7501 9.48499 6.61177 9.64499 6.58677C10.48 6.30177 11.3183 6.0351 12.1217 5.73343C12.3133 5.6451 12.4717 5.51343 12.5883 5.35177L12.59 5.34843C13.0583 4.6301 13.51 3.9101 13.945 3.1751C14.0133 3.02177 14.1667 2.91677 14.3417 2.91677C14.3733 2.91677 14.4033 2.9201 14.4317 2.92677H14.4283C15.265 3.04343 16.1 3.1601 16.9533 3.22677C17.0083 3.23843 17.0717 3.24343 17.1383 3.24343C17.2967 3.24343 17.445 3.20677 17.5783 3.1401L17.5733 3.14343C18.325 2.70843 19.045 2.2401 19.7633 1.7551C19.825 1.7001 19.9067 1.6651 19.9967 1.6651C20.0867 1.6651 20.1683 1.69843 20.2317 1.7551C20.9833 2.2401 21.72 2.7251 22.4717 3.17677C22.5983 3.25343 22.7517 3.29843 22.915 3.29843C22.9467 3.29843 22.98 3.29677 23.01 3.29343H23.0067C23.8767 3.2101 24.6783 3.09343 25.615 2.9751C25.6383 2.9701 25.6667 2.96677 25.6933 2.96677C25.845 2.96677 25.975 3.05843 26.0317 3.1901L26.0333 3.19177C26.485 3.94343 26.9367 4.69677 27.42 5.43177C27.5233 5.5801 27.665 5.6951 27.8317 5.76343L27.8383 5.7651C28.6583 6.06677 29.51 6.3501 30.3133 6.61843C30.4933 6.64343 30.6317 6.79677 30.6317 6.98343C30.6317 6.9901 30.6317 6.99677 30.6317 7.0051C30.7205 7.90732 30.8205 8.80843 30.9317 9.71177C30.965 9.86343 31.0417 9.9951 31.1483 10.0968C31.7667 10.7318 32.4017 11.3501 33.0367 11.9684C33.1233 12.0301 33.1783 12.1284 33.1783 12.2418C33.1783 12.3018 33.1633 12.3568 33.135 12.4051L33.1367 12.4034C32.8367 13.2234 32.535 14.0751 32.25 14.8618C32.2217 14.9518 32.2067 15.0551 32.2067 15.1634C32.2067 15.2718 32.2233 15.3751 32.2517 15.4718L32.25 15.4651C32.5167 16.2834 32.8183 17.1368 33.12 17.9051C33.1517 17.9584 33.1717 18.0234 33.1717 18.0918C33.1717 18.2134 33.1117 18.3218 33.0217 18.3884C32.3867 18.9901 31.7833 19.5918 31.1817 20.2101C31.045 20.3584 30.95 20.5468 30.915 20.7551L30.9133 20.7618C30.7967 21.6318 30.7133 22.4334 30.63 23.3701C30.6233 23.5501 30.4883 23.6968 30.315 23.7218C29.495 24.0068 28.6417 24.2734 27.8383 24.5734C27.6683 24.6484 27.5283 24.7634 27.4217 24.9051L27.42 24.9084C26.9517 25.6434 26.4833 26.3968 26.05 27.1484C25.9817 27.2784 25.8483 27.3651 25.695 27.3651C25.655 27.3651 25.6167 27.3584 25.58 27.3484H25.5833C24.7367 27.2262 23.8839 27.1262 23.025 27.0484C23.0083 27.0468 22.99 27.0468 22.9717 27.0468C22.77 27.0468 22.58 27.1034 22.4183 27.2001L22.4233 27.1968C21.6883 27.6318 20.9683 28.0984 20.25 28.5834C20.185 28.6368 20.1 28.6701 20.0083 28.6701C19.9167 28.6701 19.8317 28.6368 19.765 28.5834L17.5583 27.1651C17.4283 27.1034 17.2683 27.0418 17.1033 26.9901L17.0733 26.9818H17.0517ZM10.7 15.0968C10.7 15.1018 10.7 15.1068 10.7 15.1134C10.7 20.2468 14.8617 24.4084 19.995 24.4084C25.1283 24.4084 29.29 20.2468 29.29 15.1134C29.29 9.9801 25.1283 5.81843 19.995 5.81843C16.1533 5.81843 12.855 8.1501 11.44 11.4751L11.4167 11.5351C10.9667 12.5868 10.7033 13.8101 10.7017 15.0934V15.0951L10.7 15.0968ZM20.0117 7.9751V9.64177C23.03 9.64677 25.475 12.0951 25.475 15.1134C25.475 18.1351 23.025 20.5851 20.0033 20.5851C20 20.5851 19.9967 20.5851 19.995 20.5851C16.9767 20.5801 14.5317 18.1318 14.5317 15.1134C14.5317 12.1068 16.9583 9.6651 19.96 9.64177H19.9617L20.0117 7.9751ZM20.0117 7.9751H19.945C16.0317 7.99343 12.8667 11.1701 12.8667 15.0868C12.8667 19.0134 16.05 22.1984 19.9783 22.1984C23.9067 22.1984 27.09 19.0151 27.09 15.0868C27.09 11.1718 23.925 7.9951 20.0133 7.9751H20.0117Z"
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
              <h2 class="bebas-neue uppercase text-2xl lg:text-3xl font-bold text-[#0A1425]">
                absolute dining
              </h2>
              <p class="inter text-lg lg:text-xl font-normal text-[#0A1425] ">
                Best buffet restaurant
              </p>
            </div>
          </div>

          {/* Pickup delivery */}
          <div className="flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 lg:w-28 lg:h-28"
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
                        d="M34.36 10.0368L30.4717 4.70344C29.8583 3.8701 28.8817 3.33344 27.7783 3.33344H12.2233C11.12 3.33344 10.1433 3.86844 9.53667 4.69344L9.53 4.70344L5.64167 10.0368C5.24167 10.5801 5.00167 11.2618 5.00167 12.0001V30.6668C5.00167 30.6751 5.00167 30.6868 5.00167 30.6968C5.00167 33.9784 7.65 36.6418 10.925 36.6668H29.075C32.3533 36.6418 35.0017 33.9784 35.0017 30.6968C35.0017 30.6868 35.0017 30.6751 35.0017 30.6651V12.0001C35.0017 11.2618 34.7617 10.5801 34.355 10.0268L34.3617 10.0368H34.36ZM12.2217 6.66677H27.7767L30.2067 10.0001H9.79L12.2217 6.66677ZM31.6667 30.6668C31.6667 30.6768 31.6667 30.6901 31.6667 30.7034C31.6667 32.1434 30.51 33.3118 29.0767 33.3334H10.9267C9.49 33.3118 8.33333 32.1434 8.33333 30.7034C8.33333 30.6901 8.33333 30.6784 8.33333 30.6651V13.3334H31.6667V30.6668ZM12.5 17.0834C12.5 16.1634 13.2467 15.4168 14.1667 15.4168C15.0867 15.4168 15.8333 16.1634 15.8333 17.0834C15.8333 19.3851 17.6983 21.2501 20 21.2501C22.3017 21.2501 24.1667 19.3851 24.1667 17.0834C24.1667 16.1634 24.9133 15.4168 25.8333 15.4168C26.7533 15.4168 27.5 16.1634 27.5 17.0834C27.5 21.2251 24.1417 24.5834 20 24.5834C15.8583 24.5834 12.5 21.2251 12.5 17.0834Z"
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
              <h2 class="bebas-neue uppercase text-2xl lg:text-3xl font-bold text-[#0A1425]">
                fast delivery
              </h2>
              <p class="inter text-lg lg:text-xl font-normal text-[#0A1425] ">
              Grab your food order
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
