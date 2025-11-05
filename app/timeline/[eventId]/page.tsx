import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EventDetailView } from "@/components/timeline/event-detail-view";
import { timelineEvents } from "@/content/timeline";

type EventDetailPageProps = {
  params: {
    eventId: string;
  };
};

export function generateMetadata({ params }: EventDetailPageProps): Metadata {
  const event = timelineEvents.find(({ id }) => id === params.eventId);
  if (!event) {
    return {
      title: "Event not found"
    };
  }
  return {
    title: `${event.content.en.title} • Bible Timeline`,
    description: event.content.en.summary
  };
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = timelineEvents.find(({ id }) => id === params.eventId);

  if (!event) {
    notFound();
  }

  return <EventDetailView event={event} />;
}
