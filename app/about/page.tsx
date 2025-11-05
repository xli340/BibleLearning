"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "hello@bible-timeline.dev";

export default function AboutPage() {
  const { dictionary } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container relative">
        <motion.div
          className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card/80 p-8 shadow-xl backdrop-blur sm:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary shadow-lg">
            <Sparkles className="h-9 w-9" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
            {dictionary.about.heading}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {dictionary.about.description}
          </p>
          <p className="mt-6 text-base text-muted-foreground">
            {dictionary.about.contact}
          </p>
          <div className="mt-8 text-sm text-muted-foreground">
            {dictionary.about.tagline}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
