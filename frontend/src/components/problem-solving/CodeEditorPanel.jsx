import React, { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Maximize, Minimize, Code, RefreshCcw, Bookmark } from "lucide-react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"

export function CodeEditorPanel({ defaultCode, onLanguageChange, selectedLanguage }) {
  const [code, setCode] = useState(defaultCode[selectedLanguage] || "")
  const fullscreenHandle = useFullScreenHandle()

  React.useEffect(() => {
    setCode(defaultCode[selectedLanguage] || "")
  }, [selectedLanguage, defaultCode])

  const handleCodeChange = (event) => {
    setCode(event.target.value)
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
                <SelectItem value="c" className="text-xs">
                  C
                </SelectItem>
                <SelectItem value="javascript" className="text-xs">
                  JavaScript
                </SelectItem>
                <SelectItem value="python" className="text-xs">
                  Python
                </SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-muted-foreground hover:bg-neutral-700 hover:text-foreground"
            >
              <RefreshCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-muted-foreground hover:bg-neutral-700 hover:text-foreground"
            >
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-muted-foreground hover:bg-neutral-700 hover:text-foreground"
              onClick={fullscreenHandle.active ? fullscreenHandle.exit : fullscreenHandle.enter}
            >
              {fullscreenHandle.active ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <div className="flex-grow p-1 overflow-auto relative">
          <div className="flex text-xs text-neutral-500 absolute top-0 left-0 h-full pt-2 pl-2 pr-1 select-none">
            <div className="flex flex-col items-end">
              {code.split("\n").map((_, i) => (
                <span key={i} className="leading-relaxed h-[1.5em]">
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
          <textarea
            value={code}
            onChange={handleCodeChange}
            spellCheck="false"
            className="w-full h-full bg-transparent text-foreground text-xs p-2 pl-10 leading-relaxed resize-none focus:outline-none font-mono"
            style={{ lineHeight: "1.5em" }}
          />
        </div>
      </div>
    </FullScreen>
  )
}
