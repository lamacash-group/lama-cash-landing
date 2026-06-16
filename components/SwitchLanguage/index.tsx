import * as React from 'react';
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";

export const SwitchLanguage = () => {


    return (
        <div>
            <Select defaultValue={"UA"}>
                <SelectTrigger className="text-white px-0 py-0 border-none select-none gap-2 text-base cursor-pointer" classNameTrigger="text-white">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent position="popper" className="min-w-full">
                    <SelectItem value="UA" className="max-w-16 w-full cursor-pointer">UA</SelectItem>
                    <SelectItem value="ENG" className="max-w-16 w-full cursor-pointer">ENG</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};