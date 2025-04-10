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

import { Button, buttonVariants } from '../ui/button';
import { CirclePlusIcon, Edit2 } from 'lucide-react';
import Link from 'next/link';
import { Input } from '../ui/input';

const new_data = [
    {
        "name": "BINUS University",
        "logo": "https://seeklogo.com/images/B/binus-university-logo-CE9DB12C0F-seeklogo.com.png",
        "status": "DRAFT",
        "cities": ["Hanoi", "HCMC"],
        "emailStatus": "Active",
        "webStatus": "Inactive"
    },
    {
        "name": "BINUS University",
        "logo": "https://seeklogo.com/images/B/binus-university-logo-CE9DB12C0F-seeklogo.com.png",
        "status": "PUBLISHED",
        "cities": ["Hanoi", "HCMC"],
        "emailStatus": "Active",
        "webStatus": "Active"
    }
]


const renderDropdown = (params: any) => {
    let bgColor;
    switch (params.value.toLowerCase()) {
        case 'active':
            bgColor = 'green';
            break;
        case 'inactive':
            bgColor = 'orange';
            break;
        default:
            bgColor = 'orange';
    }
    return (
        <span style={{ background: bgColor, color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
            {params.value}
        </span>
    );
}

const ExhibTable = () => {
    const [rowData] = useState(new_data);

    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        {
            headerName: "Exhibitor",
            pinned: 'left',
            field: "name",
            cellRenderer: (params: any) => {
                return (
                    <div className="flex items-center space-x-4">
                        <img src={params.data.logo} alt="Logo" className="h-10 w-10 object-contain" />
                        <div className="flex flex-col justify-center">
                            <Link href={'/about'}><strong className="text-sm">{params.data.name}</strong></Link>
                            {/* <span className="text-xs text-gray-500">{params.data.location}</span> */}
                        </div>
                    </div>
                )
            }
        },
        {
            headerName: 'Status',
            field: 'status',
            cellRenderer: (params: any) => {
              const isPublished = params.value === 'PUBLISHED'
              return (
                  <span className={`text-white text-sm font-semibold px-2 py-1 rounded-sm
                    ${isPublished ? 'bg-green-500' : 'bg-red-400'}`}>
                    {params.value}
                  </span>
              )
            },
          },
          {
            headerName: 'Booked Cities',
            field: 'cities',
            editable: true,
            cellEditor: 'agRichSelectCellEditor',
            cellEditorParams: {
              values: ['Hanoi', 'HCMC', 'Aqua'],
              multiSelect: true,
              searchType: 'matchAny',
              filterList: true,
              highlightMatch: true,
              valueListMaxHeight: 220,
            },
            cellRenderer: (params: any) => {
              const bgVariants = ['bg-pink-300', 'bg-orange-300', 'bg-red-300']
          
              return (
                <div className="flex gap-1 flex-wrap">
                  {params.value?.map((city: string, index: number) => (
                    <span
                      key={index}
                      className={`${
                        bgVariants[index % bgVariants.length]
                      } px-2 py-1 text-xs rounded-full text-black dark:text-white`}
                    >
                      {city}
                    </span>
                  ))}
                 </div>
              )
            }
          },
          {
            headerName: 'Email Status',
            field: 'emailStatus',
            editable: true,
            cellEditor: 'agSelectCellEditor',
            cellEditorParams: {
              values: ['Active', 'Inactive'],
            },
            cellRenderer: (params: any) => renderDropdown(params),
            filter: 'agSetColumnFilter',
            filterParams: {
                values: ['Active', 'Inactive'],
            }
          },
        {
            headerName: "Web Status",
            field: 'webStatus',
            cellEditor: "agSelectCellEditor",
            cellEditorParams: {
                values: ['Active', 'Inactive'],
            },
            cellRenderer: (params: any) => renderDropdown(params),
            filter: 'agSetColumnFilter',
            filterParams: {
                values: ['Active', 'Inactive'],
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
                <Button variant="default" className="flex items-center gap-2">
                <CirclePlusIcon size={16} />
                Add new Exhibitor</Button>
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

export default ExhibTable;