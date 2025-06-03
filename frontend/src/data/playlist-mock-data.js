export const allProblemsData = [
  { id: "p1", title: "Two Sum", difficulty: "Easy", tags: ["Array", "Hash Table"] },
  { id: "p2", title: "Add Two Numbers", difficulty: "Medium", tags: ["Linked List", "Math"] },
  { id: "p3", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", tags: ["String", "Sliding Window"] },
  { id: "p4", title: "Median of Two Sorted Arrays", difficulty: "Hard", tags: ["Array", "Binary Search"] },
  { id: "p5", title: "Container With Most Water", difficulty: "Medium", tags: ["Array", "Two Pointers"] },
  { id: "p6", title: "Valid Parentheses", difficulty: "Easy", tags: ["String", "Stack"] },
  { id: "p7", title: "Merge K Sorted Lists", difficulty: "Hard", tags: ["Linked List", "Heap"] },
  { id: "p8", title: "Search in Rotated Sorted Array", difficulty: "Medium", tags: ["Array", "Binary Search"] },
  { id: "p9", title: "Combination Sum", difficulty: "Medium", tags: ["Array", "Backtracking"] },
  { id: "p10", title: "Trapping Rain Water", difficulty: "Hard", tags: ["Array", "Two Pointers", "DP"] },
];

export const allUsersData = [
  { id: "u1", name: "Alice Wonderland", avatarUrl: "/placeholder.svg?width=32&height=32&text=AW" },
  { id: "u2", name: "Bob The Builder", avatarUrl: "/placeholder.svg?width=32&height=32&text=BB" },
  { id: "u3", name: "Charlie Brown", avatarUrl: "/placeholder.svg?width=32&height=32&text=CB" },
  { id: "u4", name: "Diana Prince", avatarUrl: "/placeholder.svg?width=32&height=32&text=DP" },
];

// Assuming 'currentUser' is the ID of the logged-in user
export const currentUserId = "currentUser"; 

export const initialPlaylistsData = [
  {
    id: "pl1",
    name: "Array Fundamentals",
    description: "Core array problems for beginners.",
    ownerId: currentUserId,
    problems: [allProblemsData[0], allProblemsData[4], allProblemsData[5]],
    sharedWith: [allUsersData[0], allUsersData[1]],
  },
  {
    id: "pl2",
    name: "Advanced Data Structures",
    description: "Challenging problems on advanced structures.",
    ownerId: currentUserId,
    problems: [allProblemsData[3], allProblemsData[6], allProblemsData[9]],
    sharedWith: [allUsersData[2]],
  },
  {
    id: "pl3",
    name: "Medium Difficulty Mix (View Only)",
    description: "A collection of medium-level challenges owned by someone else.",
    ownerId: "u1", // Owned by Alice
    problems: [allProblemsData[1], allProblemsData[2], allProblemsData[7]],
    sharedWith: [
        { id: currentUserId, name: "You", avatarUrl: "/placeholder.svg?width=32&height=32&text=ME" }, // Current user has access
        allUsersData[1] // Bob also has access
    ],
  },
  {
    id: "pl4",
    name: "Empty Playlist",
    description: "A new playlist to fill up!",
    ownerId: currentUserId,
    problems: [],
    sharedWith: [],
  }
];