import * as React from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {useTranslations} from "next-intl";

type BlogProps = {
    _id: string;
    title: string;
    text: string;
}

export const BlogList = ({ blogs }: { blogs: BlogProps[] }) => {

    const t = useTranslations("aria");

    if (!blogs || blogs.length === 0) return null;

    return (
        <div className="flex w-full bg-[rgba(240,240,240,1)] items-center justify-center px-7 pt-12 py-10 max-sm:py-7 max-sm:pt-4">

            <div className="grid grid-cols-2 gap-4 md:gap-12 max-w-5xl w-full">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-2 bg-[linear-gradient(180deg,#D4B4FE_0%,#E6E6E6_100%)] rounded-[14px] px-6 py-4 max-sm:px-3 max-sm:py-2  shadow-sm 
                        ${index === 0 ? 'mt-16 max-sm:mt-6' : 'mb-16 max-sm:mb-6'}`}
                    >
                        <span className="text-2xl max-sm:text-[9px] font-getvoip font-bold text-[rgba(23,23,23,1)]">
                            {blog.title}
                        </span>

                        <p className="text-gray-800 line-clamp-3 md:line-clamp-4 grow text-base max-sm:text-[7px] font-rubik">
                            {blog.text}
                        </p>

                        <div className="flex justify-end w-full mt-auto">
                            <Dialog>
                                <DialogTrigger asChild>
                                        <Button className="text-[rgba(100,100,101,1)] text-sm max-sm:text-[6px] h-auto font-normal bg-transparent px-0 py-0 underline cursor-pointer">
                                            {t('readAll')}
                                        </Button>
                                </DialogTrigger>
                                <DialogDescription className="sr-only">
                                    read the blog in full
                                </DialogDescription>
                                <DialogContent className="sm:max-w-150 bg-[linear-gradient(180deg,#D4B4FE_0%,#E6E6E6_100%)] rounded-xl"
                                               closeButtonClass="hover:bg-transparent cursor-pointer"
                                >
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl font-getvoip font-bold text-[rgba(23,23,23,1)]">
                                            {blog.title}
                                        </DialogTitle>
                                    </DialogHeader>

                                    <div className="mt-4">
                                        <p className="text-gray-800 text-base font-rubik leading-relaxed">
                                            {blog.text}
                                        </p>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};