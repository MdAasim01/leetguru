import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"

export function StatsSection({ stats }) {
  const difficultyData = [
    { name: "Easy", value: stats.problemsSolvedByDifficulty.easy, fill: "hsl(var(--chart-2))" }, // Green
    { name: "Medium", value: stats.problemsSolvedByDifficulty.medium, fill: "hsl(var(--chart-3))" }, // Yellow
    { name: "Hard", value: stats.problemsSolvedByDifficulty.hard, fill: "hsl(var(--chart-4))" }, // Red
  ]
  const totalDifficultySolved = difficultyData.reduce((acc, curr) => acc + curr.value, 0)

  const acceptanceRateData = [
    { name: "Accepted", value: stats.acceptanceRate, fill: "hsl(var(--chart-1))" }, // Blue
    { name: "Others", value: 100 - stats.acceptanceRate, fill: "hsl(var(--muted))" },
  ]

  const chartConfigDifficulty = {
    easy: { label: "Easy", color: "hsl(var(--chart-2))" },
    medium: { label: "Medium", color: "hsl(var(--chart-3))" },
    hard: { label: "Hard", color: "hsl(var(--chart-4))" },
  }

  const chartConfigAcceptance = {
    accepted: { label: "Accepted", color: "hsl(var(--chart-1))" },
    others: { label: "Others", color: "hsl(var(--muted))" },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="mr-2 h-5 w-5" />
          Statistics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-3xl font-bold">{stats.totalSolved}</p>
            <p className="text-sm text-muted-foreground">Problems Solved</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <p className="text-3xl font-bold">{stats.totalSubmissions}</p>
            <p className="text-sm text-muted-foreground">Total Submissions</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Acceptance Rate Chart */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">Acceptance Rate</h3>
            <ChartContainer config={chartConfigAcceptance} className="mx-auto aspect-square h-[200px]">
              <PieChart>
                <ChartTooltipContent nameKey="name" hideLabel />
                <Pie
                  data={acceptanceRateData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={50}
                  strokeWidth={2}
                >
                  {acceptanceRateData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                {/* Centered Text */}
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-foreground text-xl font-semibold"
                >
                  {stats.acceptanceRate.toFixed(1)}%
                </text>
              </PieChart>
            </ChartContainer>
          </div>

          {/* Problems Solved by Difficulty Chart */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">Solved by Difficulty</h3>
            <ChartContainer config={chartConfigDifficulty} className="mx-auto aspect-square h-[200px]">
              <PieChart>
                <ChartTooltipContent nameKey="name" />
                <Pie
                  data={difficultyData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={50}
                  labelLine={false}
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }) => {
                    const RADIAN = Math.PI / 180
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
                    const x = cx + radius * Math.cos(-midAngle * RADIAN)
                    const y = cy + radius * Math.sin(-midAngle * RADIAN)
                    // Only show label if percent is large enough
                    if (percent * 100 < 5) return null
                    return (
                      <text
                        x={x}
                        y={y}
                        fill="hsl(var(--primary-foreground))"
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                        className="text-xs font-medium"
                      >
                        {`${value}`}
                      </text>
                    )
                  }}
                >
                  {difficultyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
              </PieChart>
            </ChartContainer>
          </div>
        </div>

        {/* Solved by Language (remains as list) */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Solved by Language</h3>
          <div className="space-y-2">
            {stats.problemsSolvedByLanguage.map((lang) => (
              <div key={lang.language} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${lang.color}`}></span>
                  <span>{lang.language}</span>
                </div>
                <span className="text-sm font-medium">{lang.count}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
