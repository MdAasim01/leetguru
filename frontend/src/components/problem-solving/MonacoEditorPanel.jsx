// MonacoEditorPanel.jsx
import React, { useEffect, useState, useRef } from "react"
import Editor from "@monaco-editor/react"
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Maximize, Minimize, Code, RefreshCcw, Bookmark, Play } from "lucide-react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"

const MonacoEditorPanel = ({ selectedLanguage, onLanguageChange, codeSnippets = {} }) => {
  const [code, setCode] = useState("")
  const [isExecuting, setIsExecuting] = useState(false)
  const fullscreenHandle = useFullScreenHandle()
  const editorRef = useRef(null)

  const normalizeLangKey = (lang) => lang?.toUpperCase() || "JAVASCRIPT"

  // Set initial/default code when selectedLanguage changes
  useEffect(() => {
    console.log("Selected language changed:", selectedLanguage)
    console.log("Available code snippets:", codeSnippets);
    
    const langKey = normalizeLangKey(selectedLanguage)
    const snippet = codeSnippets[langKey] || ""
    setCode(snippet)
  }, [selectedLanguage, codeSnippets])

  // Track code manually if needed outside component
  const handleEditorChange = (val) => {
    setCode(val || "")
  }

  const handleRun = () => {
    setIsExecuting(true)
    // Placeholder: connect to executeCode store
    setTimeout(() => setIsExecuting(false), 1500)
  }

  const handleReset = () => {
    const langKey = normalizeLangKey(selectedLanguage)
    setCode(codeSnippets[langKey] || "")
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
                <SelectItem value="javascript" className="text-xs">JavaScript</SelectItem>
                <SelectItem value="python" className="text-xs">Python</SelectItem>
                <SelectItem value="c" className="text-xs">C</SelectItem>
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

export default MonacoEditorPanel