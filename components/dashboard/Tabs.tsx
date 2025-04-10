'use client'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
// import ExhibTable from "./exhibitors-table"
// import EventTable from "./event-details"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Label } from "../ui/label"
import { useState } from "react"
import ExhibTable from "./ExhibTable"

export function TabsDemo() {
    const [view, setView] = useState("exhibitors")
    
    return (
        <Tabs value={view} onValueChange={setView} className="flex w-full flex-col justify-start gap-6">
            <Label htmlFor="view-selector" className="sr-only">
                View
            </Label>
            <div className="flex md:hidden">
            <Select defaultValue="exhibitors" onValueChange={(e)=>setView(e)}>
                <SelectTrigger
                    className=" flex w-fit"
                    id="view-selector"
                >
                    <SelectValue placeholder="Select a view" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="exhibitors">Exhibitor</SelectItem>
                    <SelectItem value="event">Event Details</SelectItem>
                    <SelectItem value="city">City Config</SelectItem>
                    <SelectItem value="service">Service Config</SelectItem>
                    <SelectItem value="space">Space Config</SelectItem>
                    <SelectItem value="hotel">Hotel Config</SelectItem>
                </SelectContent>
            </Select>
            </div>

            <TabsList className="hidden md:flex w-full">
                <TabsTrigger value="exhibitors">Exhibitor</TabsTrigger>
                <TabsTrigger value="event">Event Details</TabsTrigger>
                <TabsTrigger value="city">City Config</TabsTrigger>
                <TabsTrigger value="service">Service Config</TabsTrigger>
                <TabsTrigger value="space">Space Config</TabsTrigger>
                <TabsTrigger value="hotel">Hotel Config</TabsTrigger>
            </TabsList>
            <TabsContent value="exhibitors" className="min-h-[500px] w-full">
                <ExhibTable />
            </TabsContent>
            <TabsContent value="event" className="min-h-[500px] w-full">
                {/* <EventTable /> */}
            </TabsContent>
            <TabsContent value="city" className="min-h-[500px] w-full">
                <h1>city</h1>
            </TabsContent>
            <TabsContent value="service" className="min-h-[500px] w-full">
                <h1>service</h1>
            </TabsContent>
            <TabsContent value="space" className="min-h-[500px] w-full">
                <h1>space</h1>
            </TabsContent>
            <TabsContent value="hotel" className="min-h-[500px] w-full">
                <h1>hotel</h1>
            </TabsContent>
        </Tabs>
    )
}
