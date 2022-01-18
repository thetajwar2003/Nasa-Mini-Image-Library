import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Heart from "react-heart";
import DetailedModal from './DetailedModal';

export default function ImageCard({ imgLink, photographer, title, description, date, center }) {
    const [like, setLike] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const formattedDate = new Date(date).toLocaleDateString('en-US');

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
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imgLink} alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{photographer || "Unknown"} | {formattedDate}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                    <p className="leading-relaxed mb-3 line-clamp-3">{description}</p>
                    {/* footer: TODO: make it stay all the way at the bottom */}
                    <div className="flex items-center flex-wrap ">
                        <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" onClick={() => setOpenModal(true)}>
                            Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </button>

                        {/* Heart icon */}
                        <span style={{ width: "2rem" }} className="text-black mr-2 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none pr-3 border-r-2 border-gray-200">
                            <Heart isActive={like} onClick={() => setLike(!like)} animationScale={2} animationDuration={0.2} />
                        </span>

                        {/* Share Icon -> clicking it will copy the image link */}
                        <button className="text-black inline-flex items-center leading-none text-sm" onClick={handleShare}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                        </button>
                        {openModal ? (
                            <DetailedModal
                                like={like}
                                setLike={setLike}
                                setOpenModal={setOpenModal}
                                imgLink={imgLink}
                                title={title}
                                center={center}
                                date={formattedDate}
                                description={description}
                                photographer={photographer}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
}
