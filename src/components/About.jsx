import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { PiPhoneCall } from "react-icons/pi";
import { useState } from "react";
import "./Tabs.css" 

const About = () => {
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="md:px-[15%] px-[30px] py-8 lg:py-[120px] ">
      <div className="flex justify-between items-stretch gap-[74px]">
        <div>
          <img src="../../public/images/image 2.png" alt="image2" className="lg:max-w-[617px]"/>
        </div>
        <div>
          <Tabs>
            <TabList>
              <Tab >About</Tab>
              <Tab>Experience</Tab>
              <Tab>Contact</Tab>
            </TabList>

            {/* About tab */}
            <TabPanel>
              <h2 className="bebas-neue lg:text-6xl font-bold pt-8">Exceptional culinary experience and delicious food</h2>
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
                  <PiPhoneCall className="text-2xl text-[#B52B1D]" /> +88 3426 739 485
                </span>
              </div>
            </TabPanel>

            {/* Experience tab */}
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default About;
