import useDarkMode from "./useDarkMode";
import { FaSun, FaMoon } from 'react-icons/fa';

const NavBar = () => {


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







    return (
        // fixed top-0 w-full h-16 flex flex-row bg-primary text-white shadow-lg"



        // <nav className="bg-neutral-200 shadow-lg dark:bg-primary">
        //     <div className="flex justify-between items-center h-24 w-full mx-auto px-4 text-white">
        //         <h1 className="text-3xl font-bold text-[#b937a5]">Simply Chic.</h1>
        //         <ul className="flex w-9/12 sm:space-x-6 md:space-x-10 lg:space-x-14">
        //             <li className="navbar-item">Appointments</li>
        //             <li className="navbar-item">Portfolio</li>
        //             <li className="navbar-item">Contact Me</li>
        //             <li className="navbar-item">Socials</li>
        //             <li className="navbar-item">Login</li>
        //         </ul>
        //     </div>
        // </nav>





<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b rounded-lg shadow-lg border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <h1 className="flex text-black dark:text-gray-400 items-center text-3xl font-bold space-x-3 rtl:space-x-reverse">Simply Chic.</h1>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

  {/* <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
    <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    </button> */}

        <ThemeIcon />

      {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}
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
        <a href="#" className="block py-2 px-3 rounded md:bg-transparent navbar-item">Portfolio</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 rounded md:bg-transparent navbar-item">Contact Me</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 rounded md:bg-transparent navbar-item">Socials</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 rounded md:bg-transparent navbar-item">Log In</a>
      </li>
    </ul>
  </div>
  </div>
</nav>



    );
}

// const NavBarIcons = ({ icon }) => {
//     return (
//         <div className="navbar-icon">
//             {icon}
//         </div>
//     );
// }

export default NavBar;



// "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",


{/* <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Purple to pink
                </span>
            </button> */}
