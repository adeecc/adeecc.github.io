import React from "react"
import { CareerEvent } from "@/types"

import { cn } from "@/lib/utils"

interface TimelineItemProps {
  index: number
  event: CareerEvent
}

const TimelineItem: React.FC<TimelineItemProps> = ({ index, event }) => {
  return (
    <div
      className={cn(
        index % 2 == 0
          ? "md:flex-row md:rounded-l-lg md:pr-12"
          : "md:col-end-6 md:flex-row-reverse md:items-end md:rounded-r-lg md:border-l-0 md:border-r-2 md:pl-12",
        "col-span-2 mt-[-2px] flex flex-col items-start gap-x-10 border-l-2 border-muted-foreground p-5 md:col-span-5 md:items-center md:border-b-2 md:border-t-2"
      )}
    >
      <div className="flex flex-col">
        <span className="font-semibold text-accent">
          {index + 1}. {event.org}
        </span>
        <span className="text-sm">{event.position}</span>
        <span className="text-primary-300 text-xs">{event.time}</span>
        <span className="text-primary-300 text-xs">{event.loc}</span>
      </div>
      <ul className="hidden list-disc text-sm leading-snug md:block">
        {event.details.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  )
}

interface TimelineProps {
  careerEvents: CareerEvent[]
}

export const Timeline: React.FC<TimelineProps> = ({ careerEvents }) => {
  return (
    <div className="grid grid-cols-5 ">
      {careerEvents.map((event, index) => {
        return <TimelineItem key={event.id} index={index} event={event} />
      })}
    </div>
  )
}
