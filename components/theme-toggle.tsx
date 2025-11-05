"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const { dictionary } = useLanguage();

  const items: Array<{ key: string; label: string }> = [
    { key: "light", label: dictionary.theme.light },
    { key: "dark", label: dictionary.theme.dark },
    { key: "system", label: dictionary.theme.system }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={dictionary.theme.label}
          className="relative"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:-rotate-90 dark:scale-0" />
          <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{dictionary.theme.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[9rem] rounded-xl border border-border/60 bg-background/95 p-2 shadow-xl shadow-primary/10 supports-[backdrop-filter]:backdrop-blur-md max-sm:min-w-0 max-sm:w-[calc(100vw-2.5rem)]"
        sideOffset={12}
      >
        <DropdownMenuLabel className="text-muted-foreground">
          {dictionary.theme.label}
        </DropdownMenuLabel>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.key}
            className="flex items-center justify-between"
            onClick={() => setTheme(item.key)}
          >
            {item.label}
            <span
              className="text-xs uppercase tracking-wider text-muted-foreground"
              aria-hidden
            >
              {theme === item.key ? "•" : ""}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
