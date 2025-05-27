import React from 'react';
import { UserButton as ClerkUserButton, useUser } from '@clerk/clerk-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, Settings, CreditCard, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SignOutButton from './SignOutButton';

const UserButton = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const initials = user?.fullName
    ?.split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
          <Avatar className="h-10 w-10">
            {user?.imageUrl ? (
              <AvatarImage src={user.imageUrl} alt={user.fullName || 'User'} />
            ) : (
              <AvatarFallback className="bg-blue-100 text-blue-700">
                {initials || 'U'}
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2 bg-white shadow-lg rounded-md" align="end" forceMount>
        <DropdownMenuLabel className="font-normal text-gray-900">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              <span className="text-gray-900">{user?.fullName || 'User'}</span>
            </p>
            <p className="text-xs leading-none text-gray-600">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="cursor-pointer rounded-md px-2 py-1.5 text-sm text-gray-900 hover:bg-gray-100"
          onClick={() => navigate('/profile')}
        >
          <User className="mr-2 h-4 w-4 text-gray-900" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer rounded-md px-2 py-1.5 text-sm text-gray-900 hover:bg-gray-100"
          onClick={() => navigate('/profile?tab=settings')}
        >
          <Settings className="mr-2 h-4 w-4 text-gray-900" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer rounded-md px-2 py-1.5 text-sm text-gray-900 hover:bg-gray-100"
          onClick={() => navigate('/profile?tab=billing')}
        >
          <CreditCard className="mr-2 h-4 w-4 text-gray-900" />
          <span>Billing</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-1" />
        <DropdownMenuItem 
          className="cursor-pointer rounded-md px-2 py-1.5 text-sm hover:bg-gray-100 text-red-600 focus:text-red-600 focus:bg-red-50"
          onClick={() => document.getElementById('sign-out-button')?.click()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <SignOutButton id="sign-out-button" className="hidden" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
