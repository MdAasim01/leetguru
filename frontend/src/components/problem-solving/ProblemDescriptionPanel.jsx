import { Badge } from "@/components/ui/badge"
import { Lightbulb, Tag } from "lucide-react"

export function ProblemDescriptionPanel({ problem }) {
  if (!problem) return <div>Loading problem...</div>

  const exampleEntries = Object.entries(problem.examples || {})

  return (
    <div className="p-5 space-y-6 overflow-y-auto h-full">
      <h1 className="text-2xl font-bold text-foreground">{problem.title}</h1>
      <div className="flex items-center space-x-2">
        <Badge
          variant={
            problem.difficulty === "Easy" ? "success" : problem.difficulty === "Medium" ? "warning" : "destructive"
          }
          className="text-xs"
        >
          {problem.difficulty}
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-muted/50">
          <Tag className="mr-1 h-3 w-3" /> Tags
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-muted/50">
          <Lightbulb className="mr-1 h-3 w-3" /> Hints
        </Badge>
      </div>

      <div className="prose prose-sm prose-invert max-w-none">
        <p>{problem.description.split("\n\n")[0]}</p>
        <p>{problem.description.split("\n\n")[1]}</p>
        <ul className="list-disc pl-5">
          {problem.description
            .split("\n\n")[2]
            ?.split("\n- ")
            .slice(1)
            .map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        <p>{problem.description.split("\n\n")[3]}</p>
      </div>

      {exampleEntries.map(([lang, example], idx) => (
        <div key={lang} className="space-y-1">
          <h3 className="font-semibold text-foreground">Example ({lang}):</h3>
          <pre className="bg-muted/50 p-3 rounded-md text-xs text-muted-foreground whitespace-pre-wrap">
            <strong className="text-foreground">Input:</strong> {example.input}
            <br />
            <strong className="text-foreground">Output:</strong> {example.output}
            <br />
            {example.explanation && (
              <>
                <strong className="text-foreground">Explanation:</strong> {example.explanation}
              </>
            )}
          </pre>
        </div>
      ))}

      <div>
        <h3 className="font-semibold text-foreground">Constraints:</h3>
        {/* <ul className="list-disc pl-5 text-sm text-muted-foreground">
          {problem.constraints.map((constraint, index) => (
            <li key={index} className="prose prose-sm prose-invert">
              {constraint}
            </li>
          ))}
        </ul> */}
        <code>{problem.constraints}</code>
      </div>
    </div>
  )
}
