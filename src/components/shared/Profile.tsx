import { Link } from "react-router-dom";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { getInitials } from "@/lib/getInitials";

export const ProfileDropdown = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const { user } = useAuth();
  const { isLoading, logout } = { isLoading: false, logout: () => {} };

  const handleLogout = () => {
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={"cursor-pointer"}
        render={
          children ? (
            <>{children} </>
          ) : (
            <Avatar>
              <AvatarFallback className={"bg-primary text-background"}>
                {getInitials(user?.fullName)}
              </AvatarFallback>
            </Avatar>
          )
        }
      />
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback className="text-xs">
                {getInitials(user?.fullName)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col">
              <span className="text-popover-foreground">{user?.fullName}</span>
              <span className="text-xs text-muted-foreground">
                {user?.email}
              </span>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to="/dashboard/profile" className="w-full">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/dashboard/notifications" className="w-full">
              Notification
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={isLoading}
            onClick={handleLogout}
            className={"cursor-pointer"}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
