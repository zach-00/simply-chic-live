

const NavBar = () => {
    return (
        // fixed top-0 w-full h-16 flex flex-row bg-primary text-white shadow-lg"
        <div className="flex justify-between items-center h-24 w-full mx-auto px-4 text-white">
            <h1 className="text-3xl font-bold text-[#b937a5]">Simply Chic.</h1>
            <ul className="flex w-9/12 sm:space-x-6 md:space-x-10 lg:space-x-14">
                <li className="navbar-item">Appointments</li>
                <li className="navbar-item">Portfolio</li>
                <li className="navbar-item">Contact Me</li>
                <li className="navbar-item">Socials</li>
                <li className="navbar-item">Login</li>
            </ul>
        </div>

    );
}

const NavBarIcons = ({ icon }) => {
    return (
        <div className="navbar-icon">
            {icon}
        </div>
    );
}

export default NavBar;



// "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",


{/* <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Purple to pink
                </span>
            </button> */}
