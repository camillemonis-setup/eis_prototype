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
            <TabsContent value="exhibitors">
                <ExhibitorTable/>
            </TabsContent>
            <TabsContent value="event">
                <h1>event</h1>
            </TabsContent>
            <TabsContent value="city">
                <h1>city</h1>
            </TabsContent>
            <TabsContent value="service">
                <h1>service</h1>
            </TabsContent>
            <TabsContent value="space">
                <h1>space</h1>
            </TabsContent>
            <TabsContent value="hotel">
                <h1>hotel</h1>
            </TabsContent>
        </Tabs>
    )
}
