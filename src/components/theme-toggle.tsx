"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [isMounted, setIsMounted] = React.useState(false);
  
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  React.useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" && !document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add("dark");
    } else if (savedTheme !== 'dark' && document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  if (!isMounted) {
     return (
      <Button variant="ghost" size="icon" disabled className="h-9 w-9">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
