import { ReactTyped } from "react-typed";
import Logo from './assets/SimplyChicLogo.png';

function Hero() {
    return (
        <div className="w-full text-black py-32 px-8">
                                     {/* mt-[-96px] */}
                                     {/* max-w-[1000px] w-full h-screen mx-auto text-center flex flex-row justify-between items-center */}
            <div className="max-w-[1240px] mx-auto gap-10 grid md:grid-cols-2">
                {/* <div className="max-w-[500px]"> */}
                    <div className="flex flex-row justify-center md:justify-start">
                        <img src={Logo} className="rounded-full w-9/12 hover:shadow-2xl"></img>
                    </div>
                {/* </div> */}
                {/* className="max-w-[1000px]" */}
                <div className="flex flex-col justify-center">
                    <div className="flex flex-row justify-center md:justify-start">
                        <p className="md:text-5xl sm:text-4xl text-xl font-bold">Feel beautiful with</p>
                    </div>
                    <div className="flex flex-row justify-center md:justify-start">
                        <ReactTyped className="md:text-3xl sm:text-2xl text-xl font-bold ml-1" strings={['eyelash extensions', 'hair extensions', 'botox', 'body contouring']} typeSpeed={80} backSpeed={30} loop></ReactTyped>
                    </div>
                    <div className="flex flex-row justify-center md:justify-start">
                        <a href="#book_appointment" className="bg-pink-500 w-60 mx-2 my-6 py-3 rounded-lg text-center font-bold text-xl hover:shadow-xl hover:bg-pink-400 transition-all duration-200 scroll-smooth">Book Appointment</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;
