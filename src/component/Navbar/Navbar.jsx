import React from "react";

export default function Navbar() {
    return (
        <div className="min-h-screen bg-gray-100 text-black font-sans relative overflow-hidden">
            {/* Nav */}
            <nav className="flex justify-between items-center px-8 py-4 uppercase text-xs tracking-widest">
                <div className="flex gap-44">
                    <a href="#" className="hover:underline">Work</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Thoughts</a>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:underline">Mail</a>
                    <a href="#" className="hover:underline">X</a>
                    <a href="#" className="hover:underline">FB</a>
                    <a href="#" className="hover:underline">LI</a>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 lg:py-32">
                {/* Left Text */}
                <div className="flex flex-col space-y-2">
                    <h1 className="text-7xl lg:text-8xl font-bold">KAHAFIL</h1>
                    <span className="text-lg font-semibold">2K25</span>

                    <div className="mt-20 flex flex-col items-center gap-2">
                        <span className="text-xs tracking-widest uppercase rotate-90 origin-left">/Portfolio</span>
                        <span className="text-xs uppercase">Scroll Down</span>
                        <span className="text-xl">↓</span>
                    </div>
                </div>

                {/* Center Image and IT Consultant Label */}
                <div className="relative lg:mt-0 mt-[62px]  ">
                    <img
                        src="https://i.postimg.cc/5tyRM1Gv/Clipped-image-20250520-120412-2.png"
                        alt="Kahafil"
                        style={{
                            filter: 'grayscale(0%)',
                            transition: 'filter 0.3s ease',
                            ':hover': {
                                filter: 'grayscale(100%)'
                            }
                        }}
                        className="w-[1038px] h-[700px] max-w-md object-cover rounded "
                    />
                    <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2">
                        <div className="flex items-center gap-2">
                            <span className="text-xs uppercase">IT Consultant</span>
                            <span className="text-2xl">↷</span>
                        </div>
                    </div>
                </div>

                {/* Right Biography */}
                <div className="mt-12 lg:mt-0 max-w-md text-sm leading-relaxed">
                    <h2 className="uppercase tracking-widest text-xs mb-2">Biography</h2>
                    <p>
                        A visionary leader with 22+ years of experience in innovation and growth.
                        As MD of Goinnovior Limited and co-founder of Soul Soul, Lifeinnovior, and Codeinnovior,
                        he blends tech, business, and social impact—delivering ICT and InfoSec solutions,
                        promoting mental health, and enabling free tech education.
                    </p>
                    <div className="text-7xl lg:text-8xl font-bold mt-8">ORA</div>
                </div>
            </div>
        </div>
    );
}
