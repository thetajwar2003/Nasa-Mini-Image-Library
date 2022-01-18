import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from './ImageCard';
import { Toaster } from 'react-hot-toast';

export default function ImageGallery({ queryData, query }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://images-api.nasa.gov/search?q=%22%22&media_type=image")
            .then((res) => {
                setData(res);
            })
            .catch((err) => console.log(err, "Can't fetch first page"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="bg-white text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {loading ? <p>Loading</p> : (query && queryData ? (
                        // show image from search
                        queryData.data?.collection.items.map((image) => (
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
                        ))) : (
                        // main page images
                        data.data.collection.items.map((image) => (
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
                        )))
                    )}
                </div>
            </div>
            <Toaster />
        </section >
    );
}
