import React from 'react';
import ReviewsCarousel from './ReviewsCarousel';
import {getReviews} from "@/sanity/lib/reviews";
import {getTranslations} from "next-intl/server";
import {Reviews} from "@/components/Reviews/index";
import Link from "next/link";
import {ContactUs} from "@/components/ContactUs";


export default async function ReviewsSection() {
    const t = await getTranslations('ReviewsCarousel');
    const reviews = await getReviews();

    return (
        <div className="bg-linear-to-b from-[#B088F4] via-[#dcd2ff] to-[#f4f3f8] py-12 md:py-20 font-rubik">
            <div className="container mx-auto px-4">

                <div className="mb-12 max-sm:mb-6">
                    <ReviewsCarousel reviews={reviews}/>
                </div>

                <div className="mb-10 max-sm:mb-3 flex flex-col max-sm:flex-row items-center justify-center gap-4 max-sm:gap-2">
                    <div className="flex -space-x-3">
                        <Reviews/>
                    </div>
                    <div className="flex items-center gap-2 max-sm:gap-1">
                        <span className="text-3xl max-sm:text-[10px] font-semibold max-sm:font-bold text-neutral-900">{t('trustCount')}</span>
                        <span className="text-lg max-sm:text-[10px] font-medium max-sm:font-light text-black">{t('reviewsCountLabel')}</span>
                    </div>
                </div>


                <div className="flex justify-center h-12.5 w-full">
                    <Link href="https://t.me/lama_cash" className="w-full items-center justify-center flex max-sm:w-75">
                        <ContactUs text={t('seeAllReviews')} imageClass="bg-white"
                                   buttonClass="hover:bg-black/95 text-base text-[rgba(240,240,240,1)] max-sm:font-bold tracking-[3%] bg-[rgba(23,23,23,1)]"
                                   inverted/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
