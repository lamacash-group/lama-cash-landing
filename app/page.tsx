// import {useTranslations} from "next-intl";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {Home} from "@/components/Home";

export default function Main() {

    // const t = useTranslations('HomePage');

    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans max-w-120 w-full mx-auto min-h-screen overflow-hidden">
            <div className="bg-[linear-gradient(10.25deg,#3C157F_-9.46%,#7134C2_40.87%,#171717_93.06%)]
            flex flex-1 w-full flex-col items-center justify-between py-4 sm:items-start">
                <Header/>
                <div className="px-4">
                    <Home/>
                </div>
            </div>
            <main>

            </main>
            <Footer/>
        </div>
    );
}
