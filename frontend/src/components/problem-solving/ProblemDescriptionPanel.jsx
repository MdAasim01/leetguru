import { Badge } from "@/components/ui/badge"

export function ProblemDescriptionPanel({ problem }) {
  if (!problem) {
    return (
      <div className="p-6 text-muted-foreground text-sm">
        Loading problem...
      </div>
    )
  }

  const exampleEntries = Object.entries(problem.examples || {})
  const blocks = problem.description?.split("\n\n") || []

  return (
    <div className="p-6 space-y-8 overflow-y-auto h-full text-sm text-foreground">

      {/* Title & Difficulty */}
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">{problem.title}</h1>
        <Badge
          variant={
            problem?.difficulty === "EASY"
              ? "default"
              : problem?.difficulty === "MEDIUM"
                ? "secondary"
                : "destructive"
          }
          className="uppercase tracking-wide text-xs px-2 py-1"
        >
          {problem.difficulty}
        </Badge>
      </div>

      {/* Description */}
      <section className="prose prose-sm prose-invert max-w-none">
        {blocks.map((block, idx) => {
          if (idx === 2 && block.includes("\n- ")) {
            const items = block.split("\n- ").slice(1)
            return (
              <ul key={idx} className="list-disc pl-6 space-y-1">
                {items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )
          }
          return <p key={idx} className="text-base ">{block}</p>
        })}
      </section>

      {/* Examples */}
      {exampleEntries.length > 0 && (
        <section>
          <h2 className="text-base font-semibold mb-3">Examples</h2>
          <div className="space-y-4">
            {exampleEntries.map(([lang, example]) => (
              <div key={lang} className="rounded-md bg-muted/40 p-4 space-y-2">
                <p className="font-medium text-base"> <span className="uppercase">{lang}</span></p>
                <pre className="text-base font-light text-muted-foreground whitespace-pre-wrap leading-relaxed">
                  <strong className="text-foreground">Input:</strong> {example.input}
                  <br />
                  <strong className="text-foreground">Output:</strong> {example.output}
                  {example.explanation && (
                    <>
                      <br />
                      <strong className="text-foreground">Explanation:</strong> {example.explanation}
                    </>
                  )}
                </pre>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Constraints */}
      {problem.constraints && (
        <section>
          <h2 className="text-base font-semibold mb-2">Constraints</h2>
          <code className="block bg-muted/30 p-3 rounded-md text-base text-muted-foreground whitespace-pre-wrap leading-relaxed">
            {problem.constraints}
          </code>
        </section>
      )}

      {/* Tags */}
      {problem.tags?.length > 0 && (
        <section>
          <h2 className="text-base font-semibold mb-3">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {problem.tags.map((tag, idx) => (
              <Badge key={idx} variant="outline" className="text-sm px-2 py-1 rounded-md">
                {tag}
              </Badge>
            ))}
          </div>
        </section>
      )}

      {/* Companies */}
      {problem.companies?.length > 0 && (
        <section>
          <h2 className="text-base font-semibold mb-3">Companies</h2>
          <div className="flex flex-wrap gap-2">
            {problem.companies.map((company, idx) => (
              <Badge key={idx} variant="outline" className="text-sm px-2 py-1 rounded-md">
                {company}
              </Badge>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
