import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from '../images/logo.svg'

const Header = ({isClicked, setIsClicked}) => {

    // const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <>
            <header className="flex flex-row w-full bg-transparent pr-[26px] pl-[40px] absolute z-10 border-b border-white border-opacity-50">
                <div className="flex flex-row w-full justify-between items-center">
                    <div className="flex items-center">
                        <Logo />
                    </div>
                    <div className="md:flex items-center justify-between gap-[229px] hidden  text-white text-lg font-bold">
                        <div class="flex flex-row justify-between gap-9 ">
                            <Link to = "/">
                                <button class="flex bg-transparent hover:bg-[#3333FF] px-[18.5px] py-[11.5px] items-center border-1 border-[#3333FF] rounded-md">Home</button>
                            </Link>
                            <Link to = "/about">
                                <button class="flex bg-transparent hover:bg-[#3333FF] px-[18.5px] py-[11.5px] items-center rounded-md text-white">About Us</button>
                            </Link>
                        </div>
                        <div class="flex">
                            <Link to = "/contact">
                                <button class="flex bg-transparent hover:bg-[#3333FF] px-[18.5px] py-[11.5px] items-center border-1 border-blue-500 rounded-md text-white">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center  text-white text-lg font-bold">
                        <Link to="/submit">
                        <button class="flex bg-[#3333FF] px-[18.5px] py-[11.5px] items-center border-1 border-[#3333FF] rounded-md text-white">Submit Your Content</button>
                        </Link>
                    </div>
                    <div class="md:hidden dropdown relative inline-flex">
                        
                        {
                            isClicked? 
                                <button type="button" class="dropdown-toggle inline-flex  gap-2 rounded-full cursor-pointer shadow-xs transition-all"
                                    onClick={handleClick}
                                >
                                <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 0.5L26.5 19.5M25.5 0.5L1 19.5" stroke="white"/>
                                </svg>

                                </button>
                            :
                            
                                <button type="button" class="dropdown-toggle inline-flex  gap-2 rounded-full cursor-pointer shadow-xs transition-all"
                                        onClick={handleClick}
                                >
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 5.5H21.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M3.5 12.5H21.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M3.5 19.5H21.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            
                        }    
                    </div>
                </div>
            </header>
       </>
        
    )
};

export default Header;