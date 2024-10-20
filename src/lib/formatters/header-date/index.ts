import { format, isToday, isTomorrow, isYesterday } from "date-fns";

export function calendarHeaderDate(date: Date): string {
  if (isToday(date)) {
    return "Today";
  }
  if (isYesterday(date)) {
    return "Yesterday";
  }
  if (isTomorrow(date)) {
    return "Tomorrow";
  }
  // Format as "Month Day" if none of the above
  return format(date, "MMMM d");
}
