"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
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
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [],
    },
    {

      title: "Manage Schedules",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Future Schedule",
          url: "#",
        },
        {
          title: "Current Schedule",
          url: "#",
        },
        {
          title: "Archived Schedule",
          url: "#",
        },
        {
          title: "Cancelled Schedule",
          url: "#",
        },
      ],
    },
    {
      title: "Manage Clients",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Client Category List",
          url: "#",
        },
        {
          title: "Account Profile Status",
          url: "#",
        },
        {
          title: "Service Booking Status",
          url: "#",
        }
      ],
    },
  ],
  clientBooking: [
    {
      title: "Stand Booking",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [{
        title: "New Booking",
        url: "#",
      },
      {
        title: "Booking Reports",
        url: "#",
      },
      ],
    },
    {
      title: "Required Docs",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [{
        title: "New Booking",
        url: "#",
      },
      {
        title: "Booking Reports",
        url: "#",
      },
      ],
    },
    {
      title: "Extra Services",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [{
        title: "New Booking",
        url: "#",
      },
      {
        title: "Booking Reports",
        url: "#",
      },
      ],
    },
    {
      title: "Hotel Bookings",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [{
        title: "New Booking",
        url: "#",
      },
      {
        title: "Booking Reports",
        url: "#",
      },
      ],
    },
    {
      title: "Printing Services",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [{
        title: "New Booking",
        url: "#",
      },
      {
        title: "Booking Reports",
        url: "#",
      },
      ],
    },
    {
      title: "Shipping & Tracking",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [{
        title: "New Booking",
        url: "#",
      },
      {
        title: "Booking Reports",
        url: "#",
      },
      ],
    },
  ],
  applicationComponent: [
    {
      title: "Manage Settings",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
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
      url: "#",
      icon: SquareTerminal,
      isActive: true,
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
      icon: SquareTerminal,
      isActive: true,
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
        <img src="https://eis.bmi-systems.net/global_assets/images/bmi-logo-light.png" alt="BMI Systems" className="h-8 w-auto" />
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
