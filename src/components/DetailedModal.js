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
                <section className="text-black bg-nasa_gray body-font overflow-hidden">
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
                    <div className="container px-5 py-24 mx-auto">

                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={imgLink} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-nasa_red-dark tracking-widest">{photographer} </h2>
                                <h1 className="text-nasa_blue-dark text-3xl title-font font-medium mb-1">{title}</h1>
                                <div className="flex mb-4">
                                    <span className="italic font-semibold">Taken at the {center} center on {date}</span>
                                </div>
                                <p className="leading-relaxed">{description}</p>
                                <div className="flex pt-5">
                                    {/* share image button */}
                                    <button className="flex ml-auto text-white bg-nasa_red border-0 w-10 h-10 p-0 focus:outline-none items-center justify-center hover:bg-nasa_red-dark rounded-full" onClick={handleShare}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                    </button>

                                    {/* like image button */}
                                    <span className="rounded-full w-10 h-10 bg-nasa_blue p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <div style={{ width: "1.5rem" }}>
                                            <Heart isActive={like} onClick={() => setLike(!like)} animationScale={2} animationDuration={0.2} inactiveColor='white' activeColor='#dd361c' />
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
