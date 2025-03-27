'use client'

import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { AgGridReact } from "ag-grid-react";
import {
    AllCommunityModule,
    ClientSideRowModelModule,
    ColDef,
    FirstDataRenderedEvent,
    GridReadyEvent,
    ModuleRegistry,
    RowApiModule,
    ValidationModule,
} from "ag-grid-community";
import {
    ColumnMenuModule,
    ColumnsToolPanelModule,
    ContextMenuModule,
    MasterDetailModule,
} from "ag-grid-enterprise";

ModuleRegistry.registerModules([
    RowApiModule,
    ClientSideRowModelModule,
    ColumnsToolPanelModule,
    MasterDetailModule,
    ColumnMenuModule,
    ContextMenuModule,
    ValidationModule /* Development Only */,
]);
import { AllEnterpriseModule, LicenseManager } from 'ag-grid-enterprise';
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { Employee } from "@/app/client/interfaces";
import { Trash2Icon } from "lucide-react";
import { deleteEmployee } from "@/app/client/actions";
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
// Register all Community and Enterprise features
ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey('[TRIAL]_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-078794}_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_purchasing_a_production_key_please_contact_info@ag-grid.com___You_are_granted_a_{Single_Application}_Developer_License_for_one_application_only___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_{14 April 2025}____[v3]_[0102]_MTc0NDU4NTIwMDAwMA==0e65fd8a353058a58afb8d7be064e726');
interface EmployeeTableProps {
    data: Employee[];
}
const EmployeeTable = ({ data }: EmployeeTableProps) => {

    const [changes, setChanges] = useState<Employee[]>([]);
    const [rowData, setRowData] = useState<Employee[]>();

    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        { field: "id", editable: true },
        { field: "name", cellRenderer: "agGroupCellRenderer", editable: true },
        { field: "lastname", cellRenderer: "agGroupCellRenderer", editable: true },
        { field: "country", editable: true },
        { field: "bday", editable: true },
        {
            field: "Action",
            cellRenderer: (params: any) => (
                <Button onClick={() => handleDelete(params.data.id)} className="btn btn-danger">
                    <Trash2Icon />
                </Button>
            ),
        },
    ]);

    const handleDelete = useCallback(async (id: string) => {
        try {
            deleteEmployee(id);
            setRowData(prevRowData => prevRowData?.filter(row => row.id !== id));
            setChanges(prevChanges => prevChanges.filter(change => change.id !== id));
            toast.success(`Row ${id} deleted successfully!`);
        } catch (error) {
            console.error('Error deleting row:', error);
            toast.error("Failed to delete the row");
        }
    }, []);

    const defaultColDef = useMemo<ColDef>(() => {
        return {
            flex: 1,
        };
    }, []);

    const onGridReady = useCallback((params: GridReadyEvent) => {
        setRowData(data);
    }, []);

    const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
        setTimeout(() => {
            params.api.getDisplayedRowAtIndex(1)!.setExpanded(true);
        }, 0);
    }, []);

    const onCellValueChanged = useCallback((event: any) => {
        const updatedData = event.data;
            // Validations
    if (updatedData.name.length < 2) {
        toast.error(`Name must be at least 2 characters long!`);
        // Optionally, reset the invalid value to its previous state
        event.node.setDataValue('name', event.oldValue);
        return;
    }
    if (updatedData.lastname.length < 2) {
        toast.error(`Last Name must be at least 2 characters long!`);
        // Optionally, reset the invalid value to its previous state
        event.node.setDataValue('lastname', event.oldValue);
        return;
    }
        console.log('Data after change:', updatedData);
        setChanges(prevChanges => {
            // Check if the row already exists in the changes array
            const existingIndex = prevChanges.findIndex(item => item.id === updatedData.id);
            if (existingIndex !== -1) {
                // Update the existing row
                const updatedChanges = [...prevChanges];
                updatedChanges[existingIndex] = updatedData;
                return updatedChanges;
            } else {
                // Add the new row
                return [...prevChanges, updatedData];
            }
        });
    }, []);

    const saveChanges = useCallback(() => {
        const savePromises = changes.map(change => {
            return fetch(`https://672352bf493fac3cf24a7644.mockapi.io/testproj/getall/${change.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(change),
            });
        });

        Promise.all(savePromises)
            .then(responses => {
                const allSuccessful = responses.every(response => response.ok);
                if (allSuccessful) {
                    console.log('All changes saved successfully');
                    setChanges([]); // Clear changes after successful save
                    toast.success("All changes saved successfully!")
                } else {
                    console.error('Failed to save some changes');
                    toast("Failed to save some changes")
                }
            })
            .catch(error => {
                console.error('Error saving changes:', error);
            });
    }, [changes]);
    // this is to change in every single change
    // const onCellValueChanged = useCallback((event: any) => {
    //     const updatedData = event.data;
    //     console.log('Data after change:', updatedData);
    //     // Here you can make an API call to save the updated data
    //     // Example:
    //     // fetch('https://your-api-endpoint', {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'Content-Type': 'application/json',
    //     //     },
    //     //     body: JSON.stringify(updatedData),
    //     // });
    // }, []);


    return (
        <>
            <Button onClick={saveChanges} className="btn btn-primary">Save Changes</Button>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
                onFirstDataRendered={onFirstDataRendered}
                onCellValueChanged={onCellValueChanged}
            />
        </>
    )
}

export default EmployeeTable