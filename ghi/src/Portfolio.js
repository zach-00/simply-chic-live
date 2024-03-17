import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Portfolio() {

    const [clickedHair, setClickedHair] = useState(false);
    const [clickedEyelashes, setClickedEyelashes] = useState(true);
    // const imgModal = document.getElementById('img-modal');
    const [displayModal, setDisplayModal] = useState(false);
    const [image, setImage] = useState('');

    const hairImages = require.context('./assets/hair', true);
    const hairImagesList = hairImages.keys().map(image => hairImages(image));

    const eyelashImages = require.context('./assets/eyelashes', true);
    const eyelashImagesList = eyelashImages.keys().map(image => eyelashImages(image));

    // console.log(hairImagesList);

    let hairList1 = [];
    let hairList2 = [];
    for (let i = 0; i < hairImagesList.length; i++) {
        if (i % 2 === 0) {
            hairList1.push(hairImagesList[i]);
        } else if (i % 2 === 1) {
            hairList2.push(hairImagesList[i]);
        }
    }

    let eyelashList1 = [];
    let eyelashList2 = [];
    for (let i = 0; i < eyelashImagesList.length; i++) {
        if (i % 2 === 0) {
            eyelashList1.push(eyelashImagesList[i]);
        } else if (i % 2 === 1) {
            eyelashList2.push(eyelashImagesList[i]);
        }
    }

    const handleHairClick = () => {
        setClickedHair(true);
        setClickedEyelashes(false);
    }

    const handleEyelashClick = () => {
        setClickedEyelashes(true);
        setClickedHair(false);
    }

    const handleSetImage = (e) => {
        const value = e.target.src;
        console.log('E.TARGET.SRC', e.target.src);
        const img = value.replace(process.env.REACT_APP_PUBLIC_URL, '');
        console.log('IMG', img);
        setImage(img);
        setDisplayModal(true);
    }

    const handleCloseModal = () => {
        setDisplayModal(false);
    }


    // const displayModalTEMP = (e) => {
    //     // console.log("E.TARGET.SRC **", e.target.src);
    //     // const imgModal = document.getElementById('img-modal');
    //     // console.log("IMG MODAL: ", imgModal);

    //     let image = e.target.src;
    //     const img = image.replace(process.env.REACT_APP_PUBLIC_URL, '');


    //     return (
    //         <div id="img-modal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    //             <div className="relative p-4 w-full max-w-md max-h-full">
    //                 {/* <!-- Modal content --> */}
    //                 <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
    //                     {/* <!-- Modal header --> */}
    //                     <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
    //                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    //                             Connect wallet
    //                         </h3>
    //                         <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="img-modal">
    //                             <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
    //                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    //                             </svg>
    //                             <span className="sr-only">Close modal</span>
    //                         </button>
    //                     </div>
    //                     {/* <!-- Modal body --> */}
    //                     <div className="p-4 md:p-5">
    //                         <img src={img} />

    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );


    // }



    const displayHair = () => {
        return (
            <div className="flex flex-row justify-center">

            <div className="grid grid-cols-2 align-middle items-center w-4/5 h-4/5 sm:w-3/5 sm:h-3/5 mt-20 gap-3 md:gap-7">
                {hairList1.map((img, index) => {
                    return (
                    <div key={index}>
                        <button onClick={handleSetImage} type="button" data-modal-target="img-modal" data-modal-toggle="img-modal"><img className="rounded-lg border-2 border-black mb-7" src={img}></img></button>
                    </div>
                    );
                })}

                {hairList2.map((img, index) => {
                    return (
                    <div key={index}>
                        <button onClick={handleSetImage} type="button" data-modal-target="img-modal" data-modal-toggle="img-modal"><img className="rounded-lg border-2 border-black mb-7" src={img}></img></button>

                        {displayModal
                                ? <div id="img-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div className="relative p-4 w-full max-w-md max-h-full">
                                    {/* <!-- Modal content --> */}
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        {/* <!-- Modal header --> */}
                                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                Connect wallet
                                            </h3>
                                            <button onClick={handleCloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="img-modal">
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                </svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        {/* <!-- Modal body --> */}
                                        <div className="p-4 md:p-5">
                                            <img src={image} />

                                        </div>
                                    </div>
                                </div>
                                </div>
                                : <div hidden id="img-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div className="relative p-4 w-full max-w-md max-h-full">
                                    {/* <!-- Modal content --> */}
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        {/* <!-- Modal header --> */}
                                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                Connect wallet
                                            </h3>
                                            <button onClick={handleCloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="img-modal">
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                </svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        {/* <!-- Modal body --> */}
                                        <div className="p-4 md:p-5">
                                            <img src={image} />

                                        </div>
                                    </div>
                                </div>
                                </div>

                                }


                    </div>
                    );
                })}

            </div>
        </div>
        );
    }





    const displayEyelashes = () => {

        // let image = e.target.src;
        // const img = image.replace(process.env.REACT_APP_PUBLIC_URL, '');


        return (
            <>
            <div className="flex flex-row justify-center">

            <div className="grid grid-cols-2 align-middle items-center w-4/5 h-4/5 sm:w-3/5 sm:h-3/5 mt-20 gap-3 md:gap-7">
                {/* {eyelashList1.map((img, index) => {
                    return (
                    <div key={index}>
                        <button onClick={handleSetImage}><img className="rounded-lg border-2 border-black mb-7" src={img}></img></button>
                    </div>
                    );
                })} */}
                {/* type="button" data-modal-target="img-modal" data-modal-toggle="img-modal" */}

                {eyelashImagesList.map((img, index) => {
                    return (
                        <div key={index}>
                            <button onClick={handleSetImage} type="button"><img className="rounded-lg border-2 border-black mb-7" src={img}></img></button>
                        </div>
                    );
                })}


            </div>
        </div>






        </>

        );
    }







    return (
        <>
        <div className="flex flex-row justify-center font-portfolio font-bold text-7xl md:text-9xl mt-20 mb-10">
            PORTFOLIO
        </div>

        <div className="flex flex-row justify-center">


            <button onClick={handleHairClick} className="relative mx-5 md:mx-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                See Hair
                </span>
            </button>


            {/* <button className="navbar-item mx-5 md:mx-10" onClick={handleHairClick}>
            See Hair
            </button> */}

            {/* <button className="navbar-item mx-5 md:mx-10" onClick={handleEyelashClick}>
            See Eyelashes
            </button> */}

            <button onClick={handleEyelashClick} className="relative mx-5 md:mx-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                See Eyelashes
                </span>
            </button>


        </div>





            {/* "text-xl bg-pink-500 py-2 px-4 shadow-2xl font-serif border-2 border-black rounded-2xl hover:bg-pink-400 mx-5 text-black font-bold"
"text-xl bg-pink-500 py-2 px-4 shadow-2xl font-serif border-2 border-black rounded-2xl hover:bg-pink-400 mx-5 text-black font-bold" */}



        {clickedHair
        ? displayHair()
        : null
        }

        {clickedEyelashes
        ? displayEyelashes()
        : null
        }


        {displayModal
        ? <div tabIndex="-1" className="flex flex-col gap-3 border-2 border-black shadow-2xl w-5/6 h-1/2 md:w-1/2 md:h-1/2 lg:w-2/3 lg:h-4/6 max-w-[600px] max-h-full top-0 left-0 right-0 bottom-0 z-50 bg-gray-600 mx-auto my-auto fixed rounded md:inset-0 justify-center items-center">
            <div className="flex flex-row w-full justify-evenly border-b-2 border-neutral-500">
                <h1 className="text-4xl lg:text-7xl font-bold font-portfolio">Simply Chic</h1>
                <button onClick={handleCloseModal} className="flex flex-row md:ml-20"><AiOutlineCloseCircle className="h-8 w-8 sm:h-12 mt-3 sm:w-12 mb-3 ml-20 justify-end text-neutral-400 hover:rotate-90 hover:text-red-600 transition-all duration-300" /></button>
                {/* <hr /> */}
                {/* <button onClick={handleCloseModal} className="text-4xl font-bold mx-auto lg:mr-12 mb-3 hover:rotate-45 hover:text-red-600 transition-all duration-300">X</button> */}
            </div>
            <img className="rounded-xl w-5/6 h-5/6 items-center justify-center border-2 border-black" src={image}></img>
        </div>


        : null


        }

        </>

        );
}


export default Portfolio;





// {displayModal
//     ? <div id="img-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
//     <div className="relative p-4 w-full max-w-md max-h-full">
//         {/* <!-- Modal content --> */}
//         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//             {/* <!-- Modal header --> */}
//             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                     Connect wallet
//                 </h3>
//                 <button onClick={handleCloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="img-modal">
//                     <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                     </svg>
//                     <span className="sr-only">Close modal</span>
//                 </button>
//             </div>
//             {/* <!-- Modal body --> */}
//             <div className="p-4 md:p-5">
//                 <img src={image} />

//             </div>
//         </div>
//     </div>
//     </div>
//     : <div hidden id="img-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
//     <div className="relative p-4 w-full max-w-md max-h-full">
//         {/* <!-- Modal content --> */}
//         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//             {/* <!-- Modal header --> */}
//             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                     Connect wallet
//                 </h3>
//                 <button onClick={handleCloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="img-modal">
//                     <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                     </svg>
//                     <span className="sr-only">Close modal</span>
//                 </button>
//             </div>
//             {/* <!-- Modal body --> */}
//             <div className="p-4 md:p-5">
//                 <img src={image} />

//             </div>
//         </div>
//     </div>
//     </div>

//     }


















// {/* <div className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
// <div className="relative p-4 w-full max-w-md max-h-full">
//     {/* <!-- Modal content --> */}
//     <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//         {/* <!-- Modal header --> */}
//         <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                 Connect wallet
//             </h3>
//             <button onClick={handleCloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
//                 <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                 </svg>
//                 <span className="sr-only">Close modal</span>
//             </button>
//         </div>
//         {/* <!-- Modal body --> */}
//         <div className="p-4 md:p-5">
//             <img src={image} />

//         </div>
//     </div>
// </div>
// </div> */}
