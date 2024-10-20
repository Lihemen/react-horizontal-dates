import type { ReactNode } from "react";

import type { DeepPartial } from "../../types/deep-partial";

const classNames = [
  "wrapper",
  "controls",
  "control",
  "title",
  "isSelected",
  "day",
  "dayNumber",
  "dayDay",
  "week",
] as const;

type ClassName = (typeof classNames)[number];

export const weekdays = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
} as const;

type WeekDay = keyof typeof weekdays;

export type ReactHorizontalDatesProps = Partial<{
  /** initial date */
  intialDate: Date;

  /** number of days to display */
  days: 7 | 14 | 28;

  /** function to trigger next week  */
  onPrevWeekChange: (date: Date) => void;

  /** function to trigger next week  */
  onNextWeekChange: (date: Date) => void;

  /** function to run when date is click */
  onDateChange: (date: Date) => void;

  /** classnames for component */
  classNames: DeepPartial<Record<ClassName, string>>;

  /** icons */
  /** previous icon */
  prevIcon?: ReactNode;

  /** next icon */
  nextIcon?: ReactNode;

  /** start of week */
  weekStartsOn?: WeekDay;
}>;
