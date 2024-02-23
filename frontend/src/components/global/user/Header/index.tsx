import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Command, CommandDialog, CommandInput } from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/providers/User/auth.providers";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { MoonStar, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const { isLoggedIn, logout, user } = useAuth();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 820 });

  return isMobile ? (
    <>
      <header className="px-4 py-4 sticky flex items-center justify-between  top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-1/2">
          {/* <form className="flex relative"> */}
          <Button variant={"outline"} onClick={() => setOpen((prv) => !prv)}>
            <Search className="h-4 w-4 text-muted-foreground" />
          </Button>
          {/* <Input placeholder="Search" className="pl-8" /> */}
          {/* </form> */}
        </div>
        <nav>
          <ul className="flex justify-between gap-2">
            <li></li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"outline"} className="w-9 px-0">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="flex gap-3">
              {isLoggedIn && user ? (
                <>
                  <Avatar>
                    <AvatarFallback>
                      {user.emailId.split("@")[0]}
                    </AvatarFallback>
                  </Avatar>

                  <Button onClick={logout} variant={"outline"}>
                    Log-Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant={"outline"}>Sign-In</Button>
                  <Button> Login</Button>
                </>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search any blog" />
      </CommandDialog>
    </>
  ) : (
    <header className="py-4 px-12  sticky flex items-center justify-between  top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-1/2">
        <Command className="rounded-lg border dark:border-gray-500">
          <CommandInput className="border-none" placeholder="Search any blog" />
        </Command>
      </div>
      <nav>
        <ul className="flex justify-between gap-2">
          <li></li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"outline"} className="w-9 px-0">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="flex gap-3">
            {isLoggedIn && user ? (
              <>
                <Avatar>
                  <AvatarFallback>{user.emailId.split("@")[0]}</AvatarFallback>
                </Avatar>

                <Button onClick={logout} variant={"outline"}>
                  Log-Out
                </Button>
              </>
            ) : (
              <>
                <Button variant={"outline"}>Sign-In</Button>
                <Button> Login</Button>
              </>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
