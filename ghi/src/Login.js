import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    const login = async (e) => {
        e.preventDefault();
        const url = `${process.env.REACT_APP_API_HOST}/token`;

        const formData = new FormData();
        formData.append('username', e.target[0].value);
        formData.append('password', e.target[1].value);

        const data = new URLSearchParams();

        for (const pair of formData) {
            data.append(pair[0], pair[1]);
        }

        const fetchOptions = {
            method: 'POST',
            body: data,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
        try {
        const response = await fetch(url, fetchOptions);

        if (response.ok) {
            const data = await response.json();
            console.log(data);

            if (data) {
                localStorage.setItem('token', data.access_token);
                localStorage.setItem('full_name', data.full_name);
                localStorage.setItem('phone_number', data.phone_number);
                localStorage.setItem('user_id', data.user_id);
            }

        navigate('/');

        }
    } catch (err) {
        console.error(err);
    }
    }



    return (
        <>
            <div className="flex flex-row justify-center h-screen">
                <div className="flex flex-col justify-center bg-slate-300 dark:bg-gray-700 max-w-[500px] sm:max-w-[600px] md:max-w-[1240px] w-full">
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-col justify-center w-2/4">
                            <p className="text-8xl font-dancing-script text-pink-500 gap-10 text-center">Login 💋</p>
                            <form onSubmit={login} id="login-form">
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <div className="relative mb-6">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                        </svg>
                                    </div>
                                <input onChange={handleUsernameChange} value={username} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-slate-300 dark:text-black dark:border-gray-600 dark:placeholder-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input onChange={handlePasswordChange} value={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter password" required />
                                </div>

                                <button className="relative inline-flex w-full items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-black focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
                                    Login
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;




// SETTING TOKEN IN LOCAL STORAGE ????


// const login = async (username, password) => {
//     const response = await fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         username,
//         password
//       })
//     });

//     const data = await response.json();

//     if (data.token) {
//       localStorage.setItem('token', data.token);
//       return true;
//     } else {
//       return false;
//     }
//   };
