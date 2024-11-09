import { FaSquareFull } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    useEffect(() => {
        fetch('items.json')
        .then(res => res.json())
        .then((data) => setFoods(data.slice(0, 9)));
    }, []);

    const productTemplate = (food) => {
        return (
            <div className="lg:mt-14 lg:mb-28 text-center bg-white p-8 mr-8">
                <div className="mb-8">
                    <img src={food.image} alt={food.name} className="w-fit shadow-2" />
                </div>
                <hr className="border-2 border-[#BD1F17] w-14 mb-8 mx-auto"/>
                <div>
                    <h4 className="mb-1 bebas-neue text-2xl font-bold">{food.name}</h4>
                    <h6 className="inter text-base font-normal">{food.description}</h6>
                </div>
            </div>
        );
    };

    return (
        <div className="md:px-[15%] px-[30px] py-8 lg:py-[120px] bg-[#FBF7F2]">
            <div>
                <div>
                    <span className="roboto text-xl font-bold text-[#BD1F17] flex items-center gap-2"> <FaSquareFull className="text-xs"/>Crispy, Every Bite Taste</span>
                    <h2 className="bebas-neue text-4xl lg:text-6xl font-bold pt-2 lg:pt-4">
                    POPULAR FOOD ITEMS
                    </h2>
                </div>
                <div></div>
            </div>
            {/* card carousel */}
            <div className="card">
                <Carousel 
                value={foods} 
                numVisible={4} 
                numScroll={4} 
                responsiveOptions={responsiveOptions} 
                orientation="horizontal"
                autoplayInterval={3000}
                itemTemplate={productTemplate} />
            </div>
        </div>
    );
};

export default Foods;