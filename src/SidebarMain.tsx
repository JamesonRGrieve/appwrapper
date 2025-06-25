'use client';

import { getCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { NavMain } from '@/app/NavMain';
import { NavUser } from '@/appwrapper/NavUser';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { ToggleSidebar } from './ToggleSidebar';

import { ChatHistory } from '@/interactive/components/Layout/chat-history';
import { FaRobot } from 'react-icons/fa';

export function SidebarMain({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [hasStarted, setHasStarted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (getCookie('aginteractive-has-started') === 'true') {
      setHasStarted(true);
    }
  }, [getCookie('aginteractive-has-started')]);

  if (pathname === '/' || (pathname.startsWith('/user') && pathname !== '/user/manage')) {
    return null;
  }

  return (
    <Sidebar collapsible='icon' {...props} className='hide-scrollbar'>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <ChatHistory />
      </SidebarContent>
      <SidebarFooter>
        {/* <NotificationsNavItem /> */}
        <ToggleSidebar side='left' />
        <NavUser />
      </SidebarFooter>
      <SidebarRail side='left' />
    </Sidebar>
  );
}

// Temporary sidebar Logo until agent selector is implemented
export function SidebarLogo() {
  return (
    <div className='flex items-center gap-2 p-2'>
      <div className='flex items-center justify-center rounded-lg aspect-square size-8 bg-sidebar-primary text-sidebar-primary-foreground'>
        <FaRobot className='size-4' />
      </div>
      <div className='grid flex-1 text-sm leading-tight text-left'>
        <span className='font-semibold text-lg truncate'>{process.env.NEXT_PUBLIC_APP_NAME ?? 'App Name'}</span>
      </div>
    </div>
  );
}
