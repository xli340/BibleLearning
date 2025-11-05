"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { TimelineEvent } from "@/content/timeline";

type EventDetailViewProps = {
  event: TimelineEvent;
};

export function EventDetailView({ event }: EventDetailViewProps) {
  const { lang, dictionary } = useLanguage();
  const translation = event.content[lang] ?? event.content.en;

  return (
    <article className="relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="relative">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl py-16 sm:py-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Badge>{event.period}</Badge>
              <span className="uppercase tracking-widest">{event.range}</span>
              <span className="text-muted-foreground">•</span>
              <span>
                {event.location[lang] ?? event.location.en}
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {translation.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              {translation.headline}
            </p>
            <div className="mt-10">
              <Button asChild variant="secondary" className="rounded-full">
                <Link href="/">
                  {dictionary.timeline.backToList}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="container">
          <motion.div
            className="mx-auto grid max-w-5xl gap-6 rounded-3xl border border-border/60 bg-card/80 p-8 shadow-xl backdrop-blur sm:gap-10 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <section className="space-y-6 text-base text-muted-foreground sm:text-lg">
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                {dictionary.timeline.overviewTitle}
              </h2>
              <p className="leading-relaxed text-foreground">{translation.summary}</p>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {dictionary.timeline.detailHeading}
                </h3>
                <p className="leading-relaxed text-foreground sm:text-base">
                  {translation.detail}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {dictionary.timeline.keyThemes}
                </h3>
                <ul className="space-y-3">
                  {translation.takeaways.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-xl bg-primary/5 p-3 text-foreground"
                    >
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <aside className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {dictionary.timeline.scripture}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-primary sm:text-base">
                  {translation.scripture.map((ref) => (
                    <li key={ref} className="rounded-lg bg-primary/5 px-3 py-2">
                      {ref}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground sm:text-base">
                <p>{dictionary.timeline.reflectPrompt}</p>
              </div>
            </aside>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
