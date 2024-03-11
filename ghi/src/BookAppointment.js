import { useState, useEffect } from 'react';
import Eyelashes from './assets/eyelashextensions.jpeg';
import { Datepicker } from 'flowbite-react/lib/esm/components/Datepicker/Datepicker';
import 'flowbite-react/lib/esm/components/Datepicker/Datepicker';
// import Datepicker from 'flowbite-react/lib/esm/components/Datepicker/Datepicker';

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
        <section id="book_appointment">
        <div className="w-full h-screen bg-white py-16 px-4">
            <div className="max-width[1240px] w-full h-screen mx-auto my-auto grid md:grid-cols-2 items-center">

            <div className="flex flex-row justify-center w-full h-3/5">
            <div className="flex flex-col justify-center">
                <div className="h-full w-full p-10 md:h-4/5 lg:h-4/5 rounded-lg bg-gray-800 shadow-2xl">
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


                <Datepicker />

            </form>
            </div>
            </div>
            </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-row justify-center md:justify-start">
                        <p className="lg:text-9xl md:text-7xl sm:text-6xl text-5xl font-dancing-script">By Sarah Scott</p>
                    </div>
                    <div className="flex flex-row justify-center">
                        <img src={Eyelashes} width="70%" className="rounded-lg border-2 border-black" />
                    </div>
                </div>
            </div>

        </div>
        </section>
    );
}

export default BookAppointment;
