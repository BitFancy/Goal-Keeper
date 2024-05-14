import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Menu = () => {

    return (
        <>
            <Header/>
            <div className="flex flex-col relative">
                <div className="flex bg-black h-[80px] w-full"></div>
                <div className="flex flex-col pt-[100px] pb-[400px] w-full bg-[#222222] items-center gap-5">
                    <div class="text-white text-5xl font-normal leading-57.6">Home</div>
                    <div class="text-white text-5xl font-normal leading-57.6">About Us</div>
                    <div class="text-white text-5xl font-normal leading-57.6">Contact Us</div>
                    <div class="text-white text-5xl font-normal leading-57.6">Submissions</div>
                </div>
            </div>
            <div class="flex flex-col bg-black">
                <Footer/>
            </div>
        </>
    )
};

export default Menu;