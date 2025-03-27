import EmployeeTable from "@/components/client/EmployeeTable";
import { Employee } from "@/app/client/interfaces";
import ReportsTable from "@/components/booking/reports-table";

// export const revalidate = 2

async function getEmployees() {
    const res = await fetch('https://672352bf493fac3cf24a7644.mockapi.io/testproj/getall', {
        cache: 'force-cache',
    })

    const employee_info: Employee[] = await res.json()

    return employee_info
}

export default async function page() {
    const employee_data = await getEmployees()
    return (
        <ReportsTable data={employee_data} />
    );
};
