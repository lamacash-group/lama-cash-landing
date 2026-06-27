import * as React from 'react';

type BlogProps = {
    title: string;
    text: string;
}

const BlogData: BlogProps[] = [
    {
        title: 'Назва блогу',
        text: 'Світ фінансів переживає революційні зміни, і криптовалюта є однією з найгарячіших тем для обговорення,         text: \'Світ фінансів переживає революційні зміни, і криптовалюта є однією з найгарячіших тем для обговорення\''
    },
    {
        title: 'Назва блогу',
        text: 'Світ фінансів переживає революційні зміни, і криптовалюта є однією з найгарячіших тем для обговорення'
    },
]

export const Blog = () => {
    return (
        <div className="flex w-full bg-[rgba(240,240,240,1)] items-center justify-center px-7 pt-12 py-10 max-sm:py-7 max-sm:pt-4">

            <div className="grid grid-cols-2 gap-4 md:gap-12 max-w-5xl w-full">
                {BlogData.map((blog, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-2 bg-[linear-gradient(180deg,#D4B4FE_0%,#E6E6E6_100%)] rounded-[14px] px-6 py-4 max-sm:px-3 max-sm:py-2  shadow-sm 
                        ${index === 0 ? 'mt-16 max-sm:mt-6' : 'mb-16 max-sm:mb-6'}`}
                    >
                        <h3 className="text-2xl max-sm:text-[9px] font-getvoip font-bold text-[rgba(23,23,23,1)]">
                            {blog.title}
                        </h3>

                        <p className="text-gray-800 line-clamp-3 md:line-clamp-4 grow text-base max-sm:text-[7px] font-rubik">
                            {blog.text}
                        </p>

                        <div className="flex justify-end w-full mt-auto">
                            <button className="text-[rgba(100,100,101,1)] text-sm max-sm:text-[6px] underline cursor-pointer">
                                читати повністю
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};