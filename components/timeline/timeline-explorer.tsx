"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as React from "react";
import { ChevronRight } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  timelineEvents,
  type TimelineEvent,
  type TimelineEventContent
} from "@/content/timeline";
import { cn } from "@/lib/utils";
import { type LanguageKey, type Translations } from "@/lib/i18n";

type AugmentedEvent = TimelineEvent & {
  translation: TimelineEventContent;
};

export function TimelineExplorer() {
  const { lang, dictionary } = useLanguage();
  const events: AugmentedEvent[] = React.useMemo(
    () =>
      timelineEvents.map((event) => ({
        ...event,
        translation: event.content[lang] ?? event.content.en
      })),
    [lang]
  );

  if (!events.length) {
    return (
      <section className="container py-16 text-center text-muted-foreground">
        {dictionary.timeline.empty}
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <BackgroundGlow />
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center md:text-left">
          <motion.h1
            className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {dictionary.timeline.pageTitle}
          </motion.h1>
          <motion.p
            className="mt-4 text-base text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {dictionary.timeline.pageDescription}
          </motion.p>
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl px-2 sm:px-4 lg:px-6">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-border/40 md:block" />
          <div className="space-y-10 md:space-y-14">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
                  className="relative grid gap-8 py-4 md:grid-cols-[1fr_auto_1fr] md:items-center"
                >
                  <div className="relative hidden md:block md:col-start-1 md:pr-14">
                    {isLeft ? (
                      <>
                        <span className="pointer-events-none absolute right-0 top-1/2 h-px w-14 -translate-y-1/2 bg-border/60" />
                        <TimelineCard
                          event={event}
                          dictionary={dictionary}
                          lang={lang}
                          align="left"
                        />
                      </>
                    ) : (
                      <TimelineLabel event={event} align="left" />
                    )}
                  </div>

                  <div className="relative flex justify-center md:col-start-2">
                    <div className="relative flex h-full items-center justify-center">
                      <span className="hidden h-full w-px bg-transparent md:block" aria-hidden />
                      <div className="relative z-10 grid h-5 w-5 place-items-center rounded-full border-4 border-background bg-primary shadow-lg">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="relative hidden md:block md:col-start-3 md:pl-14">
                    {!isLeft ? (
                      <>
                        <span className="pointer-events-none absolute left-0 top-1/2 h-px w-14 -translate-y-1/2 bg-border/60" />
                        <TimelineCard
                          event={event}
                          dictionary={dictionary}
                          lang={lang}
                          align="right"
                        />
                      </>
                    ) : (
                      <TimelineLabel event={event} align="right" />
                    )}
                  </div>

                  <div className="mt-4 md:hidden">
                    <MobileTimelineLabel event={event} />
                    <TimelineCard
                      event={event}
                      dictionary={dictionary}
                      lang={lang}
                      align="mobile"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

type TimelineCardProps = {
  event: AugmentedEvent;
  dictionary: Translations;
  lang: LanguageKey;
  align: "left" | "right" | "mobile";
};

function TimelineCard({ event, dictionary, lang, align }: TimelineCardProps) {
  const alignmentClass = {
    left: "items-start md:ml-auto",
    right: "items-start md:mr-auto",
    mobile: "items-start"
  }[align];

  const buttonAlignment = align === "mobile" ? "self-stretch" : "md:self-start";

  return (
    <div
      className={cn(
        "relative flex max-w-xl flex-col gap-4 rounded-2xl border border-border/70 bg-card/95 p-6 shadow-md backdrop-blur transition hover:-translate-y-1 hover:shadow-lg md:max-w-md",
        alignmentClass
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground"
        )}
      >
        <Badge className="bg-primary/10 text-primary">{event.period}</Badge>
        <span>{event.range}</span>
        <span aria-hidden>•</span>
        <span>{event.location[lang] ?? event.location.en}</span>
      </div>
      <h3 className="font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
        {event.translation.title}
      </h3>
      <p className="w-full text-base leading-relaxed text-muted-foreground sm:text-lg">
        {event.translation.summary}
      </p>
      <Button
        asChild
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 md:w-auto",
          buttonAlignment
        )}
      >
        <Link href={`/timeline/${event.id}`}>
          {dictionary.timeline.cta}
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}

type TimelineLabelProps = {
  event: AugmentedEvent;
  align: "left" | "right";
};

function TimelineLabel({ event, align }: TimelineLabelProps) {
  const isRight = align === "right";

  return (
    <div
      className={cn(
        "relative flex items-center",
        isRight ? "justify-start pl-14" : "justify-end pr-14"
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute top-1/2 h-px w-12 -translate-y-1/2 bg-border/60",
          isRight ? "left-0" : "right-0"
        )}
      />
      <div className="rounded-2xl bg-card/95 px-5 py-3 text-left shadow-md backdrop-blur">
        <span className="block text-sm font-semibold text-foreground sm:text-base">
          {event.range}
        </span>
        <span className="mt-1 block text-[0.75rem] font-medium text-muted-foreground">
          {event.period}
        </span>
      </div>
    </div>
  );
}

type MobileTimelineLabelProps = {
  event: AugmentedEvent;
};

function MobileTimelineLabel({ event }: MobileTimelineLabelProps) {
  return (
    <div className="mb-3 flex flex-col rounded-2xl bg-card/90 px-4 py-3 text-left shadow-sm backdrop-blur">
      <span className="text-xs font-semibold text-foreground">
        {event.range}
      </span>
      <span className="text-[0.75rem] font-medium text-muted-foreground">
        {event.period}
      </span>
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl sm:h-80 sm:w-80" />
      <div className="absolute -left-16 top-1/3 h-48 w-48 rounded-full bg-accent/8 blur-3xl sm:h-64 sm:w-64" />
      <div className="absolute -right-10 bottom-16 h-56 w-56 rounded-full bg-primary/8 blur-3xl sm:h-72 sm:w-72" />
    </div>
  );
}
