
// export default function Header(){
//     return(
//             <div className="flex justify-around items-center h-20 b ">
//             <div><img src="MyEduSpace.svg" alt="Logo" className="h-[70%] w-[70%]"/></div>
//             <div className="flex justify-around w-1/3 items-end">
//                 <h1>Projects</h1>
//                 <h1>Career</h1>
//                 <h1>About</h1>
//                 <h1>Contact</h1>
//             </div>
//             <div><button className="py-3 px-7 bg-[#0A3179] rounded-lg text-white">Login</button></div>
//             </div>
            
    
//     )
// }
"use client"; // Mark this component as a client component

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center h-20 px-5 lg:px-10 bg-white shadow-md">
            {/* Logo */}
            <div>
                <Image
                    src="MyEduSpace.svg"
                    alt="Logo"
                    width={120}
                    height={80}
                    className="cursor-pointer"
                />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex justify-around w-1/3 items-center">
    <Link href="#projects" className="hover:text-[#0A3179] cursor-pointer">
        Projects
    </Link>
    <Link href="#career" className="hover:text-[#0A3179] cursor-pointer">
        Career
    </Link>
    <Link href="#about" className="hover:text-[#0A3179] cursor-pointer">
        About
    </Link>
    <Link href="#contact" className="hover:text-[#0A3179] cursor-pointer">
        Contact
    </Link>
</nav>

            {/* Desktop Login Button */}
            <div className="hidden lg:block">
                <button className="py-3 px-7 bg-[#0A3179] rounded-lg text-white hover:bg-[#062456] transition">
                    Login
                </button>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div
                className="block lg:hidden cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8 text-[#0A3179]"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
    <nav className="absolute top-20 right-5 bg-white shadow-md rounded-lg p-5 space-y-4 z-10 w-2/3">
        <Link href="#projects" className="block hover:text-[#0A3179] cursor-pointer">
            Projects
        </Link>
        <Link href="#career" className="block hover:text-[#0A3179] cursor-pointer">
            Career
        </Link>
        <Link href="#about" className="block hover:text-[#0A3179] cursor-pointer">
            About
        </Link>
        <Link href="#contact" className="block hover:text-[#0A3179] cursor-pointer">
            Contact
        </Link>
        <button className="py-2 px-5 bg-[#0A3179] rounded-lg text-white hover:bg-[#062456] transition">
            Login
        </button>
                </nav>
            )}
        </header>
    );
}

// import React, { useState } from "react";
// import Link from "next/link";

// export default function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <header className="flex justify-between items-center h-20 px-5 bg-gray-100">
//             {/* Logo */}
//             <div>
//                 <img src="MyEduSpace.svg" alt="Logo" className="h-[70%] w-[70%]" />
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex justify-around w-1/3 items-center">
//                 <Link href="#projects" className="hover:text-[#0A3179]">
//                     Projects
//                 </Link>
//                 <Link href="#career" className="hover:text-[#0A3179]">
//                     Career
//                 </Link>
//                 <Link href="#about" className="hover:text-[#0A3179]">
//                     About
//                 </Link>
//                 <Link href="#contact" className="hover:text-[#0A3179]">
//                     Contact
//                 </Link>
//             </nav>

//             {/* Mobile Menu Icon */}
//             <div
//                 className="block lg:hidden cursor-pointer"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-8 w-8 text-[#0A3179]"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4 6h16M4 12h16m-7 6h7"
//                     />
//                 </svg>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <nav className="absolute top-20 right-0 bg-white w-full shadow-md p-5 flex flex-col items-center lg:hidden">
//                     <Link href="#projects" className="py-2 hover:text-[#0A3179]">
//                         Projects
//                     </Link>
//                     <Link href="#career" className="py-2 hover:text-[#0A3179]">
//                         Career
//                     </Link>
//                     <Link href="#about" className="py-2 hover:text-[#0A3179]">
//                         About
//                     </Link>
//                     <Link href="#contact" className="py-2 hover:text-[#0A3179]">
//                         Contact
//                     </Link>
//                 </nav>
//             )}
//         </header>
//     );
// }