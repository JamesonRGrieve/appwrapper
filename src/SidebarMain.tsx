'use client';

import { getCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { NavMain } from '@/app/NavMain';
import { NavUser } from '@/appwrapper/NavUser';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { ChatHistory } from '@/interactive/components/Layout/chat-history';
import { AgentSelector } from '@/interface/Selectors/AgentSelector';
import { ToggleSidebar } from './ToggleSidebar';

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
        <AgentSelector />
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
