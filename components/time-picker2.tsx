import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock } from "lucide-react";

const generateHourOptions = (): string[] => {
    const hours: string[] = [];
    for (let hour = 1; hour <= 12; hour++) {
        hours.push(hour.toString());
    }
    return hours;
};

const generateMinuteOptions = (): string[] => {
    const minutes: string[] = [];
    for (let minute = 0; minute < 60; minute++) {
        minutes.push(minute.toString().padStart(2, "0"));
    }
    return minutes;
};

type TimePickerProps = {
    value?: string;
    onChange?: (value: string) => void;
};

export default function TimePicker({ value, onChange }: TimePickerProps) {
    const [selectedHour, setSelectedHour] = useState<string>("");
    const [selectedMinute, setSelectedMinute] = useState<string>("");
    const [selectedPeriod, setSelectedPeriod] = useState<string>("AM");

    useEffect(() => {
        if (value) {
            const [time, period] = value.split(" ");
            const [hour, minute] = time.split(":");
            setSelectedHour(hour);
            setSelectedMinute(minute);
            setSelectedPeriod(period);
        }
    }, [value]);

    const hourOptions = generateHourOptions();
    const minuteOptions = generateMinuteOptions();

    const handleSelectHour = (hour: string) => {
        setSelectedHour(hour);
        updateSelectedTime(hour, selectedMinute, selectedPeriod);
    };

    const handleSelectMinute = (minute: string) => {
        setSelectedMinute(minute);
        updateSelectedTime(selectedHour, minute, selectedPeriod);
    };

    const handleSelectPeriod = (period: string) => {
        setSelectedPeriod(period);
        updateSelectedTime(selectedHour, selectedMinute, period);
    };

    const updateSelectedTime = (hour: string, minute: string, period: string) => {
        const time = `${hour}:${minute} ${period}`;
        onChange?.(time);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-[150px] justify-between">
                    {selectedHour && selectedMinute ? `${selectedHour}:${selectedMinute} ${selectedPeriod}` : "Select Time"}
                    <Clock className="h-4 w-4 ml-2" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0 flex">
                <Command>
                    <ScrollArea className="h-[200px] w-[100px]">
                        <CommandGroup>
                            {hourOptions.map((hour) => (
                                <CommandItem
                                    key={hour}
                                    onSelect={() => handleSelectHour(hour)}
                                    className="cursor-pointer"
                                >
                                    {hour}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </ScrollArea>
                </Command>
                <Command>
                    <ScrollArea className="h-[200px] w-[100px]">
                        <CommandGroup>
                            {minuteOptions.map((minute) => (
                                <CommandItem
                                    key={minute}
                                    onSelect={() => handleSelectMinute(minute)}
                                    className="cursor-pointer"
                                >
                                    {minute}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </ScrollArea>
                </Command>
                <Command>
                    <ScrollArea className="h-[200px] w-[100px]">
                        <CommandGroup>
                            {["AM", "PM"].map((period) => (
                                <CommandItem
                                    key={period}
                                    onSelect={() => handleSelectPeriod(period)}
                                    className="cursor-pointer"
                                >
                                    {period}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </ScrollArea>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
