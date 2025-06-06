import React, { useEffect } from 'react'
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python"
import cpp from "react-syntax-highlighter/dist/esm/languages/hljs/cpp"

SyntaxHighlighter.registerLanguage("javascript", js)
SyntaxHighlighter.registerLanguage("python", python)
SyntaxHighlighter.registerLanguage("cpp", cpp)

export const SolutionsPanel = ({ solutions }) => {

  if (!solutions || solutions.length === 0) {
    return (
      <div className="p-6 text-muted-foreground text-sm">
        <p>No solutions available yet.</p>
      </div>
    )
  }

  return (
    <div className='p-6 space-y-8 overflow-y-auto h-full text-sm text-foreground'>
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">Solutions</h1>
      </div>
      <ScrollArea className="h-full space-y-6">
        {Object.entries(solutions).map(([lang, code], idx) => (
          <Card key={idx} className="p-5 space-y-4 bg-muted/30 border-none mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold">
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </h2>
              <Badge variant="outline" className="text-xs uppercase">
                {lang}
              </Badge>
            </div>
            <SyntaxHighlighter
              language={lang.toLowerCase()}
              style={atomOneDark}
              customStyle={{
                fontSize: "0.8rem",
                borderRadius: "0.5rem",
                padding: "1rem",
                background: "#282c34"
              }}
            >
              {code.trim()}
            </SyntaxHighlighter>
          </Card>
        ))}
      </ScrollArea>
    </div>
  )
}

export default SolutionsPanel