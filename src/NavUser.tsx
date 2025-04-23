'use client';

import { CaretRightIcon, ComponentPlaceholderIcon } from '@radix-ui/react-icons';
import { BadgeCheck, LogOut } from 'lucide-react';

import { getGravatarUrl } from '@/auth/gravatar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';
import { useRouter } from 'next/navigation';
import { Appearances, Themes } from '@/appwrapper/UserMenu';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';

export function NavUser() {
  const { isMobile } = useSidebar('left');
  const router = useRouter();
  const { data: user } = useSWR('/user', async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URI}/v1/user`, {
      headers: {
        Authorization: `Bearer ${getCookie('jwt')}`,
      },
    });
    return response.data.user;
  });

  const handleLogout = () => {
    router.push('/user/logout');
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              side='left'
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group-data-[collapsible=icon]:my-2 pl-0 transition-none'
            >
              <Avatar className='w-8 h-8 rounded-lg'>
                <AvatarImage src={getGravatarUrl(user?.email)} alt={user?.first_name} />
                <AvatarFallback className='rounded-lg'>{userInitials(user)}</AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-sm leading-tight text-left'>
                {user && user.email ? (
                  <>
                    <span className='font-semibold capitalize truncate'>
                      {user?.first_name || user?.display_name || user?.username || ''} {user?.last_name || ''}
                    </span>
                    <span className='text-xs truncate'>{user?.email}</span>
                  </>
                ) : (
                  <>
                    <Skeleton className='w-1/2 h-3 mb-1' />
                    <Skeleton className='h-3' />
                  </>
                )}
              </div>

              <CaretRightIcon className='ml-auto size-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
            side={isMobile ? 'bottom' : 'right'}
            align='end'
            sideOffset={4}
          >
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-2 text-sm text-left'>
                <Avatar className='w-8 h-8 rounded-lg'>
                  <AvatarImage src={getGravatarUrl(user?.email)} alt={user?.display_name} />
                  <AvatarFallback className='rounded-lg'>{userInitials(user)}</AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-sm leading-tight text-left'>
                  <span className='font-semibold truncate'>
                    {user?.first_name || user?.display_name || user?.username || ''} {user?.last_name || ''}
                  </span>
                  <span className='text-xs truncate'>{user?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push('/user/manage')}>
                <BadgeCheck className='mr-2 size-4' />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ComponentPlaceholderIcon className='mr-2 size-4' />
                Billing
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <Themes />
            <Appearances />
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className='mr-2 size-4' />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function userInitials(user: {
  first_name?: string;
  last_name?: string;
  display_name?: string;
  username?: string;
  email?: string;
}) {
  if (!user) {
    return null;
  }

  // Try to get initials from first and last name
  if (user.first_name?.trim() && user.last_name?.trim()) {
    const firstInitial = user.first_name.trim()[0];
    const lastInitial = user.last_name.trim()[0];
    return `${firstInitial.toUpperCase()}${lastInitial.toUpperCase()}`;
  }

  // Try to get initials from display name
  if (user.display_name?.trim()) {
    const parts = user.display_name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0].toUpperCase()}${parts[1][0].toUpperCase()}`;
    }
    return parts[0][0].toUpperCase();
  }

  // Try to use username
  if (user.username?.trim()) {
    return user.username.trim()[0].toUpperCase();
  }

  // If all else fails
  if (user.email) {
    return user.email[0].toUpperCase();
  }

  return null;
}
