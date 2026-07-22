'use client'
import * as React from 'react';
import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SkeletonImageProps extends ImageProps {
    skeletonClass?: string;
}

export const SkeletonImage = ({ skeletonClass, className, alt, ...props }: SkeletonImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {!isLoaded && (
                <div className={`absolute inset-0 animate-pulse z-20 ${skeletonClass}`} />
            )}
            <Image
                className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                onLoad={() => setIsLoaded(true)}
                alt={alt}
                {...props}
            />
        </>
    );
};