import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ProblemDescriptionPanel } from "../components/problem-solving/ProblemDescriptionPanel";
import { MonacoEditorPanel } from "../components/problem-solving/MonacoEditorPanel";
import { TestCasesPanel } from "../components/problem-solving/TestCasesPanel";
import {
    FileText,
    FlaskConical,
    BookOpen,
    History,
    BarChart3,
    Loader2,
    ArrowBigLeft,
    ChevronLeft,
} from "lucide-react";
import { useExecutionStore } from "../store/useExecutionStore";
import { useProblemStore } from "../store/useProblemStore";
import toast from "react-hot-toast";
import { getLanguageId } from "@/lib/lang";
import { Chevron } from "react-day-picker";
import SolutionsPanel from "@/components/problem-solving/SolutionsPanel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Editor } from "@monaco-editor/react";
import EditorialPanel from "@/components/problem-solving/EditorialPanel";
import SubmissionsPanel from "@/components/problem-solving/SubmissionsPanel";
import { useSubmissionStore } from "@/store/useSubmissionStore";

export default function ProblemSolvingPage() {
    const { id } = useParams();
    const { getProblemById, problem, isProblemLoading } = useProblemStore();
    const { submissionsByUser, getSubmissionForProblem } = useSubmissionStore();
    const { executeCode, isExecuting, submission } =
        useExecutionStore();

    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [activeMainTab, setActiveMainTab] = useState("description");
    const [code, setCode] = useState("");

    useEffect(() => {
        getProblemById(id);
        getSubmissionForProblem(id);
    }, [id]);

    useEffect(() => {
        console.log("submission:", submission);
    }, []);

    useEffect(() => {
        if (problem && selectedLanguage) {
            const snippet = problem?.codeSnippets?.[selectedLanguage.toUpperCase()] || "";
            setCode(snippet);
        }
    }, [problem, selectedLanguage]);

    const handleRunCode = async () => {
        if (!problem) return;

        const stdin = problem?.testcases.map((tc) => tc.input);
        const expected_outputs = problem?.testcases.map((tc) => tc.output);

        try {
            // clearResults();
            const langId = getLanguageId(selectedLanguage);
            await executeCode(
                code,
                langId,
                stdin,
                expected_outputs,
                id
            );
            toast.success("Code executed successfully");
            setActiveMainTab("result");
        } catch (err) {
            toast.error("Code execution failed");
        }
    };

    const mainTabs = [
        {
            value: "description",
            label: "Description",
            icon: FileText,
            content: <ProblemDescriptionPanel problem={problem} />,
        },
        {
            value: "editorial",
            label: "Editorial",
            icon: BookOpen,
            content: <EditorialPanel editorial={problem?.editorial} />,
        },
        {
            value: "solutions",
            label: "Solutions",
            icon: FlaskConical,
            content: <SolutionsPanel solutions={problem?.referenceSolutions} />,
        },
        {
            value: "submissions",
            label: "Submissions",
            icon: History,
            content: <SubmissionsPanel submissions={submissionsByUser} />,
        },
        {
            value: "result",
            label: "Result",
            icon: BarChart3,
            content: (
                <div className="p-4 space-y-4">
                    {submission?.length === 0 && <p>No results yet</p>}
                    {submission?.testCases?.map((res, idx) => (
                        <div
                            key={idx}
                            className="border border-neutral-700 rounded p-4"
                        >
                            <h3 className="text-sm font-semibold text-white">
                                Test Case #{idx + 1}
                            </h3>
                            <p className="text-xs mt-1">
                                Input: {problem?.testcases[idx]?.input}
                            </p>
                            <p className="text-xs">
                                Expected Output:{" "}
                                {problem?.testcases[idx]?.output}
                            </p>
                            <p className="text-xs">
                                Your Output: {res.stdout?.trim()}
                            </p>
                            <p className="text-xs font-medium mt-1">
                                Verdict:{" "}
                                {res.status.description === "Accepted" ? (
                                    <span className="text-green-500">
                                        Accepted
                                    </span>
                                ) : (
                                    <span className="text-red-500">
                                        Wrong Answer
                                    </span>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            ),
        },
    ];

    return (
        <div className="h-screen flex flex-col bg-neutral-900 text-neutral-300">
            <header className="p-2 border-b border-neutral-700 shrink-0 flex items-center space-x-2">
                <Link className="cursor-pointer border border-neutral-700 rounded p-1" to="/all-problems">
                    <ChevronLeft className="mr-4 h-8 w-8" />
                </Link>
                <h5 className="text-lg font-semibold text-white">
                    Problem Arena: {problem?.title}
                </h5>
            </header>

            <ResizablePanelGroup
                direction="horizontal"
                className="flex-grow min-h-0"
            >
                <ResizablePanel defaultSize={40} minSize={25} overflow="auto">
                    <ScrollArea className="h-full">
                        <div className="flex flex-col h-full bg-neutral-850">
                            <Tabs
                                value={activeMainTab}
                                onValueChange={setActiveMainTab}
                                className="flex-grow flex flex-col"
                            >
                                <TabsList className=" sticky top-0 z-2 bg-neutral-800 border-b border-neutral-700 rounded-none p-0 justify-start shrink-0">
                                    {mainTabs.map((tab) => (
                                        <TabsTrigger
                                            key={tab.value}
                                            value={tab.value}
                                            className="text-xs px-3 py-2.5 data-[state=active]:bg-neutral-900 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none text-neutral-400 hover:text-white"
                                        >
                                            <tab.icon className="mr-1.5 h-4 w-4" />{" "}
                                            {tab.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                                {mainTabs.map((tab) => (
                                    <TabsContent
                                        key={tab.value}
                                        value={tab.value}
                                        className="flex-grow overflow-y-auto mt-0 h-full"
                                    >
                                        {tab.content}
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </div>
                    </ScrollArea>
                </ResizablePanel>

                <ResizableHandle
                    withHandle
                    className="bg-neutral-700 w-1.5 hover:bg-blue-500 transition-colors data-[resize-handle-active]:bg-blue-500"
                />

                <ResizablePanel defaultSize={60} minSize={30}>
                    <ResizablePanelGroup
                        direction="vertical"
                        className="min-h-0"
                    >
                        <ResizablePanel defaultSize={65} minSize={30}>
                            <div className="p-2 h-full">
                                <MonacoEditorPanel
                                    codeSnippets={problem?.codeSnippets}
                                    code={code}
                                    onCodeChange={setCode}
                                    selectedLanguage={selectedLanguage}
                                    onLanguageChange={setSelectedLanguage}
                                    onRunClick={handleRunCode}
                                    isExecuting={isExecuting}
                                />
                            </div>
                        </ResizablePanel>
                        <ResizableHandle
                            withHandle
                            className="bg-neutral-700 h-1.5 hover:bg-blue-500 transition-colors data-[resize-handle-active]:bg-blue-500"
                        />
                        <ResizablePanel defaultSize={35} minSize={20}>
                            <div className="p-2 h-full">
                                <TestCasesPanel
                                    testCases={problem?.testcases}
                                    submission={submission}
                                />
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
