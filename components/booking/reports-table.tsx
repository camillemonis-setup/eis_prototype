'use client'
import { Employee } from '@/app/client/interfaces';
import React, { useCallback, useMemo, useState } from 'react'

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
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
// Register all Community and Enterprise features
ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey('[TRIAL]_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-078794}_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_purchasing_a_production_key_please_contact_info@ag-grid.com___You_are_granted_a_{Single_Application}_Developer_License_for_one_application_only___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_{14 April 2025}____[v3]_[0102]_MTc0NDU4NTIwMDAwMA==0e65fd8a353058a58afb8d7be064e726');

interface ReportsTableProps {
  data: any
}

const ReportsTable: React.FC<ReportsTableProps> = ({ data }) => {
    const [rowData, setRowData] = useState<Employee[]>(data);

    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        { field: "id", editable: true },
        { field: "name", cellRenderer: "agGroupCellRenderer", editable: true },
        { field: "lastname", cellRenderer: "agGroupCellRenderer", editable: true },
        { field: "country", editable: true },
        { field: "bday", editable: true },
    ]);

        const onGridReady = useCallback((params: GridReadyEvent) => {
            setRowData(data);
        }, []);
    
        const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
            setTimeout(() => {
                params.api.getDisplayedRowAtIndex(1)!.setExpanded(true);
            }, 0);
        }, []);

            const defaultColDef = useMemo<ColDef>(() => {
                return {
                    flex: 1,
                };
            }, []);
  return (
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
                onFirstDataRendered={onFirstDataRendered}
                // onCellValueChanged={onCellValueChanged}
            />
  )
}

export default ReportsTable 