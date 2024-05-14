import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Submit from "./pages/Submit";
import Menu from "./pages/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
    const [isClicked, setIsClicked] = useState(false);

    const handleLinkClick = () => {
        setIsClicked(false);
    };

    return (
        <div>
            <Router>
                <Header isClicked={isClicked} setIsClicked={setIsClicked} />
                {isClicked ? (
                    <div className="flexl flex-col bg-black">
                        <div className="flex flex-col">
                            <div className="flex bg-black h-[80px] w-full"></div>
                            <div className="flex flex-col pt-[100px] pb-[400px] w-full bg-[#222222] items-center gap-5">
                                <Link
                                    to="/"
                                    className="text-white text-5xl font-normal leading-57.6"
                                    onClick={handleLinkClick}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className="text-white text-5xl font-normal leading-57.6"
                                    onClick={handleLinkClick}
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="/contact"
                                    className="text-white text-5xl font-normal leading-57.6"
                                    onClick={handleLinkClick}
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    to="/submit"
                                    className="text-white text-5xl font-normal leading-57.6"
                                    onClick={handleLinkClick}
                                >
                                    Submissions
                                </Link>
                            </div>
                        </div>
                        <Footer />
                    </div>
                ) : (
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/submit" element={<Submit />} />
                        <Route path="/menu" element={<Menu />} />
                    </Routes>
                )}
            </Router>
        </div>
    );
}