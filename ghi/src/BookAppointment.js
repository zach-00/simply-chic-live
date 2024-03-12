import { useState, useEffect } from 'react';
import Eyelashes from './assets/eyelashextensions.jpeg';
import { Datepicker } from 'flowbite-react/lib/esm/components/Datepicker/Datepicker';


function BookAppointment() {

    const [appointmentTypes, setAppointmentTypes] = useState([]);
    const [appointmentType, setAppointmentType] = useState('');
    const [date, setDate] = useState('');
    const [appointmentTimes, setAppointmentTimes] = useState([]);


    const handleDateChange = (e) => {
        const value = e.toISOString().slice(0, 10);
        setDate(value);

    }

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


    const fetchAvailableTimes = async () => {
        const url = `${process.env.REACT_APP_API_HOST}/appointments/${date}/${appointmentType}`;

        console.log("DATE *****", date, "APPT ID ***", appointmentType);


        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setAppointmentTimes(data.available_appointments);
        }

    }

    useEffect(() => {
        fetchAppointmentType();
    }, []);

    useEffect(() => {
        if (date !== '' && appointmentType !== '') {
            fetchAvailableTimes();
        } else {
            return;
        }
    }, [date, appointmentType]);



    return (
        <section id="book_appointment">
        <div className="w-full h-screen bg-white py-16 px-4">
            <div className="max-width[1240px] w-full h-screen mx-auto my-auto grid md:grid-cols-2 items-center">

            <div className="flex flex-row justify-center w-full h-3/5">
            <div className="flex flex-col justify-center min-h-72">
                <h1 className="text-3xl font-extrabold">Book Appointment</h1>
                <div className="h-full w-full p-10 md:h-4/5 lg:h-4/5 rounded-lg bg-gray-800 shadow-2xl">
            <form className="max-w-sm mx-auto">
                {/* <label for="appointment_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                <select onChange={handleAppointmentTypeChange} value={appointmentType} id="appointment_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3">
                    <option>Appointment Type</option>
                    {appointmentTypes.map(type => {
                        return (
                        <option key={type.id} value={type.id}>{type.type_name}</option>
                        );
                    })}

                </select>


                <Datepicker onSelectedDateChanged={handleDateChange} datepicker-format="yyyy-MM-dd" className="mb-3" />


                <select id="start_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3">
                    <option>Time</option>
                    {appointmentTimes.length > 0
                    ? appointmentTimes.map((time, index) => {
                        let temp = time.replace(':', '')
                        let timeNum = Number(temp.slice(0, 4))
                        let hrs = temp.slice(0, 2)
                        let suffix = hrs >= 12 ? 'pm' : 'am'
                        let hours = (hrs > 12) ? hrs - 12 : hrs
                        let hoursStr = hours.toString()
                        let timeStr = timeNum.toString()
                        let final = `${hoursStr}:${timeStr.slice(2, 4)}`
                        return (
                            <option key={index} value={time}>{final} {suffix}</option>
                        );
                    })
                    : <option>Time</option>
                }

                </select>

                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Book me!
                    </span>
                </button>


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
