import { useEffect, useState } from "react"
import {
  CheckCircle2,
  XCircle,
  Clock,
  MemoryStick as Memory,
  CodeXml,
  CheckSquare,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TestCasesPanel({ testCases = [], submission = null, forceTab = "testcases" }) {

  useEffect(() => {
    console.log(forceTab);
  }, [forceTab]);

  const [activeTab, setActiveTab] = useState("testcases");

  const memoryArr = submission ? JSON.parse(submission.memory || "[]") : []
  const timeArr = submission ? JSON.parse(submission.time || "[]") : []

  useEffect(() => {
    setActiveTab(forceTab);
  }, [forceTab]);

  const avgMemory =
    memoryArr.length > 0
      ? memoryArr.map(parseFloat).reduce((a, b) => a + b, 0) / memoryArr.length
      : 0

  const avgTime =
    timeArr.length > 0
      ? timeArr.map(parseFloat).reduce((a, b) => a + b, 0) / timeArr.length
      : 0

  const passedTests = submission?.testCases?.filter((tc) => tc.passed).length || 0
  const totalTests = submission?.testCases?.length || 0
  const successRate = totalTests > 0 ? (passedTests / totalTests) * 100 : 0

  return (
    <div className="bg-neutral-800 rounded-lg flex flex-col h-full">
      <Tabs value={activeTab} className="flex flex-col h-full" onValueChange={setActiveTab}>
        {/* Tabs Header */}
        <div className="flex items-center justify-between p-2 border-b border-neutral-700">
          <TabsList className="bg-neutral-800 p-0">
            <TabsTrigger
              value="testcases"
              className="text-xs px-3 py-1.5 data-[state=active]:bg-neutral-700 data-[state=active]:text-foreground"
            >
              <CheckSquare className="mr-1.5 h-4 w-4" /> Test Cases
            </TabsTrigger>
            <TabsTrigger
              value="results"
              className="text-xs px-3 py-1.5 data-[state=active]:bg-neutral-700 data-[state=active]:text-foreground"
            >
              <CodeXml className="mr-1.5 h-4 w-4" /> Results
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Test Cases Tab Content */}
        <TabsContent value="testcases" className="flex-grow p-3 space-y-3 overflow-y-auto mt-0">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Input</th>
                  <th>Expected Output</th>
                </tr>
              </thead>
              <tbody>
                {testCases.map((tc, idx) => (
                  <tr key={idx}>
                    <td className="font-mono">{tc.input}</td>
                    <td className="font-mono">{tc.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Results Tab Content */}
        <TabsContent value="results" className="flex-grow p-3 space-y-3 overflow-y-auto mt-0">
          {!submission ? (
            <div className="text-center text-muted-foreground py-10">
              No submissions yet.
            </div>
          ) : (
            <>
              {/* Header Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="card bg-neutral-900/80 shadow-lg">
                  <div className="card-body p-4">
                    <h3 className="card-title text-sm">Status</h3>
                    <div
                      className={`text-lg font-bold ${submission.status === "Accepted" ? "text-success" : "text-error"
                        }`}
                    >
                      {submission.status}
                    </div>
                  </div>
                </div>

                  <div className="card bg-neutral-900/80 shadow-lg">
                  <div className="card-body p-4">
                    <h3 className="card-title text-sm">Success Rate</h3>
                    <div className="text-lg font-bold">{successRate.toFixed(1)}%</div>
                  </div>
                </div>

                  <div className="card bg-neutral-900/80 shadow-lg">
                  <div className="card-body p-4">
                    <h3 className="card-title text-sm flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Avg. Runtime
                    </h3>
                    <div className="text-lg font-bold">{avgTime.toFixed(3)} s</div>
                  </div>
                </div>

                  <div className="card bg-neutral-900/80 shadow-lg">
                  <div className="card-body p-4">
                    <h3 className="card-title text-sm flex items-center gap-2">
                      <Memory className="w-4 h-4" />
                      Avg. Memory
                    </h3>
                    <div className="text-lg font-bold">{avgMemory.toFixed(0)} KB</div>
                  </div>
                </div>
              </div>

              {/* Test Case Results Table */}
                <div className="card bg-neutral-900/80 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title mb-4">Test Case Results</h2>
                  <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                      <thead>
                        <tr>
                          <th>Status</th>
                          <th>Expected</th>
                          <th>Your Output</th>
                          <th>Memory</th>
                          <th>Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {submission.testCases.map((tc) => (
                          <tr key={tc.id}>
                            <td>
                              {tc.passed ? (
                                <div className="flex items-center gap-2 text-success">
                                  <CheckCircle2 className="w-5 h-5" />
                                  Passed
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 text-error">
                                  <XCircle className="w-5 h-5" />
                                  Failed
                                </div>
                              )}
                            </td>
                            <td className="font-mono">{tc.expected}</td>
                            <td className="font-mono">{tc.stdout || "null"}</td>
                            <td>{tc.memory}</td>
                            <td>{tc.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
