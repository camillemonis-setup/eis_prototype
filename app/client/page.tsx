
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Employee } from "./interfaces";
import EmployeeTable from "@/components/client/EmployeeTable";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// export const revalidate = 2

export async function getEmployees() {
    const res = await fetch('https://672352bf493fac3cf24a7644.mockapi.io/testproj/getall',{
        cache: 'force-cache',
      })

    const employee_info:Employee[] = await res.json()
   
    return employee_info
}

export default async function MasterDetail() {
            const employee_data = await getEmployees()
    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <ModeToggle />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">
                                    Schedules
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <h2 className="text-2xl/7 font-bold text-gray-900 dark:text-gray-100 sm:truncate sm:text-3xl sm:tracking-tight">Schedule: Asia Education Fair</h2>
                    <Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />}>
                    <EmployeeTable data={employee_data}/>
                    </Suspense>
            </div>
        </>
    );
};
