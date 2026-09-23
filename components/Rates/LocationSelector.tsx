"use client";

import {useState, useEffect} from "react";
import {Dialog, DialogContent, DialogHeader} from "@/components/ui/dialog";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle} from "@/components/ui/drawer";
import {ChevronLeft} from "lucide-react";
import {locations, Location} from "@/lib/data/calculator-mocks";
import Image from "next/image";

interface LocationSelectorProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    selectedLocation: Location | null;
    onSelect: (location: Location) => void;
}

const categories = ["Всі", "Україна", "Країни ЄС", "США", "Азія"];

export function LocationSelector({isOpen, onOpenChange, selectedLocation, onSelect}: LocationSelectorProps) {
    const [activeCategory, setActiveCategory] = useState("Всі");
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkMedia = () => setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
        checkMedia();
        window.addEventListener("resize", checkMedia);
        return () => window.removeEventListener("resize", checkMedia);
    }, []);

    const filteredLocations = activeCategory === "Всі"
        ? locations
        : locations.filter((l) => l.category === activeCategory);

    const grouped = filteredLocations.reduce((acc, loc) => {
        if (!acc[loc.country]) {
            acc[loc.country] = {
                flagColor: loc.iconPlaceholderColor,
                iconPath: loc.iconPath,
                cities: []
            };
        }
        acc[loc.country].cities.push(loc);
        return acc;
    }, {} as Record<string, { flagColor: string, iconPath?: string, cities: Location[] }>);

    const Content = (
        <div className="flex flex-col h-full overflow-hidden">
            <div className="p-4 flex-1 overflow-hidden flex flex-col">

                {/* Filter Pills */}
                <div className="flex flex-wrap w-full gap-2 pb-4 mb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`grow px-4 py-2 rounded-[6px] cursor-pointer whitespace-nowrap text-sm border ${
                                activeCategory === cat
                                    ? "bg-[#171717] text-white border-[#171717]"
                                    : "bg-transparent text-black border-[#171717]"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto space-y-4">
                    {Object.entries(grouped).map(([country, data]) => (
                        <div key={country}>
                            <div className="flex items-center gap-2 mb-2 px-4">
                                <div
                                    className={`w-6 h-6 rounded-sm overflow-hidden shrink-0 flex items-center justify-center ${!data.iconPath ? data.flagColor : 'bg-transparent'}`}>
                                    {data.iconPath && (
                                        <Image
                                            src={data.iconPath}
                                            alt={country}
                                            width={25}
                                            height={25}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                                <span className="font-bold text-sm text-gray-700">{country}</span>
                            </div>
                            <div className="space-y-1">
                                {data.cities.map((loc) => (
                                    <div
                                        key={loc.id}
                                        onClick={() => onSelect(loc)}
                                        className={`p-2 gap-3 px-4 rounded-[5px]  cursor-pointer ${
                                            selectedLocation?.id === loc.id ? "bg-[#5EF6BA]" : "hover:bg-gray-50"
                                        }`}
                                    >
                                        {loc.city}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 flex gap-4 bg-white font-getvoip">
                <button
                    onClick={() => onOpenChange(false)}
                    className="flex-1 flex items-center cursor-pointer justify-evenly gap-2 py-3 rounded-[6px] border border-[#171717] font-bold text-base max-md:text-[10px] uppercase"
                >
                    <ChevronLeft className="w-5 h-5"/>
                    НАЗАД
                </button>
                <button
                    onClick={() => onOpenChange(false)}
                    className="flex-1 py-3 rounded-[6px] cursor-pointer bg-[#171717] text-white font-bold text-base max-md:text-[10px] uppercase"
                >
                    РАХУЄМО
                </button>
            </div>
        </div>
    );

    if (isDesktop) {
        return (
            <Dialog open={isOpen} onOpenChange={onOpenChange}>
                <DialogContent className="max-w-md h-[80vh] flex flex-col p-0">
                    <DialogHeader className="p-2">
                        {/*<DialogTitle>Виберіть валюту</DialogTitle>*/}
                    </DialogHeader>
                    {Content}
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={isOpen} onOpenChange={onOpenChange}>
            <DrawerContent className="h-[85vh]">
                <DrawerHeader className="hidden">
                    <DrawerTitle>Виберіть локацію</DrawerTitle>
                </DrawerHeader>
                {Content}
            </DrawerContent>
        </Drawer>
    );
}
