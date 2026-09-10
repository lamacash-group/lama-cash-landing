import React from "react";

export default function LegalPage() {
    return (
        <div className="flex flex-col w-ful overflow-hidden">

            <div className="min-h-screen w-full bg-[linear-gradient(10.25deg,#3C157F_-9.46%,#7134C2_40.87%,#171717_93.06%)] py-10 px-4 md:px-8 font-sans">
                <div
                    className="max-w-3xl mx-auto bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl text-white/80">

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
        </div>
    );
}