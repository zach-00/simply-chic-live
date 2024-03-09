import { useState, useEffect } from 'react';
import Eyelashes from './assets/eyelashextensions.jpeg';

function BookAppointment() {

    const [appointmentTypes, setAppointmentTypes] = useState([]);
    const [appointmentType, setAppointmentType] = useState('');


    const handleAppointmentTypeChange = (e) => {
        const value = e.target.value;
        setAppointmentType(value);
    }


    const fetchAppointmentType = async () => {
        const url = `${process.env.REACT_APP_API_HOST}/appointments/type`;

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointmentTypes(data.appointment_types);
        }

    }

    useEffect(() => {
        fetchAppointmentType();
    }, []);



    return (
        <div className="w-full h-screen bg-white py-16 px-4">
            <div className="max-width[1240px] w-full h-screen mx-auto my-auto grid md:grid-cols-2">

            <form className="max-w-sm mx-auto">
                {/* <label for="appointment_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                <select onChange={handleAppointmentTypeChange} id="appointment_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3">
                    <option>Appointment Type</option>
                    {appointmentTypes.map(type => {
                        return (
                        <option key={type.id} value={type.id}>{type.type_name}</option>
                        );
                    })}

                </select>

                <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <input datepicker="true" datepicker-autohide="true" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                </div>

            </form>


                <div className="flex flex-col gap-10">
                    <div className="flex flex-row justify-center md:justify-start">
                        <p className="lg:text-9xl md:text-7xl sm:text-6xl text-5xl font-dancing-script">By Sarah Scott</p>
                    </div>
                    <div className="flex flex-row justify-center">
                        <img src={Eyelashes} width="70%" className="rounded-lg" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BookAppointment;
