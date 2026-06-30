'use client'
import Clarity from '@microsoft/clarity';
import {useEffect} from "react";

export const MicrosoftClarity = () => {

    useEffect(() => {
        const projectId = process.env.NEXT_PUBLIC_CLARITY_ID;
        const gaId = process.env.NEXT_PUBLIC_GA_ID;

        if (!projectId || typeof window === "undefined") return;

        Clarity.init(projectId);

        if (gaId) {
            const linkGAClientId = (attemptsLeft = 10) => {
                if (typeof window.gtag !== "function") {
                    if (attemptsLeft > 0) setTimeout(() => linkGAClientId(attemptsLeft - 1), 300);
                    return;
                }

                window.gtag("get", gaId, "client_id", (clientId: string) => {
                    if (clientId) {
                        Clarity.setTag("ga_client_id", clientId);
                    }
                });
            };

            linkGAClientId();
        }
    }, []);

    return null;
};