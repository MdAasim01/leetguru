import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckSquare, CodeXml, Maximize, Play } from "lucide-react"

export function TestCasesPanel({ testCases }) {
  const [activeTestCaseId, setActiveTestCaseId] = useState(testCases[0]?.id || null)
  const [results, setResults] = useState({}) // Store results per test case

  const activeTestCase = testCases.find((tc) => tc.id === activeTestCaseId)

  const handleRunTest = (testCaseId) => {
    // Mock running test
    setResults((prev) => ({
      ...prev,
      [testCaseId]: {
        output: `Mock Output for ${testCaseId}`, // Replace with actual execution logic
        runtime: `${Math.floor(Math.random() * 100) + 20} ms`,
        memory: `${(Math.random() * 30 + 10).toFixed(1)} MB`,
        status: Math.random() > 0.3 ? "Accepted" : "Wrong Answer",
      },
    }))
  }

  const currentResult = results[activeTestCaseId]

  return (
    <div className="bg-neutral-800 rounded-lg flex flex-col h-full">
      <Tabs defaultValue="testcases" className="flex flex-col h-full">
        <div className="flex items-center justify-between p-2 border-b border-neutral-700">
          <TabsList className="bg-neutral-800 p-0">
            <TabsTrigger
              value="testcases"
              className="text-xs px-3 py-1.5 data-[state=active]:bg-neutral-700 data-[state=active]:text-foreground"
            >
              <CheckSquare className="mr-1.5 h-4 w-4" /> Test Cases
            </TabsTrigger>
            <TabsTrigger
              value="result"
              className="text-xs px-3 py-1.5 data-[state=active]:bg-neutral-700 data-[state=active]:text-foreground"
              disabled={!currentResult}
            >
              <CodeXml className="mr-1.5 h-4 w-4" /> Result
            </TabsTrigger>
          </TabsList>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:bg-neutral-700 hover:text-foreground"
          >
            <Maximize className="h-4 w-4" />
          </Button>
        </div>

        <TabsContent value="testcases" className="flex-grow p-3 space-y-3 overflow-y-auto mt-0">
          <div className="flex space-x-2 mb-2">
            {testCases.map((tc, index) => (
              <Button
                key={index}
                variant={activeTestCaseId === tc.id ? "secondary" : "ghost"}
                size="sm"
                className={`text-xs h-7 px-2 ${activeTestCaseId === tc.id ? "bg-neutral-600 text-foreground" : "text-muted-foreground hover:bg-neutral-700 hover:text-foreground"}`}
                onClick={() => setActiveTestCaseId(tc.id)}
              >
                {tc.name}
              </Button>
            ))}
          </div>
          {activeTestCase && (
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Input:</label>
              <pre className="bg-neutral-900 p-2 rounded-md text-xs text-foreground whitespace-pre-wrap">
                {activeTestCase.input}
              </pre>
            </div>
          )}
        </TabsContent>

        <TabsContent value="result" className="flex-grow p-3 space-y-3 overflow-y-auto mt-0">
          {currentResult ? (
            <>
              <div>
                <span
                  className={`text-lg font-semibold ${currentResult.status === "Accepted" ? "text-green-400" : "text-red-400"}`}
                >
                  {currentResult.status}
                </span>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Input:</label>
                <pre className="bg-neutral-900 p-2 rounded-md text-xs text-foreground whitespace-pre-wrap">
                  {activeTestCase?.input}
                </pre>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Output:</label>
                <pre className="bg-neutral-900 p-2 rounded-md text-xs text-foreground whitespace-pre-wrap">
                  {currentResult.output}
                </pre>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Expected:</label>
                <pre className="bg-neutral-900 p-2 rounded-md text-xs text-foreground whitespace-pre-wrap">
                  {activeTestCase?.expectedOutput}
                </pre>
              </div>
              <div className="flex space-x-4 text-xs text-muted-foreground">
                <span>Runtime: {currentResult.runtime}</span>
                <span>Memory: {currentResult.memory}</span>
              </div>
            </>
          ) : (
            <div className="text-center text-muted-foreground py-10">Run a test case to see results.</div>
          )}
        </TabsContent>
      </Tabs>
      <div className="p-2 border-t border-neutral-700 flex justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="text-xs bg-neutral-700 border-neutral-600 hover:bg-neutral-600"
          onClick={() => activeTestCaseId && handleRunTest(activeTestCaseId)}
        >
          <Play className="mr-1.5 h-3 w-3" /> Run
        </Button>
        <Button size="sm" className="text-xs bg-green-600 hover:bg-green-700 text-white">
          Submit
        </Button>
      </div>
    </div>
  )
}
