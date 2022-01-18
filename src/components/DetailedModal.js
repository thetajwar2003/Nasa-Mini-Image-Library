import React from 'react';
import toast from 'react-hot-toast';
import Heart from "react-heart";


export default function DetailedModal({ like, setLike, setOpenModal, imgLink, photographer, title, description, date, center }) {
    const handleShare = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(imgLink);
        toast.success("Copied Image Link!", {
            style: {
                background: '#000',
                color: '#fff'
            }
        });
    };
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div >

                    {/* <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Modal Title
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setOpenModal(false)}
                            >
                                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    X
                                </span>
                            </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                I always felt like I could do anything. That’s the main
                                thing people are controlled by! Thoughts- their perception
                                of themselves! They're slowed down by their perception of
                                themselves. If you're taught you can’t do anything, you
                                won’t do anything. I was taught I could do everything.
                            </p>
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setOpenModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setOpenModal(false)}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div> */}
                    <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
                        <button
                            className="p-5 ml-auto bg-transparent border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setOpenModal(false)}
                        >
                            <span className="bg-transparent text-white  h-7 w-7 text-2xl block outline-none focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                        </button>
                        <div class="container px-5 py-24 mx-auto">

                            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={imgLink} />
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 className="text-sm title-font text-gray-500 tracking-widest">{photographer} </h2>
                                    <h1 className="text-white text-3xl title-font font-medium mb-1">{title}</h1>
                                    <div className="flex mb-4">
                                        <span className="italic font-semibold">Taken in {center} on {date}</span>
                                    </div>
                                    <p className="leading-relaxed">{description}</p>
                                    <div className="flex pt-5">
                                        {/* close modal button */}
                                        {/* <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => setOpenModal(false)}>Close</button> */}

                                        {/* share image button */}
                                        <button className="flex ml-auto text-white bg-indigo-500 border-0 w-10 h-10 p-0 focus:outline-none items-center justify-center hover:bg-indigo-600 rounded-full" onClick={handleShare}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                            </svg>
                                        </button>

                                        {/* like image button */}
                                        <span class="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                            <div style={{ width: "1.5rem" }}>
                                                <Heart isActive={like} onClick={() => setLike(!like)} animationScale={2} animationDuration={0.2} inactiveColor='white' />
                                            </div>

                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
