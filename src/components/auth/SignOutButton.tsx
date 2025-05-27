import React from 'react';
import { useClerk } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

interface SignOutButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children?: React.ReactNode;
  id?: string;
}

const SignOutButton: React.FC<SignOutButtonProps> = ({
  className,
  variant = 'ghost',
  size = 'default',
  children,
  id,
  ...props
}) => {
  const { signOut } = useClerk();

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      id={id}
      onClick={() => signOut()}
      {...props}
    >
      <LogOut className="mr-2 h-4 w-4" />
      {children || 'Sign out'}
    </Button>
  );
};

export default SignOutButton;
