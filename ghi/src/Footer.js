import Logo from './assets/SimplyChicLogo.png';
import { FaGitlab } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { RiTiktokLine } from "react-icons/ri";



function Footer() {
    return (
        <footer className="bg-slate-300 border-2 border-black dark:bg-gray-900 relative bottom-0">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center">
                        <img src={Logo} className="h-12 me-3" alt="/" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Simply Chic.</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 items-center align-middle sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm mt-4 font-semibold text-gray-900 uppercase dark:text-white">Socials</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4 w-8 hover:text-pink-500">
                                <a href="https://www.instagram.com/simply_chic_lash/?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"><FiInstagram className="h-8 w-8 ml-4" /></a>
                            </li>
                            <li className="hover:text-blue-600 w-8">
                                <a href="https://www.tiktok.com/@simplychiclash?_t=8l0pulBqylf&_r=1" className="hover:underline"><RiTiktokLine className="h-8 w-8 ml-4" /></a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                                                        {/* sm:justify-between */}
            <div className="flex sm:flex items-center justify-center sm:items-center sm:justify-center">
                <div className="flex flex-col gap-3">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Created by - <a href="https://zacharywalkowiak.netlify.app/" className="hover:underline">Zach Walkowiak</a>
                </span>
                <div className="flex items-center justify-center mt-4 sm:justify-center sm:mt-0">

                    <a href="https://github.com/zach-00" className="text-gray-500 hover:text-gray-900 dark:hover:text-white mx-3">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                        </svg>
                        <span className="sr-only">GitHub account</span>
                    </a>

                    <a href="https://gitlab.com/zach-00" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <FaGitlab className="mx-3 w-6 h-6" />
                    </a>

                    <a href="https://www.linkedin.com/in/zacharywalkowiak/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <FaLinkedin className="mx-3 w-7 h-7"/>
                    </a>

                </div>
            </div>
            </div>
            </div>
        </footer>





    );
}

export default Footer;
