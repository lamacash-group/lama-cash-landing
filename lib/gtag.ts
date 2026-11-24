export const GA_TRACKING_ID = "AW-18403181154";
export const CONVERSION_SEND_TO = "AW-18403181154/e6IACPLg7-UcEOKEqcdE";

export interface ConversionParams {
    sendTo?: string;
    value?: number;
    currency?: string;
    [key: string]: unknown;
}

/**
 * Universal helper for tracking Google Ads conversions without global type conflicts
 */
export const trackConversion = (params?: ConversionParams): void => {
    if (typeof window === "undefined") return;

    const win = window as unknown as {
        gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    };

    if (typeof win.gtag === "function") {
        win.gtag("event", "conversion", {
            send_to: params?.sendTo || CONVERSION_SEND_TO,
            value: params?.value ?? 1.0,
            currency: params?.currency || "UAH",
            ...params,
        });
    }
};
