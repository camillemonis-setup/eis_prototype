import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ExhibitorTable from "./exhibitors-table"
import EventTable from "./event-details"

export function TabsDemo() {
    return (
        <Tabs defaultValue="exhibitors" className="w-full">
            <TabsList className="w-full">
                <TabsTrigger value="exhibitors">Exhibitor</TabsTrigger>
                <TabsTrigger value="event">Event Details</TabsTrigger>
                <TabsTrigger value="city">City Config</TabsTrigger>
                <TabsTrigger value="service">Service Config</TabsTrigger>
                <TabsTrigger value="space">Space Config</TabsTrigger>
                <TabsTrigger value="hotel">Hotel Config</TabsTrigger>
            </TabsList>
            <TabsContent value="exhibitors" className="min-h-[500px] w-full">
                <ExhibitorTable/>
            </TabsContent>
            <TabsContent value="event" className="min-h-[500px] w-full">
                <EventTable/>
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
