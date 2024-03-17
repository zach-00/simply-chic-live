import useDarkMode from "./useDarkMode";
import { FaSun, FaMoon } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');


const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode}>
        {darkTheme ? (
            <FaSun size='24' className='top-navigation-icon fill-gray-400 cursor-pointer' />
        ) : (
            <FaMoon size='24' className='top-navigation-icon cursor-pointer' />
        )}
        </span>
    );
    };



    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }



    return (

        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b rounded-lg shadow-lg border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink to="/"><h1 className="flex text-black dark:text-gray-400 items-center text-3xl font-bold space-x-3 rtl:space-x-reverse">Simply Chic.</h1></NavLink>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        <ThemeIcon />

                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 rounded md:bg-transparent navbar-item" aria-current="page">Appointments</a>
                        </li>
                        <li>
                            <NavLink to="portfolio" className="block py-2 px-3 rounded md:bg-transparent navbar-item">Portfolio</NavLink>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 rounded md:bg-transparent navbar-item">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 rounded md:bg-transparent navbar-item">Promotions</a>
                        </li>
                        <li>
                            {token
                            ? <NavLink onClick={handleLogout} className="block py-2 px-3 rounded md:bg-transparent navbar-item">Log Out</NavLink>
                            : <NavLink to="login" className="block py-2 px-3 rounded md:bg-transparent navbar-item">Log In</NavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;
