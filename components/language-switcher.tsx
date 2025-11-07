"use client";

import { Languages } from "lucide-react";
import * as React from "react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { SUPPORTED_LANGUAGES, type LanguageKey } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { lang, setLanguage, dictionary } = useLanguage();

  const currentLanguageLabel = React.useMemo(() => {
    return (
      SUPPORTED_LANGUAGES.find(({ key }) => key === lang)?.label ?? lang.toUpperCase()
    );
  }, [lang]);

  const handleSystemDefault = React.useCallback(() => {
    if (typeof navigator === "undefined") {
      setLanguage("en");
      return;
    }
    const browserLang = navigator.language.toLowerCase();
    const matched =
      SUPPORTED_LANGUAGES.find(({ key }) => browserLang.startsWith(key))?.key ??
      (browserLang.startsWith("zh") ? "zh" : "en");
    setLanguage(matched as LanguageKey);
  }, [setLanguage]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label={dictionary.language.label}
          className="gap-2 rounded-full px-3"
        >
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="hidden text-sm font-medium text-muted-foreground lg:inline">
            {currentLanguageLabel}
          </span>
          <span className="sr-only lg:hidden">{dictionary.language.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[10rem] rounded-xl border border-border/60 bg-background/95 p-2 shadow-xl shadow-primary/10 supports-[backdrop-filter]:backdrop-blur-md max-sm:min-w-0 max-sm:w-[calc(100vw-2.5rem)]"
        sideOffset={12}
      >
        <DropdownMenuLabel className="text-muted-foreground">
          {dictionary.language.label}
        </DropdownMenuLabel>
        <DropdownMenuItem
          onClick={handleSystemDefault}
          className="flex items-center justify-between"
        >
          {dictionary.language.system}
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            SYS
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {SUPPORTED_LANGUAGES.map(({ key, label }) => (
          <DropdownMenuItem
            key={key}
            onClick={() => setLanguage(key)}
            className="flex items-center justify-between"
          >
            {label}
            <span
              className="text-xs uppercase tracking-wider text-muted-foreground"
              aria-hidden
            >
              {lang === key ? "•" : ""}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
