import { spaceGrotesk } from "../fonts/spaceGrotesk";
import { motion } from "framer-motion";

import Link from "next/link";
import Container from "../components/container/Container";


import Logo from "../components/svg/Logo";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-60">
                <div
                    className={`relative flex flex-col items-center justify-center ${spaceGrotesk.className} pointer-events-none`}
                >
                    <Logo width={180} height={180} />
                    <h1 className="text-3.5xl font-bold text-white mt-4">Le Belle Cafe & Resto</h1>

                    
                    <p className="text-lg text-white mt-2">
                        View the 
                        <a href="https://example.com">Website</a>
                        {/* <Link href="/History">
                        
                        <a data-blobity-magnetic="false">
                            <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                            HISTORY
                            </h4>
                        </a>
                        </Link> */}

                     of our shop.</p>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
