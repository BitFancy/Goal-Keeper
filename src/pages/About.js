import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = ({ isClicked }) => {
    if (isClicked) {
        return null; // Return null to hide the content
      }

    const person = [
        {
            Image:'CEO.svg',
            icon1:'LinkedIn.svg',
            icon2:'Instagram.svg',
            name: 'Jack Feuer',
            description: 'Founder & CEO'
        },
        { 
            Image:'Founder.svg',
            icon1:'LinkedIn.svg',
            icon2:'Instagram.svg',
            name: 'Eli Feuer',
            description:'Founder & COO'
        },
        { 
            Image:'HOM.svg',
            icon1:'LinkedIn.svg',
            icon2:'Instagram.svg',
            name: 'Ian Blossman',
            description: 'Head Of Media'
        },
    ];

    return (
        <>
            <div className="flex flex-col w-full pt-[80px] bg-black">
                <div class="flex flex-col lg:px-[90px] lg:py-[60px] py-[30px] justify-center">
                    <div class="lg:text-9xl hidden lg:block font-bold text-white leading-[156px]">ABOUT US.</div>
                    <div class="flex lg:text-3xl text-4xl lg:justify-start justify-center font-bold text-white leading-[39px]">Meet the Team.</div>
                </div>
            </div>
            <div className="flex flex-col bg-[#222222]">
                <div className="grid grid-cols-1 md:grid-cols-2 md:px-25 lg:px-36 px-5 py-[83px] md:gap-15 lg:gap-[83px] flex-wrap gap-4">
                    {person.map((p, index) => (
                        <div key={index}>
                            <div className="flex relative">
                                <img src={p.Image} class="w-full"/>
                                <div class="flex w-full justify-between absolute bottom-0 left-0 md:px-6 md:py-5 px-3">
                                    <div class="flex flex-col mb-5 items-end">
                                        <div class="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{p.name}</div>
                                        <div class="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">{p.description}</div>
                                    </div>
                                    <div class="flex flex-row gap-x-4">
                                        <img src={p.icon1} />
                                        <img src={p.icon2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default About;