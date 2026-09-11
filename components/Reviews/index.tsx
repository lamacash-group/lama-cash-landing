// @flow
import * as React from 'react';
import {Avatar, AvatarFallback, AvatarGroup, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";

type TypeReviews = {
    src: string,
    alt: string,
    objectPosition: string,
}

const reviewsData:TypeReviews[] = [
    {
        src:"/reviews/reviews-1.webp",
        alt:"avatar reviews 1",
        objectPosition: "object-[20%_20%]",
    },
    {
        src:"/reviews/reviews-2.webp",
        alt:"avatar reviews 2",
        objectPosition: "object-[20%]",
    },
    {
        src:"/reviews/reviews-3.webp",
        alt:"avatar reviews 3",
        objectPosition: "object-top-right",
    },
    {
        src:"/reviews/reviews-4.webp",
        alt:"avatar reviews 4",
        objectPosition: "object-top-right",
    },

]

export function Reviews() {
    return (
        <>
            <AvatarGroup className="max-sm:-space-x-1">
                {
                    reviewsData.map((item, index) => (
                        <Avatar key={index} className="[&::after]:border-[rgba(100,100,101,1)] ring-[rgba(100,100,101,1)]! max-sm:w-5! max-sm:h-5!" size="lg">
                            <AvatarImage asChild src={item.src}>
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={48}
                                    height={48}
                                    className={`w-full h-full object-cover ${item.objectPosition}`}
                                />
                            </AvatarImage>
                            {/*<AvatarFallback>RV</AvatarFallback>*/}
                            {reviewsData.length-1 === index && (<span
                                className="absolute inset-0 rounded-full z-10 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(270deg, #0B0B0B 7.53%, rgba(12, 12, 12, 0.4) 82.41%)',
                                }}
                            />)}
                        </Avatar>
                    ))
                }
            </AvatarGroup>
        </>
    );
}