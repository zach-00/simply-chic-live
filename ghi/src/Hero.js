import { ReactTyped } from "react-typed";
import Logo from './assets/SimplyChicLogo.png';

function Hero() {
    return (
        <div className="w-full text-black py-32 px-8">
                                     {/* mt-[-96px] */}
                                     {/* max-w-[1000px] w-full h-screen mx-auto text-center flex flex-row justify-between items-center */}
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                {/* <div className="max-w-[500px]"> */}
                    <img src={Logo} className="rounded-full w-9/12 hover:shadow-2xl"></img>
                {/* </div> */}
                {/* className="max-w-[1000px]" */}
                <div className="flex flex-col justify-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">Feel beautiful with</p>
                    <ReactTyped className="md:text-3xl sm:text-2xl text-xl font-bold" strings={['eyelash extensions', 'hair extensions', 'botox']} typeSpeed={80} backSpeed={30} loop></ReactTyped>
                    <button className="bg-pink-500 w-60 mx-2 my-6 py-3 rounded-lg font-bold text-xl hover:shadow-xl hover:bg-pink-400 transition-all duration-200">Book Appointment</button>
                </div>
            </div>

        </div>
    );
}

export default Hero;
