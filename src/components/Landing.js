import React from "react";

const prices = [
    { price: "600K+", description: "Total Followers" },
    { price: "200K+", description: "Average Story Views" },
    { price: "20M+", description: "Views a week" },
    { price: "2B+", description: "Impressions in 2024" },
    { price: "13.7%", description: "Engagement Rate" },
];
const Landing = () => {
    return (
        <>
            <div className="flex w-full flex-col relative pt-[80px] md:bg-[url('./images/Heading.svg')] bg-no-repeat h-screen bg-cover bg-center bg-black">
                <div className="flex flex-col md:pt-[239px] pt-[80px] md:pr-[127px] md:pb-[127px] md:pl-[126px] px-[16px]">
                    <div className="flex flex-col items-center mb-16">
                        <div class="md:text-[40px] text-white text-4xl font-normal">
                            THE HOME OF
                        </div>
                        <div class="flex flex-col items-center px-[]">
                            <div class="">
                                <div class="md:text-7xl text-white text-4xl font-black italic">
                                    GOAL
                                    <span class="text-[#3333FF] font-extrabold">
                                        KEEPERS
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center md:text-[25px] text-[13px] text-white md:font-light font-bold">
                            The Largest GoalKeeper Community on Planet.
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-[5px]">
                        <div>
                            <button className="flex px-4 py-2.5 items-center border border-white rounded-lg text-white bg-[#1E1E1E]">
                                CONTACT US
                            </button>
                        </div>
                        <div>
                            <button className="flex px-4 py-2.5 items-center border border-white rounded-lg text-white bg-[#1E1E1E]">
                                SUBMIT CONTENT
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col w-full justify-between md:px-[50px] md:pt-[50px]">
                    {prices.map((item, index) => (
                        <div
                            key={index}
                            class="flex flex-col w-full items-center text-white md:px-[30px] md:py-[20px] px-[20px] py-[10px]"
                        >
                            <div class="flex md:text-5xl text-4xl font-semibold">
                                {item.price}
                            </div>
                            <div class="flex md:text-xl text-base font-normal">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex h-[160px] bg-[#000000]"></div>
            </div>
        </>
    );
};

export default Landing;
