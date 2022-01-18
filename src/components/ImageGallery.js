import React, { useState } from 'react';
import ImageCard from './ImageCard';
import { Toaster } from 'react-hot-toast';


export default function ImageGallery({ firstPage }) {
    console.log(firstPage);
    const [data, setData] = useState([]);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {!data ? null : (
                        firstPage.data.collection.items.map((image) => (
                            <div className="p-4 md:w-1/4" key={image.data[0].nasa_id}>
                                <ImageCard
                                    imgLink={image.links[0].href}
                                    title={image.data[0].title}
                                    center={image.data[0].center}
                                    date={image.data[0].date_created}
                                    description={image.data[0].description}
                                    photographer={image.data[0].photographer}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Toaster />
        </section >
    );
}
