// MonacoEditorPanel.jsx
import React, { useEffect, useState, useRef } from "react"
import Editor from "@monaco-editor/react"
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Maximize, Minimize, Code, RefreshCcw, Bookmark, Play } from "lucide-react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import toast from "react-hot-toast";

const SUPPORTED_LANGUAGES = ["javascript", "python", "c"]

const MonacoEditorPanel = ({
  code: externalCode,
  onCodeChange,
  selectedLanguage = "JAVASCRIPT",
  onLanguageChange,
  codeSnippets = {},
  onRunClick,
  isExecuting = false,
}) => {
  // const [code, setCode] = useState("")
  const [internalCode, setInternalCode] = useState("")
  const code = externalCode !== undefined ? externalCode : internalCode
  const setCode = onCodeChange || setInternalCode

  const fullscreenHandle = useFullScreenHandle()
  const editorRef = useRef(null)

  useEffect(() => {
    console.log("Code: ", code);
    console.log("Selected Language: ", selectedLanguage);
    console.log("Code Snippets: ", codeSnippets);
  }, [])

  const normalizeLangKey = (lang) => lang?.toUpperCase() || "JAVASCRIPT"

  // Inject snippet when selectedLanguage or codeSnippets change
  useEffect(() => {
    const langKey = normalizeLangKey(selectedLanguage)
    const snippet = codeSnippets[langKey]
    if (snippet !== undefined) {
      setCode(snippet)
    } else {
      toast.error(`No snippet found for language: ${langKey}`);
      setCode("")
    }
  }, [selectedLanguage, codeSnippets])

  const handleEditorChange = (val) => {
    setCode(val || "")
  }

  const handleReset = () => {
    const langKey = normalizeLangKey(selectedLanguage)
    setCode(codeSnippets[langKey] || "")
  }

  const handleRun = () => {
    if (!code.trim()) {
      toast.error("Please write some code before running.")
      return
    }
    if (typeof onRunClick === "function") {
      onRunClick(code, normalizeLangKey(selectedLanguage))
    }
  }

  return (
    <FullScreen
      handle={fullscreenHandle}
      className={`w-full h-full flex ${fullscreenHandle.active ? "bg-neutral-800" : ""}`}
    >
      <div className="bg-neutral-800 rounded-lg flex flex-col h-full w-full">
        <div className="flex items-center justify-between p-2 border-b border-neutral-700">
          <div className="flex items-center space-x-2">
            <Code className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Code</span>
          </div>
          <div className="flex items-center space-x-1">
            <Select value={selectedLanguage} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-[100px] h-7 text-xs bg-neutral-700 border-neutral-600 focus:ring-0">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-700 border-neutral-600 text-foreground">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <SelectItem key={lang} value={lang} className="text-xs">
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-muted-foreground"
              onClick={handleReset}
            >
              <RefreshCcw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-muted-foreground"
              onClick={fullscreenHandle.active ? fullscreenHandle.exit : fullscreenHandle.enter}
            >
              {fullscreenHandle.active ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>
            <Button
              size="sm"
              variant="default"
              className="ml-2 px-3 text-xs"
              onClick={handleRun}
              disabled={isExecuting}
            >
              {isExecuting ? "Running..." : <><Play className="mr-1.5 h-3 w-3" /> Run</>}
            </Button>
          </div>
        </div>
        <div className="flex-grow overflow-hidden">
          <Editor
            height="100%"
            language={selectedLanguage.toLowerCase()}
            theme="vs-dark"
            value={code}
            onChange={handleEditorChange}
            onMount={(editor) => (editorRef.current = editor)}
            options={{
              fontSize: 14,
              automaticLayout: true,
              minimap: { enabled: false },
              wordWrap: "on",
              tabSize: 2,
              insertSpaces: true,
              autoClosingBrackets: "always",
              bracketPairColorization: { enabled: true },
            }}
          />
        </div>
      </div>
    </FullScreen>
  )
}

export { MonacoEditorPanel }