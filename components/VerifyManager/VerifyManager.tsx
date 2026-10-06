"use client";

import React, {useState, useId} from "react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import {useTranslations} from "next-intl";
import {LamaMascotSvg} from "@/components/LamaMascotSvg";

export type VerificationState =
    | "idle"
    | "empty_error"
    | "invalid_format"
    | "success"
    | "scam";

export const OFFICIAL_MANAGER_USERNAME = "lama_cash_manager";
export const OFFICIAL_MANAGER_URL = "https://t.me/lama_cash_manager";

/**
 * Normalizes Telegram input based on strict business logic:
 * 1. Trim surrounding whitespace
 * 2. Convert to lowercase
 * 3. Strip protocols and domains: https://, http://, t.me/, telegram.me/
 * 4. Strip leading '@' symbols
 * 5. Strip query params (?start=...), hashes (#...), and trailing slashes
 */
export function normalizeTelegramUsername(input: string): string {
    let cleaned = input.trim().toLowerCase();

    // Strip protocol
    cleaned = cleaned.replace(/^https?:\/\//i, "");

    // Strip domain (with optional www.)
    cleaned = cleaned.replace(/^(?:www\.)?(?:t\.me|telegram\.me)\//i, "");

    // Strip query parameters and fragment identifier
    cleaned = cleaned.split("?")[0].split("#")[0];

    // Strip trailing slashes
    cleaned = cleaned.replace(/\/+$/, "");

    // Strip leading '@' (one or multiple)
    cleaned = cleaned.replace(/^@+/, "");

    return cleaned;
}

export default function VerifyManager() {
    const t = useTranslations("VerifyManager");
    const inputId = useId();

    const [inputValue, setInputValue] = useState("");
    const [state, setState] = useState<VerificationState>("idle");
    const [checkedUsername, setCheckedUsername] = useState("");
    const [shakeKey, setShakeKey] = useState(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (state === "empty_error" || state === "invalid_format") {
            setState("idle");
        }
    };

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();

        const rawTrimmed = inputValue.trim();
        if (!rawTrimmed) {
            setState("empty_error");
            setShakeKey((k) => k + 1);
            return;
        }

        const normalized = normalizeTelegramUsername(rawTrimmed);

        // Telegram usernames consist of 3 to 32 alphanumeric chars or underscores
        const isValidUsername = /^[a-z0-9_]{3,32}$/.test(normalized);

        if (!isValidUsername) {
            setState("invalid_format");
            setShakeKey((k) => k + 1);
            return;
        }

        setCheckedUsername(normalized);

        if (normalized === OFFICIAL_MANAGER_USERNAME) {
            setState("success");
        } else {
            setState("scam");
        }
    };

    const handleReset = () => {
        setState("idle");
        setInputValue("");
        setCheckedUsername("");
    };

    // Configure mascot speech bubble based on current state
    const bubbleConfig = (() => {
        switch (state) {
            case "empty_error":
            case "invalid_format":
                return {
                    text: state === "empty_error" ? t("emptyErrorBubble") : t("invalidFormatBubble"),
                    stops: [
                        {offset: "0%", color: "#FFA4A4"},
                        {offset: "50%", color: "#FFBDBD"},
                        {offset: "100%", color: "#FFE2E2"},
                    ],
                    borderStroke: "transparent",
                };
            case "success":
                return {
                    text: t("successBubble"),
                    stops: [{offset: "100%", color: "#FFFFFF"}],
                    borderStroke: "rgba(243, 232, 255, 0.5)", // border-purple-100/50
                };
            case "scam":
                return {
                    text: t.rich("scamBubble", {
                        highlight: (chunks) => (
                            <span className="text-[#41B4F2] font-normal">
                                    {chunks}
                                </span>
                        ),
                    }),
                    stops: [{offset: "100%", color: "#FFFFFF"}],
                    borderStroke: "rgba(255, 228, 230, 0.6)", // border-rose-100/60
                };
            case "idle":
            default:
                return {
                    text: t("idleBubble"),
                    stops: [
                        {offset: "0%", color: "#B4E2FE"},
                        {offset: "100%", color: "#E3E3E3"},
                    ],
                    borderStroke: "transparent",
                };
        }
    })();

    const isResultState = state === "success" || state === "scam";
    const isPhoneCompact = !isResultState;

    const wallColorClass = (() => {
        switch (state) {
            case "success":
                return "text-[#D3B7FA]"; // или цвет нижней точки градиента success
            case "scam":
                return "text-[#FFD1D1]"; // цвет фона scam
            case "empty_error":
            case "invalid_format":
            case "idle":
            default:
                return "text-[#F0F0F0]"; // исходный светло-серый фон
        }
    })();

    return (
        <section
            className="relative w-full min-h-[calc(100vh-140px)] flex flex-col justify-center items-center overflow-hidden">

            {/* Dynamic Animated Background Layers */}
            <div className="absolute inset-0 bg-[#F0F0F0] z-0 transition-colors duration-700"/>

            {/* Lilac Purple Gradient for Success State */}
            <motion.div
                initial={false}
                animate={{opacity: state === "success" ? 1 : 0}}
                transition={{duration: 0.6, ease: "easeInOut"}}
                className="absolute inset-0 bg-linear-to-b from-[#B088F4] via-[#D3B7FA] to-[#E3E3E3] z-0 pointer-events-none"
            />

            {/* Coral Red Pastel Gradient for Scam State */}
            <motion.div
                initial={false}
                animate={{opacity: state === "scam" ? 1 : 0}}
                transition={{duration: 0.6, ease: "easeInOut"}}
                className="absolute inset-0 bg-linear-to-b from-[#F48A8C] via-[#FFD1D1] to-[#FFFFFF] z-0 pointer-events-none"
            />

            {/* Main Container */}
            <div className="z-10 w-full max-w-6xl flex flex-col justify-between lg:pb-20">

                {/* Content Wrapper (Desktop: Horizontal row | Mobile: Vertical stack) */}
                <div
                    className="w-full flex flex-col md:flex-row items-center md:items-end justify-center gap-6 lg:gap-12">

                    <div
                        className="w-full max-w-140 gap-8 md:max-w-none md:flex-1 flex flex-col justify-center py-5 md:py-16 px-4 sm:px-6 lg:px-8">

                        <div className="text-center md:text-left">
                            {state === "invalid_format" ? (
                                <motion.h1
                                    key="title-invalid"
                                    initial={{opacity: 0, y: -4}}
                                    animate={{opacity: 1, y: 0}}
                                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-getvoip font-bold whitespace-pre-line text-rose-600 uppercase tracking-tight leading-tight text-center"
                                >
                                    {t("invalidFormatTitle")}
                                </motion.h1>
                            ) : state === "success" ? (
                                <motion.div
                                    key="title-success"
                                    initial={{opacity: 0, y: -4}}
                                    animate={{opacity: 1, y: 0}}
                                    className="flex flex-col gap-5 md:pb-12"
                                >
                                    <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-[35px] whitespace-pre-line text-center font-getvoip font-bold text-[#171717] uppercase tracking-normal leading-[120%]">
                                        {t("successTitle")}
                                    </h1>
                                    <p className="font-bold font-rubik text-xl sm:text-base text-[#171717] whitespace-pre-line text-center tracking-normal leading-[109%]">
                                        {t("successSubtitle")}
                                    </p>
                                </motion.div>
                            ) : state === "scam" ? (
                                <motion.div
                                    key="title-scam"
                                    initial={{opacity: 0, y: -4}}
                                    animate={{opacity: 1, y: 0}}
                                    className="flex flex-col gap-8 md:pb-12"
                                >
                                    <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-[35px] whitespace-pre-line text-center font-getvoip font-bold uppercase tracking-normal leading-[120%] text-[#171717]">
                                        {t("scamTitle")}
                                    </h1>
                                    <p className="font-bold font-rubik text-xl sm:text-base text-[#171717] whitespace-pre-line text-center tracking-normal leading-[109%]">
                                        {t("scamSubtitle")}
                                    </p>
                                </motion.div>
                            ) : (
                                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-[35px] whitespace-pre-line text-center font-getvoip font-bold text-[#171717] uppercase tracking-normal leading-[120%]">
                                    {t("idleTitle")}
                                </h1>
                            )}
                        </div>

                        {/* 3 Numbered Steps (Shown in idle and error states) */}
                        {!isResultState && (
                            <div
                                className="flex flex-row items-center justify-center gap-8 sm:gap-12 text-center md:pb-6">
                                {[
                                    {step: "( 1 )", key: "step1"},
                                    {step: "( 2 )", key: "step2"},
                                    {step: "( 3 )", key: "step3"},
                                ].map(({step, key}) => (
                                    <div
                                        key={key}
                                        className="flex flex-col items-center justify-center gap-2 font-rubik text-neutral-500 font-light text-xs sm:text-sm leading-snug whitespace-pre-line"
                                    >
                                        <span className="text-neutral-600 font-normal">{step}</span>
                                        <span>
                                                {t.rich(key, {
                                                    highlight: (chunks) => (
                                                        <span className="text-[#41B4F2] font-normal">
                                                            {chunks}</span>
                                                    ),
                                                })}
                                            </span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Dynamic Form / Action Container */}
                        <AnimatePresence mode="wait">
                            {isResultState ? (
                                <motion.div
                                    key="result-view"
                                    initial={{opacity: 0, scale: 0.96, y: 10}}
                                    animate={{opacity: 1, scale: 1, y: 0}}
                                    exit={{opacity: 0, scale: 0.96}}
                                    transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
                                    className="w-full flex flex-col md:flex-row items-center justify-center gap-3.5"
                                >
                                    {/* Result Badge */}
                                    {state === "success" ? (
                                        <>
                                            <div
                                                className="h-14 w-full max-w-75 px-6 rounded-[10px] text-sm bg-white border-2 border-[#8B5CF6] flex items-center justify-center text-[#7C3AED] font-rubik font-bold shadow-xs shrink-0">
                                                @{OFFICIAL_MANAGER_USERNAME}
                                            </div>

                                            {/* Primary Button: Write to Official Manager */}
                                            <a
                                                href={OFFICIAL_MANAGER_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="h-14 w-full max-w-75 rounded-[10px] p-0 bg-[#171717] font-getvoip font-bold text-base uppercase tracking-[3%] hover:bg-neutral-800 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
                                            >
                                                <span>{t("successButtonMessage")}</span>
                                            </a>

                                            {/* Secondary Button: Verify another username */}
                                            <button
                                                type="button"
                                                onClick={handleReset}
                                                className="h-14 w-full max-w-75 rounded-[10px] font-getvoip font-bold text-base uppercase tracking-[3%] bg-white/40 hover:bg-white/60 text-[#5B21B6] border border-white backdrop-blur-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shrink-0"
                                            >
                                                <span>{t("successButtonReset")}</span>
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="h-14 w-full max-w-75 px-6 rounded-[10px] text-sm bg-white border-2 border-rose-500 flex items-center justify-center  text-rose-600 font-rubik font-bold  shadow-xs shrink-0 truncate">
                                                @{checkedUsername}
                                            </div>

                                            {/* Primary Button: Write to real manager */}
                                            <a
                                                href={OFFICIAL_MANAGER_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="h-14 w-full max-w-75 px-2 text-sm text-center rounded-[10px] font-getvoip font-bold uppercase bg-[#171717] hover:bg-neutral-800 text-white tracking-[3%] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shrink-0"
                                            >
                                                <span>{t("scamButtonMessage")}</span>
                                            </a>

                                            {/* Secondary Button: Check again */}
                                            <button
                                                type="button"
                                                onClick={handleReset}
                                                className="h-14 w-full max-w-75 px-6 rounded-[10px] text-base font-getvoip uppercase tracking-[3%] bg-white/50 hover:bg-white/70 text-rose-950 border border-white/80 backdrop-blur-sm font-bold   transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shrink-0"
                                            >
                                                {/*<RotateCcw className="w-4 h-4"/>*/}
                                                <span>{t("scamButtonReset")}</span>
                                            </button>
                                        </>
                                    )}
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="input-form"
                                    onSubmit={handleVerify}
                                    className="w-full flex flex-col md:flex-row items-center justify-center gap-6 max-md:gap-4"
                                >
                                    {/* Shake wrapper for error states */}
                                    <motion.div
                                        key={`input-shake-${shakeKey}`}
                                        animate={
                                            shakeKey > 0 ? {x: [-8, 8, -6, 6, 0]} : {x: 0}
                                        }
                                        transition={{duration: 0.35, ease: "easeInOut"}}
                                        className="relative w-full max-w-75"
                                    >
                                        <label htmlFor={inputId} className="sr-only">
                                            {t("placeholder")}
                                        </label>
                                        <input
                                            id={inputId}
                                            type="text"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            placeholder={
                                                state === "empty_error"
                                                    ? t("emptyErrorPlaceholder")
                                                    : t("placeholder")
                                            }
                                            autoComplete="off"
                                            spellCheck={false}
                                            className={`w-full max-w-75 h-14 px-5 rounded-[10px] bg-white placeholder:text-sm text-base md:text-lg font-medium transition-all outline-none ${
                                                state === "empty_error"
                                                    ? "border-2 border-rose-500 text-rose-500 placeholder:text-rose-500 placeholder:font-medium ring-4 ring-rose-500/15"
                                                    : state === "invalid_format"
                                                        ? "border-2 border-rose-500 text-rose-600 placeholder:text-rose-400 ring-4 ring-rose-500/15"
                                                        : "border-2 border-[#38BDF8] text-neutral-900 placeholder:text-neutral-400 focus:ring-4 focus:ring-[#38BDF8]/20"
                                            }`}
                                        />
                                    </motion.div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="h-14 px-8 rounded-[10px] w-full max-w-75 bg-[#171717] hover:bg-neutral-800 active:scale-95 text-white font-getvoip text-base font-bold tracking-wider uppercase transition-all shadow-md shrink-0 flex items-center justify-center cursor-pointer"
                                    >
                                        {t("checkButton")}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Desktop Lama Mascot Column */}
            <div
                className="absolute max-lg:relative justify-start self-start left-0 flex flex-col items-center w-72 lg:w-88 shrink-0 select-none">

                <motion.div
                    key={`desktop-${bubbleConfig.text}`}
                    initial={{opacity: 0, scale: 0.8, y: 12}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    exit={{opacity: 0, scale: 0.85}}
                    transition={{type: "spring", damping: 15, stiffness: 220}}
                    className={`absolute top-0 flex items-center justify-center select-none ${
                        isPhoneCompact
                            ? "max-sm:right-[-25%] max-sm:max-w-40 max-sm:max-h-22.5 sm:max-lg:right-[-18%] lg:right-[5%] max-w-70 w-60 h-27.5"
                            : "max-lg:right-[-18%] lg:right-[5%] max-w-70 w-60 h-27.5"
                    }`}
                >
                    <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="none"
                        className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm overflow-visible"
                        aria-hidden="true"
                    >
                        <defs>
                            <linearGradient id="mascotBubbleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                {bubbleConfig.stops.map((stop, idx) => (
                                    <stop key={idx} offset={stop.offset} stopColor={stop.color}/>
                                ))}
                            </linearGradient>
                        </defs>
                        <path
                            d="M 1.2 17.14 L 3.8 12 L 4.6 17.83 Z"
                            fill="url(#mascotBubbleGrad)"
                            stroke={bubbleConfig.borderStroke}
                            strokeWidth="0.15"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        />
                        <ellipse
                            cx="13.2"
                            cy="12"
                            rx="10.6"
                            ry="11.14"
                            fill="url(#mascotBubbleGrad)"
                            stroke={bubbleConfig.borderStroke}
                            strokeWidth="0.15"
                        />

                    </svg>
                    <span
                        className="relative z-10 pl-5 pr-2 py-2 font-rubik text-base max-sm:text-[10px] font-light tracking-[0%] leading-[109%] text-[#171717] whitespace-pre-line text-center pointer-events-none">
                            {bubbleConfig.text}
                        </span>
                </motion.div>

                <div className={`w-64 h-64 lg:w-64 lg:h-64 transition-colors duration-700 ease-in-out ${wallColorClass}`}>
                    <AnimatePresence mode="wait">
                        {isResultState ? (
                            <motion.div
                                key="result-mascot"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="w-full h-full"
                            >
                                <Image
                                    src="/lama-out-hands.svg"
                                    alt={t("mascotAlt")}
                                    fill
                                    sizes="(max-width: 1024px) 280px, 320px"
                                    className="object-contain object-left pointer-events-none"
                                    priority
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="idle-mascot"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="w-full h-full"
                            >
                                <div className="w-full h-full block sm:hidden">
                                    <LamaMascotSvg className="w-full h-full object-contain object-left pointer-events-none" />
                                </div>

                                <Image
                                    src="/lama-out-hands.svg"
                                    alt={t("mascotAlt")}
                                    fill
                                    sizes="(max-width: 1024px) 280px, 320px"
                                    className="hidden sm:block object-contain object-left pointer-events-none"
                                    priority
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}