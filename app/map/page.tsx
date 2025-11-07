"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Map as MapIcon } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export default function MapPage() {
  const { dictionary } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card/80 p-8 text-left shadow-xl backdrop-blur sm:p-12"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent-foreground shadow-lg">
            <MapIcon className="h-9 w-9" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
            {dictionary.placeholder.comingSoon}
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {dictionary.placeholder.description}
          </p>
          <div className="mt-8 rounded-3xl border border-dashed border-accent/30 bg-background/80 p-6 shadow-sm">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground">
              {dictionary.placeholder.progressLabel}
            </p>
            <p className="mt-3 text-sm text-foreground sm:text-base">
              {dictionary.placeholder.progressDetail}
            </p>
          </div>
          <p className="mt-6 text-sm text-muted-foreground sm:text-base">
            {dictionary.placeholder.prompt}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-full">
              <Link href="/about">{dictionary.placeholder.notifyCta}</Link>
            </Button>
            <Button asChild variant="secondary" className="rounded-full">
              <Link href="/timeline">{dictionary.placeholder.exploreCta}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
