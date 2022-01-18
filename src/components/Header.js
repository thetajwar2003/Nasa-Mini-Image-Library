import React from 'react';

export default function Header() {
    return (
        <header className="text-gray-400 bg-nasa_gray body-font">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <button className="flex title-font font-medium items-center text-white mb-4 md:mb-0" onClick={() => window.location.reload(true)}>
                    <img alt="nasa" src="https://img.icons8.com/color/96/000000/nasa.png" />
                    <span className="ml-3 text-xl font-bold">Nasa Mini Image Library</span>
                </button>
            </div>
        </header>
    );
}
