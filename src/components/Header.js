import React from 'react';


export default function Header() {
    return (
        <header class="text-gray-400 bg-nasa_gray body-font">
            <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img src="https://img.icons8.com/color/96/000000/nasa.png" />
                    <span class="ml-3 text-xl font-bold">Nasa Mini Image Library</span>
                </a>

            </div>
        </header>
    );
}
