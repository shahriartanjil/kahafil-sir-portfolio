import React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function FooterSection() {
    return (
        <footer className="bg-white text-gray-700 pt-20 border-t">
            {/* Big name */}
            <div >
                <h1 className="w-full text-[15vw] md:text-[10vw] font-extrabold text-center leading-none mb-10">
                    KAHAFIL ORA
                </h1>

            </div>

            {/* Main footer grid */}
            <div className="max-w-full text-center  grid sm:grid-cols-1 md:grid-cols-4 gap-8 text-sm ">
                {/* Contact */}
                <div className="space-y-2">
                    <p>kahafil@goinnovior.com</p>
                    <p>+880 1622-992222</p>
                </div>

                {/* Companies */}
                <div className="space-y-2">
                    <p>Goinnovior Limited</p>
                    <p>360d Soul Limited</p>
                    <p>Codeinnovior</p>
                    <p>LifeInnovior</p>
                </div>

                {/* Address */}
                <div className="space-y-2">
                    <p>Lift 4, House 774, Road 11, Avenue</p>
                    <p>Mirpur DOHS</p>
                    <p>Dhaka 1216</p>
                    <p>Bangladesh</p>
                </div>

                {/* Socials */}
                <div className="space-y-2">
                    <p>X</p>
                    <p>LinkedIn</p>
                    <p>YouTube</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-gray-100 text-xs py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-2">
                <p>Copyright © 2025 Shahrair</p>
                <p>Privacy & Policy</p>
                <p>Terms & Conditions</p>
                <a href="#" className="p-2">
                    <FaArrowUp />
                </a>
            </div>
        </footer>
    );
}
