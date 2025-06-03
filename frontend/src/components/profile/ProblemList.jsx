import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Check, ListChecks, Clock } from 'lucide-react';

export function ProblemList({ title, problems, type = "solved" }) { // type can be "solved" or "submissions"
  const getStatusColor = (status) => {
    if (status === "Accepted") return "text-green-500";
    if (status === "Wrong Answer") return "text-red-500";
    if (status === "Time Limit Exceeded") return "text-yellow-500";
    return "text-muted-foreground";
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3 flex items-center">
        {type === "solved" ? <Check className="mr-2 h-5 w-5 text-green-500" /> : <ListChecks className="mr-2 h-5 w-5 text-blue-500" />}
        {title}
      </h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Problem Title</TableHead>
              {type === "submissions" && <TableHead>Language</TableHead>}
              {type === "submissions" && <TableHead>Status</TableHead>}
              {type === "submissions" && <TableHead>Runtime</TableHead>}
              {type === "submissions" && <TableHead>Memory</TableHead>}
              {type === "solved" && <TableHead>Difficulty</TableHead>}
              {type === "solved" && <TableHead>Tags</TableHead>}
              <TableHead className="text-right">
                {type === "solved" ? "Solved Date" : "Submitted Date"}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {problems.map(item => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{type === "solved" ? item.title : item.problemTitle}</TableCell>
                {type === "submissions" && <TableCell>{item.language}</TableCell>}
                {type === "submissions" && <TableCell className={getStatusColor(item.status)}>{item.status}</TableCell>}
                {type === "submissions" && <TableCell>{item.runtime}</TableCell>}
                {type === "submissions" && <TableCell>{item.memory}</TableCell>}
                {type === "solved" && (
                  <TableCell>
                    <Badge variant={
                      item.difficulty === "Easy" ? "success" :
                      item.difficulty === "Medium" ? "warning" :
                      item.difficulty === "Hard" ? "destructive" : "secondary"
                    }>
                      {item.difficulty}
                    </Badge>
                  </TableCell>
                )}
                {type === "solved" && (
                  <TableCell className="max-w-[200px]">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                    </div>
                  </TableCell>
                )}
                <TableCell className="text-right text-sm text-muted-foreground">
                  {new Date(type === "solved" ? item.solvedDate : item.submittedDate).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
            {problems.length === 0 && (
              <TableRow>
                <TableCell colSpan={type === "solved" ? 4 : 6} className="text-center h-24">
                  No {type === "solved" ? "solved problems" : "submissions"} yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}