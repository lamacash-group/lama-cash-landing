"use client";

import Link, { LinkProps } from "next/link";
import React from "react";
import { trackConversion, ConversionParams } from "@/lib/gtag";

interface TrackedLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    target?: string;
    rel?: string;
    conversionParams?: ConversionParams;
    [key: string]: unknown;
}

/**
 * Client wrapper around next/link to track Google Ads conversion on click
 * without forcing parent components to be "use client".
 */
export const TrackedLink = ({
    children,
    onClick,
    conversionParams,
    ...props
}: TrackedLinkProps) => {
    return (
        <Link
            {...props}
            onClick={(e) => {
                trackConversion(conversionParams);
                if (typeof onClick === "function") {
                    onClick(e);
                }
            }}
        >
            {children}
        </Link>
    );
};
