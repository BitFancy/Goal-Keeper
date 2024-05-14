import React, { useRef, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const contact = [
    {
        name: "Full Name",
        description: "Input your Full Name"
    },
    {
        name: "Email Address",
        description: "Input your Email Address"
    },
    {
        name: "Phone Number",
        description: "Input your Phone Number"
    },
    {
        name: "Instagram Handle (example: “@goalkeepers”)",
        description: "Input your Instagram handle"
    },
];

const Submit = () => {
    // Initialize state with the initial values from the contact array
    const [values, setValues] = useState(contact.reduce((acc, { name, description }) => {
        acc[name] = description;
        return acc;
    }, {}));

    // Function to handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({...values, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log(values);
    };
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);
    const [files, setFiles] = useState([]);

    const handleDragEnter = () => {
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        const files = e.dataTransfer.files;
        setFiles([...files]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleFileChange = (e) => {
        setFiles([...e.target.files]);
    };

    return (
        <> 
            <div className="flex flex-col w-full bg-[#222222] bg-no-repeat bg-cover bg-center pt-[80px]">      
                <div class="flex flex-col items-center lg:pl-[90px] lg:pr-[145px] lg:py-[70px] px-[68px] py-[30px] gap-6">
                    <div class="lg:text-8xl text-[40px] font-bold text-white">Submit your <span class="text-white lg:text-[#3333FF]">Content</span></div>
                    <div class="hidden lg:block lg:text-2xl font-bold text-white">Want to be featured on our Social Media Platforms? We'd love to see what you've got!
                        Here at Goalkeepers Media, we're all about celebrating the passion and creativity of football fans like you. We want to showcase your content to our community of fellow soccer enthusiasts.</div>
                </div>
            </div>
            <div className="flex flex-col md:px-[196px] md:pt-[44px] px-[30px] bg-[#222222]">
                <div className='flex flex-col w-full gap-[36px]'>
                    {contact.map((field, index) => (
                        <div key={index}>
                            <label className='text-white text-2xl font-bold'>{field.name}</label>
                            <input
                                type="text"
                                name={field.name}
                                value={values[field.name]}
                                onChange={handleChange}
                                className="mt-1 block w-full h-[67.5px] text-white px-4 bg-[#222222] border border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    ))}
                    <div className="mb-4">
                        <div class="text-white text-2xl font-bold">Message</div>
                        <textarea
                            name="message"
                            value={values.message || ''}
                            onChange={(e) => setValues({...values, message: e.target.value})}
                            className="w-full h-[250px] p-2 bg-[#222222] border border-gray-300 focus:outline-none focus:border-indigo-300"
                            placeholder="Your message..."
                        ></textarea>
                    </div>
                    <form
                        className={`${
                        dragActive? "bg-blue-400" : "bg-[#6B6B6B]"
                        } p-4 w-full min-h-[10rem] text-center flex flex-col items-center justify-center`}
                        onDragEnter={handleDragEnter}
                        onSubmit={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                    >
                    <input
                        ref={inputRef}
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        multiple
                    />
                    <div class="text-[#CCCCCC] text-2xl font-bold">Drag and drop your files here. Or
                    </div>
                    <button
                        type="button"
                        onClick={() => inputRef.current.click()}
                        className="bg-[#6B6B6B] text-[#CCCCCC] font-bold text-2xl"
                    >
                    Select a File
                    </button>
                    <ul>
                    {files.map((file, index) => (
                        <li key={index}>{file.name}</li>
                    ))}
                    </ul>
                    </form>
                    <div className='flex p-[20px] bg-[#333333]'>
                        <div class="text-white font-bold text-base">By clicking ‘I Accept’ below, I accept the terms set out in the Content Assignment Agreement and hereby irrevocably assign to Goalkeepers Media absolutely and with full title guarantee, all intellectual property rights and interest and all other rights in and to the Content (regardless of the format such Content is submitted in by me). Furthermore, I hereby confirm and agree that from the date I accept these terms and conditions and those further specified in the Content Assignment Agreement, Goalkeepers Media shall be exclusively entitled to exploit the Content in any manner or context, throughout the world, on any and all media whether now known or hereafter invented and in perpetuity. I also confirm that any third party or person who is featured in the Content has agreed to such terms and conditions.</div>
                    </div>
                    <div className='flex flex-col px-[25px] py-[20px] gap-[30px]'>
                        <div class="text-white text-base font-bold">Required*</div>
                        <div class="flex justify-between gap-[10px]">
                            <input
                                type="checkbox"
                                id="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <div className="text-white text-base font-bold">I am the sole rights holder of the Content, I am over 18 years old and I accept the above Terms & Conditions OR I am the parent or legal guardian of the sole rights holder of the Content who is under 18 years old and I accept the above Terms & Conditions on the right’s holder’s behalf as agent or attorney, as if I was the rights holder for these purposes.</div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#3333FF] hover:bg-indigo-700 text-white font-medium p-[10px] focus:outline-none focus:shadow-outline"
                    >
                        Write yoru message
                    </button>
                <Footer />
                </div>
            </div>
        </>
    );
};

export default Submit;