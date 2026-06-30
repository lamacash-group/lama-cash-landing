import * as React from 'react';
import {getLocale} from "next-intl/server";
import {getBlogs} from "@/sanity/lib/client";
import {BlogList} from "@/components/BlogList";


export const Blog = async () => {

    const locale = await getLocale();

    const blogs = await getBlogs(locale);

    return <BlogList blogs={blogs} />;
};