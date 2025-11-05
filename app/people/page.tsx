"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";

export default function PeoplePage() {
  const { dictionary } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="container relative flex min-h-[60vh] flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary shadow-lg"
        >
          <Users className="h-10 w-10" />
        </motion.div>
        <motion.h1
          className="mt-8 font-display text-3xl font-semibold sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {dictionary.placeholder.comingSoon}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {dictionary.placeholder.description}
        </motion.p>
      </div>
    </section>
  );
}
