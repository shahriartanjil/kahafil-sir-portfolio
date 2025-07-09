import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="relative min-h-screen w-full  bg-[#EFEAE4] text-gray-800 font-sans overflow-hidden">

            {/* Mobile Navigation Toggle */}
            <button
                className="md:hidden fixed top-4 right-4 z-50 p-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Navigation - Desktop */}
            <div className="hidden md:flex absolute top-4 left-0 w-full z-40 items-center justify-between px-8 text-sm uppercase font-medium text-gray-900">
                <div className="flex space-x-24 gap-96">
                    <a href="#" className="hover:text-purple-600 transition-colors">WORK</a>
                    <a href="#" className="hover:text-purple-600 transition-colors">ABOUT</a>
                    <a href="#" className="hover:text-purple-600 transition-colors">THOUGHTS</a>
                </div>
                <div className="flex items-center">
                    <div className='mr-4'>
                        <a href="#" className="hover:text-purple-600 transition-colors">MAIL</a>
                    </div>
                    <div className="flex space-x-4 ml-4">
                        <a href="#" className="hover:text-purple-600 transition-colors">X</a>
                        <a href="#" className="hover:text-purple-600 transition-colors">FB</a>
                        <a href="#" className="hover:text-purple-600 transition-colors">LI</a>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden fixed inset-0 z-40 bg-[#EFEAE4] transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full justify-center items-center  space-y-8 text-xl">
                    <a href="#" className="hover:text-purple-600 transition-colors " onClick={() => setIsOpen(false)}>WORK</a>
                    <a href="#" className="hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>ABOUT</a>
                    <a href="#" className="hover:text-purple-600 transition-colors" onClick={() => setIsOpen(false)}>THOUGHTS</a>
                    <div className="flex space-x-6 mt-8">
                        <a href="#" className="hover:text-purple-600 transition-colors">X</a>
                        <a href="#" className="hover:text-purple-600 transition-colors">FB</a>
                        <a href="#" className="hover:text-purple-600 transition-colors">LI</a>
                    </div>
                </div>
            </div>


            <div className="relative w-full min-h-screen bg-gray-100 overflow-hidden">
                {/* Hero Image */}
                <h1
                        className=" mt-6 lg:hidden   text-[10vw] md:text-[6vw] font-black uppercase leading-none tracking-tight text-gray-900 z-30"
  
                    >
                        KAHAFIL
                    </h1>
                <div className="absolute top-16 md:top-[60px] left-1/2 transform -translate-x-1/2 w-[280px] h-[240px] md:w-[434px] md:h-[371px]  xl:w-[920px] xl:h-[780px]">
                    <img
                        src="https://i.postimg.cc/5tyRM1Gv/Clipped-image-20250520-120412-2.png"
                        alt="Kahafil"
                        className="lg:w-[865px] lg:h-[800px] object-cover rounded saturate-0 hover:saturate-100  "
                    />
                </div>

                {/* ORA Text */}
                <p className="absolute bottom-0  right-4 text-[80px] md:text-[120px] lg:text-[150px] font-bold leading-none tracking-normal  text-gray-900  pb-8">
                    ORA
                </p>

                {/* Left Section - Name, Year, Portfolio */}
                <div className="absolute top-24  left-4 md:left-8 z-30 text-left">
                    <h1
                        className=" md:top-[220px] hidden md:block text-[10vw] md:text-[6vw] font-black uppercase leading-none tracking-tight text-gray-900 z-30"
  
                    >
                        KAHAFIL
                    </h1>

                    <p className="hidden md:block max-w-md text-[4vw] md:text-[2vw] font-semibold text-gray-700 tracking-wide">
                        2K25
                    </p>
                    <div className="mt-4 md:mt-8 border-l-2 border-purple-600 pl-4 py-2">
                        <a
                            href="#"
                            className="hidden md:block text-sm md:text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors"
                        >
                            / PORTFOLIO
                        </a>
                    </div>
                </div>
 
                {/* Biography - Mobile */}
                <div className="md:hidden absolute top-[320px] left-4 right-4 text-right z-30 ">
                    <p className="text-xs uppercase font-bold text-gray-600 mb-2">Biography</p>
                    <p className="text-sm leading-relaxed text-gray-800">
                        A Visionary Leader With 22+ Years of Experience In Innovation And Growth. As MD Of Goinnovior Limited And Co-Founder Of 360D Soul, Lifeinnovior, And Codeinnovior, He Blends Tech, Business, And Social Impact—Delivering ICT And InfoSec Solutions, Promoting Mental Health, And Enabling Free Tech Education.
                    </p>
                </div>

                {/* Biography - Desktop */}
                <div className="hidden md:block absolute top-[120px] right-8  text-right w-[280px] lg:w-[800px]">
                    <p className="text-xs uppercase font-bold text-gray-600 mb-2">Biography</p>
                    <p className="text-sm leading-relaxed text-gray-800">
                        A Visionary Leader With 22+ Years of Experience In Innovation And Growth. As MD Of Goinnovior Limited And Co-Founder Of 360D Soul, Lifeinnovior, And Codeinnovior, He Blends Tech, Business, And Social Impact—Delivering ICT And InfoSec Solutions, Promoting Mental Health, And Enabling Free Tech Education.
                    </p>
                </div>

                {/* IT Consultant Label - Desktop */}
                <div className="hidden md:flex absolute top-[56%] left-[calc(50%-350px)] transform -translate-y-1/2 z-30 font-mono text-[13px] tracking-tight flex-col items-start">
                    <p className="mb-1 text-gray-600">IT CONSULTANT</p>
                    <span className="text-2xl">↷</span>
                </div>

                {/* IT Consultant Label - Mobile */}
                <div className="md:hidden absolute top-[250px] left-4 z-30 font-mono text-xs text-gray-600">
                    <p>IT CONSULTANT</p>
                    <span className="text-xl">↷</span>
                </div>

                {/* Scroll Down Prompt */}
                <div className="absolute bottom-8 left-4 md:left-8 text-gray-600 z-30">
                    <p className="text-sm uppercase font-medium mb-1">Scroll Down</p>
                    <span className="text-xl">↓</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;