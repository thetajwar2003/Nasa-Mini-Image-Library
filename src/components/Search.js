import React, { useState } from "react";
import axios from "axios";

import ImageGallery from "./ImageGallery";


export default function Search() {
    const [queryData, setQueryData] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
            .get(`https://images-api.nasa.gov/search?q=${ query }&media_type=image`)
            .then((res) => {
                setQueryData(res);
                console.log("search", res, query.length > 3);
            })
            .catch((err) => console.log(err, "Can't fetch first page"))
            .finally(() => setLoading(false));
    };

    return (
        <>
            <div className="container px-5 py-5 mx-auto flex">
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer m-2 bg-nasa_gray hover:bg-nasa_gray-dark">
                    <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none border-2 border-black' type="text" placeholder='Search' onChange={(e) => setQuery(e.target.value)} />
                    <button onClick={handleSearch}>
                        <img alt="search" src="https://img.icons8.com/material-outlined/24/000000/search--v1.png" className="px-3" />
                    </button>
                </div>
            </div>
            {loading ? <p>Loading...</p> : <ImageGallery queryData={queryData} query={query} />}
        </>
    );
};
