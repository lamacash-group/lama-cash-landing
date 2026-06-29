import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {Home} from "@/components/Home";
import {ScrollStack} from "@/components/StackingCards";
import MoreServices from "@/components/MoreServices";
import {LamaCashMedia} from "@/components/LamaCashMedia";
import {Blog} from "@/components/Blog";
import {Questions} from "@/components/Questions";

export default function Main() {

    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans w-full mx-auto min-h-screen">
            <div
                className="flex flex-col w-full bg-[linear-gradient(10.25deg,#3C157F_-9.46%,#7134C2_40.87%,#171717_93.06%)] overflow-hidden">
                <header className="w-full h-full flex flex-col gap-4">
                    <Header/>
                </header>
                <Home/>
            </div>
            <main className="w-full h-full">
                <section>
                    <ScrollStack/>
                </section>
                <section id="services">
                    <MoreServices/>
                </section>
                <section>
                    <Questions/>
                </section>
                <section id="media">
                    <LamaCashMedia/>
                </section>
                <section id="blog">
                    <Blog/>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
