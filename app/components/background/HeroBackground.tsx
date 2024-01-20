import React from "react";

const HeroBackground: React.FC = () => {
    return (
        // <div className="absolute inset-0">
            
        //     <video className="h-full w-full object-cover" autoPlay={true} playsInline={true} loop muted preload="auto">
        //         <source src="/hero.webm" type="video/webm" />

        //     </video>
            
        //     <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
        // </div>

        <div className="absolute inset-0">
            {/* Replace the video with an image */}
            <img src="/hero.jpg" alt="Hero Image" className="h-full w-full object-cover" />
            
            {/* Overlay with gradient */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent" />
        </div>
    );
};

export default HeroBackground;
