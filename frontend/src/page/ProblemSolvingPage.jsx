// Updated ProblemSolvingPage.jsx with bug fixes and full integration
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ProblemDescriptionPanel } from "../components/problem-solving/ProblemDescriptionPanel"
import { TestCasesPanel } from "../components/problem-solving/TestCasesPanel"
import MonacoEditorPanel from "../components/problem-solving/MonacoEditorPanel"
import { FileText, History, BarChart3, Loader2 } from "lucide-react"
import { useProblemStore } from "../store/useProblemStore"
import { useExecutionStore } from "../store/useExecutionStore"
import { useSubmissionStore } from "../store/useSubmissionStore"
import Submission from "../components/Submission"
import SubmissionsList from "../components/SubmissionList"

export default function ProblemSolvingPage() {
  const { id } = useParams()
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")
  const [code, setCode] = useState("")
  const [activeMainTab, setActiveMainTab] = useState("description")

  const { getProblemById, problem, isProblemLoading } = useProblemStore()
  const { executeCode, submission, isExecuting } = useExecutionStore()
  const { getSubmissionForProblem, submissions, isLoading: isSubmissionsLoading } = useSubmissionStore()

  useEffect(() => {
    if (id) {
      getProblemById(id)
    }
  }, [id])

  useEffect(() => {
    if (activeMainTab === "submissions" && id) {
      getSubmissionForProblem(id)
    }
  }, [activeMainTab, id])

  // Update code when problem or selected language changes
  useEffect(() => {
    if (problem && selectedLanguage) {
      const snippet = problem.codeSnippets?.[selectedLanguage.toUpperCase()] || ""
      setCode(snippet)
    }
  }, [problem, selectedLanguage])

  const handleRunCode = () => {
    if (!problem) return
    const stdin = problem.testcases.map((tc) => tc.input)
    const expected_outputs = problem.testcases.map((tc) => tc.output)
    const languageId = selectedLanguage.toUpperCase()
    executeCode(code, languageId, stdin, expected_outputs, id)
  }

  if (isProblemLoading || !problem) {
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-900 text-white">
        <Loader2 className="h-8 w-8 animate-spin mr-2" /> Loading problem...
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
    {
      value: "submissions",
      label: "Submissions",
      icon: History,
      content: <SubmissionsList submissions={submissions} isLoading={isSubmissionsLoading} />,
    },
    {
      value: "result-summary",
      label: "Result",
      icon: BarChart3,
      content: submission ? <Submission submission={submission} /> : <div className="p-4">No recent result.</div>,
    },
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

        <ResizableHandle withHandle className="bg-neutral-700 w-1.5 hover:bg-blue-500 transition-colors" />

        <ResizablePanel defaultSize={60} minSize={30}>
          <ResizablePanelGroup direction="vertical" className="min-h-0">
            <ResizablePanel defaultSize={65} minSize={30}>
              <div className="p-2 h-full">
                <MonacoEditorPanel
                  codeSnippets={problem.codeSnippets || {}}
                  selectedLanguage={selectedLanguage}
                  onLanguageChange={setSelectedLanguage}
                />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle className="bg-neutral-700 h-1.5 hover:bg-blue-500 transition-colors" />
            <ResizablePanel defaultSize={35} minSize={20}>
              <div className="p-2 h-full">
                <TestCasesPanel testCases={problem.testcases} onRun={handleRunCode} />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}