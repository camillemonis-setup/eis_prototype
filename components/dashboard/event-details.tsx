'use client'
import {
    AllCommunityModule, ModuleRegistry,
    ColDef,
} from 'ag-grid-community';
import { AllEnterpriseModule, LicenseManager } from 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
// Register all Community and Enterprise features
ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey('[TRIAL]_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-078794}_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_purchasing_a_production_key_please_contact_info@ag-grid.com___You_are_granted_a_{Single_Application}_Developer_License_for_one_application_only___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_{14 April 2025}____[v3]_[0102]_MTc0NDU4NTIwMDAwMA==0e65fd8a353058a58afb8d7be064e726');

import data from './event.json';
import { Button } from '../ui/button';
import { Edit2 } from 'lucide-react';
import Link from 'next/link';

const renderDropdown = (params: any) => {
    let bgColor;
    switch (params.value.toLowerCase()) {
        case 'stopped':
            bgColor = 'orange';
            break;
        case 'blocked':
            bgColor = 'red';
            break;
        default:
            bgColor = 'green';
    }
    return (
        <span style={{ background: bgColor, color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
            {params.value}
        </span>
    );

}

const EventTable = () => {
    const [rowData] = useState(data);

    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        { headerName: "City Name", field: "city_name", sortable: true, filter: true, editable: true, pinned: 'left', width:130 },
        { headerName: "Event Type", field: "event_type", sortable: true, filter: true, width: 150 },
        { headerName: "Country Code", field: "country_code", sortable: true, filter: true, editable: true },
        { headerName: "Start Date", field: "start_date", sortable: true, filter: "agDateColumnFilter", editable: true },
        { headerName: "Start Time", field: "start_time", sortable: true, filter: true, editable: true },
        { headerName: "Close Date", field: "close_date", sortable: true, filter: "agDateColumnFilter", editable: true },
        { headerName: "Close Time", field: "close_time", sortable: true, filter: true, editable: true },
        { headerName: "Status", field: "status", sortable: true, filter: true, editable: true, cellRenderer: (params: any) => renderDropdown(params), width: 130 },
        { headerName: "Venue Name", field: "venue.name", sortable: true, filter: true, editable: true },
        { headerName: "Venue Address", field: "venue.address", sortable: true, filter: true, editable: true },
        { headerName: "Telephone", field: "venue.telephone", sortable: true, filter: true, editable: true },
        { headerName: "Currency", field: "currency", sortable: true, filter: true, editable: true }
    ]);

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} pagination={true} 
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 20, 50, 100]}/>
        </div>
    );
};

export default EventTable;