import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import ExhibitorTable from "./exhibitors-table"

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
            <TabsContent value="exhibitors" className="h-[500px] w-full">
                <ExhibitorTable/>
            </TabsContent>
            <TabsContent value="event" className="h-[500px] w-full">
                <h1>event</h1>
            </TabsContent>
            <TabsContent value="city" className="h-[500px] w-full">
                <h1>city</h1>
            </TabsContent>
            <TabsContent value="service" className="h-[500px] w-full">
                <h1>service</h1>
            </TabsContent>
            <TabsContent value="space" className="h-[500px] w-full">
                <h1>space</h1>
            </TabsContent>
            <TabsContent value="hotel" className="h-[500px] w-full">
                <h1>hotel</h1>
            </TabsContent>
        </Tabs>
    )
}
