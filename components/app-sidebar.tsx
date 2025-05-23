"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Calendar1Icon,
  Command,
  File,
  Frame,
  GalleryVerticalEnd,
  GlobeIcon,
  HotelIcon,
  LayoutDashboardIcon,
  Map,
  MapIcon,
  PieChart,
  PlaneIcon,
  PrinterIcon,
  Settings2,
  Settings2Icon,
  SquareTerminal,
  User2Icon,
  WrenchIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboardIcon,
      isActive: true,
      items: [],
    },
    {

      title: "Manage Schedules",
      url: "#",
      icon: Calendar1Icon,
      items: [
        {
          title: "Future Schedule",
          url: "/schedules",
        },
        {
          title: "Current Schedule",
          url: "/schedules",
        },
        {
          title: "Archived Schedule",
          url: "/schedules",
        },
        {
          title: "Cancelled Schedule",
          url: "/schedules",
        },
      ],
    },
    {
      title: "Manage Clients",
      url: "#",
      icon: User2Icon,
      items: [
        {
          title: "Client Category List",
          url: "/client",
        },
        {
          title: "Account Profile Status",
          url: "/client",
        },
        {
          title: "Service Booking Status",
          url: "/client",
        }
      ],
    },
  ],
  clientBooking: [
    {
      title: "Stand Booking",
      url: "#",
      icon: SquareTerminal,
      items: [{
        title: "New Booking",
        url: "/booking/create",
      },
      {
        title: "Booking Reports",
        url: "/booking/view",
      },
      ],
    },
    {
      title: "Required Docs",
      url: "#",
      icon: File,
      items: [{
        title: "New Booking",
        url: "/booking/create",
      },
      {
        title: "Booking Reports",
        url: "/booking/view",
      },
      ],
    },
    {
      title: "Extra Services",
      url: "#",
      icon: WrenchIcon,
      items: [{
        title: "New Booking",
        url: "/booking/create",
      },
      {
        title: "Booking Reports",
        url: "/booking/view",
      },
      ],
    },
    {
      title: "Hotel Bookings",
      url: "#",
      icon: HotelIcon,
      items: [{
        title: "New Booking",
        url: "/booking/create",
      },
      {
        title: "Booking Reports",
        url: "/booking/view",
      },
      ],
    },
    {
      title: "Printing Services",
      url: "#",
      icon: PrinterIcon,
      items: [{
        title: "New Booking",
        url: "/booking/create",
      },
      {
        title: "Booking Reports",
        url: "/booking/view",
      },
      ],
    },
    {
      title: "Shipping & Tracking",
      url: "#",
      icon: PlaneIcon,
      items: [{
        title: "New Booking",
        url: "/booking/create",
      },
      {
        title: "Booking Reports",
        url: "/booking/view",
      },
      ],
    },
  ],
  applicationComponent: [
    {
      title: "Manage Settings",
      url: "#",
      icon: Settings2Icon,
      items: [
        {
          title: "Series types",
          url: "#",
        },
        {
          title: "Client types",
          url: "#",
        },
        {
          title: "Service types",
          url: "#",
        },
        {
          title: "Currency",
          url: "#",
        },
        {
          title: "Stand sizes",
          url: "#",
        },
        {
          title: "Table sizes",
          url: "#",
        },
        {
          title: "Meeting schedules",
          url: "#",
        },
        {
          title: "Catalogue Advert.",
          url: "#",
        }
      ]
    },
    {
      title: "Manage Web Settings",
      url: '#',
      icon: GlobeIcon,
      items: [
        {
          title: "Study areas",
          url: "#",
        },
        {
          title: "Study courses",
          url: "#",
        },
        {
          title: "Study languages",
          url: "#",
        }
      ]      
    },
    {
      title: "Manage Countries",
      url: "#",
      icon: MapIcon,
      items: [
        {
          title: "World countries",
          url: "#",
        },
        {
          title: "Country states",
          url: "#",
        },
        {
          title: "Country cities",
          url: "#",
        }
      ],
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <img 
          src="https://bmiglobaled.com/wordpress/wp-content/uploads/2023/01/BMI-THE-Logo-aligned-01.png" 
          alt="BMI Systems" 
          className="h-10 w-auto max-w-full object-contain" 
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} title="Navigation" />
        <NavMain items={data.clientBooking} title="Clients Booking" />
        <NavMain items={data.applicationComponent} title="Application Component" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
