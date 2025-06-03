// No changes needed to this file from the previous version.
// Helper function to generate mock contributions for the streak calendar
function generateMockContributions() {
  const contributions = {}
  const today = new Date()
  for (let i = 0; i < 365; i++) {
    // Data for the last year
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    const dateString = date.toISOString().split("T")[0]
    if (Math.random() > 0.4) {
      // ~60% chance of contribution on any day
      contributions[dateString] = Math.floor(Math.random() * 10) + 1 // 1 to 10 contributions
    }
  }
  return contributions
}

export const userProfileData = {
  username: "CodeNinja27",
  joinDate: "2023-01-15",
  avatarUrl: "/placeholder.svg?width=128&height=128",
  stats: {
    problemsSolvedByLanguage: [
      { language: "JavaScript", count: 35, color: "bg-yellow-400" },
      { language: "Python", count: 25, color: "bg-blue-400" },
      { language: "Java", count: 15, color: "bg-red-400" },
      { language: "C++", count: 10, color: "bg-green-400" },
    ],
    problemsSolvedByDifficulty: {
      easy: 40,
      medium: 30,
      hard: 15,
    },
    totalSolved: 85,
    totalSubmissions: 200,
    acceptanceRate: (85 / 130) * 100, // Assuming 130 unique problems attempted with at least one AC
  },
  streak: {
    contributions: generateMockContributions(),
    currentStreak: 21, // days
    longestStreak: 58, // days
    totalActiveDays: 180,
  },
  ranking: {
    currentUserRank: 78,
    totalUsers: 12500,
    get percentile() {
      return ((this.totalUsers - this.currentUserRank) / this.totalUsers) * 100
    },
  },
  solvedProblems: [
    { id: "sp1", title: "Two Sum", difficulty: "Easy", tags: ["Array", "Hash Table"], solvedDate: "2024-05-10" },
    {
      id: "sp2",
      title: "Add Two Numbers",
      difficulty: "Medium",
      tags: ["Linked List", "Math"],
      solvedDate: "2024-05-08",
    },
    {
      id: "sp3",
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      tags: ["String", "Sliding Window"],
      solvedDate: "2024-05-05",
    },
  ],
  submissions: [
    {
      id: "sub1",
      problemTitle: "Two Sum",
      language: "JavaScript",
      status: "Accepted",
      runtime: "70ms",
      memory: "42.1MB",
      submittedDate: "2024-05-10T10:00:00Z",
    },
    {
      id: "sub2",
      problemTitle: "Two Sum",
      language: "JavaScript",
      status: "Wrong Answer",
      runtime: "-",
      memory: "-",
      submittedDate: "2024-05-10T09:55:00Z",
    },
    {
      id: "sub3",
      problemTitle: "Add Two Numbers",
      language: "Python",
      status: "Accepted",
      runtime: "50ms",
      memory: "16.3MB",
      submittedDate: "2024-05-08T14:30:00Z",
    },
  ],
}
