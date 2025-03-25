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

import data from './exhibitor.json';
import { Button, buttonVariants } from '../ui/button';
import { Edit2 } from 'lucide-react';
import Link from 'next/link';
import { Input } from '../ui/input';

const renderDropdown = (params: any) => {
    let bgColor;
    switch (params.value.toLowerCase()) {
        case 'pending':
            bgColor = 'orange';
            break;
        case 'incomplete':
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

const ExhibitorTable = () => {
    const [rowData] = useState(data);

    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        {
            headerName: "Business",
            pinned: 'left',
            field: "businessLogo",
            cellRenderer: (params: any) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={params.value} alt='Logo' style={{ width: 40, height: 40, marginRight: 10 }} />
                        <div>
                            <strong>{params.data.university}</strong><br />
                            <span>{params.data.location}</span>
                        </div>
                    </div>
                )
            }
        },
        {
            headerName: "Contact person",
            field: "contactPerson",
            editable: true,
            cellRenderer: (params: any) => {
                return (
                    <div>
                        <a href='#' style={{ color: 'blue', textDecoration: 'none' }}>{params.value}</a><br />
                        <span>{params.data.position}</span>
                    </div>
                )
            }
        },
        {
            headerName: "Booking status", editable: true,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["PENDING", "INCOMPLETE", "DONE"],
            },
            field: "bookingStatus", cellRenderer: (params: any) => renderDropdown(params),
            filter: 'agSetColumnFilter',
            filterParams: {
                values: ["PENDING", "INCOMPLETE", "COMPLETED"],
            }
        },

        {
            headerName: "Profile status",
            editable: true,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["PENDING", "INCOMPLETE", "COMPLETED"],
            }, field: "profileStatus", cellRenderer: (params: any) => renderDropdown(params),
            filter: 'agSetColumnFilter',
            filterParams: {
                values: ["PENDING", "INCOMPLETE", "COMPLETED"],
            }
        },
        {
            headerName: "Advert status", editable: true,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["PENDING", "INCOMPLETE", "COMPLETED"],
            }, 
            field: "advertStatus", cellRenderer: (params: any) => renderDropdown(params),
            filter: 'agSetColumnFilter',
            filterParams: {
                values: ["PENDING", "INCOMPLETE", "COMPLETED"],
            }
        },
        {
            headerName: "Badges status", editable: true,
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ["PENDING", "INCOMPLETE", "COMPLETED"],
            }, field: "badgesStatus", cellRenderer: (params: any) => renderDropdown(params),
            filter: 'agSetColumnFilter',
            filterParams: {
                values: ["PENDING", "INCOMPLETE", "COMPLETED"],
            }
        },
        {
            headerName: "Representative status",
            field: "representativeStatus",
            cellRenderer: (params: any) => renderDropdown(params),
            filter: 'agSetColumnFilter',
            filterParams: {
                values: ["PENDING", "INCOMPLETE", "COMPLETED"],
            }
        },

        {
            headerName: "Booking date",
            editable: true,
            field: "bookingDate",
            cellEditor: "agDateCellEditor",
            cellEditorParams: {
                // Optional: specify the date format
                dateFormat: 'yyyy-mm-dd'
            }
        },
        {
            headerName: "Actions", pinned: 'right', field: "actions", width: 150, cellRenderer: () => {
                return (
                    <Button asChild>
                        <Link href="/"><Edit2 /></Link>
                    </Button>

                )
            }
        },
    ]);

    const [filterSearch, setFilterSearch] = useState('');

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
            <div className="flex justify-between mb-2">
                <Input placeholder="Search" onChange={(e) => setFilterSearch(e.target.value)} className="mr-2 w-60" />
                <Button variant="outline" className='bg-green-600 hover:bg-green-300 text-white dark:bg-amber-50 dark:text-black dark:hover:bg-amber-200'>Add new Exhibitor</Button>
            </div>
            <AgGridReact rowData={rowData} columnDefs={columnDefs}
                pagination={true}
                paginationPageSize={10}
                paginationPageSizeSelector={[10, 20, 50, 100]}
                quickFilterText={filterSearch}
            />
        </div >
    );
};

export default ExhibitorTable;