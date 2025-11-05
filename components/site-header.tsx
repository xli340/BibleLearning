"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/providers/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";

export function SiteHeader() {
  const { dictionary } = useLanguage();
  const pathname = usePathname();

  const navItems = React.useMemo(
    () => [
      { href: "/", label: dictionary.nav.timeline },
      { href: "/people", label: dictionary.nav.people },
      { href: "/map", label: dictionary.nav.map },
      { href: "/about", label: dictionary.nav.about }
    ],
    [dictionary.nav]
  );

  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md transition-colors">
      <div className="border-b bg-background/80">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight sm:text-xl"
          >
            <span className="rounded-lg bg-primary/10 px-2 py-1 font-display text-primary shadow-sm">
              Logos
            </span>
            <span className="hidden text-muted-foreground sm:inline">
              Bible Timeline
            </span>
          </Link>
          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/" || pathname === "/timeline"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                  <AnimatePresence>
                    {isActive ? (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                        transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                      />
                    ) : null}
                  </AnimatePresence>
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-1 lg:flex">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <LanguageSwitcher />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle navigation"
                  className="lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="max-w-xs">
                <SheetHeader />
                <div className="mt-12 flex flex-col gap-3">
                  {navItems.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/" || pathname === "/timeline"
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-base font-medium text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setOpen(false)}
                      >
                        <span className="flex items-center justify-between">
                          {item.label}
                          {isActive ? (
                            <motion.span
                              layoutId="mobileActiveNav"
                              className="ml-2 h-2 w-2 rounded-full bg-primary"
                            />
                          ) : null}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
