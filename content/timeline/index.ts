import events from "./events.json";

import { type LanguageKey } from "@/lib/i18n";

export type TimelineEventContent = {
  title: string;
  headline: string;
  summary: string;
  detail: string;
  takeaways: string[];
  scripture: string[];
};

export type TimelineEvent = {
  id: string;
  period: string;
  range: string;
  location: Record<LanguageKey, string>;
  coordinates?: {
    lat: number;
    lng: number;
  };
  content: Record<LanguageKey, TimelineEventContent>;
};

export const timelineEvents = events as TimelineEvent[];
