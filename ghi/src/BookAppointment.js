// import { useState, useEffect } from 'react';
import Eyelashes from './assets/eyelashextensions.jpeg';
// import { Datepicker } from 'flowbite-react/lib/esm/components/Datepicker/Datepicker';
// import { useNavigate } from 'react-router-dom';


function BookAppointment() {

    // const [appointmentTypes, setAppointmentTypes] = useState([]);
    // const [appointmentType, setAppointmentType] = useState('');
    // const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    // const [appointmentTimes, setAppointmentTimes] = useState([]);
    // const [appointmentTime, setAppointmentTime] = useState('');
    // const token = localStorage.getItem('token');
    // const [fullName, setFullName] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const [booked, setBooked] = useState(false);
    // const firstName = fullName.split(' ')[0];
    // const navigate = useNavigate();


    // const handleDateChange = (e) => {
    //     const value = e.toISOString().slice(0, 10);
    //     setDate(value);
    // }

    // const handleAppointmentTypeChange = (e) => {
    //     const value = e.target.value;
    //     setAppointmentType(value);
    // }

    // const handleTimeChange = (e) => {
    //     const value = e.target.value;
    //     setAppointmentTime(value);
    // }

    // const handleClose = () => {
    //     setBooked(false);
    // }


    // const fetchAppointmentType = async () => {
    //     const url = `${process.env.REACT_APP_API_HOST}/appointments/type`;

    //     const response = await fetch(url);
    //     if (response.ok) {
    //         const data = await response.json();
    //         setAppointmentTypes(data.appointment_types);
    //     }

    // }


    // const fetchAvailableTimes = async () => {
    //     const url = `${process.env.REACT_APP_API_HOST}/appointments/${date}/${appointmentType}`;
    //     const response = await fetch(url);

    //     if (response.ok) {
    //         const data = await response.json();
    //         setAppointmentTimes(data.available_appointments);
    //     }

    // }


    // useEffect(() => {
    //     fetchAppointmentType();
    //     setFullName(localStorage.getItem('full_name'));
    //     setPhoneNumber(localStorage.getItem('phone_number'));
    // }, []);

    // useEffect(() => {
    //     if (date !== '' && appointmentType !== '') {
    //         fetchAvailableTimes();
    //     } else {
    //         return;
    //     }
    // }, [date, appointmentType]);


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (token === null) {
    //         navigate('/login');
    //         return;
    //     }

    //     const url = `${process.env.REACT_APP_API_HOST}/appointments`;

    //     const data = {
    //         client_name: fullName,
    //         phone_number: phoneNumber,
    //         start_time: `${date} ${appointmentTime}`,
    //         appointment_type_id: appointmentType,
    //     };

    //     const fetchOptions = {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json'
    //         }
    //     };


    //     const response = await fetch(url, fetchOptions);

    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log(data);
    //         setBooked(true);
    //         setAppointmentTime('');
    //         setAppointmentType('');
    //     }

    // }

    // getAppointments();


    return (
        <section id="book_appointment">
        <div className="w-full h-screen bg-white mb-80 sm:mb-96 md:mb-0">
            <div className="max-width[1240px] w-full h-screen mx-auto my-auto grid md:grid-cols-2 items-center gap-5">

            {/* <div className="flex flex-row justify-center w-full h-3/5">
            <div className="flex flex-col justify-center min-h-96">


            </div>
            </div> */}
            {/* <iframe src="https://example.acuityscheduling.com" width="100%" height="300" frameBorder="0"></iframe> */}

            <div className="flex flex-col justify-center h-screen">

                <iframe className="bg-gray-600 h-screen md:h-5/6 border-2 border-black" src="https://app.acuityscheduling.com/schedule.php?owner=13097338" title="Schedule Appointment" width="100%" frameBorder="0"></iframe>

            </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-row justify-center">
                        <p className="lg:text-9xl md:text-7xl sm:text-6xl text-5xl text-center font-dancing-script">By Sarah Scott</p>
                    </div>
                    <div className="flex flex-row justify-center">
                        <img src={Eyelashes} width="70%" className="rounded-lg border-2 border-black w-2/3 h-2/3 xxsm:w-3/5 xxsm:h-3/5 xsm:h-2/5 xsm:w-2/5 md:h-2/3 md:w-2/3" />
                    </div>
                </div>
            </div>

        </div>
        </section>
    );
}

export default BookAppointment;




// <h1 className="text-3xl font-extrabold">Book Appointment</h1>
//                 <div className="h-full w-full p-10 md:h-4/5 lg:h-4/5 rounded-lg bg-gray-800 shadow-2xl">
//             <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
//                 {/* <label for="appointment_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
//                 <select onChange={handleAppointmentTypeChange} value={appointmentType} id="appointment_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3">
//                     <option>Appointment Type</option>
//                     {appointmentTypes.map(type => {
//                         return (
//                         <option key={type.id} value={type.id}>{type.type_name}</option>
//                         );
//                     })}

//                 </select>


//                 <Datepicker onSelectedDateChanged={handleDateChange} datepicker-format="yyyy-MM-dd" className="mb-3" />


//                 <select onChange={handleTimeChange} id="start_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3">
//                     <option>Time</option>
//                     {appointmentTimes.length > 0
//                     ? appointmentTimes.map((time, index) => {
//                         let temp = time.replace(':', '')
//                         let hrs = temp.slice(0, 2)
//                         let suffix = hrs >= 12 ? 'pm' : 'am'
//                         let hours = (hrs > 12) ? hrs - 12 : hrs
//                         let hoursStr = hours.toString()
//                         let minutes = temp.slice(2, 4)
//                         let final = `${hoursStr}:${minutes}`
//                         return (
//                             <option key={index} value={time}>{final} {suffix}</option>
//                         );
//                     })
//                     : null
//                 }

//                 </select>

//                 {console.log(token)}

//                 {token
//                 ? <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
//                     <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                     Book me!
//                     </span>
//                  </button>

//                 : <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
//                     <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                     Log In To Book Appointment
//                     </span>
//                 </button>

//                 }

//                 {booked
//                 ? <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
//                     <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
//                         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
//                         </svg>
//                         <span className="sr-only">Check icon</span>
//                     </div>
//                     <div className="ms-3 text-sm font-normal">Appointment successfully booked. Thanks {firstName}!</div>
//                     <button onClick={handleClose} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
//                         <span className="sr-only">Close</span>
//                         <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                         </svg>
//                     </button>
//                 </div>
//             : null
//                 }


//             </form>
//             </div>
