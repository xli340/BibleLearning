"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import * as React from "react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { dictionary } = useLanguage();

  React.useEffect(() => {
    const handler = () => {
      setIsVisible(window.scrollY > 280);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const handleClick = React.useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="scroll-to-top"
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -20, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={handleClick}
            variant="default"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary via-accent to-primary shadow-lg shadow-primary/30 transition hover:scale-105 hover:shadow-primary/40"
            aria-label={dictionary.ui.backToTop}
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">{dictionary.ui.backToTop}</span>
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
