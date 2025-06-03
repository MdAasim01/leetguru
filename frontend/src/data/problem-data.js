// This file remains the same as the previous JSX version.
// No explicit type definitions in JS, structure is inferred from usage.

export const difficulties = ["Easy", "Medium", "Hard"]

export const sampleProblems = [
  {
    id: "1",
    solved: true,
    title: "Two Sum",
    tags: ["Array", "Hash Table"],
    companies: ["Amazon", "Google", "Facebook", "Microsoft"],
    difficulty: "Easy",
  },
  {
    id: "2",
    solved: false,
    title: "Add Two Numbers",
    tags: ["Linked List", "Math", "Recursion"],
    companies: ["Amazon", "Microsoft", "Bloomberg"],
    difficulty: "Medium",
  },
  {
    id: "3",
    solved: false,
    title: "Longest Substring Without Repeating Characters",
    tags: ["Hash Table", "String", "Sliding Window"],
    companies: ["Amazon", "Google", "Facebook", "Adobe"],
    difficulty: "Medium",
  },
  {
    id: "4",
    solved: true,
    title: "Median of Two Sorted Arrays",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    companies: ["Google", "Microsoft", "Apple"],
    difficulty: "Hard",
  },
  {
    id: "5",
    solved: false,
    title: "Container With Most Water",
    tags: ["Array", "Two Pointers"],
    companies: ["Amazon", "Bloomberg"],
    difficulty: "Medium",
  },
  {
    id: "6",
    solved: true,
    title: "Valid Parentheses",
    tags: ["String", "Stack"],
    companies: ["Google", "Facebook", "Uber"],
    difficulty: "Easy",
  },
  {
    id: "7",
    solved: false,
    title: "Merge K Sorted Lists",
    tags: ["Linked List", "Heap", "Divide and Conquer"],
    companies: ["Amazon", "Microsoft", "Meta"],
    difficulty: "Hard",
  },
]

// Extract unique tags and companies for filter options
const allTags = new Set()
const allCompanies = new Set()
sampleProblems.forEach((problem) => {
  problem.tags.forEach((tag) => allTags.add(tag))
  problem.companies.forEach((company) => allCompanies.add(company))
})

export const uniqueTags = Array.from(allTags).sort()
export const uniqueCompanies = Array.from(allCompanies).sort()
