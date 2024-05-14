import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const contact = [
    {
        name: "Full Name",
        description: "Input your Full Name"
    },
    {
        name: "Company Name",
        description: "Input your Company Name"
    },
    {
        name: "Email Address",
        description: "Input your Email Address"
    },
    {
        name: "What area best fits you?",
        description: "Select Project Type"
    },
    {
        name: "Budget",
        description: "Input Your budget"
    },
];

const ContactForm = () => {
    const [isClicked, setIsClicked] = useState(false);
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

    return (
        <>
            <div className="flex flex-col w-full relative bg-[url('./images/Contactus.svg')] bg-no-repeat bg-cover bg-center md:bg-none pt-[80px]">
                <div className="flex flex-col md:bg-[url('./images/Contact.svg')] bg-no-repeat bg-cover bg-center bg-none mt-[-80px] md:pt-[240px] md:brightness-75">         
                    <div class="flex flex-col justify-center md:px-[100px] md:py-[150px] pt-[150px]">
                        <div class="flex lg:justify-start lg:items-center justify-center text-[40px] lg:text-9xl font-bold text-white">CONTACT US.</div>
                        <div class="hidden lg:block lg:text-[30px] font-bold text-white">Welcome to the Goalkeeper Family. If you're looking to engage with a vast audience of soccer enthusiasts, you're in the right place. With millions of users engaging with our content every week, partnering with us offers a unique opportunity to amplify your brand's reach and impact within the soccer community.</div>
                    </div>
                </div>    
                <div className="flex flex-col md:bg-[#222222] bg-transparent md:px-[196px] md:pt-[44px] md:mt-[-20px] px-[50px] pt-[80px] gap-3">
                    <div className="flex flex-col w-full md:bg-[#222222] bg-transparent gap-[36px]">
                        {contact.map((field, index) => (
                            <div key={index}>
                                <label class="text-white text-2xl font-bold">{field.name}</label>
                                <input
                                    type="text"
                                    name={field.name}
                                    value={values[field.name]}
                                    onChange={handleChange}
                                    className="mt-1 block w-full h-[67.5px] px-4 md:bg-[#222222] bg-transparent border md:border-gray-500 border-white shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-white"
                                />
                            </div>
                        ))}
                        <div className="flex flex-col">
                            <div class="text-white text-2xl font-bold">Message</div>
                            <textarea
                                name="message"
                                value={values.message || ''}
                                onChange={(e) => setValues({...values, message: e.target.value})}
                                className="w-full h-[250px] p-2 border border-gray-300 md:bg-[#222222] bg-transparent focus:outline-none focus:border-indigo-300"
                                placeholder="Write your message..."
                            ></textarea>
                        
                        </div>
                        <button
                        type="submit"
                        className="bg-[#3333FF] hover:bg-indigo-700 text-white font-medium p-[10px] focus:outline-none focus:shadow-outline"
                        >
                        Send Message
                        </button>
                        <Footer />
                        </div>
                    </div>
                </div>
            </>
    );
};

export default ContactForm;