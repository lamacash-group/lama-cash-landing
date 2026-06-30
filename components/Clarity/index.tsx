'use client'
import Clarity from '@microsoft/clarity';
import {useEffect} from "react";

export const MicrosoftClarity = () => {

    useEffect(() => {
        const projectId = process.env.NEXT_PUBLIC_CLARITY_ID;

        if (projectId && typeof window !== "undefined") {
            Clarity.init(projectId);
            console.log("Clarity loaded");
        }
    }, []);

    return null;
};