"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ProblemDescriptionPanel } from "../components/problem-solving/ProblemDescriptionPanel"
import { CodeEditorPanel } from "../components/problem-solving/CodeEditorPanel"
import { TestCasesPanel } from "../components/problem-solving/TestCasesPanel"
// import problemData from "../data/problem-details-mock.json" // Fetch instead
import { FileText, BookOpen, FlaskConical, History, BarChart3, Loader2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const DummyEditorial = () => (
  <div className="p-5 space-y-4 prose prose-sm prose-invert max-w-none">
    <h2 className="text-xl font-semibold">Editorial: Optimal Approach</h2>
    <p>
      The problem asks us to remove all instances of a specific value from an array in-place and return the new length
      of the array (number of elements not equal to the value).
    </p>
    <h3 className="text-lg font-semibold">Two Pointers Technique</h3>
    <p>
      A common and efficient way to solve this problem is by using the two-pointers technique. We can maintain one
      pointer (`k` or `write_idx`) that keeps track of the position where the next non-`val` element should be written.
      Another pointer (`i` or `read_idx`) iterates through the array from the beginning.
    </p>
    <pre className="bg-muted/50 p-3 rounded-md">
      {`k = 0
for i from 0 to nums.length - 1:
    if nums[i] != val:
        nums[k] = nums[i]
        k = k + 1
return k`}
    </pre>
    <h4 className="font-semibold">Complexity Analysis</h4>
    <ul>
      <li>
        <strong>Time Complexity:</strong> O(N), where N is the number of elements in the array, as we iterate through
        the array once.
      </li>
      <li>
        <strong>Space Complexity:</strong> O(1), as we are modifying the array in-place and using only a constant amount
        of extra space for pointers.
      </li>
    </ul>
    <p>
      This approach ensures that all elements not equal to `val` are moved to the front of the array, and their relative
      order is preserved. The elements beyond index `k-1` are irrelevant.
    </p>
  </div>
)

const DummySolutions = () => (
  <div className="p-5 space-y-4">
    <h2 className="text-xl font-semibold mb-3">Community Solutions</h2>
    <div className="space-y-3">
      <div className="p-3 bg-muted/30 rounded-md">
        <h3 className="font-medium text-sm text-sky-400">Python - Concise Two Pointers</h3>
        <p className="text-xs text-muted-foreground mt-1">
          A very clean implementation using two pointers. Easy to understand and efficient.
        </p>
      </div>
      <div className="p-3 bg-muted/30 rounded-md">
        <h3 className="font-medium text-sm text-yellow-400">JavaScript - ES6 Filter (Not In-Place)</h3>
        <p className="text-xs text-muted-foreground mt-1">
          Demonstrates using filter for a non-in-place solution, then copying back. Good for understanding alternatives.
        </p>
      </div>
      <div className="p-3 bg-muted/30 rounded-md">
        <h3 className="font-medium text-sm text-green-400">C++ - Standard Library Approach</h3>
        <p className="text-xs text-muted-foreground mt-1">
          Utilizes `std::remove` and `std::distance` for a more idiomatic C++ solution.
        </p>
      </div>
    </div>
  </div>
)

const DummySubmissions = () => {
  const submissions = [
    { id: 1, date: "2024-06-02 10:15 AM", status: "Accepted", runtime: "5ms", memory: "3.2MB", lang: "C" },
    { id: 2, date: "2024-06-01 08:30 PM", status: "Wrong Answer", runtime: "N/A", memory: "N/A", lang: "Python" },
    { id: 3, date: "2024-05-30 11:00 AM", status: "Accepted", runtime: "60ms", memory: "42.0MB", lang: "JavaScript" },
  ]
  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-3">Your Submissions</h2>
      <div className="rounded-md border border-neutral-700">
        <Table>
          <TableHeader>
            <TableRow className="border-neutral-700">
              <TableHead className="text-neutral-400">Date</TableHead>
              <TableHead className="text-neutral-400">Status</TableHead>
              <TableHead className="text-neutral-400">Runtime</TableHead>
              <TableHead className="text-neutral-400">Memory</TableHead>
              <TableHead className="text-neutral-400">Language</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((s) => (
              <TableRow key={s.id} className="border-neutral-700">
                <TableCell className="text-xs">{s.date}</TableCell>
                <TableCell>
                  <Badge variant={s.status === "Accepted" ? "success" : "destructive"} className="text-xs">
                    {s.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs">{s.runtime}</TableCell>
                <TableCell className="text-xs">{s.memory}</TableCell>
                <TableCell className="text-xs">{s.lang}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const DummyResultSummary = () => (
  <div className="p-5 space-y-4 text-center">
    <h2 className="text-2xl font-bold text-green-400">Accepted!</h2>
    <p className="text-muted-foreground">Congratulations, your solution passed all test cases.</p>
    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto text-left">
      <div className="bg-muted/30 p-3 rounded-md">
        <p className="text-xs text-muted-foreground">Runtime</p>
        <p className="text-lg font-semibold">5 ms</p>
        <p className="text-xs text-green-400">Faster than 95.00%</p>
      </div>
      <div className="bg-muted/30 p-3 rounded-md">
        <p className="text-xs text-muted-foreground">Memory</p>
        <p className="text-lg font-semibold">3.2 MB</p>
        <p className="text-xs text-green-400">Less than 88.00%</p>
      </div>
    </div>
    <p className="text-xs text-muted-foreground mt-6">This was a mock result. Actual results will vary.</p>
  </div>
)

export default function ProblemSolvingPage() {
  const [problem, setProblem] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState("c")
  const [activeMainTab, setActiveMainTab] = useState("description")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProblemData = async () => {
      try {
        // In a real app, this would be an API call.
        // For Next.js, we fetch from public folder.
        const response = await fetch("./src/data/problem-details-mock.json")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setProblem(data)
      } catch (error) {
        console.error("Failed to fetch problem data:", error)
        // Handle error state, e.g., show an error message
      } finally {
        setLoading(false)
      }
    }
    fetchProblemData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-900 text-white">
        <Loader2 className="h-8 w-8 animate-spin mr-2" /> Loading problem...
      </div>
    )
  }
  if (!problem) {
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-900 text-white">
        Failed to load problem. Please try again.
      </div>
    )
  }

  const mainTabs = [
    {
      value: "description",
      label: "Description",
      icon: FileText,
      content: <ProblemDescriptionPanel problem={problem} />,
    },
    { value: "editorial", label: "Editorial", icon: BookOpen, content: <DummyEditorial /> },
    { value: "solutions", label: "Solutions", icon: FlaskConical, content: <DummySolutions /> },
    { value: "submissions", label: "Submissions", icon: History, content: <DummySubmissions /> },
    { value: "result-summary", label: "Result", icon: BarChart3, content: <DummyResultSummary /> },
  ]

  return (
    <div className="h-screen flex flex-col bg-neutral-900 text-neutral-300">
      <header className="p-2 border-b border-neutral-700 shrink-0">
        <span className="text-lg font-semibold text-white">Problem Arena: {problem.title}</span>
      </header>

      <ResizablePanelGroup direction="horizontal" className="flex-grow min-h-0">
        <ResizablePanel defaultSize={40} minSize={25}>
          <div className="flex flex-col h-full bg-neutral-850">
            <Tabs value={activeMainTab} onValueChange={setActiveMainTab} className="flex-grow flex flex-col">
              <TabsList className="bg-neutral-850 border-b border-neutral-700 rounded-none p-0 justify-start shrink-0">
                {mainTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="text-xs px-3 py-2.5 data-[state=active]:bg-neutral-700 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none text-neutral-400 hover:text-white"
                  >
                    <tab.icon className="mr-1.5 h-4 w-4" /> {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {mainTabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="flex-grow overflow-y-auto mt-0 h-full">
                  {tab.content}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </ResizablePanel>

        <ResizableHandle
          withHandle
          className="bg-neutral-700 w-1.5 hover:bg-blue-500 transition-colors data-[resize-handle-active]:bg-blue-500"
        />

        <ResizablePanel defaultSize={60} minSize={30}>
          <ResizablePanelGroup direction="vertical" className="min-h-0">
            <ResizablePanel defaultSize={65} minSize={30}>
              <div className="p-2 h-full">
                <CodeEditorPanel
                  defaultCode={problem.defaultCode}
                  selectedLanguage={selectedLanguage}
                  onLanguageChange={setSelectedLanguage}
                />
              </div>
            </ResizablePanel>
            <ResizableHandle
              withHandle
              className="bg-neutral-700 h-1.5 hover:bg-blue-500 transition-colors data-[resize-handle-active]:bg-blue-500"
            />
            <ResizablePanel defaultSize={35} minSize={20}>
              <div className="p-2 h-full">
                <TestCasesPanel testCases={problem.testCases} />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
