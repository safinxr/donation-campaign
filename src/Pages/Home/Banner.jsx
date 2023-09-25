import { useState } from "react";

export default function Banner() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div className="h-[400px] lg:h-[600px] flex flex-col justify-center items-center mt-[-98px] bg-[url('https://i.ibb.co/nQKCNtf/banner-bg.jpg')] bg-fixed bg-repeat bg-white bg-blend-overlay bg-opacity-90">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-12">I Grow By Helping People In Need</h1>
                <div className="flex justify-center items-center">
                    <input className="border-2 rounded-lg py-1 md:py-[0.625rem] px-4 w-64 md:w-96 "
                     onChange={handleInputChange} 
                     type="text" 
                     placeholder="Search here...." />

                    <button className="bg-[#FF444A] text-white px-5 py-1.5 md:py-3 rounded-r-lg ms-[-6px]">Search</button>
                </div>
        </div>
    )
};
