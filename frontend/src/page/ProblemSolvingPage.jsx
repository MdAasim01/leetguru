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
    ChevronLeft,
} from "lucide-react";
import { useExecutionStore } from "../store/useExecutionStore";
import { useProblemStore } from "../store/useProblemStore";
import toast from "react-hot-toast";
import { getLanguageId } from "@/lib/lang";
import SolutionsPanel from "@/components/problem-solving/SolutionsPanel";
import { ScrollArea } from "@/components/ui/scroll-area";
import EditorialPanel from "@/components/problem-solving/EditorialPanel";
import SubmissionsPanel from "@/components/problem-solving/SubmissionsPanel";
import { useSubmissionStore } from "@/store/useSubmissionStore";
import { axiosInstance } from "@/lib/axios";
import { useAuthStore } from "@/store/useAuthStore";
import { Badge } from "@/components/ui/badge";

export default function ProblemSolvingPage() {
    const { id } = useParams();
    const { getProblemById, problem, isProblemLoading } = useProblemStore();
    const { submissionsByUser, getSubmissionForProblem } = useSubmissionStore();
    const { checkAuth, authUser } = useAuthStore();
    const { executeCode, isExecuting, submission } =
        useExecutionStore();

    const [aiFeedback, setAiFeedback] = useState("");
    const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);


    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [activeMainTab, setActiveMainTab] = useState("description");
    const [code, setCode] = useState("");

    useEffect(() => {
        getProblemById(id);
        getSubmissionForProblem(id);
    }, [id]);

    useEffect(() => {
        if (problem && selectedLanguage) {
            const snippet = problem?.codeSnippets?.[selectedLanguage.toUpperCase()] || "";
            setCode(snippet);
        }
    }, [problem, selectedLanguage]);

    const handleRunCode = async () => {
        if (!problem) return;

        const stdin = problem.testcases.map((tc) => tc.input);
        const expected_outputs = problem.testcases.map((tc) => tc.output);

        try {
            const langId = getLanguageId(selectedLanguage);
            await executeCode(code, langId, stdin, expected_outputs, id);
            toast.success("Code executed successfully");
            setAiFeedback("");
            setActiveMainTab("feedback");

        } catch (err) {
            toast.error("Code execution failed");
        }
    };

    const handleGenerateFeedback = async () => {

        if (!submissionsByUser) {
            toast.error("No submissions found");
            return;
        }

        if (authUser?.coins < 3) {
            toast.error("You need at least 3 coins to generate AI feedback.");
            return;
        }

        setIsLoadingFeedback(true);
        setAiFeedback("");

        try {
            // ⏳ Begin fetching AI feedback in background
            setIsLoadingFeedback(true);
            setAiFeedback(""); // Clear old feedback

            axiosInstance
                .post("/feedback/code-feedback", {
                    code,
                    language: selectedLanguage,
                    testCases: newSub?.testCases || [],
                })
                .then((res) => {
                    setAiFeedback(res.data.feedback);
                })
                .catch((err) => {
                    console.error("Feedback error:", err);
                    setAiFeedback("⚠️ Could not generate feedback.");
                })
                .finally(() => {
                    setIsLoadingFeedback(false);
                });
            toast.success("AI feedback generated, 3 coins deducted.");
        } catch (err) {
            console.error(err);
            toast.error("Failed to generate AI feedback.");
        } finally {
            checkAuth();
            setIsLoadingFeedback(false);
        }
    };

    // Add a button in your AI Feedback tab content:
    const feedbackContent = (
        <div className="p-4 space-y-6">
            <div className="prose max-w-3xl text-sm text-[#ebebeb] bg-neutral-800 border border-neutral-700 p-4 rounded">
                <h3 className="text-lg font-bold text-primary mb-2">AI Code Feedback</h3>

                <button
                    disabled={isLoadingFeedback || authUser?.coins < 3}
                    onClick={handleGenerateFeedback}
                    className="mb-4 px-4 py-2 bg-primary hover:bg-primary/80 disabled:bg-gray-600 rounded text-slate-900 cursor-pointer"
                >
                    {isLoadingFeedback ? "Generating feedback..." : `Generate Feedback (3 coins)`}
                </button>

                {isLoadingFeedback ? (
                    <p className="text-muted-foreground">Getting AI feedback...</p>
                ) : aiFeedback ? (
                    <pre className="whitespace-pre-wrap">{aiFeedback}</pre>
                ) : (
                    <p className="text-muted-foreground">Click the button above to generate AI feedback.</p>
                )}
            </div>
        </div>
    );



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
            value: "feedback",
            label: "AI Feedback",
            icon: BarChart3,
            content: feedbackContent,
        },
    ];

    if (isProblemLoading) {
        return (
            <div className="h-screen flex flex-col bg-neutral-900 text-neutral-300">
                LOADING
            </div>
        )
    }

    return (
        <div className="h-screen flex flex-col bg-neutral-900 text-neutral-300">
            <header className="p-2 border-b border-neutral-700 shrink-0 flex justify-between items-center space-x-2">
                <div className="flex items-center space-x-2">
                    <Link className="cursor-pointer border border-neutral-700 rounded p-1" to="/all-problems">
                        <ChevronLeft className="mr-4 h-8 w-8" />
                    </Link>
                    <h5 className="text-lg font-semibold text-white">
                        Problem Arena: {problem?.title}
                    </h5>
                </div>

                <Badge variant="outline" className="mr-2 border-2 border-solid border-yellow-500 text-white animate-pulse py-2 px-2.5 rounded-4xl text-lg">
                    <span className='font-black text-yellow-400'>{authUser?.coins}&nbsp;</span>
                    Coins
                </Badge>
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
                                    forceTab={submission ? "results" : "testcases"}
                                />
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
