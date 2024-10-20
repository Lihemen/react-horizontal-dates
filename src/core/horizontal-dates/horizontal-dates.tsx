import {
  addDays,
  addWeeks,
  formatDate,
  isSameDay,
  startOfWeek,
  subWeeks,
} from "date-fns";
import React, { useState } from "react";

import { IconChevronLeft } from "../../icons/chevron-left";
import { IconChevronRight } from "../../icons/chevron-right";
import { cn } from "../../lib/cn";
import { calendarHeaderDate } from "../../lib/formatters/header-date";
import type { ReactHorizontalDatesProps } from "./types";

const defaultClassNames: ReactHorizontalDatesProps["classNames"] = {
  isSelected:
    "before:absolute before:bottom-0 before:h-1 before:bg-[#0060C6] before:w-full",
};

export function ReactHorizontalDates({
  intialDate = new Date(),
  days = 7,
  onDateChange = () => {},
  onPrevWeekChange = () => {},
  onNextWeekChange = () => {},
  prevIcon = <IconChevronLeft />,
  nextIcon = <IconChevronRight />,
  classNames = defaultClassNames,
}: ReactHorizontalDatesProps) {
  const [currentDate, setCurrentDate] = useState<Date>(intialDate);
  const weeks = Math.floor(days / 7);

  const generateWeekeDays = (date: Date) => {
    const startOfCurrentWeek = startOfWeek(date, { weekStartsOn: 0 }); // Start week on Sunday
    return Array.from({ length: days }, (_, i) =>
      addDays(startOfCurrentWeek, i),
    );
  };

  const [weekDays, setWeekDays] = useState<Date[]>(() =>
    generateWeekeDays(currentDate),
  );

  const handlePreviousWeek = () => {
    const newDate = subWeeks(currentDate, weeks);

    setCurrentDate((prevDate) => subWeeks(prevDate, weeks));
    onPrevWeekChange(newDate);
    setWeekDays(generateWeekeDays(newDate));
  };

  const handleNextWeek = () => {
    const newDate = addWeeks(currentDate, weeks);

    setCurrentDate((prevDate) => addWeeks(prevDate, weeks));
    onNextWeekChange(newDate);
    setWeekDays(generateWeekeDays(newDate));
  };

  const handleDateClick = (day: Date) => {
    setCurrentDate(day);
    onDateChange(day);
  };

  return (
    <div
      className={cn(
        "border-b border-black px-2 max-w-xl",
        classNames?.wrapper,
      )}>
      <div
        className={cn(
          "flex items-center justify-between pb-4",
          classNames?.controls,
        )}>
        <button
          type="button"
          className={cn(classNames?.control)}
          onClick={handlePreviousWeek}>
          {prevIcon}
        </button>
        <h4 className={cn("font-semibold text-[28px]", classNames?.title)}>
          {calendarHeaderDate(currentDate)}
        </h4>
        <button
          type="button"
          className={cn(classNames?.control)}
          onClick={handleNextWeek}>
          {nextIcon}
        </button>
      </div>
      <div
        className={cn(
          "flex *:flex-1 items-center justify-center overflow-auto",
          classNames?.week,
        )}>
        {weekDays.map((day) => (
          <button
            type="button"
            onClick={() => handleDateClick(day)}
            key={day.toISOString()}
            className={cn(
              "flex flex-col pb-4 items-center text-center justify-center gap-1 relative",
              classNames?.day,
              isSameDay(day, currentDate) && classNames?.isSelected,
            )}>
            <span className={cn("text-xs", classNames?.dayDay)}>
              {formatDate(day, "EE")}
            </span>
            <span className={cn("text-2xl font-bold", classNames?.dayNumber)}>
              {formatDate(day, "dd")}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
