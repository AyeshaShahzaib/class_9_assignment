// export default function HeroSection(){
//     return(
//         <div className="flex h-screen">
//             <div className="h-full w-1/2 flex flex-col items-left   ">
//                <div className="py-52 px-10">
//                <h1 className="py-5 text-4xl font-bold text-[#0A3179]">Shape Your Future with MyEduSpace</h1>
//                 <h1 className="py-5 text-xl text-[#505050ce]">Explore innovative projects, unlock career opportunities, and connect with a thriving educational community.</h1>
//                 <div className="py-5 text-lg"><button className="py-3 px-4 bg-[#0A3179] rounded-md text-white">Explore Now</button></div>
//                 </div>
//             </div>
//             <div className="h-full w-1/2 flex justify-center items-center "><img src="HeroSection.svg" alt="Image" className="h-[70%] w-[70%]"/></div>
//         </div>
//     )
// }

export default function HeroSection() {
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            
            <div className="h-full w-full lg:w-1/2 flex flex-col items-start justify-center px-6 lg:px-10">
                <div className="py-10 lg:py-52">
                    <h1 className="py-5 text-3xl lg:text-4xl font-bold text-[#0A3179]">
                        Shape Your Future with MyEduSpace
                    </h1>
                    <h2 className="py-5 text-lg lg:text-xl text-[#505050ce]">
                        Explore innovative projects, unlock career opportunities, and connect with a thriving educational community.
                    </h2>
                    <div className="py-5">
                        <button className="py-3 px-4 bg-[#0A3179] rounded-md text-white hover:bg-[#062456] transition">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="h-1/2 lg:h-full w-full lg:w-1/2 flex justify-center items-center">
                <img src="HeroSection.svg" alt="Hero Image" className="h-[50%] w-[50%] lg:h-[70%] lg:w-[70%]" />
            </div>
        </div>
    );
}