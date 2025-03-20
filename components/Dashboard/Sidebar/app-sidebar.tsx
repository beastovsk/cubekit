"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  CloudCog,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Image from "next/image";
import { useUserStore } from "@/store/user";

const data = {
  navMain: [
    {
      title: "Title",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "General",
          url: "/dashboard/general",
        },
      ],
    },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "/dashboard/documentation",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "/dashboard/documentation/get-started",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "/dashboard/settings",
    //     },
    //   ],
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = useUserStore((store: any) => store.user);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Image src="/full-logo.png" alt="" width={100} height={40} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
