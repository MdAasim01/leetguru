import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, CalendarDays } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Helper to get month name
const getMonthName = (monthIndex) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[monthIndex];
};

// Helper to get day of the week for the first day of a month in the grid
const getDayOfWeekInitial = (year, month) => {
  return new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday, etc.
}

export function StreakCalendar({ streakData }) {
  const today = new Date();
  const endDate = new Date(today);
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 365 + today.getDay()); // Align to start of a week roughly a year ago

  const cells = [];
  const monthLabels = [];
  let currentMonth = -1;

  // Create a map for quick contribution lookup
  const contributionsMap = streakData.contributions || {};

  // Generate day cells
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateString = d.toISOString().split('T')[0];
    const count = contributionsMap[dateString] || 0;
    let colorClass = "bg-muted/30 hover:bg-muted/60"; // Default for no contributions
    if (count > 0 && count <= 2) colorClass = "bg-green-200 dark:bg-green-800 hover:bg-green-300 dark:hover:bg-green-700";
    else if (count > 2 && count <= 5) colorClass = "bg-green-400 dark:bg-green-600 hover:bg-green-500 dark:hover:bg-green-500";
    else if (count > 5) colorClass = "bg-green-600 dark:bg-green-400 hover:bg-green-700 dark:hover:bg-green-300";

    cells.push({
      date: new Date(d),
      dateString,
      count,
      colorClass,
    });

    // Add month labels
    if (d.getMonth() !== currentMonth) {
      currentMonth = d.getMonth();
      // Position month label roughly above the start of the month
      // This is a simplified positioning logic
      monthLabels.push({
        name: getMonthName(currentMonth),
        // Calculate approximate column index for the label
        // This needs to be relative to the grid structure
        // For a 52/53 week grid, each week is a column
        colStart: Math.floor((d - startDate) / (1000 * 60 * 60 * 24 * 7)) +1,
      });
    }
  }
  
  // Create a grid of 7 rows (days of the week)
  const numWeeks = Math.ceil(cells.length / 7);
  const gridCells = Array(7).fill(null).map(() => Array(numWeeks).fill(null));
  
  cells.forEach((cell, index) => {
    const dayOfWeek = cell.date.getDay(); // 0 for Sunday
    const weekIndex = Math.floor(index / 7);
    if (gridCells[dayOfWeek] && weekIndex < numWeeks) {
      gridCells[dayOfWeek][weekIndex] = cell;
    }
  });


  return (
    <>
        <Card>
        <CardHeader>
            <CardTitle className="flex items-center">
            <Flame className="mr-2 h-5 w-5 text-orange-500" />
            Activity Streak
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex justify-around mb-4 text-sm">
                <p>Current Streak: <span className="font-semibold">{streakData.currentStreak} days</span></p>
                <p>Longest Streak: <span className="font-semibold">{streakData.longestStreak} days</span></p>
                <p>Total Active Days (Year): <span className="font-semibold">{Object.keys(contributionsMap).length}</span></p>
            </div>

            <TooltipProvider>
            <div className="grid grid-flow-col grid-rows-7 gap-1 justify-start relative" style={{ gridTemplateColumns: `repeat(${numWeeks}, minmax(0, 1fr))` }}>
                {/* Month Labels (simplified) */}
                {/* This part is tricky to align perfectly without more complex calculations or a library */}
                {/* <div className="absolute -top-5 flex">
                {monthLabels.map(m => (
                    <div key={m.name} className="text-xs text-muted-foreground" style={{ gridColumnStart: m.colStart, width: 'calc(4 * 0.75rem + 3 * 0.25rem)' }}>
                    {m.name}
                    </div>
                ))}
                </div> */}
                
                {/* Day Labels */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                i % 2 !== 0 && <div key={day} className="row-start-${i+1} text-xs text-muted-foreground self-center pr-1 text-right w-8">{day}</div>
                ))}


                {gridCells.map((week, dayIndex) => 
                week.map((cell, weekIndex) => {
                    if (!cell) return <div key={`empty-${dayIndex}-${weekIndex}`} className="w-3 h-3 rounded-sm"></div>;
                    return (
                    <Tooltip key={cell.dateString}>
                        <TooltipTrigger asChild>
                        <div
                            className={`w-3 h-3 rounded-sm ${cell.colorClass} cursor-default`}
                            style={{ gridRowStart: dayIndex + 1, gridColumnStart: weekIndex + 1 + (dayIndex % 2 !== 0 ? 1 : 0) /* Offset for day labels */}}
                        ></div>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>{cell.count} contributions on {cell.date.toLocaleDateString()}</p>
                        </TooltipContent>
                    </Tooltip>
                    );
                })
                )}
            </div>
            </TooltipProvider>
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
    </>
  );
}