import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Flame } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Helper to get month name
const getMonthName = (monthIndex) => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return months[monthIndex];
};

export function StreakCalendar({ streakData }) {
  const today = new Date();
  const endDate = new Date(today);
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 365 + today.getDay());

  const contributionsMap = streakData.contributions || {};

  const { gridCells, monthLabels } = useMemo(() => {
    const cells = [];
    const monthLabels = [];
    let currentMonth = -1;

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dateString = d.toISOString().split("T")[0];
      const count = contributionsMap[dateString] || 0;
      let colorClass = "bg-muted/30 hover:bg-muted/60";

      if (count > 0 && count <= 2)
        colorClass =
          "bg-green-200 dark:bg-green-800 hover:bg-green-300 dark:hover:bg-green-700";
      else if (count > 2 && count <= 5)
        colorClass =
          "bg-green-400 dark:bg-green-600 hover:bg-green-500 dark:hover:bg-green-500";
      else if (count > 5)
        colorClass =
          "bg-green-600 dark:bg-green-400 hover:bg-green-700 dark:hover:bg-green-300";

      cells.push({
        date: new Date(d),
        dateString,
        count,
        colorClass,
      });

      if (d.getMonth() !== currentMonth) {
        currentMonth = d.getMonth();
        monthLabels.push({
          name: getMonthName(currentMonth),
          colStart:
            Math.floor((d - startDate) / (1000 * 60 * 60 * 24 * 7)) + 1,
        });
      }
    }

    const numWeeks = Math.ceil(cells.length / 7);
    const gridCells = Array(7)
      .fill(null)
      .map(() => Array(numWeeks).fill(null));

    cells.forEach((cell, index) => {
      const dayOfWeek = cell.date.getDay();
      const weekIndex = Math.floor(index / 7);
      if (gridCells[dayOfWeek] && weekIndex < numWeeks) {
        gridCells[dayOfWeek][weekIndex] = cell;
      }
    });

    return { gridCells, monthLabels };
  }, [contributionsMap]);

  const numWeeks = gridCells[0]?.length || 52;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Flame className="mr-2 h-5 w-5 text-orange-500" />
          Activity Streak
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around mb-4 text-sm">
          <p>
            Current Streak:{" "}
            <span className="font-semibold">
              {streakData.currentStreak} days
            </span>
          </p>
          <p>
            Longest Streak:{" "}
            <span className="font-semibold">
              {streakData.longestStreak} days
            </span>
          </p>
          <p>
            Total Active Days (Year):{" "}
            <span className="font-semibold">
              {Object.keys(contributionsMap).length}
            </span>
          </p>
        </div>

        <TooltipProvider>
          <div className="relative overflow-x-auto">
            {/* Month Labels */}
            <div className="absolute -top-5 left-8 flex">
              {monthLabels.map((m) => (
                <div
                  key={m.name}
                  className="text-xs text-muted-foreground"
                  style={{
                    marginLeft: `${m.colStart * 12}px`,
                    minWidth: "28px",
                  }}
                >
                  {m.name}
                </div>
              ))}
            </div>

            <div
              className="grid grid-flow-col grid-rows-7 gap-1 justify-start"
              style={{
                gridTemplateColumns: `repeat(${numWeeks}, minmax(0, 1fr))`,
              }}
            >
              {/* Day Labels */}
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, i) => (
                  <div
                    key={day}
                    className={`text-xs text-muted-foreground self-center pr-1 text-right w-8`}
                    style={{ gridRowStart: i + 1, gridColumnStart: 1 }}
                  >
                    {i % 2 !== 0 ? day : ""}
                  </div>
                )
              )}

              {/* Contribution Grid */}
              {gridCells.map((week, dayIndex) =>
                week.map((cell, weekIndex) => {
                  if (!cell)
                    return (
                      <div
                        key={`empty-${dayIndex}-${weekIndex}`}
                        className="w-3 h-3 md:w-4 md:h-4 rounded-sm"
                      ></div>
                    );
                  return (
                    <Tooltip key={cell.dateString}>
                      <TooltipTrigger asChild>
                        <div
                          className={`w-3 h-3 md:w-4 md:h-4 rounded-sm ${cell.colorClass} cursor-default`}
                          style={{
                            gridRowStart: dayIndex + 1,
                            gridColumnStart: weekIndex + 2,
                          }}
                        ></div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {cell.count} contributions on{" "}
                          {cell.date.toLocaleDateString()}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })
              )}
            </div>
          </div>
        </TooltipProvider>

        {/* Legend */}
        <div className="flex justify-end items-center mt-2 text-xs text-muted-foreground">
          Less
          <div className="w-2 h-2 mx-1 bg-muted/30 rounded-sm"></div>
          <div className="w-2 h-2 mx-1 bg-green-200 dark:bg-green-800 rounded-sm"></div>
          <div className="w-2 h-2 mx-1 bg-green-400 dark:bg-green-600 rounded-sm"></div>
          <div className="w-2 h-2 mx-1 bg-green-600 dark:bg-green-400 rounded-sm"></div>
          More
        </div>
      </CardContent>
    </Card>
  );
}
