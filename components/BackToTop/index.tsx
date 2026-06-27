'use client'
import * as React from 'react';


export const BackToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // smooth дает красивый плавный скролл, а не резкий прыжок
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="back to top"
            className="w-12 h-12 max-sm:w-6 max-sm:h-6 flex items-center cursor-pointer justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors"
        >

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6"/>
            </svg>
        </button>
    );
};