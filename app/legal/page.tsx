import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export default function LegalPage() {
    return (
        <div
            className="flex flex-col w-ful overflow-hidden">
            <header className="w-full h-full bg-[linear-gradient(10.25deg,#351d59_-9.46%,#341c55_40.87%,#000000_93.06%)] flex flex-col gap-4">
                <Header/>
            </header>
            <div className="min-h-screen w-full bg-[linear-gradient(10.25deg,#3C157F_-9.46%,#7134C2_40.87%,#171717_93.06%)] py-10 px-4 md:px-8 font-sans">
                <div
                    className="max-w-3xl mx-auto bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl text-white/80">

                    {/*/!* Кнопка назад *!/*/}
                    {/*<Link href="/public"*/}
                    {/*      className="inline-flex items-center text-[#5ce1e6] hover:text-white font-bold text-sm mb-8 transition-colors">*/}
                    {/*    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
                    {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                    {/*              d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>*/}
                    {/*    </svg>*/}
                    {/*    На головну сторінку*/}
                    {/*</Link>*/}

                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-8">Юридична інформація</h1>

                    <div className="space-y-4 text-sm md:text-base leading-relaxed">
                        <p>
                            <strong className="text-white">Адреса:</strong> Грецька площа, 3/4, Одеса, Одеська область,
                            Україна, 65000
                        </p>
                        <p>
                            <strong className="text-white">Email:</strong> <a href="mailto:supportlamacash@gmail.com"
                                                                              className="text-[#5ce1e6] hover:underline">supportlamacash@gmail.com</a>
                        </p>
                        <p>
                            <strong className="text-white">Телефон:</strong> <a href="tel:+380935996385"
                                                                                className="text-[#5ce1e6] hover:underline">+38
                            (093) 599 63 85</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}