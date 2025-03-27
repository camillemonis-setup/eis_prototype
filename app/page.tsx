import { AppSidebar } from "@/components/app-sidebar"
import { TabsDemo } from "@/components/dashboard/data-table"
import { PieChartDashboard } from "@/components/dashboard/pie-chart"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/ui/mode-toggle"
import {
  ChartConfig,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"


const profilesData = [
  { status: "Complete", progress: 375, fill: "#D22B2B" },
  { status: "Incomplete", progress: 20, fill: "#FF5C5C" },
]
const descData = [
  { status: "Complete", progress: 75, fill: "#D22B2B" },
  { status: "Incomplete", progress: 400, fill: "#FF5C5C" },
]

const logosData = [
  { status: "Complete", progress: 675, fill: "#D22B2B" },
  { status: "Incomplete", progress: 70, fill: "#FF5C5C" },
]

const chartConfig = {
  progress: {
    label: "progress",
  }
} satisfies ChartConfig

export default function Page() {
  return (
        <>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <ModeToggle/>
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <h2 className="text-2xl/7 font-bold text-gray-900 dark:text-gray-100 sm:truncate sm:text-3xl sm:tracking-tight">Schedule: Asia Education Fair</h2>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <PieChartDashboard chartConfig={chartConfig} chartData={profilesData} title="Profiles"/>
            <PieChartDashboard chartConfig={chartConfig}  chartData={descData} title="Description"/>
            <PieChartDashboard chartConfig={chartConfig}  chartData={logosData} title="Logos"/>
          </div>
          <TabsDemo />
        </div>
        </>
  )
}
