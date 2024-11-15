# React Horizontal Dates

A simple and customizable horizontal date picker component for React applications.

[![CI](https://github.com/Lihemen/react-horizontal-dates/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Lihemen/react-horizontal-dates/actions/workflows/ci.yml)

## Features

- Horizontal scrolling date picker
- Customizable appearance
- Easy navigation between dates
- Lightweight and flexible

## Installation

Install the package via npm:

```bash
npm install react-horizontal-date
```

Install the package via yarn:

```bash
yarn install react-horizontal-date
```

Install the package via pnpm:

```bash
pnpm install react-horizontal-date
```

## Usage

```jsx
import React, { useState } from "react";
import { ReactHorizontalDates } from "react-horizontal-date";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <ReactHorizontalDates
      initialDate={selectedDate}
      onDateChange={setSelectedDate}
    />
  );
};

export default App;
```

### Props

```jsx
  /** initial date */
  intialDate ?: Date;

  /** number of days to display */
  days ?: 7 | 14 | 28;

  /** function to trigger next week  */
  onPrevWeekChange ?: (date: Date) => void;

  /** function to trigger next week  */
  onNextWeekChange ?: (date: Date) => void;

  /** function to run when date is click */
  onDateChange: ? (date: Date) => void;

  /** classnames for component */
  classNames ?: DeepPartial<Record<"wrapper" | "controls" | "control" |
  "title" | "isSelected" | "day" | "dayNumber" | "dayDay" | "week",
  string>>;

  /** start of week */
  weekStartsOn ?: "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat"

  /** icons */

  /** previous icon */
  prevIcon?: ReactNode;

  /** next icon */
  nextIcon?: ReactNode;

```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/lihemen/react-horizontal-dates/issues) to see if someone has already suggested what you’re thinking of. If you have a new idea, feel free to open an issue or a pull request.

## License

This package is released under the MIT License.

## Change History

[View Changelog](https://github.com/Lihemen/react-horizontal-dates/blob/main/CHANGELOG.md)
