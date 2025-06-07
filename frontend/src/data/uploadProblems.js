const problems = [
	{
		id: "9d1c8968-a8dd-4897-8fae-7de02f697a31",
		title: "Climbing Stairs",
		description:
			"You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
		difficulty: "EASY",
		tags: ["dynamic programming", "math", "memoization", "Google"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "n = 4",
				output: "5",
				explanation:
					"There are five ways to climb to the top:\n1. 1 step + 1 step + 1 step + 1 step\n2. 1 step + 1 step + 2 steps\n3. 1 step + 2 steps + 1 step\n4. 2 steps + 1 step + 1 step\n5. 2 steps + 2 steps",
			},
			PYTHON: {
				input: "n = 3",
				output: "3",
				explanation:
					"There are three ways to climb to the top:\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step",
			},
			JAVASCRIPT: {
				input: "n = 2",
				output: "2",
				explanation:
					"There are two ways to climb to the top:\n1. 1 step + 1 step\n2. 2 steps",
			},
		},
		constraints: "1 <= n <= 45",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "2",
				output: "2",
			},
			{
				input: "3",
				output: "3",
			},
			{
				input: "4",
				output: "5",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.Scanner;\n\nclass Main {\n  public int climbStairs(int n) {\n      // Write your code here\n      return 0;\n  }\n  \n  public static void main(String[] args) {\n      Scanner scanner = new Scanner(System.in);\n      int n = Integer.parseInt(scanner.nextLine().trim());\n      \n      // Use Main class instead of Solution\n      Main main = new Main();\n      int result = main.climbStairs(n);\n      \n      System.out.println(result);\n      scanner.close();\n  }\n}",
			PYTHON: 'class Solution:\n  def climbStairs(self, n: int) -> int:\n      # Write your code here\n      pass\n\n# Input parsing\nif __name__ == "__main__":\n  import sys\n  \n  # Parse input\n  n = int(sys.stdin.readline().strip())\n  \n  # Solve\n  sol = Solution()\n  result = sol.climbStairs(n)\n  \n  # Print result\n  print(result)',
			JAVASCRIPT:
				"/**\n* @param {number} n\n* @return {number}\n*/\nfunction climbStairs(n) {\n// Write your code here\n}\n\n// Parse input and execute\nconst readline = require('readline');\nconst rl = readline.createInterface({\ninput: process.stdin,\noutput: process.stdout,\nterminal: false\n});\n\nrl.on('line', (line) => {\nconst n = parseInt(line.trim());\nconst result = climbStairs(n);\n\nconsole.log(result);\nrl.close();\n});",
		},
		referenceSolutions: {
			JAVA: "import java.util.Scanner;\n\nclass Main {\n  public int climbStairs(int n) {\n      // Base cases\n      if (n <= 2) {\n          return n;\n      }\n      \n      // Dynamic programming approach\n      int[] dp = new int[n + 1];\n      dp[1] = 1;\n      dp[2] = 2;\n      \n      for (int i = 3; i <= n; i++) {\n          dp[i] = dp[i - 1] + dp[i - 2];\n      }\n      \n      return dp[n];\n      \n      /* Alternative approach with O(1) space\n      int a = 1; // ways to climb 1 step\n      int b = 2; // ways to climb 2 steps\n      \n      for (int i = 3; i <= n; i++) {\n          int temp = a + b;\n          a = b;\n          b = temp;\n      }\n      \n      return n == 1 ? a : b;\n      */\n  }\n  \n  public static void main(String[] args) {\n      Scanner scanner = new Scanner(System.in);\n      int n = Integer.parseInt(scanner.nextLine().trim());\n      \n      // Use Main class instead of Solution\n      Main main = new Main();\n      int result = main.climbStairs(n);\n      \n      System.out.println(result);\n      scanner.close();\n  }\n}",
			PYTHON: 'class Solution:\n  def climbStairs(self, n: int) -> int:\n      # Base cases\n      if n <= 2:\n          return n\n      \n      # Dynamic programming approach\n      dp = [0] * (n + 1)\n      dp[1] = 1\n      dp[2] = 2\n      \n      for i in range(3, n + 1):\n          dp[i] = dp[i - 1] + dp[i - 2]\n      \n      return dp[n]\n      \n      # Alternative approach with O(1) space\n      # a, b = 1, 2\n      # \n      # for i in range(3, n + 1):\n      #     a, b = b, a + b\n      # \n      # return a if n == 1 else b\n\n# Input parsing\nif __name__ == "__main__":\n  import sys\n  \n  # Parse input\n  n = int(sys.stdin.readline().strip())\n  \n  # Solve\n  sol = Solution()\n  result = sol.climbStairs(n)\n  \n  # Print result\n  print(result)',
			JAVASCRIPT:
				"/**\n* @param {number} n\n* @return {number}\n*/\nfunction climbStairs(n) {\n// Base cases\nif (n <= 2) {\n  return n;\n}\n\n// Dynamic programming approach\nlet dp = new Array(n + 1);\ndp[1] = 1;\ndp[2] = 2;\n\nfor (let i = 3; i <= n; i++) {\n  dp[i] = dp[i - 1] + dp[i - 2];\n}\n\nreturn dp[n];\n\n/* Alternative approach with O(1) space\nlet a = 1; // ways to climb 1 step\nlet b = 2; // ways to climb 2 steps\n\nfor (let i = 3; i <= n; i++) {\n  let temp = a + b;\n  a = b;\n  b = temp;\n}\n\nreturn n === 1 ? a : b;\n*/\n}\n\n// Parse input and execute\nconst readline = require('readline');\nconst rl = readline.createInterface({\ninput: process.stdin,\noutput: process.stdout,\nterminal: false\n});\n\nrl.on('line', (line) => {\nconst n = parseInt(line.trim());\nconst result = climbStairs(n);\n\nconsole.log(result);\nrl.close();\n});",
		},
		createdAt: "2025-05-24T07:31:48.999Z",
		updatedAt: "2025-05-25T10:05:32.829Z",
		solvedBy: [],
	},
	{
		id: "31a867fe-3ad2-4521-a88f-d2f0ca56c792",
		title: "Valid Palindrome",
		description:
			"A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.",
		difficulty: "EASY",
		tags: ["string", "two pointers", "Meta (Facebook)"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: 's = "A man, a plan, a canal: Panama"',
				output: "true",
				explanation: '"amanaplanacanalpanama" is a palindrome.',
			},
			PYTHON: {
				input: 's = "A man, a plan, a canal: Panama"',
				output: "true",
				explanation: '"amanaplanacanalpanama" is a palindrome.',
			},
			JAVASCRIPT: {
				input: 's = "A man, a plan, a canal: Panama"',
				output: "true",
				explanation: '"amanaplanacanalpanama" is a palindrome.',
			},
		},
		constraints:
			"1 <= s.length <= 2 * 10^5\r\ns consists only of printable ASCII characters.",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "A man, a plan, a canal: Panama",
				output: "true",
			},
			{
				input: "race a car",
				output: "false",
			},
			{
				input: " ",
				output: "true",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.Scanner;\n\npublic class Main {\n    public static String preprocess(String s) {\n        return s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();\n    }\n\n    public static boolean isPalindrome(String s) {\n       \n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine();\n\n        boolean result = isPalindrome(input);\n        System.out.println(result ? "true" : "false");\n    }\n}\n',
			PYTHON: 'class Solution:\n      def isPalindrome(self, s: str) -> bool:\n          # Write your code here\n          pass\n  \n  # Input parsing\n  if __name__ == "__main__":\n      import sys\n      # Read the input string\n      s = sys.stdin.readline().strip()\n      \n      # Call solution\n      sol = Solution()\n      result = sol.isPalindrome(s)\n      \n      # Output result\n      print(str(result).lower())  # Convert True/False to lowercase true/false',
			JAVASCRIPT:
				"/**\n   * @param {string} s\n   * @return {boolean}\n   */\n  function isPalindrome(s) {\n    // Write your code here\n  }\n  \n  // Add readline for dynamic input handling\n  const readline = require('readline');\n  const rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout,\n    terminal: false\n  });\n  \n  // Process input line\n  rl.on('line', (line) => {\n    // Call solution with the input string\n    const result = isPalindrome(line);\n    \n    // Output the result\n    console.log(result ? \"true\" : \"false\");\n    rl.close();\n  });",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static boolean isPalindrome(String s) {\n        s = s.toLowerCase().replaceAll("[^a-z0-9]", "");\n        return s.equals(new StringBuilder(s).reverse().toString());\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(String.valueOf(isPalindrome(s)).toLowerCase());\n    }\n}',
			PYTHON: "def isPalindrome(s):\n    s = ''.join(c.lower() for c in s if c.isalnum())\n    return s == s[::-1]\n\nif __name__ == \"__main__\":\n    s = input()\n    print(str(isPalindrome(s)).lower())",
			JAVASCRIPT:
				"function isPalindrome(s) {\n  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return s === s.split('').reverse().join('');\n}\n\nconst readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout });\nlet input = '';\nrl.on('line', (line) => { input += line; }).on('close', () => {\n  console.log(isPalindrome(input).toString());\n});",
		},
		createdAt: "2025-05-24T07:32:25.896Z",
		updatedAt: "2025-05-25T10:06:50.328Z",
		solvedBy: [],
	},
	{
		id: "041fa3dd-a1cc-481c-8a43-e568c091e84d",
		title: "Two Sum",
		description:
			"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
		difficulty: "EASY",
		tags: ["array", "hash-table", "two-pointers", "Bloomberg"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "4\n2 7 11 15\n9",
				output: "0 1",
				explanation: "",
			},
			PYTHON: {
				input: "4\n2 7 11 15\n9",
				output: "0 1",
				explanation:
					"nums[0] + nums[1] = 2 + 7 = 9, so we return [0, 1].",
			},
			JAVASCRIPT: {
				input: "3\n3 2 4\n6",
				output: "1 2",
				explanation:
					"nums[1] + nums[2] = 2 + 4 = 6, so we return [1, 2].",
			},
		},
		constraints:
			"2 Γëñ nums.length Γëñ 10^4, -10^9 Γëñ nums[i] Γëñ 10^9, -10^9 Γëñ target Γëñ 10^9",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "4\n2 7 11 15\n9",
				output: "0 1",
			},
			{
				input: "3\n3 2 4\n6",
				output: "1 2",
			},
			{
				input: "2\n3 3\n6",
				output: "0 1",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static int[] twoSum(int[] nums, int target) {\n        // Write your code here\n        return new int[]{0, 0};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        int target = sc.nextInt();\n        int[] result = twoSum(nums, target);\n        System.out.println(result[0] + " " + result[1]);\n    }\n}',
			PYTHON: "def two_sum(nums, target):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\ntarget = int(input_lines[2])\nresult = two_sum(nums, target)\nprint(result[0], result[1])",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction twoSum(nums, target) {\n    // Write your code here\n    return [0, 0];\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconst target = parseInt(input[2]);\nconst result = twoSum(nums, target);\nconsole.log(result[0] + ' ' + result[1]);",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        int target = sc.nextInt();\n        \n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                System.out.println(map.get(complement) + " " + i);\n                return;\n            }\n            map.put(nums[i], i);\n        }\n    }\n}',
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\ntarget = int(input_lines[2])\n\nnum_map = {}\nfor i, num in enumerate(nums):\n    complement = target - num\n    if complement in num_map:\n        print(num_map[complement], i)\n        break\n    num_map[num] = i",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconst target = parseInt(input[2]);\n\nconst numMap = new Map();\nfor (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (numMap.has(complement)) {\n        console.log(numMap.get(complement) + ' ' + i);\n        break;\n    }\n    numMap.set(nums[i], i);\n}",
		},
		createdAt: "2025-05-24T07:43:22.896Z",
		updatedAt: "2025-05-25T10:08:15.305Z",
		solvedBy: [],
	},
	{
		id: "e5775300-40fe-4e48-9e3c-84d6b6b2be0e",
		title: "Longest Palindromic Substring",
		description:
			"Given a string s, return the longest palindromic substring in s.",
		difficulty: "MEDIUM",
		tags: ["string", "dynamic programming", "Google"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "babad",
				output: "bab",
				explanation: "",
			},
			PYTHON: {
				input: "babad",
				output: "bab",
				explanation: '"bab" is a palindrome. "aba" is also valid.',
			},
			JAVASCRIPT: {
				input: "cbbd",
				output: "bb",
				explanation: '"bb" is the longest palindromic substring.',
			},
		},
		constraints:
			"1 Γëñ s.length Γëñ 1000, s consists of only digits and English letters",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "babad",
				output: "bab",
			},
			{
				input: "cbbd",
				output: "bb",
			},
			{
				input: "a",
				output: "a",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static String longestPalindrome(String s) {\n        // Write your code here\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(longestPalindrome(s));\n    }\n}',
			PYTHON: "def longest_palindrome(s):\n    # Write your code here\n    pass\n\nimport sys\ns = sys.stdin.read().strip()\nprint(longest_palindrome(s))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction longestPalindrome(s) {\n    // Write your code here\n    return \"\";\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconsole.log(longestPalindrome(input));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        \n        int start = 0, maxLen = 0;\n        \n        for (int i = 0; i < s.length(); i++) {\n            int len1 = expandAroundCenter(s, i, i);\n            int len2 = expandAroundCenter(s, i, i + 1);\n            int currentMax = Math.max(len1, len2);\n            \n            if (currentMax > maxLen) {\n                maxLen = currentMax;\n                start = i - (currentMax - 1) / 2;\n            }\n        }\n        \n        System.out.println(s.substring(start, start + maxLen));\n    }\n    \n    private static int expandAroundCenter(String s, int left, int right) {\n        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n            left--;\n            right++;\n        }\n        return right - left - 1;\n    }\n}",
			PYTHON: "import sys\ns = sys.stdin.read().strip()\n\ndef expand_around_center(s, left, right):\n    while left >= 0 and right < len(s) and s[left] == s[right]:\n        left -= 1\n        right += 1\n    return right - left - 1\n\nstart = 0\nmax_len = 0\n\nfor i in range(len(s)):\n    len1 = expand_around_center(s, i, i)\n    len2 = expand_around_center(s, i, i + 1)\n    current_max = max(len1, len2)\n    \n    if current_max > max_len:\n        max_len = current_max\n        start = i - (current_max - 1) // 2\n\nprint(s[start:start + max_len])",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\n\nfunction expandAroundCenter(s, left, right) {\n    while (left >= 0 && right < s.length && s[left] === s[right]) {\n        left--;\n        right++;\n    }\n    return right - left - 1;\n}\n\nlet start = 0, maxLen = 0;\n\nfor (let i = 0; i < input.length; i++) {\n    const len1 = expandAroundCenter(input, i, i);\n    const len2 = expandAroundCenter(input, i, i + 1);\n    const currentMax = Math.max(len1, len2);\n    \n    if (currentMax > maxLen) {\n        maxLen = currentMax;\n        start = i - Math.floor((currentMax - 1) / 2);\n    }\n}\n\nconsole.log(input.substring(start, start + maxLen));",
		},
		createdAt: "2025-05-24T07:47:27.444Z",
		updatedAt: "2025-05-25T10:12:16.817Z",
		solvedBy: [],
	},
	{
		id: "a5f6855c-2453-4a85-8043-8e21fe4985ea",
		title: "Reverse Linked List",
		description:
			"Given the head of a singly linked list, reverse the list, and return the reversed list.",
		difficulty: "EASY",
		tags: ["linked-list", "recursion", "Amazon"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "5\n1 2 3 4 5",
				output: "5 4 3 2 1",
				explanation: "",
			},
			PYTHON: {
				input: "5\n1 2 3 4 5",
				output: "5 4 3 2 1",
				explanation: "The reversed linked list is [5,4,3,2,1].",
			},
			JAVASCRIPT: {
				input: "2\n1 2",
				output: "2 1",
				explanation: "The reversed linked list is [2,1].",
			},
		},
		constraints:
			"0 Γëñ number of nodes Γëñ 5000, -5000 Γëñ Node.val Γëñ 5000",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "5\n1 2 3 4 5",
				output: "5 4 3 2 1",
			},
			{
				input: "2\n1 2",
				output: "2 1",
			},
			{
				input: "2\n3 4",
				output: "4 3",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static List<Integer> reverseList(List<Integer> head) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        if (n == 0) {\n            System.out.println("");\n            return;\n        }\n        List<Integer> head = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            head.add(sc.nextInt());\n        }\n        List<Integer> result = reverseList(head);\n        for (int i = 0; i < result.size(); i++) {\n            System.out.print(result.get(i));\n            if (i < result.size() - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "def reverse_list(head):\n    # Write your code here\n    # head is a list representing the linked list\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nif n == 0:\n    print('')\nelse:\n    head = list(map(int, input_lines[1].split()))\n    result = reverse_list(head)\n    print(' '.join(map(str, result)) if result else '')",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction reverseList(head) {\n    // Write your code here\n    return [];\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nif (n === 0) {\n    console.log('');\n} else {\n    const head = input[1].split(' ').map(Number);\n    const result = reverseList(head);\n    console.log(result.join(' '));\n}",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        if (n == 0) {\n            System.out.println("");\n            return;\n        }\n        List<Integer> head = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            head.add(sc.nextInt());\n        }\n        \n        Collections.reverse(head);\n        \n        for (int i = 0; i < head.size(); i++) {\n            System.out.print(head.get(i));\n            if (i < head.size() - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nif n == 0:\n    print('')\nelse:\n    head = list(map(int, input_lines[1].split()))\n    result = head[::-1]\n    print(' '.join(map(str, result)))",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nif (n === 0) {\n    console.log('');\n} else {\n    const head = input[1].split(' ').map(Number);\n    const result = head.reverse();\n    console.log(result.join(' '));\n}",
		},
		createdAt: "2025-05-24T07:51:51.058Z",
		updatedAt: "2025-05-25T10:16:56.619Z",
		solvedBy: [],
	},
	{
		id: "8454a5f1-8dda-4008-8716-df9c32802b19",
		title: "Longest Common Subsequence",
		description:
			"Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
		difficulty: "MEDIUM",
		tags: ["string", "dynamic programming", "Microsoft"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "abcde\nace",
				output: "3",
				explanation: "",
			},
			PYTHON: {
				input: "abcde\nace",
				output: "3",
				explanation:
					'The longest common subsequence is "ace" and its length is 3.',
			},
			JAVASCRIPT: {
				input: "abc\nabc",
				output: "3",
				explanation:
					'The longest common subsequence is "abc" and its length is 3.',
			},
		},
		constraints:
			"1 Γëñ text1.length, text2.length Γëñ 1000, text1 and text2 consist of only lowercase English characters",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "abcde\nace",
				output: "3",
			},
			{
				input: "abc\nabc",
				output: "3",
			},
			{
				input: "abc\ndef",
				output: "0",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int longestCommonSubsequence(String text1, String text2) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String text1 = sc.nextLine();\n        String text2 = sc.nextLine();\n        System.out.println(longestCommonSubsequence(text1, text2));\n    }\n}",
			PYTHON: "def longest_common_subsequence(text1, text2):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\ntext1 = input_lines[0]\ntext2 = input_lines[1]\nprint(longest_common_subsequence(text1, text2))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction longestCommonSubsequence(text1, text2) {\n    // Write your code here\n    return 0;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst text1 = input[0];\nconst text2 = input[1];\nconsole.log(longestCommonSubsequence(text1, text2));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String text1 = sc.nextLine();\n        String text2 = sc.nextLine();\n        \n        int m = text1.length(), n = text2.length();\n        int[][] dp = new int[m + 1][n + 1];\n        \n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (text1.charAt(i-1) == text2.charAt(j-1)) {\n                    dp[i][j] = dp[i-1][j-1] + 1;\n                } else {\n                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);\n                }\n            }\n        }\n        \n        System.out.println(dp[m][n]);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\ntext1 = input_lines[0]\ntext2 = input_lines[1]\n\nm, n = len(text1), len(text2)\ndp = [[0] * (n + 1) for _ in range(m + 1)]\n\nfor i in range(1, m + 1):\n    for j in range(1, n + 1):\n        if text1[i-1] == text2[j-1]:\n            dp[i][j] = dp[i-1][j-1] + 1\n        else:\n            dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n\nprint(dp[m][n])",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst text1 = input[0];\nconst text2 = input[1];\n\nconst m = text1.length, n = text2.length;\nconst dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));\n\nfor (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n        if (text1[i-1] === text2[j-1]) {\n            dp[i][j] = dp[i-1][j-1] + 1;\n        } else {\n            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);\n        }\n    }\n}\n\nconsole.log(dp[m][n]);",
		},
		createdAt: "2025-05-24T07:52:34.891Z",
		updatedAt: "2025-05-25T10:18:17.085Z",
		solvedBy: [],
	},
	{
		id: "0ef5336b-e5dc-49f2-9e39-e8b09d6cf459",
		title: "Coin Change",
		description:
			"You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount.",
		difficulty: "MEDIUM",
		tags: [
			"array",
			"dynamic programming",
			"breadth-first-search",
			"Google",
		],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "3\n1 3 4\n6",
				output: "2",
				explanation: "",
			},
			PYTHON: {
				input: "3\n1 3 4\n6",
				output: "2",
				explanation: "The minimum number of coins is 2 (3 + 3 = 6).",
			},
			JAVASCRIPT: {
				input: "1\n2\n3",
				output: "-1",
				explanation:
					"The amount of 3 cannot be made up with coins of denomination 2.",
			},
		},
		constraints:
			"1 Γëñ coins.length Γëñ 12, 1 Γëñ coins[i] Γëñ 2^31 - 1, 0 Γëñ amount Γëñ 10^4",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "3\n1 3 4\n6",
				output: "2",
			},
			{
				input: "1\n2\n3",
				output: "-1",
			},
			{
				input: "3\n1 3 4\n0",
				output: "0",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int coinChange(int[] coins, int amount) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] coins = new int[n];\n        for (int i = 0; i < n; i++) {\n            coins[i] = sc.nextInt();\n        }\n        int amount = sc.nextInt();\n        System.out.println(coinChange(coins, amount));\n    }\n}",
			PYTHON: "def coin_change(coins, amount):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\ncoins = list(map(int, input_lines[1].split()))\namount = int(input_lines[2])\nprint(coin_change(coins, amount))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction coinChange(coins, amount) {\n    // Write your code here\n    return 0;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst coins = input[1].split(' ').map(Number);\nconst amount = parseInt(input[2]);\nconsole.log(coinChange(coins, amount));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] coins = new int[n];\n        for (int i = 0; i < n; i++) {\n            coins[i] = sc.nextInt();\n        }\n        int amount = sc.nextInt();\n        \n        if (amount == 0) {\n            System.out.println(0);\n            return;\n        }\n        \n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, Integer.MAX_VALUE);\n        dp[0] = 0;\n        \n        for (int coin : coins) {\n            for (int i = coin; i <= amount; i++) {\n                if (dp[i - coin] != Integer.MAX_VALUE) {\n                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n                }\n            }\n        }\n        \n        System.out.println(dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount]);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\ncoins = list(map(int, input_lines[1].split()))\namount = int(input_lines[2])\n\nif amount == 0:\n    print(0)\nelse:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    \n    for coin in coins:\n        for i in range(coin, amount + 1):\n            dp[i] = min(dp[i], dp[i - coin] + 1)\n    \n    print(dp[amount] if dp[amount] != float('inf') else -1)",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst coins = input[1].split(' ').map(Number);\nconst amount = parseInt(input[2]);\n\nif (amount === 0) {\n    console.log(0);\n} else {\n    const dp = new Array(amount + 1).fill(Infinity);\n    dp[0] = 0;\n    \n    for (const coin of coins) {\n        for (let i = coin; i <= amount; i++) {\n            dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    \n    console.log(dp[amount] === Infinity ? -1 : dp[amount]);\n}",
		},
		createdAt: "2025-05-24T07:53:29.609Z",
		updatedAt: "2025-05-25T13:22:28.343Z",
		solvedBy: [],
	},
	{
		id: "b2cd48c9-013d-40ce-b2e1-0a38ce96fa97",
		title: "Product of Array Except Self",
		description:
			"Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
		difficulty: "MEDIUM",
		tags: ["array", "prefix-sum", "Apple"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "4\n1 2 3 4",
				output: "24 12 8 6",
				explanation: "",
			},
			PYTHON: {
				input: "4\n1 2 3 4",
				output: "24 12 8 6",
				explanation:
					"The product except self for each element gives [24,12,8,6].",
			},
			JAVASCRIPT: {
				input: "5\n-1 1 0 -3 3",
				output: "0 0 9 0 0",
				explanation:
					"The product except self for each element gives [0,0,9,0,0].",
			},
		},
		constraints: "2 Γëñ nums.length Γëñ 10^5, -30 Γëñ nums[i] Γëñ 30",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "4\n1 2 3 4",
				output: "24 12 8 6",
			},
			{
				input: "5\n-1 1 0 -3 3",
				output: "0 0 9 0 0",
			},
			{
				input: "2\n1 2",
				output: "2 1",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static int[] productExceptSelf(int[] nums) {\n        // Write your code here\n        return new int[nums.length];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        int[] result = productExceptSelf(nums);\n        for (int i = 0; i < result.length; i++) {\n            System.out.print(result[i]);\n            if (i < result.length - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "def product_except_self(nums):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\nresult = product_except_self(nums)\nprint(' '.join(map(str, result)))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction productExceptSelf(nums) {\n    // Write your code here\n    return [];\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconst result = productExceptSelf(nums);\nconsole.log(result.join(' '));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        \n        int[] result = new int[nums.length];\n        Arrays.fill(result, 1);\n        \n        // Left pass\n        for (int i = 1; i < nums.length; i++) {\n            result[i] = result[i-1] * nums[i-1];\n        }\n        \n        // Right pass\n        int right = 1;\n        for (int i = nums.length - 1; i >= 0; i--) {\n            result[i] *= right;\n            right *= nums[i];\n        }\n        \n        for (int i = 0; i < result.length; i++) {\n            System.out.print(result[i]);\n            if (i < result.length - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\n\nresult = [1] * len(nums)\n\n# Left pass\nfor i in range(1, len(nums)):\n    result[i] = result[i-1] * nums[i-1]\n\n# Right pass\nright = 1\nfor i in range(len(nums)-1, -1, -1):\n    result[i] *= right\n    right *= nums[i]\n\nprint(' '.join(map(str, result)))",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\n\nconst result = new Array(nums.length).fill(1);\n\n// Left pass\nfor (let i = 1; i < nums.length; i++) {\n    result[i] = result[i-1] * nums[i-1];\n}\n\n// Right pass\nlet right = 1;\nfor (let i = nums.length - 1; i >= 0; i--) {\n    result[i] *= right;\n    right *= nums[i];\n}\n\nconsole.log(result.join(' '));",
		},
		createdAt: "2025-05-24T07:54:17.822Z",
		updatedAt: "2025-05-25T13:24:02.205Z",
		solvedBy: [],
	},
	{
		id: "5fdbd33f-3328-428a-81b7-67722d388e1c",
		title: "Find Minimum in Rotated Sorted Array",
		description:
			"Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
		difficulty: "MEDIUM",
		tags: ["array", "binary-search", "Apple"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "5\n3 4 5 1 2",
				output: "1",
				explanation: "",
			},
			PYTHON: {
				input: "5\n3 4 5 1 2",
				output: "1",
				explanation:
					"The original array was [1,2,3,4,5] rotated 3 times.",
			},
			JAVASCRIPT: {
				input: "7\n4 5 6 7 0 1 2",
				output: "0",
				explanation:
					"The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.",
			},
		},
		constraints:
			"n == nums.length, 1 Γëñ n Γëñ 5000, -5000 Γëñ nums[i] Γëñ 5000, All integers of nums are unique",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "5\n3 4 5 1 2",
				output: "1",
			},
			{
				input: "7\n4 5 6 7 0 1 2",
				output: "0",
			},
			{
				input: "1\n1",
				output: "1",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int findMin(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        System.out.println(findMin(nums));\n    }\n}",
			PYTHON: "def find_min(nums):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\nprint(find_min(nums))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction findMin(nums) {\n    // Write your code here\n    return 0;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconsole.log(findMin(nums));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        \n        int left = 0, right = nums.length - 1;\n        \n        while (left < right) {\n            int mid = left + (right - left) / 2;\n            \n            if (nums[mid] > nums[right]) {\n                left = mid + 1;\n            } else {\n                right = mid;\n            }\n        }\n        \n        System.out.println(nums[left]);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\n\nleft, right = 0, len(nums) - 1\n\nwhile left < right:\n    mid = (left + right) // 2\n    \n    if nums[mid] > nums[right]:\n        left = mid + 1\n    else:\n        right = mid\n\nprint(nums[left])",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\n\nlet left = 0, right = nums.length - 1;\n\nwhile (left < right) {\n    const mid = Math.floor((left + right) / 2);\n    \n    if (nums[mid] > nums[right]) {\n        left = mid + 1;\n    } else {\n        right = mid;\n    }\n}\n\nconsole.log(nums[left]);",
		},
		createdAt: "2025-05-24T07:54:59.913Z",
		updatedAt: "2025-05-25T13:28:16.210Z",
		solvedBy: [],
	},
	{
		id: "e5f967b1-0b81-445d-8ffd-302e2e950dab",
		title: "House Robber",
		description:
			"You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
		difficulty: "MEDIUM",
		tags: ["array", "dynamic programming", "Amazon"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "4\n1 2 3 1",
				output: "4",
				explanation: "",
			},
			PYTHON: {
				input: "4\n1 2 3 1",
				output: "4",
				explanation:
					"Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount = 1 + 3 = 4.",
			},
			JAVASCRIPT: {
				input: "5\n2 7 9 3 1",
				output: "12",
				explanation:
					"Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount = 2 + 9 + 1 = 12.",
			},
		},
		constraints: "1 Γëñ nums.length Γëñ 100, 0 Γëñ nums[i] Γëñ 400",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "4\n1 2 3 1",
				output: "4",
			},
			{
				input: "5\n2 7 9 3 1",
				output: "12",
			},
			{
				input: "1\n5",
				output: "5",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int rob(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        System.out.println(rob(nums));\n    }\n}",
			PYTHON: "def rob(nums):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\nprint(rob(nums))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction rob(nums) {\n    // Write your code here\n    return 0;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconsole.log(rob(nums));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        \n        if (nums.length == 1) {\n            System.out.println(nums[0]);\n            return;\n        }\n        \n        int prev2 = nums[0];\n        int prev1 = Math.max(nums[0], nums[1]);\n        \n        for (int i = 2; i < nums.length; i++) {\n            int current = Math.max(prev1, prev2 + nums[i]);\n            prev2 = prev1;\n            prev1 = current;\n        }\n        \n        System.out.println(prev1);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\n\nif len(nums) == 1:\n    print(nums[0])\nelse:\n    prev2 = nums[0]\n    prev1 = max(nums[0], nums[1])\n    \n    for i in range(2, len(nums)):\n        current = max(prev1, prev2 + nums[i])\n        prev2 = prev1\n        prev1 = current\n    \n    print(prev1)",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\n\nif (nums.length === 1) {\n    console.log(nums[0]);\n} else {\n    let prev2 = nums[0];\n    let prev1 = Math.max(nums[0], nums[1]);\n    \n    for (let i = 2; i < nums.length; i++) {\n        const current = Math.max(prev1, prev2 + nums[i]);\n        prev2 = prev1;\n        prev1 = current;\n    }\n    \n    console.log(prev1);\n}",
		},
		createdAt: "2025-05-24T07:56:29.881Z",
		updatedAt: "2025-05-25T13:32:17.907Z",
		solvedBy: [],
	},
	{
		id: "b451fe4b-9aba-4e15-baca-de553e3e11c9",
		title: "Course Schedule",
		description:
			"There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.",
		difficulty: "MEDIUM",
		tags: [
			"depth-first-search",
			"breadth-first-search",
			"graph",
			"topological-sort",
			"Microsoft",
		],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "2\n1\n1 0",
				output: "true",
				explanation: "",
			},
			PYTHON: {
				input: "2\n1\n1 0",
				output: "true",
				explanation:
					"There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.",
			},
			JAVASCRIPT: {
				input: "2\n2\n1 0\n0 1",
				output: "false",
				explanation:
					"There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.",
			},
		},
		constraints:
			"1 Γëñ numCourses Γëñ 2000, 0 Γëñ prerequisites.length Γëñ 5000, prerequisites[i].length == 2, 0 Γëñ ai, bi < numCourses",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "2\n1\n1 0",
				output: "true",
			},
			{
				input: "2\n2\n1 0\n0 1",
				output: "false",
			},
			{
				input: "1\n0",
				output: "true",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static boolean canFinish(int numCourses, int[][] prerequisites) {\n        // Write your code here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int numCourses = sc.nextInt();\n        int numPrereqs = sc.nextInt();\n        int[][] prerequisites = new int[numPrereqs][2];\n        for (int i = 0; i < numPrereqs; i++) {\n            prerequisites[i][0] = sc.nextInt();\n            prerequisites[i][1] = sc.nextInt();\n        }\n        System.out.println(canFinish(numCourses, prerequisites) ? "true" : "false");\n    }\n}',
			PYTHON: "def can_finish(num_courses, prerequisites):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nnum_courses = int(input_lines[0])\nnum_prereqs = int(input_lines[1])\nprerequisites = []\nfor i in range(2, 2 + num_prereqs):\n    a, b = map(int, input_lines[i].split())\n    prerequisites.append([a, b])\nprint('true' if can_finish(num_courses, prerequisites) else 'false')",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction canFinish(numCourses, prerequisites) {\n    // Write your code here\n    return false;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst numCourses = parseInt(input[0]);\nconst numPrereqs = parseInt(input[1]);\nconst prerequisites = [];\nfor (let i = 2; i < 2 + numPrereqs; i++) {\n    const [a, b] = input[i].split(' ').map(Number);\n    prerequisites.push([a, b]);\n}\nconsole.log(canFinish(numCourses, prerequisites) ? 'true' : 'false');",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int numCourses = sc.nextInt();\n        int numPrereqs = sc.nextInt();\n        int[][] prerequisites = new int[numPrereqs][2];\n        for (int i = 0; i < numPrereqs; i++) {\n            prerequisites[i][0] = sc.nextInt();\n            prerequisites[i][1] = sc.nextInt();\n        }\n        \n        List<List<Integer>> graph = new ArrayList<>();\n        int[] indegree = new int[numCourses];\n        \n        for (int i = 0; i < numCourses; i++) {\n            graph.add(new ArrayList<>());\n        }\n        \n        for (int[] prereq : prerequisites) {\n            graph.get(prereq[1]).add(prereq[0]);\n            indegree[prereq[0]]++;\n        }\n        \n        Queue<Integer> queue = new LinkedList<>();\n        for (int i = 0; i < numCourses; i++) {\n            if (indegree[i] == 0) {\n                queue.offer(i);\n            }\n        }\n        \n        int processed = 0;\n        while (!queue.isEmpty()) {\n            int course = queue.poll();\n            processed++;\n            \n            for (int neighbor : graph.get(course)) {\n                indegree[neighbor]--;\n                if (indegree[neighbor] == 0) {\n                    queue.offer(neighbor);\n                }\n            }\n        }\n        \n        System.out.println(processed == numCourses ? "true" : "false");\n    }\n}',
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nnum_courses = int(input_lines[0])\nnum_prereqs = int(input_lines[1])\nprerequisites = []\nfor i in range(2, 2 + num_prereqs):\n    a, b = map(int, input_lines[i].split())\n    prerequisites.append([a, b])\n\n# Build adjacency list\ngraph = [[] for _ in range(num_courses)]\nindegree = [0] * num_courses\n\nfor course, prereq in prerequisites:\n    graph[prereq].append(course)\n    indegree[course] += 1\n\n# Topological sort using Kahn's algorithm\nqueue = []\nfor i in range(num_courses):\n    if indegree[i] == 0:\n        queue.append(i)\n\nprocessed = 0\nwhile queue:\n    course = queue.pop(0)\n    processed += 1\n    \n    for neighbor in graph[course]:\n        indegree[neighbor] -= 1\n        if indegree[neighbor] == 0:\n            queue.append(neighbor)\n\nprint('true' if processed == num_courses else 'false')",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst numCourses = parseInt(input[0]);\nconst numPrereqs = parseInt(input[1]);\nconst prerequisites = [];\nfor (let i = 2; i < 2 + numPrereqs; i++) {\n    const [a, b] = input[i].split(' ').map(Number);\n    prerequisites.push([a, b]);\n}\n\nconst graph = Array(numCourses).fill().map(() => []);\nconst indegree = new Array(numCourses).fill(0);\n\nfor (const [course, prereq] of prerequisites) {\n    graph[prereq].push(course);\n    indegree[course]++;\n}\n\nconst queue = [];\nfor (let i = 0; i < numCourses; i++) {\n    if (indegree[i] === 0) {\n        queue.push(i);\n    }\n}\n\nlet processed = 0;\nwhile (queue.length > 0) {\n    const course = queue.shift();\n    processed++;\n    \n    for (const neighbor of graph[course]) {\n        indegree[neighbor]--;\n        if (indegree[neighbor] === 0) {\n            queue.push(neighbor);\n        }\n    }\n}\n\nconsole.log(processed === numCourses ? 'true' : 'false');",
		},
		createdAt: "2025-05-24T07:57:43.950Z",
		updatedAt: "2025-05-25T13:35:39.411Z",
		solvedBy: [],
	},
	{
		id: "b6ef78a6-8145-4113-bac7-0c9ab85c4c85",
		title: "Trapping Rain Water",
		description:
			"Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
		difficulty: "HARD",
		tags: [
			"array",
			"two-pointers",
			"dynamic programming",
			"stack",
			"monotonic-stack",
			"Amazon",
		],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "12\n0 1 0 2 1 0 1 3 2 1 2 1",
				output: "6",
				explanation: "",
			},
			PYTHON: {
				input: "12\n0 1 0 2 1 0 1 3 2 1 2 1",
				output: "6",
				explanation:
					"The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.",
			},
			JAVASCRIPT: {
				input: "6\n4 2 0 3 2 5",
				output: "9",
				explanation:
					"The above elevation map is represented by array [4,2,0,3,2,5]. In this case, 9 units of rain water are being trapped.",
			},
		},
		constraints:
			"n == height.length, 1 Γëñ n Γëñ 2 * 10^4, 0 Γëñ height[i] Γëñ 3 * 10^4",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "12\n0 1 0 2 1 0 1 3 2 1 2 1",
				output: "6",
			},
			{
				input: "6\n4 2 0 3 2 5",
				output: "9",
			},
			{
				input: "3\n0 2 0",
				output: "0",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int trap(int[] height) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] height = new int[n];\n        for (int i = 0; i < n; i++) {\n            height[i] = sc.nextInt();\n        }\n        System.out.println(trap(height));\n    }\n}",
			PYTHON: "def trap(height):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nheight = list(map(int, input_lines[1].split()))\nprint(trap(height))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction trap(height) {\n    // Write your code here\n    return 0;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst height = input[1].split(' ').map(Number);\nconsole.log(trap(height));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] height = new int[n];\n        for (int i = 0; i < n; i++) {\n            height[i] = sc.nextInt();\n        }\n        \n        int left = 0, right = height.length - 1;\n        int leftMax = 0, rightMax = 0;\n        int water = 0;\n        \n        while (left < right) {\n            if (height[left] < height[right]) {\n                if (height[left] >= leftMax) {\n                    leftMax = height[left];\n                } else {\n                    water += leftMax - height[left];\n                }\n                left++;\n            } else {\n                if (height[right] >= rightMax) {\n                    rightMax = height[right];\n                } else {\n                    water += rightMax - height[right];\n                }\n                right--;\n            }\n        }\n        \n        System.out.println(water);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nheight = list(map(int, input_lines[1].split()))\n\nleft, right = 0, len(height) - 1\nleft_max, right_max = 0, 0\nwater = 0\n\nwhile left < right:\n    if height[left] < height[right]:\n        if height[left] >= left_max:\n            left_max = height[left]\n        else:\n            water += left_max - height[left]\n        left += 1\n    else:\n        if height[right] >= right_max:\n            right_max = height[right]\n        else:\n            water += right_max - height[right]\n        right -= 1\n\nprint(water)",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst height = input[1].split(' ').map(Number);\n\nlet left = 0, right = height.length - 1;\nlet leftMax = 0, rightMax = 0;\nlet water = 0;\n\nwhile (left < right) {\n    if (height[left] < height[right]) {\n        if (height[left] >= leftMax) {\n            leftMax = height[left];\n        } else {\n            water += leftMax - height[left];\n        }\n        left++;\n    } else {\n        if (height[right] >= rightMax) {\n            rightMax = height[right];\n        } else {\n            water += rightMax - height[right];\n        }\n        right--;\n    }\n}\n\nconsole.log(water);",
		},
		createdAt: "2025-05-24T08:01:02.565Z",
		updatedAt: "2025-05-25T13:38:31.970Z",
		solvedBy: [],
	},
	{
		id: "aef831fa-a2ea-46d9-906c-6c6c4f3364c1",
		title: "Valid Parentheses",
		description:
			"Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
		difficulty: "EASY",
		tags: ["string", "stack", "Google"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "()",
				output: "true",
				explanation: "",
			},
			PYTHON: {
				input: "()",
				output: "true",
				explanation: "The string contains valid parentheses.",
			},
			JAVASCRIPT: {
				input: "()[]{}",
				output: "true",
				explanation: "All brackets are properly matched.",
			},
		},
		constraints:
			"1 Γëñ s.length Γëñ 10^4, s consists of parentheses only '()[]{}'",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "()",
				output: "true",
			},
			{
				input: "()[]{}",
				output: "true",
			},
			{
				input: "(]",
				output: "false",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static boolean isValid(String s) {\n        // Write your code here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(isValid(s) ? "true" : "false");\n    }\n}',
			PYTHON: "def is_valid(s):\n    # Write your code here\n    pass\n\nimport sys\ns = sys.stdin.read().strip()\nprint('true' if is_valid(s) else 'false')",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction isValid(s) {\n    // Write your code here\n    return false;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconsole.log(isValid(input) ? 'true' : 'false');",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        \n        Stack<Character> stack = new Stack<>();\n        Map<Character, Character> mapping = new HashMap<>();\n        mapping.put(')', '(');\n        mapping.put('}', '{');\n        mapping.put(']', '[');\n        \n        for (char c : s.toCharArray()) {\n            if (mapping.containsKey(c)) {\n                if (stack.isEmpty() || stack.pop() != mapping.get(c)) {\n                    System.out.println(\"false\");\n                    return;\n                }\n            } else {\n                stack.push(c);\n            }\n        }\n        \n        System.out.println(stack.isEmpty() ? \"true\" : \"false\");\n    }\n}",
			PYTHON: "import sys\ns = sys.stdin.read().strip()\n\nstack = []\nmatching = {')': '(', '}': '{', ']': '['}\n\nfor char in s:\n    if char in matching:\n        if not stack or stack.pop() != matching[char]:\n            print('false')\n            exit()\n    else:\n        stack.append(char)\n\nprint('true' if not stack else 'false')",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\n\nconst stack = [];\nconst mapping = {')': '(', '}': '{', ']': '['};\n\nfor (const char of input) {\n    if (char in mapping) {\n        if (stack.length === 0 || stack.pop() !== mapping[char]) {\n            console.log('false');\n            process.exit();\n        }\n    } else {\n        stack.push(char);\n    }\n}\n\nconsole.log(stack.length === 0 ? 'true' : 'false');",
		},
		createdAt: "2025-05-24T08:04:37.573Z",
		updatedAt: "2025-05-25T13:39:45.288Z",
		solvedBy: [],
	},
	{
		id: "b3fd6192-1ce9-4c87-bd01-547d45b0f319",
		title: "3Sum",
		description:
			"Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
		difficulty: "MEDIUM",
		tags: ["array", "two-pointers", "sorting", "Google"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "6\n-1 0 1 2 -1 -4",
				output: "[[-1,-1,2],[-1,0,1]]",
				explanation: "",
			},
			PYTHON: {
				input: "6\n-1 0 1 2 -1 -4",
				output: "[[-1,-1,2],[-1,0,1]]",
				explanation:
					"The distinct triplets are [-1,0,1] and [-1,-1,2].",
			},
			JAVASCRIPT: {
				input: "3\n0 1 1",
				output: "[]",
				explanation: "The only possible triplet does not sum up to 0.",
			},
		},
		constraints: "3 Γëñ nums.length Γëñ 3000, -10^5 Γëñ nums[i] Γëñ 10^5",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "6\n-1 0 1 2 -1 -4",
				output: "[[-1,-1,2],[-1,0,1]]",
			},
			{
				input: "3\n0 1 1",
				output: "[]",
			},
			{
				input: "3\n0 0 0",
				output: "[[0,0,0]]",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static List<List<Integer>> threeSum(int[] nums) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        List<List<Integer>> result = threeSum(nums);\n        System.out.print("[");\n        for (int i = 0; i < result.size(); i++) {\n            System.out.print("[");\n            for (int j = 0; j < result.get(i).size(); j++) {\n                System.out.print(result.get(i).get(j));\n                if (j < result.get(i).size() - 1) System.out.print(",");\n            }\n            System.out.print("]");\n            if (i < result.size() - 1) System.out.print(",");\n        }\n        System.out.print("]");\n    }\n}',
			PYTHON: "def three_sum(nums):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\nresult = three_sum(nums)\nprint(str(result).replace(' ', ''))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction threeSum(nums) {\n    // Write your code here\n    return [];\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconst result = threeSum(nums);\nconsole.log(JSON.stringify(result));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        \n        Arrays.sort(nums);\n        List<List<Integer>> result = new ArrayList<>();\n        \n        for (int i = 0; i < nums.length - 2; i++) {\n            if (i > 0 && nums[i] == nums[i-1]) continue;\n            \n            int left = i + 1, right = nums.length - 1;\n            \n            while (left < right) {\n                int sum = nums[i] + nums[left] + nums[right];\n                \n                if (sum < 0) {\n                    left++;\n                } else if (sum > 0) {\n                    right--;\n                } else {\n                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));\n                    \n                    while (left < right && nums[left] == nums[left + 1]) left++;\n                    while (left < right && nums[right] == nums[right - 1]) right--;\n                    \n                    left++;\n                    right--;\n                }\n            }\n        }\n        \n        System.out.print("[");\n        for (int i = 0; i < result.size(); i++) {\n            System.out.print("[");\n            for (int j = 0; j < result.get(i).size(); j++) {\n                System.out.print(result.get(i).get(j));\n                if (j < result.get(i).size() - 1) System.out.print(",");\n            }\n            System.out.print("]");\n            if (i < result.size() - 1) System.out.print(",");\n        }\n        System.out.print("]");\n    }\n}',
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\n\nnums.sort()\nresult = []\n\nfor i in range(len(nums) - 2):\n    if i > 0 and nums[i] == nums[i-1]:\n        continue\n    \n    left, right = i + 1, len(nums) - 1\n    \n    while left < right:\n        current_sum = nums[i] + nums[left] + nums[right]\n        \n        if current_sum < 0:\n            left += 1\n        elif current_sum > 0:\n            right -= 1\n        else:\n            result.append([nums[i], nums[left], nums[right]])\n            \n            while left < right and nums[left] == nums[left + 1]:\n                left += 1\n            while left < right and nums[right] == nums[right - 1]:\n                right -= 1\n            \n            left += 1\n            right -= 1\n\nprint(str(result).replace(' ', ''))",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\n\nnums.sort((a, b) => a - b);\nconst result = [];\n\nfor (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i-1]) continue;\n    \n    let left = i + 1, right = nums.length - 1;\n    \n    while (left < right) {\n        const sum = nums[i] + nums[left] + nums[right];\n        \n        if (sum < 0) {\n            left++;\n        } else if (sum > 0) {\n            right--;\n        } else {\n            result.push([nums[i], nums[left], nums[right]]);\n            \n            while (left < right && nums[left] === nums[left + 1]) left++;\n            while (left < right && nums[right] === nums[right - 1]) right--;\n            \n            left++;\n            right--;\n        }\n    }\n}\n\nconsole.log(JSON.stringify(result));",
		},
		createdAt: "2025-05-24T08:46:32.479Z",
		updatedAt: "2025-05-25T13:43:21.374Z",
		solvedBy: [],
	},
	{
		id: "717212d6-cb57-49f6-9905-85ddf3e76e59",
		title: "Binary Tree Height",
		description:
			"Given a binary tree represented as an array, find its height.",
		difficulty: "MEDIUM",
		tags: ["binary-tree", "recursion", "depth-first-search", "Amazon"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "7\n3 9 20 -1 -1 15 7",
				output: "3",
				explanation: "",
			},
			PYTHON: {
				input: "7\n3 9 20 -1 -1 15 7",
				output: "3",
				explanation: "The height of the binary tree is 3.",
			},
			JAVASCRIPT: {
				input: "1\n1",
				output: "1",
				explanation: "Single node tree has height 1.",
			},
		},
		constraints: "0 Γëñ n Γëñ 10^4, -1000 Γëñ node.val Γëñ 1000",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "3\n1 2 3",
				output: "2",
			},
			{
				input: "0",
				output: "0",
			},
			{
				input: "1\n5",
				output: "1",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.Scanner;\n\npublic class Main {\n    public static int treeHeight(Integer[] tree) {\n        // Write your code here\n\n        \n        return 0;        \n    }\n    \n    private static int height(Integer[] tree, int index) {\n        if (index >= tree.length || tree[index] == null) return 0;\n        int leftHeight = height(tree, 2 * index + 1);\n        int rightHeight = height(tree, 2 * index + 2);\n        return 1 + Math.max(leftHeight, rightHeight);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        if (n == 0) {\n            System.out.println(0);\n            return;\n        }\n        Integer[] tree = new Integer[n];\n        for (int i = 0; i < n; i++) {\n            String val = sc.next();\n            tree[i] = val.equals("-1") ? null : Integer.parseInt(val);\n        }\n        System.out.println(treeHeight(tree));\n    }\n}',
			PYTHON: "def tree_height(tree):\n    # Write your code here\n    \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nif n == 0:\n    print(0)\nelse:\n    tree = list(map(lambda x: None if x == '-1' else int(x), input_lines[1].split()))\n    print(tree_height(tree))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction treeHeight(tree) {\n    // Write your code here\n    \n    \n   \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nif (n === 0) {\n    console.log(0);\n} else {\n    const tree = input[1].split(' ').map(x => x === '-1' ? null : parseInt(x));\n    console.log(treeHeight(tree));\n}",
		},
		referenceSolutions: {
			JAVA: 'import java.util.Scanner;\n\npublic class Main {\n    private static int height(Integer[] tree, int index) {\n        if (index >= tree.length || tree[index] == null) return 0;\n        int leftHeight = height(tree, 2 * index + 1);\n        int rightHeight = height(tree, 2 * index + 2);\n        return 1 + Math.max(leftHeight, rightHeight);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        if (n == 0) {\n            System.out.println(0);\n            return;\n        }\n        Integer[] tree = new Integer[n];\n        for (int i = 0; i < n; i++) {\n            String val = sc.next();\n            tree[i] = val.equals("-1") ? null : Integer.parseInt(val);\n        }\n        System.out.println(height(tree, 0));\n    }\n}',
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nif n == 0:\n    print(0)\nelse:\n    tree = list(map(lambda x: None if x == '-1' else int(x), input_lines[1].split()))\n    \n    def height(index):\n        if index >= len(tree) or tree[index] is None:\n            return 0\n        left_height = height(2 * index + 1)\n        right_height = height(2 * index + 2)\n        return 1 + max(left_height, right_height)\n    \n    print(height(0))",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nif (n === 0) {\n    console.log(0);\n} else {\n    const tree = input[1].split(' ').map(x => x === '-1' ? null : parseInt(x));\n    \n    function height(index) {\n        if (index >= tree.length || tree[index] === null) return 0;\n        const leftHeight = height(2 * index + 1);\n        const rightHeight = height(2 * index + 2);\n        return 1 + Math.max(leftHeight, rightHeight);\n    }\n    \n    console.log(height(0));\n}",
		},
		createdAt: "2025-05-25T06:40:38.068Z",
		updatedAt: "2025-05-25T19:17:07.734Z",
		solvedBy: [],
	},
	{
		id: "aa0cf884-6377-4b0a-9130-a5e0d5796695",
		title: "Word Ladder",
		description:
			"A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair of words differs by a single letter. Return the length of the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.",
		difficulty: "HARD",
		tags: ["hash-table", "string", "breadth-first-search", "Amazon"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "hit\ncog\n6\nhot dot dog lot log cog",
				output: "5",
				explanation: "",
			},
			PYTHON: {
				input: "hit\ncog\n6\nhot dot dog lot log cog",
				output: "5",
				explanation:
					'One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog", which is 5 words long.',
			},
			JAVASCRIPT: {
				input: "hit\ncog\n3\nhot dot dog",
				output: "0",
				explanation:
					'The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.',
			},
		},
		constraints:
			"1 Γëñ beginWord.length Γëñ 10, endWord.length == beginWord.length, 1 Γëñ wordList.length Γëñ 5000, wordList[i].length == beginWord.length",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "hit\ncog\n6\nhot dot dog lot log cog",
				output: "5",
			},
			{
				input: "hit\ncog\n3\nhot dot dog",
				output: "0",
			},
			{
				input: "a\nc\n2\na b",
				output: "0",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String beginWord = sc.nextLine();\n        String endWord = sc.nextLine();\n        int n = sc.nextInt();\n        sc.nextLine();\n        String[] words = sc.nextLine().split(" ");\n        List<String> wordList = Arrays.asList(words);\n        System.out.println(ladderLength(beginWord, endWord, wordList));\n    }\n}',
			PYTHON: "def ladder_length(begin_word, end_word, word_list):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nbegin_word = input_lines[0]\nend_word = input_lines[1]\nn = int(input_lines[2])\nword_list = input_lines[3].split()\nprint(ladder_length(begin_word, end_word, word_list))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction ladderLength(beginWord, endWord, wordList) {\n    // Write your code here\n    return 0;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst beginWord = input[0];\nconst endWord = input[1];\nconst n = parseInt(input[2]);\nconst wordList = input[3].split(' ');\nconsole.log(ladderLength(beginWord, endWord, wordList));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String beginWord = sc.nextLine();\n        String endWord = sc.nextLine();\n        int n = sc.nextInt();\n        sc.nextLine();\n        String[] words = sc.nextLine().split(\" \");\n        List<String> wordList = Arrays.asList(words);\n        \n        if (!wordList.contains(endWord)) {\n            System.out.println(0);\n            return;\n        }\n        \n        Set<String> wordSet = new HashSet<>(wordList);\n        Queue<String> queue = new LinkedList<>();\n        Set<String> visited = new HashSet<>();\n        \n        queue.offer(beginWord);\n        visited.add(beginWord);\n        int level = 1;\n        \n        while (!queue.isEmpty()) {\n            int size = queue.size();\n            \n            for (int i = 0; i < size; i++) {\n                String word = queue.poll();\n                \n                if (word.equals(endWord)) {\n                    System.out.println(level);\n                    return;\n                }\n                \n                char[] chars = word.toCharArray();\n                for (int j = 0; j < chars.length; j++) {\n                    char original = chars[j];\n                    \n                    for (char c = 'a'; c <= 'z'; c++) {\n                        chars[j] = c;\n                        String newWord = new String(chars);\n                        \n                        if (wordSet.contains(newWord) && !visited.contains(newWord)) {\n                            visited.add(newWord);\n                            queue.offer(newWord);\n                        }\n                    }\n                    \n                    chars[j] = original;\n                }\n            }\n            \n            level++;\n        }\n        \n        System.out.println(0);\n    }\n}",
			PYTHON: "import sys\nfrom collections import deque\ninput_lines = sys.stdin.read().strip().split('\\n')\nbegin_word = input_lines[0]\nend_word = input_lines[1]\nn = int(input_lines[2])\nword_list = input_lines[3].split()\n\nif end_word not in word_list:\n    print(0)\nelse:\n    word_set = set(word_list)\n    queue = deque([(begin_word, 1)])\n    visited = {begin_word}\n    \n    while queue:\n        word, length = queue.popleft()\n        \n        if word == end_word:\n            print(length)\n            exit()\n        \n        for i in range(len(word)):\n            for c in 'abcdefghijklmnopqrstuvwxyz':\n                new_word = word[:i] + c + word[i+1:]\n                \n                if new_word in word_set and new_word not in visited:\n                    visited.add(new_word)\n                    queue.append((new_word, length + 1))\n    \n    print(0)",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst beginWord = input[0];\nconst endWord = input[1];\nconst n = parseInt(input[2]);\nconst wordList = input[3].split(' ');\n\nif (!wordList.includes(endWord)) {\n    console.log(0);\n} else {\n    const wordSet = new Set(wordList);\n    const queue = [[beginWord, 1]];\n    const visited = new Set([beginWord]);\n    \n    while (queue.length > 0) {\n        const [word, length] = queue.shift();\n        \n        if (word === endWord) {\n            console.log(length);\n            process.exit();\n        }\n        \n        for (let i = 0; i < word.length; i++) {\n            for (let c = 97; c <= 122; c++) {\n                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);\n                \n                if (wordSet.has(newWord) && !visited.has(newWord)) {\n                    visited.add(newWord);\n                    queue.push([newWord, length + 1]);\n                }\n            }\n        }\n    }\n    \n    console.log(0);\n}",
		},
		createdAt: "2025-05-24T08:50:15.705Z",
		updatedAt: "2025-05-25T19:10:05.854Z",
		solvedBy: [],
	},
	{
		id: "a9e7e89a-daff-4ac2-9f3a-7e168b5d4b1d",
		title: "Remove Duplicates from Sorted Array",
		description:
			"Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements.",
		difficulty: "EASY",
		tags: ["array", "two-pointers", "Microsoft"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "3\n1 1 2",
				output: "2",
				explanation: "",
			},
			PYTHON: {
				input: "3\n1 1 2",
				output: "2",
				explanation:
					"Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.",
			},
			JAVASCRIPT: {
				input: "10\n0 0 1 1 1 2 2 3 3 4",
				output: "5",
				explanation:
					"Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.",
			},
		},
		constraints:
			"1 Γëñ nums.length Γëñ 3 * 10^4, -100 Γëñ nums[i] Γëñ 100, nums is sorted in non-decreasing order",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "3\n1 1 2",
				output: "2",
			},
			{
				input: "10\n0 0 1 1 1 2 2 3 3 4",
				output: "5",
			},
			{
				input: "1\n1",
				output: "1",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int removeDuplicates(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        System.out.println(removeDuplicates(nums));\n    }\n}",
			PYTHON: "def remove_duplicates(nums):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\nprint(remove_duplicates(nums))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction removeDuplicates(nums) {\n    // Write your code here\n    return 0;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconsole.log(removeDuplicates(nums));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        \n        if (nums.length == 0) {\n            System.out.println(0);\n            return;\n        }\n        \n        int k = 1;\n        for (int i = 1; i < nums.length; i++) {\n            if (nums[i] != nums[i-1]) {\n                nums[k] = nums[i];\n                k++;\n            }\n        }\n        \n        System.out.println(k);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\n\nif len(nums) == 0:\n    print(0)\nelse:\n    k = 1\n    for i in range(1, len(nums)):\n        if nums[i] != nums[i-1]:\n            nums[k] = nums[i]\n            k += 1\n    print(k)",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\n\nif (nums.length === 0) {\n    console.log(0);\n} else {\n    let k = 1;\n    for (let i = 1; i < nums.length; i++) {\n        if (nums[i] !== nums[i-1]) {\n            nums[k] = nums[i];\n            k++;\n        }\n    }\n    console.log(k);\n}",
		},
		createdAt: "2025-05-24T08:56:39.681Z",
		updatedAt: "2025-05-25T19:11:48.130Z",
		solvedBy: [],
	},
	{
		id: "c2f7a800-8c60-4714-b179-5c546928c130",
		title: "Rotate Array",
		description:
			"Given an integer array nums, rotate the array to the right by k steps, where k is non-negative. Return the rotated array as space-separated integers.",
		difficulty: "MEDIUM",
		tags: ["array", "math", "two-pointers", "Microsoft"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "7\n1 2 3 4 5 6 7\n3",
				output: "5 6 7 1 2 3 4",
				explanation: "",
			},
			PYTHON: {
				input: "7\n1 2 3 4 5 6 7\n3",
				output: "5 6 7 1 2 3 4",
				explanation:
					"rotate 1 steps to the right: [7,1,2,3,4,5,6], rotate 2 steps to the right: [6,7,1,2,3,4,5], rotate 3 steps to the right: [5,6,7,1,2,3,4]",
			},
			JAVASCRIPT: {
				input: "3\n-1 -100 3\n2",
				output: "-100 3 -1",
				explanation:
					"rotate 1 steps to the right: [3,-1,-100], rotate 2 steps to the right: [-100,3,-1]",
			},
		},
		constraints:
			"1 Γëñ nums.length Γëñ 10^5, -2^31 Γëñ nums[i] Γëñ 2^31 - 1, 0 Γëñ k Γëñ 10^5",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "7\n1 2 3 4 5 6 7\n3",
				output: "5 6 7 1 2 3 4",
			},
			{
				input: "3\n-1 -100 3\n2",
				output: "-100 3 -1",
			},
			{
				input: "1\n1\n1",
				output: "1",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void rotate(int[] nums, int k) {\n        // Write your code here\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        int k = sc.nextInt();\n        rotate(nums, k);\n        for (int i = 0; i < nums.length; i++) {\n            System.out.print(nums[i]);\n            if (i < nums.length - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "def rotate(nums, k):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\nk = int(input_lines[2])\nrotate(nums, k)\nprint(' '.join(map(str, nums)))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction rotate(nums, k) {\n    // Write your code here\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconst k = parseInt(input[2]);\nrotate(nums, k);\nconsole.log(nums.join(' '));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        int k = sc.nextInt();\n        \n        k = k % nums.length;\n        if (k != 0) {\n            reverse(nums, 0, nums.length - 1);\n            reverse(nums, 0, k - 1);\n            reverse(nums, k, nums.length - 1);\n        }\n        \n        for (int i = 0; i < nums.length; i++) {\n            System.out.print(nums[i]);\n            if (i < nums.length - 1) System.out.print(" ");\n        }\n    }\n    \n    private static void reverse(int[] nums, int start, int end) {\n        while (start < end) {\n            int temp = nums[start];\n            nums[start] = nums[end];\n            nums[end] = temp;\n            start++;\n            end--;\n        }\n    }\n}',
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\nk = int(input_lines[2])\n\nk = k % len(nums)\nif k == 0:\n    print(' '.join(map(str, nums)))\nelse:\n    # Reverse entire array\n    nums.reverse()\n    # Reverse first k elements\n    nums[:k] = nums[:k][::-1]\n    # Reverse remaining elements\n    nums[k:] = nums[k:][::-1]\n    print(' '.join(map(str, nums)))",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconst k = parseInt(input[2]);\n\nconst actualK = k % nums.length;\nif (actualK !== 0) {\n    function reverse(arr, start, end) {\n        while (start < end) {\n            [arr[start], arr[end]] = [arr[end], arr[start]];\n            start++;\n            end--;\n        }\n    }\n    \n    reverse(nums, 0, nums.length - 1);\n    reverse(nums, 0, actualK - 1);\n    reverse(nums, actualK, nums.length - 1);\n}\n\nconsole.log(nums.join(' '));",
		},
		createdAt: "2025-05-24T08:57:14.855Z",
		updatedAt: "2025-05-25T19:13:54.012Z",
		solvedBy: [],
	},
	{
		id: "2402a42e-1bee-4db7-9f59-7a0653354c25",
		title: "Stack Push Pop",
		description:
			"Given a sequence of push and pop operations on a stack, return the final stack state.",
		difficulty: "EASY",
		tags: ["stack", "data-structure", "simulation", "Microsoft"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "5\npush 1\npush 2\npop\npush 3\npop",
				output: "1",
				explanation: "",
			},
			PYTHON: {
				input: "5\npush 1\npush 2\npop\npush 3\npop",
				output: "1",
				explanation: "Final stack contains only element 1.",
			},
			JAVASCRIPT: {
				input: "2\npush 5\npush 10",
				output: "5 10",
				explanation: "Stack contains 5 at bottom and 10 at top.",
			},
		},
		constraints: "1 Γëñ n Γëñ 1000, valid operations only",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "3\npush 1\npush 2\npop",
				output: "1",
			},
			{
				input: "4\npush 5\npush 10\npush 15\npop",
				output: "5 10",
			},
			{
				input: "3\npush 100 \npush 200\npop",
				output: "100",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static List<Integer> stackOperations(String[] operations) {\n        // Write your code here\n       \n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        sc.nextLine();\n        String[] operations = new String[n];\n        for (int i = 0; i < n; i++) {\n            operations[i] = sc.nextLine();\n        }\n        List<Integer> result = stackOperations(operations);\n        if (result.isEmpty()) {\n            System.out.println("");\n        } else {\n            for (int i = 0; i < result.size(); i++) {\n                System.out.print(result.get(i));\n                if (i < result.size() - 1) System.out.print(" ");\n            }\n        }\n    }\n}',
			PYTHON: "def stack_operations(operations):\n    # Write your code here\n    \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\noperations = [input_lines[i+1] for i in range(n)]\nresult = stack_operations(operations)\nif result:\n    print(' '.join(map(str, result)))\nelse:\n    print('')",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction stackOperations(operations) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst operations = input.slice(1, n + 1);\nconst result = stackOperations(operations);\nif (result.length === 0) {\n    console.log('');\n} else {\n    console.log(result.join(' '));\n}",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        sc.nextLine();\n        Stack<Integer> stack = new Stack<>();\n        for (int i = 0; i < n; i++) {\n            String op = sc.nextLine();\n            if (op.startsWith("push")) {\n                int value = Integer.parseInt(op.split(" ")[1]);\n                stack.push(value);\n            } else if (op.equals("pop")) {\n                if (!stack.isEmpty()) {\n                    stack.pop();\n                }\n            }\n        }\n        if (stack.isEmpty()) {\n            System.out.println("");\n        } else {\n            List<Integer> result = new ArrayList<>(stack);\n            for (int i = 0; i < result.size(); i++) {\n                System.out.print(result.get(i));\n                if (i < result.size() - 1) System.out.print(" ");\n            }\n        }\n    }\n}',
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nstack = []\nfor i in range(1, n + 1):\n    op = input_lines[i]\n    if op.startswith('push'):\n        value = int(op.split()[1])\n        stack.append(value)\n    elif op == 'pop':\n        if stack:\n            stack.pop()\nif stack:\n    print(' '.join(map(str, stack)))\nelse:\n    print('')",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst stack = [];\nfor (let i = 1; i <= n; i++) {\n    const op = input[i];\n    if (op.startsWith('push')) {\n        const value = parseInt(op.split(' ')[1]);\n        stack.push(value);\n    } else if (op === 'pop') {\n        if (stack.length > 0) {\n            stack.pop();\n        }\n    }\n}\nif (stack.length === 0) {\n    console.log('');\n} else {\n    console.log(stack.join(' '));\n}",
		},
		createdAt: "2025-05-25T06:41:15.650Z",
		updatedAt: "2025-05-25T19:18:11.046Z",
		solvedBy: [],
	},
	{
		id: "7416cea1-2ace-40ee-a356-cdf24335f67a",
		title: "Kth Largest Element in an Array",
		description:
			"Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
		difficulty: "MEDIUM",
		tags: [
			"array",
			"divide-and-conquer",
			"sorting",
			"heap",
			"quickselect",
			"Bloomberg",
		],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "6\n3 2 1 5 6 4\n2",
				output: "5",
				explanation: "",
			},
			PYTHON: {
				input: "6\n3 2 1 5 6 4\n2",
				output: "5",
				explanation: "The 2nd largest element is 5.",
			},
			JAVASCRIPT: {
				input: "9\n3 2 3 1 2 4 5 5 6\n4",
				output: "4",
				explanation: "The 4th largest element is 4.",
			},
		},
		constraints:
			"1 Γëñ k Γëñ nums.length Γëñ 10^5, -10^4 Γëñ nums[i] Γëñ 10^4",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "6\n3 2 1 5 6 4\n2",
				output: "5",
			},
			{
				input: "9\n3 2 3 1 2 4 5 5 6\n4",
				output: "4",
			},
			{
				input: "1\n1\n1",
				output: "1",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int findKthLargest(int[] nums, int k) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        int k = sc.nextInt();\n        System.out.println(findKthLargest(nums, k));\n    }\n}",
			PYTHON: "def find_kth_largest(nums, k):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\nk = int(input_lines[2])\nprint(find_kth_largest(nums, k))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction findKthLargest(nums, k) {\n    // Write your code here\n    return 0;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconst k = parseInt(input[2]);\nconsole.log(findKthLargest(nums, k));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        int k = sc.nextInt();\n        \n        Arrays.sort(nums);\n        System.out.println(nums[nums.length - k]);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\nk = int(input_lines[2])\n\nnums.sort(reverse=True)\nprint(nums[k-1])",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconst k = parseInt(input[2]);\n\nnums.sort((a, b) => b - a);\nconsole.log(nums[k - 1]);",
		},
		createdAt: "2025-05-24T08:59:15.454Z",
		updatedAt: "2025-05-25T19:15:30.890Z",
		solvedBy: [],
	},
	{
		id: "a2bcbd89-725a-4283-a30d-a47252ec6d30",
		title: "Sorting Bubble Sort",
		description:
			"Implement bubble sort algorithm to sort an array in ascending order.",
		difficulty: "EASY",
		tags: ["sorting", "bubble-sort", "algorithm", "demo"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			PYTHON: {
				input: "5\n64 34 25 12 22",
				output: "12 22 25 34 64",
				explanation: "Array sorted using bubble sort.",
			},
			JAVASCRIPT: {
				input: "4\n5 2 8 1",
				output: "1 2 5 8",
				explanation: "Sorted array in ascending order.",
			},
		},
		constraints: "1 Γëñ n Γëñ 1000, -10^6 Γëñ arr[i] Γëñ 10^6",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "3\n3 1 2",
				output: "1 2 3",
			},
			{
				input: "1\n42",
				output: "42",
			},
			{
				input: "4\n-1 -5 0 3",
				output: "-5 -1 0 3",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n        \n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n            }\n        }\n        \n        for (int i = 0; i < arr.length; i++) {\n            System.out.print(arr[i]);\n            if (i < arr.length - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\narr = list(map(int, input_lines[1].split()))\n\nfor i in range(n):\n    for j in range(0, n - i - 1):\n        if arr[j] > arr[j + 1]:\n            arr[j], arr[j + 1] = arr[j + 1], arr[j]\n\nprint(' '.join(map(str, arr)))",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst arr = input[1].split(' ').map(Number);\n\nfor (let i = 0; i < n; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n        if (arr[j] > arr[j + 1]) {\n            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n        }\n    }\n}\n\nconsole.log(arr.join(' '));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n        \n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n            }\n        }\n        \n        for (int i = 0; i < arr.length; i++) {\n            System.out.print(arr[i]);\n            if (i < arr.length - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\narr = list(map(int, input_lines[1].split()))\n\nfor i in range(n):\n    for j in range(0, n - i - 1):\n        if arr[j] > arr[j + 1]:\n            arr[j], arr[j + 1] = arr[j + 1], arr[j]\n\nprint(' '.join(map(str, arr)))",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst arr = input[1].split(' ').map(Number);\n\nfor (let i = 0; i < n; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n        if (arr[j] > arr[j + 1]) {\n            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n        }\n    }\n}\n\nconsole.log(arr.join(' '));",
		},
		createdAt: "2025-05-25T06:45:11.089Z",
		updatedAt: "2025-05-25T06:45:11.089Z",
		solvedBy: [],
	},
	{
		id: "88231151-bfc2-440e-b9de-0dc01c4fede1",
		title: "Add Two Numbers",
		description:
			"Given two numbers a and b add them up and return the outout",
		difficulty: "EASY",
		tags: ["math", "operators", "addition", "demo"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "3 7",
				output: "10",
				explanation: "",
			},
			PYTHON: {
				input: "3 7",
				output: "10",
				explanation: "Adding 3 and 7 gives 10.",
			},
			JAVASCRIPT: {
				input: "-5 12",
				output: "7",
				explanation: "Adding -5 and 12 gives 7.",
			},
		},
		constraints: "-10^9 Γëñ a, b Γëñ 10^9",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "100 200",
				output: "300",
			},
			{
				input: "-500 -600",
				output: "-1100",
			},
			{
				input: "0 0",
				output: "0",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.Scanner;\n\npublic class Main {\n    public static int addTwoNumbers(int a, int b) {\n        // Write your code here\n        // Return the sum of a and b\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        System.out.println(addTwoNumbers(a, b));\n    }\n}",
			PYTHON: "def add_two_numbers(a, b):\n    # Write your code here\n    # Return the sum of a and b\n    return a + b\n\nimport sys\ninput_line = sys.stdin.read()\na, b = map(int, input_line.split())\nprint(add_two_numbers(a, b))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction addTwoNumbers(a, b) {\n    // Write your code here\n    // Return the sum of a and b\n    return a + b;\n}\n\n// Reading input from stdin (using fs to read all input)\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst [a, b] = input.split(' ').map(Number);\n\nconsole.log(addTwoNumbers(a, b));",
		},
		referenceSolutions: {
			JAVA: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        System.out.println(a + b);\n    }\n}",
			PYTHON: "import sys\ninput_line = sys.stdin.read()\na, b = map(int, input_line.split())\nprint(a + b)",
			JAVASCRIPT:
				"const fs = require('fs');\n\n// Reading input from stdin (using fs to read all input)\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst [a, b] = input.split(' ').map(Number);\n\nconsole.log(a + b);",
		},
		createdAt: "2025-05-24T07:37:34.064Z",
		updatedAt: "2025-05-25T07:49:58.003Z",
		solvedBy: [],
	},
	{
		id: "027e84f9-0459-4fff-bd81-1ba597339afb",
		title: "Hash Table Insert Search",
		description:
			"Implement basic hash table operations: insert and search. Return 'found' or 'not found' for search queries.",
		difficulty: "MEDIUM",
		tags: ["hash-table", "data-structure", "search", "Meta (Facebook)"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "4\ninsert 10\ninsert 20\nsearch 10\nsearch 30",
				output: "found\nnot found",
				explanation: "",
			},
			PYTHON: {
				input: "4\ninsert 10\ninsert 20\nsearch 10\nsearch 30",
				output: "found\nnot found",
				explanation: "10 is found, 30 is not found.",
			},
			JAVASCRIPT: {
				input: "3\ninsert 5\nsearch 5\nsearch 15",
				output: "found\nnot found",
				explanation: "5 is found, 15 is not found.",
			},
		},
		constraints: "1 Γëñ n Γëñ 1000, 1 Γëñ values Γëñ 10^6",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "5\ninsert 1\ninsert 2\nsearch 1\nsearch 3\ninsert 3",
				output: "found\nnot found",
			},
			{
				input: "2\nsearch 100\ninsert 100",
				output: "not found",
			},
			{
				input: "3\ninsert 50\nsearch 50\nsearch 50",
				output: "found\nfound",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static List<String> hashTableOperations(String[] operations) {\n        // Write your code here\n        \n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        sc.nextLine();\n        String[] operations = new String[n];\n        for (int i = 0; i < n; i++) {\n            operations[i] = sc.nextLine();\n        }\n        List<String> results = hashTableOperations(operations);\n        for (String result : results) {\n            System.out.println(result);\n        }\n    }\n}",
			PYTHON: "def hash_table_operations(operations):\n    # Write your code here\n    \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\noperations = [input_lines[i+1] for i in range(n)]\nresults = hash_table_operations(operations)\nfor result in results:\n    print(result)",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction hashTableOperations(operations) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst operations = input.slice(1, n + 1);\nconst results = hashTableOperations(operations);\nfor (const result of results) {\n    console.log(result);\n}",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        sc.nextLine();\n        Set<Integer> hashTable = new HashSet<>();\n        for (int i = 0; i < n; i++) {\n            String op = sc.nextLine();\n            if (op.startsWith("insert")) {\n                int value = Integer.parseInt(op.split(" ")[1]);\n                hashTable.add(value);\n            } else if (op.startsWith("search")) {\n                int value = Integer.parseInt(op.split(" ")[1]);\n                if (hashTable.contains(value)) {\n                    System.out.println("found");\n                } else {\n                    System.out.println("not found");\n                }\n            }\n        }\n    }\n}',
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nhash_table = set()\nfor i in range(1, n + 1):\n    op = input_lines[i]\n    if op.startswith('insert'):\n        value = int(op.split()[1])\n        hash_table.add(value)\n    elif op.startswith('search'):\n        value = int(op.split()[1])\n        if value in hash_table:\n            print('found')\n        else:\n            print('not found')",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst hashTable = new Set();\nfor (let i = 1; i <= n; i++) {\n    const op = input[i];\n    if (op.startsWith('insert')) {\n        const value = parseInt(op.split(' ')[1]);\n        hashTable.add(value);\n    } else if (op.startsWith('search')) {\n        const value = parseInt(op.split(' ')[1]);\n        if (hashTable.has(value)) {\n            console.log('found');\n        } else {\n            console.log('not found');\n        }\n    }\n}",
		},
		createdAt: "2025-05-25T06:42:32.315Z",
		updatedAt: "2025-05-25T19:21:13.200Z",
		solvedBy: [],
	},
	{
		id: "61d17a12-2c5c-4e95-9d9a-2c7577d6f06f",
		title: "Maximum Subarray",
		description:
			"Given an integer array nums, find the subarray with the largest sum, and return its sum.",
		difficulty: "MEDIUM",
		tags: ["array", "divide-and-conquer", "dynamic programming", "Amazon"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "9\n-2 1 -3 4 -1 2 1 -5 4",
				output: "6",
				explanation: "",
			},
			PYTHON: {
				input: "9\n-2 1 -3 4 -1 2 1 -5 4",
				output: "6",
				explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
			},
			JAVASCRIPT: {
				input: "1\n1",
				output: "1",
				explanation: "The subarray [1] has the largest sum 1.",
			},
		},
		constraints: "1 Γëñ nums.length Γëñ 10^5, -10^4 Γëñ nums[i] Γëñ 10^4",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "9\n-2 1 -3 4 -1 2 1 -5 4",
				output: "6",
			},
			{
				input: "1\n1",
				output: "1",
			},
			{
				input: "5\n5 4 -1 7 8",
				output: "23",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int maxSubArray(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        System.out.println(maxSubArray(nums));\n    }\n}",
			PYTHON: "def max_subarray(nums):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\nprint(max_subarray(nums))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction maxSubArray(nums) {\n    // Write your code here\n    return 0;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconsole.log(maxSubArray(nums));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        \n        int maxSum = nums[0];\n        int currentSum = nums[0];\n        \n        for (int i = 1; i < nums.length; i++) {\n            currentSum = Math.max(nums[i], currentSum + nums[i]);\n            maxSum = Math.max(maxSum, currentSum);\n        }\n        \n        System.out.println(maxSum);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\n\nmax_sum = nums[0]\ncurrent_sum = nums[0]\n\nfor i in range(1, len(nums)):\n    current_sum = max(nums[i], current_sum + nums[i])\n    max_sum = max(max_sum, current_sum)\n\nprint(max_sum)",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\n\nlet maxSum = nums[0];\nlet currentSum = nums[0];\n\nfor (let i = 1; i < nums.length; i++) {\n    currentSum = Math.max(nums[i], currentSum + nums[i]);\n    maxSum = Math.max(maxSum, currentSum);\n}\n\nconsole.log(maxSum);",
		},
		createdAt: "2025-05-24T07:45:29.257Z",
		updatedAt: "2025-05-25T10:10:37.977Z",
		solvedBy: [],
	},
	{
		id: "c30646bc-deff-44d2-9461-c75234a45d45",
		title: "Median of Two Sorted Arrays",
		description:
			"Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two arrays. The overall run time complexity should be O(log (m+n)).",
		difficulty: "HARD",
		tags: ["array", "binary-search", "divide-and-conquer", "Microsoft"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "2\n1 3\n2\n2 4",
				output: "2.5",
				explanation: "",
			},
			PYTHON: {
				input: "2\n1 3\n2\n2 4",
				output: "2.5",
				explanation:
					"The merged array is [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
			},
			JAVASCRIPT: {
				input: "1\n1\n1\n2",
				output: "1.5",
				explanation:
					"The merged array is [1,2] and median is (1 + 2) / 2 = 1.5.",
			},
		},
		constraints:
			"nums1.length == m, nums2.length == n, 0 Γëñ m Γëñ 1000, 0 Γëñ n Γëñ 1000, 1 Γëñ m + n Γëñ 2000, -10^6 Γëñ nums1[i], nums2[i] Γëñ 10^6",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "2\n1 3\n2\n2 4",
				output: "2.5",
			},
			{
				input: "1\n1\n1\n2",
				output: "1.5",
			},
			{
				input: "0\n\n1\n1",
				output: "1.0",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your code here\n        return 0.0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int m = sc.nextInt();\n        int[] nums1 = new int[m];\n        for (int i = 0; i < m; i++) {\n            nums1[i] = sc.nextInt();\n        }\n        int n = sc.nextInt();\n        int[] nums2 = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums2[i] = sc.nextInt();\n        }\n        double result = findMedianSortedArrays(nums1, nums2);\n        System.out.printf("%.1f%n", result);\n    }\n}',
			PYTHON: "def find_median_sorted_arrays(nums1, nums2):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nm = int(input_lines[0])\nnums1 = list(map(int, input_lines[1].split())) if m > 0 else []\nn = int(input_lines[2])\nnums2 = list(map(int, input_lines[3].split())) if n > 0 else []\nresult = find_median_sorted_arrays(nums1, nums2)\nprint(f'{result:.1f}')",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction findMedianSortedArrays(nums1, nums2) {\n    // Write your code here\n    return 0.0;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst m = parseInt(input[0]);\nconst nums1 = m > 0 ? input[1].split(' ').map(Number) : [];\nconst n = parseInt(input[2]);\nconst nums2 = n > 0 ? input[3].split(' ').map(Number) : [];\nconst result = findMedianSortedArrays(nums1, nums2);\nconsole.log(result.toFixed(1));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int m = sc.nextInt();\n        int[] nums1 = new int[m];\n        for (int i = 0; i < m; i++) {\n            nums1[i] = sc.nextInt();\n        }\n        int n = sc.nextInt();\n        int[] nums2 = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums2[i] = sc.nextInt();\n        }\n        \n        if (nums1.length > nums2.length) {\n            int[] temp = nums1;\n            nums1 = nums2;\n            nums2 = temp;\n        }\n        \n        int x = nums1.length;\n        int y = nums2.length;\n        \n        int low = 0;\n        int high = x;\n        \n        while (low <= high) {\n            int cutX = (low + high) / 2;\n            int cutY = (x + y + 1) / 2 - cutX;\n            \n            int maxLeftX = (cutX == 0) ? Integer.MIN_VALUE : nums1[cutX - 1];\n            int maxLeftY = (cutY == 0) ? Integer.MIN_VALUE : nums2[cutY - 1];\n            \n            int minRightX = (cutX == x) ? Integer.MAX_VALUE : nums1[cutX];\n            int minRightY = (cutY == y) ? Integer.MAX_VALUE : nums2[cutY];\n            \n            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n                if ((x + y) % 2 == 0) {\n                    System.out.printf("%.1f%n", (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0);\n                } else {\n                    System.out.printf("%.1f%n", (double) Math.max(maxLeftX, maxLeftY));\n                }\n                return;\n            } else if (maxLeftX > minRightY) {\n                high = cutX - 1;\n            } else {\n                low = cutX + 1;\n            }\n        }\n    }\n}',
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nm = int(input_lines[0])\nnums1 = list(map(int, input_lines[1].split())) if m > 0 else []\nn = int(input_lines[2])\nnums2 = list(map(int, input_lines[3].split())) if n > 0 else []\n\nif len(nums1) > len(nums2):\n    nums1, nums2 = nums2, nums1\n\nm, n = len(nums1), len(nums2)\nimin, imax, half_len = 0, m, (m + n + 1) // 2\n\nwhile imin <= imax:\n    i = (imin + imax) // 2\n    j = half_len - i\n    \n    if i < m and nums2[j-1] > nums1[i]:\n        imin = i + 1\n    elif i > 0 and nums1[i-1] > nums2[j]:\n        imax = i - 1\n    else:\n        if i == 0: max_of_left = nums2[j-1]\n        elif j == 0: max_of_left = nums1[i-1]\n        else: max_of_left = max(nums1[i-1], nums2[j-1])\n        \n        if (m + n) % 2 == 1:\n            print(f'{max_of_left:.1f}')\n            exit()\n        \n        if i == m: min_of_right = nums2[j]\n        elif j == n: min_of_right = nums1[i]\n        else: min_of_right = min(nums1[i], nums2[j])\n        \n        print(f'{(max_of_left + min_of_right) / 2.0:.1f}')\n        exit()",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst m = parseInt(input[0]);\nconst nums1 = m > 0 ? input[1].split(' ').map(Number) : [];\nconst n = parseInt(input[2]);\nconst nums2 = n > 0 ? input[3].split(' ').map(Number) : [];\n\nif (nums1.length > nums2.length) {\n    [nums1, nums2] = [nums2, nums1];\n}\n\nconst x = nums1.length;\nconst y = nums2.length;\n\nlet low = 0;\nlet high = x;\n\nwhile (low <= high) {\n    const cutX = Math.floor((low + high) / 2);\n    const cutY = Math.floor((x + y + 1) / 2) - cutX;\n    \n    const maxLeftX = (cutX === 0) ? -Infinity : nums1[cutX - 1];\n    const maxLeftY = (cutY === 0) ? -Infinity : nums2[cutY - 1];\n    \n    const minRightX = (cutX === x) ? Infinity : nums1[cutX];\n    const minRightY = (cutY === y) ? Infinity : nums2[cutY];\n    \n    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {\n        if ((x + y) % 2 === 0) {\n            console.log(((Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0).toFixed(1));\n        } else {\n            console.log(Math.max(maxLeftX, maxLeftY).toFixed(1));\n        }\n        break;\n    } else if (maxLeftX > minRightY) {\n        high = cutX - 1;\n    } else {\n        low = cutX + 1;\n    }\n}",
		},
		createdAt: "2025-05-24T08:00:21.979Z",
		updatedAt: "2025-05-25T13:37:03.167Z",
		solvedBy: [],
	},
	{
		id: "86220dcc-fbfd-4e1c-8952-9397e803ec18",
		title: "Linked List Length",
		description:
			"Given a linked list represented as an array, return its length.",
		difficulty: "EASY",
		tags: ["linked-list", "traversal", "counting", "Google"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "4\n1 2 3 4",
				output: "4",
				explanation: "",
			},
			PYTHON: {
				input: "4\n1 2 3 4",
				output: "4",
				explanation: "The linked list has 4 nodes.",
			},
			JAVASCRIPT: {
				input: "0",
				output: "0",
				explanation: "Empty linked list has length 0.",
			},
		},
		constraints: "0 Γëñ n Γëñ 10^4",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "3\n5 10 15",
				output: "3",
			},
			{
				input: "1\n100",
				output: "1",
			},
			{
				input: "0",
				output: "0",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.Scanner;\n\npublic class Main {\n    public static int linkedListLength(int[] nodes) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nodes = new int[n];\n        for (int i = 0; i < n; i++) {\n            nodes[i] = sc.nextInt();\n        }\n        System.out.println(linkedListLength(nodes));\n    }\n}",
			PYTHON: "def linked_list_length(nodes):\n    # Write your code here\n   \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nif n == 0:\n    nodes = []\nelse:\n    nodes = list(map(int, input_lines[1].split()))\nprint(linked_list_length(nodes))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction linkedListLength(nodes) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nif (n === 0) {\n    console.log(linkedListLength([]));\n} else {\n    const nodes = input[1].split(' ').map(Number);\n    console.log(linkedListLength(nodes));\n}",
		},
		referenceSolutions: {
			JAVA: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for (int i = 0; i < n; i++) {\n            sc.nextInt();\n        }\n        System.out.println(n);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nprint(n)",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconsole.log(n);",
		},
		createdAt: "2025-05-25T06:39:48.494Z",
		updatedAt: "2025-05-25T19:24:44.456Z",
		solvedBy: [],
	},
	{
		id: "94ba25ee-f53b-437a-8bec-1e2c92f3a7c1",
		title: "Best Time to Buy and Sell Stock",
		description:
			"You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction.",
		difficulty: "EASY",
		tags: ["array", "dynamic programming", "Meta (Facebook)"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "6\n7 1 5 3 6 4",
				output: "5",
				explanation: "",
			},
			PYTHON: {
				input: "6\n7 1 5 3 6 4",
				output: "5",
				explanation:
					"Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
			},
			JAVASCRIPT: {
				input: "5\n7 6 4 3 1",
				output: "0",
				explanation:
					"In this case, no transactions are done and the max profit = 0.",
			},
		},
		constraints: "1 Γëñ prices.length Γëñ 10^5, 0 Γëñ prices[i] Γëñ 10^4",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "6\n7 1 5 3 6 4",
				output: "5",
			},
			{
				input: "5\n7 6 4 3 1",
				output: "0",
			},
			{
				input: "2\n1 2",
				output: "1",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int maxProfit(int[] prices) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] prices = new int[n];\n        for (int i = 0; i < n; i++) {\n            prices[i] = sc.nextInt();\n        }\n        System.out.println(maxProfit(prices));\n    }\n}",
			PYTHON: "def max_profit(prices):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nprices = list(map(int, input_lines[1].split()))\nprint(max_profit(prices))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction maxProfit(prices) {\n    // Write your code here\n    return 0;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst prices = input[1].split(' ').map(Number);\nconsole.log(maxProfit(prices));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] prices = new int[n];\n        for (int i = 0; i < n; i++) {\n            prices[i] = sc.nextInt();\n        }\n        \n        int minPrice = Integer.MAX_VALUE;\n        int maxProfit = 0;\n        \n        for (int price : prices) {\n            if (price < minPrice) {\n                minPrice = price;\n            } else if (price - minPrice > maxProfit) {\n                maxProfit = price - minPrice;\n            }\n        }\n        \n        System.out.println(maxProfit);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nprices = list(map(int, input_lines[1].split()))\n\nmin_price = float('inf')\nmax_profit = 0\n\nfor price in prices:\n    if price < min_price:\n        min_price = price\n    elif price - min_price > max_profit:\n        max_profit = price - min_price\n\nprint(max_profit)",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst prices = input[1].split(' ').map(Number);\n\nlet minPrice = Infinity;\nlet maxProfit = 0;\n\nfor (const price of prices) {\n    if (price < minPrice) {\n        minPrice = price;\n    } else if (price - minPrice > maxProfit) {\n        maxProfit = price - minPrice;\n    }\n}\n\nconsole.log(maxProfit);",
		},
		createdAt: "2025-05-24T07:51:08.130Z",
		updatedAt: "2025-05-25T10:15:05.194Z",
		solvedBy: [],
	},
	{
		id: "85c41ff4-e1f5-492b-a15b-64580f46c9ea",
		title: "Search in Rotated Sorted Array",
		description:
			"There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
		difficulty: "MEDIUM",
		tags: ["array", "binary-search", "Meta (Facebook)"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "7\n4 5 6 7 0 1 2\n0",
				output: "4",
				explanation: "",
			},
			PYTHON: {
				input: "7\n4 5 6 7 0 1 2\n0",
				output: "4",
				explanation: "The target 0 is found at index 4.",
			},
			JAVASCRIPT: {
				input: "7\n4 5 6 7 0 1 2\n3",
				output: "-1",
				explanation: "The target 3 is not found in the array.",
			},
		},
		constraints:
			"1 Γëñ nums.length Γëñ 5000, -10^4 Γëñ nums[i] Γëñ 10^4, All values of nums are unique, -10^4 Γëñ target Γëñ 10^4",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "7\n4 5 6 7 0 1 2\n0",
				output: "4",
			},
			{
				input: "7\n4 5 6 7 0 1 2\n3",
				output: "-1",
			},
			{
				input: "1\n1\n0",
				output: "-1",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int search(int[] nums, int target) {\n        // Write your code here\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        int target = sc.nextInt();\n        System.out.println(search(nums, target));\n    }\n}",
			PYTHON: "def search(nums, target):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\ntarget = int(input_lines[2])\nprint(search(nums, target))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction search(nums, target) {\n    // Write your code here\n    return -1;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconst target = parseInt(input[2]);\nconsole.log(search(nums, target));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) {\n            nums[i] = sc.nextInt();\n        }\n        int target = sc.nextInt();\n        \n        int left = 0, right = nums.length - 1;\n        \n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            \n            if (nums[mid] == target) {\n                System.out.println(mid);\n                return;\n            }\n            \n            // Left half is sorted\n            if (nums[left] <= nums[mid]) {\n                if (nums[left] <= target && target < nums[mid]) {\n                    right = mid - 1;\n                } else {\n                    left = mid + 1;\n                }\n            }\n            // Right half is sorted\n            else {\n                if (nums[mid] < target && target <= nums[right]) {\n                    left = mid + 1;\n                } else {\n                    right = mid - 1;\n                }\n            }\n        }\n        \n        System.out.println(-1);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nnums = list(map(int, input_lines[1].split()))\ntarget = int(input_lines[2])\n\nleft, right = 0, len(nums) - 1\n\nwhile left <= right:\n    mid = (left + right) // 2\n    \n    if nums[mid] == target:\n        print(mid)\n        exit()\n    \n    # Left half is sorted\n    if nums[left] <= nums[mid]:\n        if nums[left] <= target < nums[mid]:\n            right = mid - 1\n        else:\n            left = mid + 1\n    # Right half is sorted\n    else:\n        if nums[mid] < target <= nums[right]:\n            left = mid + 1\n        else:\n            right = mid - 1\n\nprint(-1)",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst nums = input[1].split(' ').map(Number);\nconst target = parseInt(input[2]);\n\nlet left = 0, right = nums.length - 1;\n\nwhile (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    \n    if (nums[mid] === target) {\n        console.log(mid);\n        process.exit();\n    }\n    \n    // Left half is sorted\n    if (nums[left] <= nums[mid]) {\n        if (nums[left] <= target && target < nums[mid]) {\n            right = mid - 1;\n        } else {\n            left = mid + 1;\n        }\n    }\n    // Right half is sorted\n    else {\n        if (nums[mid] < target && target <= nums[right]) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n}\n\nconsole.log(-1);",
		},
		createdAt: "2025-05-24T07:55:50.207Z",
		updatedAt: "2025-05-25T13:30:00.483Z",
		solvedBy: [],
	},
	{
		id: "30dda26e-eb89-4a6d-a4ba-c4da0167c22d",
		title: "Number of Islands",
		description:
			"Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
		difficulty: "MEDIUM",
		tags: [
			"array",
			"depth-first-search",
			"breadth-first-search",
			"union-find",
			"matrix",
			"Google",
		],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "4 5\n11110\n11010\n11000\n00000",
				output: "1",
				explanation: "",
			},
			PYTHON: {
				input: "4 5\n11110\n11010\n11000\n00000",
				output: "1",
				explanation: "There is 1 island in the grid.",
			},
			JAVASCRIPT: {
				input: "4 5\n11000\n11000\n00100\n00011",
				output: "3",
				explanation: "There are 3 islands in the grid.",
			},
		},
		constraints:
			"m == grid.length, n == grid[i].length, 1 Γëñ m, n Γëñ 300, grid[i][j] is '0' or '1'",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "4 5\n11110\n11010\n11000\n00000",
				output: "1",
			},
			{
				input: "4 5\n11000\n11000\n00100\n00011",
				output: "3",
			},
			{
				input: "1 1\n1",
				output: "1",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int numIslands(char[][] grid) {\n        // Write your code here\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int m = sc.nextInt();\n        int n = sc.nextInt();\n        sc.nextLine();\n        char[][] grid = new char[m][n];\n        for (int i = 0; i < m; i++) {\n            String row = sc.nextLine();\n            grid[i] = row.toCharArray();\n        }\n        System.out.println(numIslands(grid));\n    }\n}",
			PYTHON: "def num_islands(grid):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nm, n = map(int, input_lines[0].split())\ngrid = []\nfor i in range(1, m + 1):\n    grid.append(list(input_lines[i]))\nprint(num_islands(grid))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction numIslands(grid) {\n    // Write your code here\n    return 0;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [m, n] = input[0].split(' ').map(Number);\nconst grid = [];\nfor (let i = 1; i <= m; i++) {\n    grid.push(input[i].split(''));\n}\nconsole.log(numIslands(grid));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int m = sc.nextInt();\n        int n = sc.nextInt();\n        sc.nextLine();\n        char[][] grid = new char[m][n];\n        for (int i = 0; i < m; i++) {\n            String row = sc.nextLine();\n            grid[i] = row.toCharArray();\n        }\n        \n        int count = 0;\n        for (int i = 0; i < grid.length; i++) {\n            for (int j = 0; j < grid[0].length; j++) {\n                if (grid[i][j] == '1') {\n                    dfs(grid, i, j);\n                    count++;\n                }\n            }\n        }\n        \n        System.out.println(count);\n    }\n    \n    private static void dfs(char[][] grid, int i, int j) {\n        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') {\n            return;\n        }\n        \n        grid[i][j] = '0';\n        \n        dfs(grid, i + 1, j);\n        dfs(grid, i - 1, j);\n        dfs(grid, i, j + 1);\n        dfs(grid, i, j - 1);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nm, n = map(int, input_lines[0].split())\ngrid = []\nfor i in range(1, m + 1):\n    grid.append(list(input_lines[i]))\n\ndef dfs(grid, i, j):\n    if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == '0':\n        return\n    \n    grid[i][j] = '0'  # Mark as visited\n    \n    # Visit all 4 directions\n    dfs(grid, i + 1, j)\n    dfs(grid, i - 1, j)\n    dfs(grid, i, j + 1)\n    dfs(grid, i, j - 1)\n\ncount = 0\nfor i in range(len(grid)):\n    for j in range(len(grid[0])):\n        if grid[i][j] == '1':\n            dfs(grid, i, j)\n            count += 1\n\nprint(count)",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [m, n] = input[0].split(' ').map(Number);\nconst grid = [];\nfor (let i = 1; i <= m; i++) {\n    grid.push(input[i].split(''));\n}\n\nfunction dfs(grid, i, j) {\n    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {\n        return;\n    }\n    \n    grid[i][j] = '0';\n    \n    dfs(grid, i + 1, j);\n    dfs(grid, i - 1, j);\n    dfs(grid, i, j + 1);\n    dfs(grid, i, j - 1);\n}\n\nlet count = 0;\nfor (let i = 0; i < grid.length; i++) {\n    for (let j = 0; j < grid[0].length; j++) {\n        if (grid[i][j] === '1') {\n            dfs(grid, i, j);\n            count++;\n        }\n    }\n}\n\nconsole.log(count);",
		},
		createdAt: "2025-05-24T07:57:07.781Z",
		updatedAt: "2025-05-25T13:33:54.088Z",
		solvedBy: [],
	},
	{
		id: "68d89b38-f3d6-425f-8e69-2c6093f4c0fb",
		title: "Palindrome Number",
		description:
			"Given an integer x, return true if x is a palindrome, and false otherwise.",
		difficulty: "EASY",
		tags: ["math", "Meta (Facebook)"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "121",
				output: "true",
				explanation: "",
			},
			PYTHON: {
				input: "121",
				output: "true",
				explanation: "121 reads the same backward as forward.",
			},
			JAVASCRIPT: {
				input: "-121",
				output: "false",
				explanation:
					"From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
			},
		},
		constraints: "-2^31 Γëñ x Γëñ 2^31 - 1",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "121",
				output: "true",
			},
			{
				input: "-121",
				output: "false",
			},
			{
				input: "10",
				output: "false",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static boolean isPalindrome(int x) {\n        // Write your code here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int x = sc.nextInt();\n        System.out.println(isPalindrome(x) ? "true" : "false");\n    }\n}',
			PYTHON: "def is_palindrome(x):\n    # Write your code here\n    pass\n\nimport sys\nx = int(sys.stdin.read().strip())\nprint('true' if is_palindrome(x) else 'false')",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction isPalindrome(x) {\n    // Write your code here\n    return false;\n}\n\nconst input = parseInt(fs.readFileSync(0, 'utf-8').trim());\nconsole.log(isPalindrome(input) ? 'true' : 'false');",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int x = sc.nextInt();\n        \n        if (x < 0) {\n            System.out.println("false");\n            return;\n        }\n        \n        int original = x;\n        int reversed = 0;\n        \n        while (x > 0) {\n            reversed = reversed * 10 + x % 10;\n            x /= 10;\n        }\n        \n        System.out.println(original == reversed ? "true" : "false");\n    }\n}',
			PYTHON: "import sys\nx = int(sys.stdin.read().strip())\n\nif x < 0:\n    print('false')\nelse:\n    original = x\n    reversed_num = 0\n    \n    while x > 0:\n        reversed_num = reversed_num * 10 + x % 10\n        x //= 10\n    \n    print('true' if original == reversed_num else 'false')",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = parseInt(fs.readFileSync(0, 'utf-8').trim());\n\nif (input < 0) {\n    console.log('false');\n} else {\n    let x = input;\n    let reversed = 0;\n    \n    while (x > 0) {\n        reversed = reversed * 10 + x % 10;\n        x = Math.floor(x / 10);\n    }\n    \n    console.log(input === reversed ? 'true' : 'false');\n}",
		},
		createdAt: "2025-05-24T08:55:45.963Z",
		updatedAt: "2025-05-25T13:41:49.906Z",
		solvedBy: [],
	},
	{
		id: "df4ecc01-0776-4551-9a01-ee03f5086667",
		title: "Array Sum",
		description:
			"Given an array of integers, return the sum of all elements.",
		difficulty: "EASY",
		tags: ["array", "math", "iteration", "Microsoft"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "5\n1 2 3 4 5",
				output: "15",
				explanation: "",
			},
			PYTHON: {
				input: "5\n1 2 3 4 5",
				output: "15",
				explanation: "Sum of [1,2,3,4,5] is 15.",
			},
			JAVASCRIPT: {
				input: "3\n-1 0 1",
				output: "0",
				explanation: "Sum of [-1,0,1] is 0.",
			},
		},
		constraints: "1 Γëñ n Γëñ 10^5, -10^6 Γëñ arr[i] Γëñ 10^6",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "4\n10 20 30 40",
				output: "100",
			},
			{
				input: "2\n-5 5",
				output: "0",
			},
			{
				input: "1\n42",
				output: "42",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.Scanner;\n\npublic class Main {\n    public static int arraySum(int[] arr) {\n        // Write your code here\n        \n        return ;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n        System.out.println(arraySum(arr));\n    }\n}",
			PYTHON: "def array_sum(arr):\n    # Write your code here\n    return\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\narr = list(map(int, input_lines[1].split()))\nprint(array_sum(arr))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction arraySum(arr) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst arr = input[1].split(' ').map(Number);\nconsole.log(arraySum(arr));",
		},
		referenceSolutions: {
			JAVA: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sum = 0;\n        for (int i = 0; i < n; i++) {\n            sum += sc.nextInt();\n        }\n        System.out.println(sum);\n    }\n}",
			PYTHON: "import sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\narr = list(map(int, input_lines[1].split()))\nprint(sum(arr))",
			JAVASCRIPT:
				"const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst arr = input[1].split(' ').map(Number);\nconsole.log(arr.reduce((sum, num) => sum + num, 0));",
		},
		createdAt: "2025-05-25T06:39:03.766Z",
		updatedAt: "2025-05-25T19:23:58.031Z",
		solvedBy: [],
	},
	{
		id: "949acb7b-433a-46c9-b711-af42f749226d",
		title: "Binary Search Implementation",
		description:
			"Implement binary search algorithm to find target element in sorted array. Return index if found, -1 otherwise.",
		difficulty: "EASY",
		tags: ["binary-search", "array", "search", "Google"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "5\n1 3 5 7 9\n5",
				output: "2",
				explanation: "Element 5 is at index 2",
			},
			PYTHON: {
				input: "5\n1 3 5 7 9\n5",
				output: "2",
				explanation: "Element 5 is at index 2",
			},
			JAVASCRIPT: {
				input: "5\n1 3 5 7 9\n5",
				output: "2",
				explanation: "Element 5 is at index 2",
			},
		},
		constraints: "1 ≤ n ≤ 10^5, 1 ≤ elements ≤ 10^9",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "5\n1 2 3 4 5\n3",
				output: "2",
			},
			{
				input: "4\n10 20 30 40\n25",
				output: "-1",
			},
			{
				input: "1\n42\n42",
				output: "0",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int binarySearch(int[] arr, int target) {\n        // Write your code here\n\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n\n        int target = sc.nextInt();\n        System.out.println(binarySearch(arr, target));\n    }\n}\n",
			PYTHON: "def binary_search(arr, target):\n    # Write your code here\n    pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\narr = list(map(int, input_lines[1].split()))\ntarget = int(input_lines[2])\n\nprint(binary_search(arr, target))\n",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction binarySearch(arr, target) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst arr = input[1].split(' ').map(Number);\nconst target = parseInt(input[2]);\n\nconsole.log(binarySearch(arr, target));\n",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\r\n\r\npublic class Main {\r\n    public static int binarySearch(int[] arr, int target) {\r\n        int left = 0, right = arr.length - 1;\r\n        while (left <= right) {\r\n            int mid = left + (right - left) / 2;\r\n            if (arr[mid] == target) return mid;\r\n            if (arr[mid] < target) left = mid + 1;\r\n            else right = mid - 1;\r\n        }\r\n        return -1;\r\n    }\r\n\r\n    public static void main(String[] args) {\r\n        Scanner sc = new Scanner(System.in);\r\n        int n = sc.nextInt();\r\n        int[] arr = new int[n];\r\n        for (int i = 0; i < n; i++) {\r\n            arr[i] = sc.nextInt();\r\n        }\r\n        int target = sc.nextInt();\r\n        System.out.println(binarySearch(arr, target));\r\n    }\r\n}\r\n",
			PYTHON: "def binary_search(arr, target):\r\n    left, right = 0, len(arr) - 1\r\n    while left <= right:\r\n        mid = (left + right) // 2\r\n        if arr[mid] == target:\r\n            return mid\r\n        elif arr[mid] < target:\r\n            left = mid + 1\r\n        else:\r\n            right = mid - 1\r\n    return -1\r\n\r\nimport sys\r\ninput_lines = sys.stdin.read().strip().split('\\n')\r\nn = int(input_lines[0])\r\narr = list(map(int, input_lines[1].split()))\r\ntarget = int(input_lines[2])\r\nprint(binary_search(arr, target))\r\n",
			JAVASCRIPT:
				"const fs = require('fs');\r\n\r\nfunction binarySearch(arr, target) {\r\n    let left = 0, right = arr.length - 1;\r\n    while (left <= right) {\r\n        const mid = Math.floor((left + right) / 2);\r\n        if (arr[mid] === target) return mid;\r\n        if (arr[mid] < target) left = mid + 1;\r\n        else right = mid - 1;\r\n    }\r\n    return -1;\r\n}\r\n\r\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\r\nconst n = parseInt(input[0]);\r\nconst arr = input[1].split(' ').map(Number);\r\nconst target = parseInt(input[2]);\r\n\r\nconsole.log(binarySearch(arr, target));\r\n",
		},
		createdAt: "2025-06-05T14:53:25.749Z",
		updatedAt: "2025-06-05T14:53:25.749Z",
		solvedBy: [],
	},
	{
		id: "09ef4528-04eb-4805-aca5-dcee6a9f8c2d",
		title: "Queue Implementation",
		description:
			"Implement a queue using array with enqueue, dequeue operations. Return final queue state.",
		difficulty: "EASY",
		tags: ["queue", "data-structure", "array", "Amazon"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "4\nenqueue 10\nenqueue 20\ndequeue\nenqueue 30",
				output: "20 30",
				explanation: "Final queue contains 20 and 30",
			},
			PYTHON: {
				input: "3\nenqueue 5\ndequeue\nenqueue 15",
				output: "15",
				explanation: "Final queue contains only 15",
			},
			JAVASCRIPT: {
				input: "2\nenqueue 100\ndequeue",
				output: "",
				explanation: "Queue is empty",
			},
		},
		constraints: "1 ≤ n ≤ 1000, 1 ≤ values ≤ 10^6",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "5\nenqueue 1\nenqueue 2\ndequeue\nenqueue 3\ndequeue",
				output: "3",
			},
			{
				input: "2\nenqueue 50\nenqueue 60",
				output: "50 60",
			},
			{
				input: "1\ndequeue",
				output: "",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static String queueOperations(String[] operations) {\n        // Write your code here\n        \n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        sc.nextLine();\n        String[] operations = new String[n];\n        for (int i = 0; i < n; i++) {\n            operations[i] = sc.nextLine();\n        }\n        System.out.println(queueOperations(operations));\n    }\n}',
			PYTHON: "def queue_operations(operations):\n    # Write your code here\n    \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\noperations = [input_lines[i+1] for i in range(n)]\nprint(queue_operations(operations))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction queueOperations(operations) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst operations = input.slice(1, n + 1);\nconsole.log(queueOperations(operations));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static String queueOperations(String[] operations) {\n        Queue<Integer> queue = new LinkedList<>();\n        for (String op : operations) {\n            if (op.startsWith("enqueue")) {\n                int value = Integer.parseInt(op.split(" ")[1]);\n                queue.offer(value);\n            } else if (op.equals("dequeue") && !queue.isEmpty()) {\n                queue.poll();\n            }\n        }\n        if (queue.isEmpty()) return "";\n        StringBuilder sb = new StringBuilder();\n        while (!queue.isEmpty()) {\n            sb.append(queue.poll());\n            if (!queue.isEmpty()) sb.append(" ");\n        }\n        return sb.toString();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        sc.nextLine();\n        String[] operations = new String[n];\n        for (int i = 0; i < n; i++) {\n            operations[i] = sc.nextLine();\n        }\n        System.out.println(queueOperations(operations));\n    }\n}',
			PYTHON: "from collections import deque\n\ndef queue_operations(operations):\n    queue = deque()\n    for op in operations:\n        if op.startswith('enqueue'):\n            value = int(op.split()[1])\n            queue.append(value)\n        elif op == 'dequeue' and queue:\n            queue.popleft()\n    return ' '.join(map(str, queue)) if queue else ''\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\noperations = [input_lines[i+1] for i in range(n)]\nprint(queue_operations(operations))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction queueOperations(operations) {\n    const queue = [];\n    for (const op of operations) {\n        if (op.startsWith('enqueue')) {\n            const value = parseInt(op.split(' ')[1]);\n            queue.push(value);\n        } else if (op === 'dequeue' && queue.length > 0) {\n            queue.shift();\n        }\n    }\n    return queue.join(' ');\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst operations = input.slice(1, n + 1);\nconsole.log(queueOperations(operations));",
		},
		createdAt: "2025-06-05T18:17:46.326Z",
		updatedAt: "2025-06-05T18:17:46.326Z",
		solvedBy: [],
	},
	{
		id: "663b588b-c744-4ed1-856f-3e0c3768f29d",
		title: "Merge Two Sorted Arrays",
		description:
			"Given two sorted arrays, merge them into one sorted array without using extra space.",
		difficulty: "MEDIUM",
		tags: ["array", "sorting", "merge", "Microsoft"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "3 4\n1 3 5\n2 4 6 8",
				output: "1 2 3 4 5 6 8",
				explanation: "Merged sorted array",
			},
			PYTHON: {
				input: "2 3\n1 4\n2 3 5",
				output: "1 2 3 4 5",
				explanation: "Merged sorted array",
			},
			JAVASCRIPT: {
				input: "1 2\n10\n5 15",
				output: "5 10 15",
				explanation: "Merged sorted array",
			},
		},
		constraints: "1 ≤ m,n ≤ 10^5, 1 ≤ elements ≤ 10^9",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "3 3\n1 3 5\n2 4 6",
				output: "1 2 3 4 5 6",
			},
			{
				input: "2 1\n7 9\n8",
				output: "7 8 9",
			},
			{
				input: "1 1\n1\n2",
				output: "1 2",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static int[] mergeSortedArrays(int[] arr1, int[] arr2) {\n        // Write your code here\n        \n        return new int[0];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int m = sc.nextInt();\n        int n = sc.nextInt();\n        int[] arr1 = new int[m];\n        int[] arr2 = new int[n];\n        for (int i = 0; i < m; i++) arr1[i] = sc.nextInt();\n        for (int i = 0; i < n; i++) arr2[i] = sc.nextInt();\n        int[] result = mergeSortedArrays(arr1, arr2);\n        for (int i = 0; i < result.length; i++) {\n            System.out.print(result[i]);\n            if (i < result.length - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "def merge_sorted_arrays(arr1, arr2):\n    # Write your code here\n    \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nm, n = map(int, input_lines[0].split())\narr1 = list(map(int, input_lines[1].split()))\narr2 = list(map(int, input_lines[2].split()))\nresult = merge_sorted_arrays(arr1, arr2)\nprint(' '.join(map(str, result)))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction mergeSortedArrays(arr1, arr2) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [m, n] = input[0].split(' ').map(Number);\nconst arr1 = input[1].split(' ').map(Number);\nconst arr2 = input[2].split(' ').map(Number);\nconst result = mergeSortedArrays(arr1, arr2);\nconsole.log(result.join(' '));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static int[] mergeSortedArrays(int[] arr1, int[] arr2) {\n        int[] result = new int[arr1.length + arr2.length];\n        int i = 0, j = 0, k = 0;\n        while (i < arr1.length && j < arr2.length) {\n            if (arr1[i] <= arr2[j]) {\n                result[k++] = arr1[i++];\n            } else {\n                result[k++] = arr2[j++];\n            }\n        }\n        while (i < arr1.length) result[k++] = arr1[i++];\n        while (j < arr2.length) result[k++] = arr2[j++];\n        return result;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int m = sc.nextInt();\n        int n = sc.nextInt();\n        int[] arr1 = new int[m];\n        int[] arr2 = new int[n];\n        for (int i = 0; i < m; i++) arr1[i] = sc.nextInt();\n        for (int i = 0; i < n; i++) arr2[i] = sc.nextInt();\n        int[] result = mergeSortedArrays(arr1, arr2);\n        for (int i = 0; i < result.length; i++) {\n            System.out.print(result[i]);\n            if (i < result.length - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "def merge_sorted_arrays(arr1, arr2):\n    result = []\n    i = j = 0\n    while i < len(arr1) and j < len(arr2):\n        if arr1[i] <= arr2[j]:\n            result.append(arr1[i])\n            i += 1\n        else:\n            result.append(arr2[j])\n            j += 1\n    result.extend(arr1[i:])\n    result.extend(arr2[j:])\n    return result\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nm, n = map(int, input_lines[0].split())\narr1 = list(map(int, input_lines[1].split()))\narr2 = list(map(int, input_lines[2].split()))\nresult = merge_sorted_arrays(arr1, arr2)\nprint(' '.join(map(str, result)))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction mergeSortedArrays(arr1, arr2) {\n    const result = [];\n    let i = 0, j = 0;\n    while (i < arr1.length && j < arr2.length) {\n        if (arr1[i] <= arr2[j]) {\n            result.push(arr1[i++]);\n        } else {\n            result.push(arr2[j++]);\n        }\n    }\n    while (i < arr1.length) result.push(arr1[i++]);\n    while (j < arr2.length) result.push(arr2[j++]);\n    return result;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [m, n] = input[0].split(' ').map(Number);\nconst arr1 = input[1].split(' ').map(Number);\nconst arr2 = input[2].split(' ').map(Number);\nconst result = mergeSortedArrays(arr1, arr2);\nconsole.log(result.join(' '));",
		},
		createdAt: "2025-06-05T18:19:43.166Z",
		updatedAt: "2025-06-05T18:19:43.166Z",
		solvedBy: [],
	},
	{
		id: "62b4a820-5e27-4576-b2fa-0520c9bbbaf5",
		title: "Factorial Calculation",
		description:
			"Calculate factorial of a given number n. Return the factorial value.",
		difficulty: "EASY",
		tags: ["math", "recursion", "basic", "Apple"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "5",
				output: "120",
				explanation: "5! = 5 * 4 * 3 * 2 * 1 = 120",
			},
			PYTHON: {
				input: "4",
				output: "24",
				explanation: "4! = 4 * 3 * 2 * 1 = 24",
			},
			JAVASCRIPT: {
				input: "0",
				output: "1",
				explanation: "0! = 1 by definition",
			},
		},
		constraints: "0 ≤ n ≤ 20",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "3",
				output: "6",
			},
			{
				input: "1",
				output: "1",
			},
			{
				input: "6",
				output: "720",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static long factorial(int n) {\n        // Write your code here\n        \n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(factorial(n));\n    }\n}",
			PYTHON: "def factorial(n):\n    # Write your code here\n    \n\nn = int(input())\nprint(factorial(n))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction factorial(n) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input);\nconsole.log(factorial(n));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static long factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(factorial(n));\n    }\n}",
			PYTHON: "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nn = int(input())\nprint(factorial(n))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction factorial(n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input);\nconsole.log(factorial(n));",
		},
		createdAt: "2025-06-05T18:20:34.631Z",
		updatedAt: "2025-06-05T18:20:34.631Z",
		solvedBy: [],
	},
	{
		id: "47b9b246-b719-4567-8670-1d38e89e4aa0",
		title: "String Reverse",
		description:
			"Reverse a given string without using built-in reverse functions.",
		difficulty: "EASY",
		tags: ["string", "two-pointers", "basic", "IBM"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "hello",
				output: "olleh",
				explanation: "Reversed string",
			},
			PYTHON: {
				input: "world",
				output: "dlrow",
				explanation: "Reversed string",
			},
			JAVASCRIPT: {
				input: "abc",
				output: "cba",
				explanation: "Reversed string",
			},
		},
		constraints: "1 ≤ length ≤ 10^5",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "programming",
				output: "gnimmargorp",
			},
			{
				input: "a",
				output: "a",
			},
			{
				input: "12345",
				output: "54321",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static String reverseString(String s) {\n        // Write your code here\n        \n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(reverseString(s));\n    }\n}',
			PYTHON: "def reverse_string(s):\n    # Write your code here\n    \n\ns = input().strip()\nprint(reverse_string(s))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction reverseString(s) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconsole.log(reverseString(input));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static String reverseString(String s) {\n        char[] chars = s.toCharArray();\n        int left = 0, right = chars.length - 1;\n        while (left < right) {\n            char temp = chars[left];\n            chars[left] = chars[right];\n            chars[right] = temp;\n            left++;\n            right--;\n        }\n        return new String(chars);\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(reverseString(s));\n    }\n}",
			PYTHON: "def reverse_string(s):\n    chars = list(s)\n    left, right = 0, len(chars) - 1\n    while left < right:\n        chars[left], chars[right] = chars[right], chars[left]\n        left += 1\n        right -= 1\n    return ''.join(chars)\n\ns = input().strip()\nprint(reverse_string(s))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction reverseString(s) {\n    const chars = s.split('');\n    let left = 0, right = chars.length - 1;\n    while (left < right) {\n        [chars[left], chars[right]] = [chars[right], chars[left]];\n        left++;\n        right--;\n    }\n    return chars.join('');\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconsole.log(reverseString(input));",
		},
		createdAt: "2025-06-05T18:22:47.602Z",
		updatedAt: "2025-06-05T18:22:47.602Z",
		solvedBy: [],
	},
	{
		id: "8cc9013e-5dd2-4beb-91a6-d14945221bab",
		title: "Fibonacci Sequence",
		description: "Generate the first n numbers of the Fibonacci sequence.",
		difficulty: "EASY",
		tags: ["fibonacci", "dynamic-programming", "sequence", "Tesla"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "5",
				output: "0 1 1 2 3",
				explanation: "First 5 Fibonacci numbers",
			},
			PYTHON: {
				input: "7",
				output: "0 1 1 2 3 5 8",
				explanation: "First 7 Fibonacci numbers",
			},
			JAVASCRIPT: {
				input: "3",
				output: "0 1 1",
				explanation: "First 3 Fibonacci numbers",
			},
		},
		constraints: "1 ≤ n ≤ 50",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "1",
				output: "0",
			},
			{
				input: "2",
				output: "0 1",
			},
			{
				input: "10",
				output: "0 1 1 2 3 5 8 13 21 34",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static String fibonacci(int n) {\n        // Write your code here\n        \n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(fibonacci(n));\n    }\n}',
			PYTHON: "def fibonacci(n):\n    # Write your code here\n    \n\nn = int(input())\nprint(fibonacci(n))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction fibonacci(n) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input);\nconsole.log(fibonacci(n));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static String fibonacci(int n) {\n        if (n <= 0) return "";\n        if (n == 1) return "0";\n        \n        StringBuilder sb = new StringBuilder();\n        long a = 0, b = 1;\n        sb.append(a);\n        if (n > 1) sb.append(" ").append(b);\n        \n        for (int i = 2; i < n; i++) {\n            long c = a + b;\n            sb.append(" ").append(c);\n            a = b;\n            b = c;\n        }\n        return sb.toString();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(fibonacci(n));\n    }\n}',
			PYTHON: "def fibonacci(n):\n    if n <= 0:\n        return ''\n    if n == 1:\n        return '0'\n    \n    result = [0, 1]\n    for i in range(2, n):\n        result.append(result[i-1] + result[i-2])\n    \n    return ' '.join(map(str, result))\n\nn = int(input())\nprint(fibonacci(n))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction fibonacci(n) {\n    if (n <= 0) return '';\n    if (n === 1) return '0';\n    \n    const result = [0, 1];\n    for (let i = 2; i < n; i++) {\n        result.push(result[i-1] + result[i-2]);\n    }\n    \n    return result.join(' ');\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input);\nconsole.log(fibonacci(n));",
		},
		createdAt: "2025-06-05T18:26:00.069Z",
		updatedAt: "2025-06-05T18:26:00.069Z",
		solvedBy: [],
	},
	{
		id: "558c395b-3b7b-4b1b-bbd7-db0b9a81cfff",
		title: "Check Prime Number",
		description:
			"Check if a given number is prime. Return 'YES' if prime, 'NO' otherwise.",
		difficulty: "EASY",
		tags: ["math", "prime", "number-theory", "Adobe"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "17",
				output: "YES",
				explanation: "17 is a prime number",
			},
			PYTHON: {
				input: "4",
				output: "NO",
				explanation: "4 is not prime (divisible by 2)",
			},
			JAVASCRIPT: {
				input: "2",
				output: "YES",
				explanation: "2 is the smallest prime number",
			},
		},
		constraints: "1 ≤ n ≤ 10^6",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "1",
				output: "NO",
			},
			{
				input: "29",
				output: "YES",
			},
			{
				input: "100",
				output: "NO",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static String isPrime(int n) {\n        // Write your code here\n        \n        return "NO";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(isPrime(n));\n    }\n}',
			PYTHON: "def is_prime(n):\n    # Write your code here\n    \n\nn = int(input())\nprint(is_prime(n))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction isPrime(n) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input);\nconsole.log(isPrime(n));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static String isPrime(int n) {\n        if (n <= 1) return "NO";\n        if (n <= 3) return "YES";\n        if (n % 2 == 0 || n % 3 == 0) return "NO";\n        \n        for (int i = 5; i * i <= n; i += 6) {\n            if (n % i == 0 || n % (i + 2) == 0) {\n                return "NO";\n            }\n        }\n        return "YES";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(isPrime(n));\n    }\n}',
			PYTHON: "def is_prime(n):\n    if n <= 1:\n        return 'NO'\n    if n <= 3:\n        return 'YES'\n    if n % 2 == 0 or n % 3 == 0:\n        return 'NO'\n    \n    i = 5\n    while i * i <= n:\n        if n % i == 0 or n % (i + 2) == 0:\n            return 'NO'\n        i += 6\n    return 'YES'\n\nn = int(input())\nprint(is_prime(n))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction isPrime(n) {\n    if (n <= 1) return 'NO';\n    if (n <= 3) return 'YES';\n    if (n % 2 === 0 || n % 3 === 0) return 'NO';\n    \n    for (let i = 5; i * i <= n; i += 6) {\n        if (n % i === 0 || n % (i + 2) === 0) {\n            return 'NO';\n        }\n    }\n    return 'YES';\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input);\nconsole.log(isPrime(n));",
		},
		createdAt: "2025-06-05T18:27:18.814Z",
		updatedAt: "2025-06-05T18:27:18.814Z",
		solvedBy: [],
	},
	{
		id: "c12cb231-a07f-4954-b7a7-dc0d1f17eed1",
		title: "N-Queens Problem",
		description:
			"Place N queens on an N×N chessboard such that no two queens attack each other. Return the number of distinct solutions.",
		difficulty: "HARD",
		tags: ["backtracking", "recursion", "chess", "Google"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "4",
				output: "2",
				explanation:
					"There are 2 distinct solutions for 4-queens problem",
			},
			PYTHON: {
				input: "8",
				output: "92",
				explanation:
					"There are 92 distinct solutions for 8-queens problem",
			},
			JAVASCRIPT: {
				input: "1",
				output: "1",
				explanation: "Only one solution for 1-queen problem",
			},
		},
		constraints: "1 ≤ n ≤ 15",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "2",
				output: "0",
			},
			{
				input: "3",
				output: "0",
			},
			{
				input: "5",
				output: "10",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int solveNQueens(int n) {\n        // Write your code here\n        \n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(solveNQueens(n));\n    }\n}",
			PYTHON: "def solve_n_queens(n):\n    # Write your code here\n    \n\nn = int(input())\nprint(solve_n_queens(n))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction solveNQueens(n) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input);\nconsole.log(solveNQueens(n));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    private static int count = 0;\n    \n    public static int solveNQueens(int n) {\n        count = 0;\n        boolean[] cols = new boolean[n];\n        boolean[] diag1 = new boolean[2 * n - 1];\n        boolean[] diag2 = new boolean[2 * n - 1];\n        backtrack(0, n, cols, diag1, diag2);\n        return count;\n    }\n    \n    private static void backtrack(int row, int n, boolean[] cols, boolean[] diag1, boolean[] diag2) {\n        if (row == n) {\n            count++;\n            return;\n        }\n        for (int col = 0; col < n; col++) {\n            if (!cols[col] && !diag1[row + col] && !diag2[row - col + n - 1]) {\n                cols[col] = diag1[row + col] = diag2[row - col + n - 1] = true;\n                backtrack(row + 1, n, cols, diag1, diag2);\n                cols[col] = diag1[row + col] = diag2[row - col + n - 1] = false;\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(solveNQueens(n));\n    }\n}",
			PYTHON: "def solve_n_queens(n):\n    def backtrack(row, cols, diag1, diag2):\n        if row == n:\n            return 1\n        count = 0\n        for col in range(n):\n            if col not in cols and (row + col) not in diag1 and (row - col) not in diag2:\n                cols.add(col)\n                diag1.add(row + col)\n                diag2.add(row - col)\n                count += backtrack(row + 1, cols, diag1, diag2)\n                cols.remove(col)\n                diag1.remove(row + col)\n                diag2.remove(row - col)\n        return count\n    \n    return backtrack(0, set(), set(), set())\n\nn = int(input())\nprint(solve_n_queens(n))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction solveNQueens(n) {\n    let count = 0;\n    \n    function backtrack(row, cols, diag1, diag2) {\n        if (row === n) {\n            count++;\n            return;\n        }\n        for (let col = 0; col < n; col++) {\n            if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {\n                cols.add(col);\n                diag1.add(row + col);\n                diag2.add(row - col);\n                backtrack(row + 1, cols, diag1, diag2);\n                cols.delete(col);\n                diag1.delete(row + col);\n                diag2.delete(row - col);\n            }\n        }\n    }\n    \n    backtrack(0, new Set(), new Set(), new Set());\n    return count;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input);\nconsole.log(solveNQueens(n));",
		},
		createdAt: "2025-06-06T18:38:20.005Z",
		updatedAt: "2025-06-06T18:38:20.005Z",
		solvedBy: [],
	},
	{
		id: "d4e9b4d4-d2a5-4642-ad15-2b01a98c0246",
		title: "Segment Tree Range Sum Query",
		description:
			"Build a segment tree to answer range sum queries and point updates efficiently.",
		difficulty: "HARD",
		tags: ["segment-tree", "range-query", "data-structure", "Microsoft"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "5\n1 3 5 7 9\n3\nquery 1 3\nupdate 2 6\nquery 1 3",
				output: "15\n16",
				explanation:
					"Sum of range [1,3] is 3+5+7=15, after update sum becomes 3+6+7=16",
			},
			PYTHON: {
				input: "4\n2 4 6 8\n2\nquery 0 2\nupdate 1 10",
				output: "12",
				explanation: "Sum of range [0,2] is 2+4+6=12",
			},
			JAVASCRIPT: {
				input: "3\n1 2 3\n1\nquery 0 2",
				output: "6",
				explanation: "Sum of entire array is 1+2+3=6",
			},
		},
		constraints: "1 ≤ n ≤ 10^5, 1 ≤ queries ≤ 10^5, 1 ≤ values ≤ 10^9",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "6\n1 2 3 4 5 6\n4\nquery 0 5\nupdate 2 10\nquery 0 5\nquery 2 4",
				output: "21\n28\n19",
			},
			{
				input: "2\n5 10\n2\nquery 0 1\nupdate 0 15",
				output: "15",
			},
			{
				input: "1\n42\n1\nquery 0 0",
				output: "42",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    static class SegmentTree {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        \n        SegmentTree st = new SegmentTree();\n        // Initialize segment tree\n        \n        int q = sc.nextInt();\n        sc.nextLine();\n        for (int i = 0; i < q; i++) {\n            String[] query = sc.nextLine().split(" ");\n            if (query[0].equals("query")) {\n                int l = Integer.parseInt(query[1]);\n                int r = Integer.parseInt(query[2]);\n                // Process query\n            } else {\n                int idx = Integer.parseInt(query[1]);\n                int val = Integer.parseInt(query[2]);\n                // Process update\n            }\n        }\n    }\n}',
			PYTHON: "class SegmentTree:\n    def __init__(self, arr):\n        # Write your code here\n        pass\n    \n    def query(self, l, r):\n        # Write your code here\n        pass\n    \n    def update(self, idx, val):\n        # Write your code here\n        pass\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\narr = list(map(int, input_lines[1].split()))\nst = SegmentTree(arr)\n\nq = int(input_lines[2])\nfor i in range(3, 3 + q):\n    query = input_lines[i].split()\n    if query[0] == 'query':\n        l, r = int(query[1]), int(query[2])\n        print(st.query(l, r))\n    else:\n        idx, val = int(query[1]), int(query[2])\n        st.update(idx, val)",
			JAVASCRIPT:
				"const fs = require('fs');\n\nclass SegmentTree {\n    constructor(arr) {\n        // Write your code here\n        \n    }\n    \n    query(l, r) {\n        // Write your code here\n        \n    }\n    \n    update(idx, val) {\n        // Write your code here\n        \n    }\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst arr = input[1].split(' ').map(Number);\nconst st = new SegmentTree(arr);\n\nconst q = parseInt(input[2]);\nfor (let i = 3; i < 3 + q; i++) {\n    const query = input[i].split(' ');\n    if (query[0] === 'query') {\n        const l = parseInt(query[1]);\n        const r = parseInt(query[2]);\n        console.log(st.query(l, r));\n    } else {\n        const idx = parseInt(query[1]);\n        const val = parseInt(query[2]);\n        st.update(idx, val);\n    }\n}",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    static class SegmentTree {\n        private int[] tree;\n        private int n;\n        \n        public SegmentTree(int[] arr) {\n            n = arr.length;\n            tree = new int[4 * n];\n            build(arr, 0, 0, n - 1);\n        }\n        \n        private void build(int[] arr, int node, int start, int end) {\n            if (start == end) {\n                tree[node] = arr[start];\n            } else {\n                int mid = (start + end) / 2;\n                build(arr, 2 * node + 1, start, mid);\n                build(arr, 2 * node + 2, mid + 1, end);\n                tree[node] = tree[2 * node + 1] + tree[2 * node + 2];\n            }\n        }\n        \n        public int query(int l, int r) {\n            return query(0, 0, n - 1, l, r);\n        }\n        \n        private int query(int node, int start, int end, int l, int r) {\n            if (r < start || end < l) return 0;\n            if (l <= start && end <= r) return tree[node];\n            int mid = (start + end) / 2;\n            return query(2 * node + 1, start, mid, l, r) + \n                   query(2 * node + 2, mid + 1, end, l, r);\n        }\n        \n        public void update(int idx, int val) {\n            update(0, 0, n - 1, idx, val);\n        }\n        \n        private void update(int node, int start, int end, int idx, int val) {\n            if (start == end) {\n                tree[node] = val;\n            } else {\n                int mid = (start + end) / 2;\n                if (idx <= mid) {\n                    update(2 * node + 1, start, mid, idx, val);\n                } else {\n                    update(2 * node + 2, mid + 1, end, idx, val);\n                }\n                tree[node] = tree[2 * node + 1] + tree[2 * node + 2];\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        \n        SegmentTree st = new SegmentTree(arr);\n        \n        int q = sc.nextInt();\n        sc.nextLine();\n        for (int i = 0; i < q; i++) {\n            String[] query = sc.nextLine().split(" ");\n            if (query[0].equals("query")) {\n                int l = Integer.parseInt(query[1]);\n                int r = Integer.parseInt(query[2]);\n                System.out.println(st.query(l, r));\n            } else {\n                int idx = Integer.parseInt(query[1]);\n                int val = Integer.parseInt(query[2]);\n                st.update(idx, val);\n            }\n        }\n    }\n}',
			PYTHON: "class SegmentTree:\n    def __init__(self, arr):\n        self.n = len(arr)\n        self.tree = [0] * (4 * self.n)\n        self.build(arr, 0, 0, self.n - 1)\n    \n    def build(self, arr, node, start, end):\n        if start == end:\n            self.tree[node] = arr[start]\n        else:\n            mid = (start + end) // 2\n            self.build(arr, 2 * node + 1, start, mid)\n            self.build(arr, 2 * node + 2, mid + 1, end)\n            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]\n    \n    def query(self, l, r):\n        return self._query(0, 0, self.n - 1, l, r)\n    \n    def _query(self, node, start, end, l, r):\n        if r < start or end < l:\n            return 0\n        if l <= start and end <= r:\n            return self.tree[node]\n        mid = (start + end) // 2\n        return (self._query(2 * node + 1, start, mid, l, r) + \n                self._query(2 * node + 2, mid + 1, end, l, r))\n    \n    def update(self, idx, val):\n        self._update(0, 0, self.n - 1, idx, val)\n    \n    def _update(self, node, start, end, idx, val):\n        if start == end:\n            self.tree[node] = val\n        else:\n            mid = (start + end) // 2\n            if idx <= mid:\n                self._update(2 * node + 1, start, mid, idx, val)\n            else:\n                self._update(2 * node + 2, mid + 1, end, idx, val)\n            self.tree[node] = self.tree[2 * node + 1] + self.tree[2 * node + 2]\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\narr = list(map(int, input_lines[1].split()))\nst = SegmentTree(arr)\n\nq = int(input_lines[2])\nfor i in range(3, 3 + q):\n    query = input_lines[i].split()\n    if query[0] == 'query':\n        l, r = int(query[1]), int(query[2])\n        print(st.query(l, r))\n    else:\n        idx, val = int(query[1]), int(query[2])\n        st.update(idx, val)",
			JAVASCRIPT:
				"const fs = require('fs');\n\nclass SegmentTree {\n    constructor(arr) {\n        this.n = arr.length;\n        this.tree = new Array(4 * this.n);\n        this.build(arr, 0, 0, this.n - 1);\n    }\n    \n    build(arr, node, start, end) {\n        if (start === end) {\n            this.tree[node] = arr[start];\n        } else {\n            const mid = Math.floor((start + end) / 2);\n            this.build(arr, 2 * node + 1, start, mid);\n            this.build(arr, 2 * node + 2, mid + 1, end);\n            this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];\n        }\n    }\n    \n    query(l, r) {\n        return this._query(0, 0, this.n - 1, l, r);\n    }\n    \n    _query(node, start, end, l, r) {\n        if (r < start || end < l) return 0;\n        if (l <= start && end <= r) return this.tree[node];\n        const mid = Math.floor((start + end) / 2);\n        return this._query(2 * node + 1, start, mid, l, r) + \n               this._query(2 * node + 2, mid + 1, end, l, r);\n    }\n    \n    update(idx, val) {\n        this._update(0, 0, this.n - 1, idx, val);\n    }\n    \n    _update(node, start, end, idx, val) {\n        if (start === end) {\n            this.tree[node] = val;\n        } else {\n            const mid = Math.floor((start + end) / 2);\n            if (idx <= mid) {\n                this._update(2 * node + 1, start, mid, idx, val);\n            } else {\n                this._update(2 * node + 2, mid + 1, end, idx, val);\n            }\n            this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];\n        }\n    }\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst arr = input[1].split(' ').map(Number);\nconst st = new SegmentTree(arr);\n\nconst q = parseInt(input[2]);\nfor (let i = 3; i < 3 + q; i++) {\n    const query = input[i].split(' ');\n    if (query[0] === 'query') {\n        const l = parseInt(query[1]);\n        const r = parseInt(query[2]);\n        console.log(st.query(l, r));\n    } else {\n        const idx = parseInt(query[1]);\n        const val = parseInt(query[2]);\n        st.update(idx, val);\n    }\n}",
		},
		createdAt: "2025-06-06T18:40:23.979Z",
		updatedAt: "2025-06-06T18:40:23.979Z",
		solvedBy: [],
	},
	{
		id: "1d70671a-8936-4308-b2c5-6d8c0652f805",
		title: "Trie Implementation",
		description:
			"Implement a Trie (prefix tree) with insert, search, and startsWith operations.",
		difficulty: "MEDIUM",
		tags: ["trie", "prefix-tree", "string", "Facebook"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "5\ninsert apple\nsearch apple\nsearch app\nstartsWith app\ninsert app",
				output: "true\nfalse\ntrue",
				explanation: "apple found, app not found, app is prefix",
			},
			PYTHON: {
				input: "3\ninsert hello\nsearch hello\nstartsWith hel",
				output: "true\ntrue",
				explanation: "hello found, hel is prefix",
			},
			JAVASCRIPT: {
				input: "4\ninsert cat\nsearch cat\nsearch dog\nstartsWith ca",
				output: "true\nfalse\ntrue",
				explanation: "cat found, dog not found, ca is prefix",
			},
		},
		constraints: "1 ≤ operations ≤ 1000, 1 ≤ word length ≤ 100",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "6\ninsert word\ninsert world\nsearch word\nsearch world\nstartsWith wor\nsearch wo",
				output: "true\ntrue\ntrue\nfalse",
			},
			{
				input: "2\ninsert a\nsearch a",
				output: "true",
			},
			{
				input: "3\ninsert test\nstartsWith testing\nsearch test",
				output: "false\ntrue",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    static class Trie {\n        // Write your code here\n        \n        public Trie() {\n            \n        }\n        \n        public void insert(String word) {\n            \n        }\n        \n        public boolean search(String word) {\n            return false;\n        }\n        \n        public boolean startsWith(String prefix) {\n            return false;\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        sc.nextLine();\n        Trie trie = new Trie();\n        \n        for (int i = 0; i < n; i++) {\n            String[] operation = sc.nextLine().split(" ", 2);\n            String op = operation[0];\n            String word = operation[1];\n            \n            if (op.equals("insert")) {\n                trie.insert(word);\n            } else if (op.equals("search")) {\n                System.out.println(trie.search(word));\n            } else if (op.equals("startsWith")) {\n                System.out.println(trie.startsWith(word));\n            }\n        }\n    }\n}',
			PYTHON: "class Trie:\n    def __init__(self):\n        # Write your code here\n        pass\n    \n    def insert(self, word):\n        # Write your code here\n        pass\n    \n    def search(self, word):\n        # Write your code here\n        return False\n    \n    def starts_with(self, prefix):\n        # Write your code here\n        return False\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\ntrie = Trie()\n\nfor i in range(1, n + 1):\n    parts = input_lines[i].split(' ', 1)\n    op = parts[0]\n    word = parts[1]\n    \n    if op == 'insert':\n        trie.insert(word)\n    elif op == 'search':\n        print(str(trie.search(word)).lower())\n    elif op == 'startsWith':\n        print(str(trie.starts_with(word)).lower())",
			JAVASCRIPT:
				"const fs = require('fs');\n\nclass Trie {\n    constructor() {\n        // Write your code here\n        \n    }\n    \n    insert(word) {\n        // Write your code here\n        \n    }\n    \n    search(word) {\n        // Write your code here\n        return false;\n    }\n    \n    startsWith(prefix) {\n        // Write your code here\n        return false;\n    }\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst trie = new Trie();\n\nfor (let i = 1; i <= n; i++) {\n    const parts = input[i].split(' ');\n    const op = parts[0];\n    const word = parts.slice(1).join(' ');\n    \n    if (op === 'insert') {\n        trie.insert(word);\n    } else if (op === 'search') {\n        console.log(trie.search(word));\n    } else if (op === 'startsWith') {\n        console.log(trie.startsWith(word));\n    }\n}",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    static class Trie {\n        class TrieNode {\n            TrieNode[] children;\n            boolean isEnd;\n            \n            public TrieNode() {\n                children = new TrieNode[26];\n                isEnd = false;\n            }\n        }\n        \n        private TrieNode root;\n        \n        public Trie() {\n            root = new TrieNode();\n        }\n        \n        public void insert(String word) {\n            TrieNode curr = root;\n            for (char c : word.toCharArray()) {\n                int index = c - \'a\';\n                if (curr.children[index] == null) {\n                    curr.children[index] = new TrieNode();\n                }\n                curr = curr.children[index];\n            }\n            curr.isEnd = true;\n        }\n        \n        public boolean search(String word) {\n            TrieNode curr = root;\n            for (char c : word.toCharArray()) {\n                int index = c - \'a\';\n                if (curr.children[index] == null) {\n                    return false;\n                }\n                curr = curr.children[index];\n            }\n            return curr.isEnd;\n        }\n        \n        public boolean startsWith(String prefix) {\n            TrieNode curr = root;\n            for (char c : prefix.toCharArray()) {\n                int index = c - \'a\';\n                if (curr.children[index] == null) {\n                    return false;\n                }\n                curr = curr.children[index];\n            }\n            return true;\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        sc.nextLine();\n        Trie trie = new Trie();\n        \n        for (int i = 0; i < n; i++) {\n            String[] operation = sc.nextLine().split(" ", 2);\n            String op = operation[0];\n            String word = operation[1];\n            \n            if (op.equals("insert")) {\n                trie.insert(word);\n            } else if (op.equals("search")) {\n                System.out.println(trie.search(word));\n            } else if (op.equals("startsWith")) {\n                System.out.println(trie.startsWith(word));\n            }\n        }\n    }\n}',
			PYTHON: "class Trie:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\n    \n    def insert(self, word):\n        node = self\n        for char in word:\n            if char not in node.children:\n                node.children[char] = Trie()\n            node = node.children[char]\n        node.is_end = True\n    \n    def search(self, word):\n        node = self\n        for char in word:\n            if char not in node.children:\n                return False\n            node = node.children[char]\n        return node.is_end\n    \n    def starts_with(self, prefix):\n        node = self\n        for char in prefix:\n            if char not in node.children:\n                return False\n            node = node.children[char]\n        return True\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\ntrie = Trie()\n\nfor i in range(1, n + 1):\n    parts = input_lines[i].split(' ', 1)\n    op = parts[0]\n    word = parts[1]\n    \n    if op == 'insert':\n        trie.insert(word)\n    elif op == 'search':\n        print(str(trie.search(word)).lower())\n    elif op == 'startsWith':\n        print(str(trie.starts_with(word)).lower())",
			JAVASCRIPT:
				"const fs = require('fs');\n\nclass TrieNode {\n    constructor() {\n        this.children = {};\n        this.isEnd = false;\n    }\n}\n\nclass Trie {\n    constructor() {\n        this.root = new TrieNode();\n    }\n    \n    insert(word) {\n        let curr = this.root;\n        for (const char of word) {\n            if (!curr.children[char]) {\n                curr.children[char] = new TrieNode();\n            }\n            curr = curr.children[char];\n        }\n        curr.isEnd = true;\n    }\n    \n    search(word) {\n        let curr = this.root;\n        for (const char of word) {\n            if (!curr.children[char]) {\n                return false;\n            }\n            curr = curr.children[char];\n        }\n        return curr.isEnd;\n    }\n    \n    startsWith(prefix) {\n        let curr = this.root;\n        for (const char of prefix) {\n            if (!curr.children[char]) {\n                return false;\n            }\n            curr = curr.children[char];\n        }\n        return true;\n    }\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst trie = new Trie();\n\nfor (let i = 1; i <= n; i++) {\n    const parts = input[i].split(' ');\n    const op = parts[0];\n    const word = parts.slice(1).join(' ');\n    \n    if (op === 'insert') {\n        trie.insert(word);\n    } else if (op === 'search') {\n        console.log(trie.search(word));\n    } else if (op === 'startsWith') {\n        console.log(trie.startsWith(word));\n    }\n}",
		},
		createdAt: "2025-06-06T18:41:22.324Z",
		updatedAt: "2025-06-06T18:41:22.324Z",
		solvedBy: [],
	},
	{
		id: "1f29b731-5a6e-4d6d-bea3-f9db9f04934f",
		title: "Union Find Disjoint Set",
		description:
			"Implement Union-Find data structure with path compression and union by rank.",
		difficulty: "MEDIUM",
		tags: ["union-find", "disjoint-set", "data-structure", "Netflix"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "5 4\nunion 0 1\nunion 1 2\nfind 0 2\nfind 0 3",
				output: "true\nfalse",
				explanation: "0 and 2 are connected, 0 and 3 are not",
			},
			PYTHON: {
				input: "4 3\nunion 0 1\nfind 0 1\nunion 2 3",
				output: "true",
				explanation: "0 and 1 are connected after union",
			},
			JAVASCRIPT: {
				input: "3 2\nfind 0 1\nunion 0 1",
				output: "false",
				explanation: "0 and 1 not connected initially",
			},
		},
		constraints: "1 ≤ n ≤ 10^5, 1 ≤ operations ≤ 10^5",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "6 5\nunion 0 1\nunion 2 3\nunion 4 5\nfind 0 3\nfind 2 5",
				output: "false\nfalse",
			},
			{
				input: "4 4\nunion 0 1\nunion 1 2\nunion 2 3\nfind 0 3",
				output: "true",
			},
			{
				input: "2 1\nfind 0 1",
				output: "false",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    static class UnionFind {\n        // Write your code here\n        \n        public UnionFind(int n) {\n            \n        }\n        \n        public void union(int x, int y) {\n            \n        }\n        \n        public boolean find(int x, int y) {\n            return false;\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int q = sc.nextInt();\n        sc.nextLine();\n        \n        UnionFind uf = new UnionFind(n);\n        \n        for (int i = 0; i < q; i++) {\n            String[] operation = sc.nextLine().split(" ");\n            String op = operation[0];\n            int x = Integer.parseInt(operation[1]);\n            int y = Integer.parseInt(operation[2]);\n            \n            if (op.equals("union")) {\n                uf.union(x, y);\n            } else {\n                System.out.println(uf.find(x, y));\n            }\n        }\n    }\n}',
			PYTHON: "class UnionFind:\n    def __init__(self, n):\n        # Write your code here\n        pass\n    \n    def union(self, x, y):\n        # Write your code here\n        pass\n    \n    def find(self, x, y):\n        # Write your code here\n        return False\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn, q = map(int, input_lines[0].split())\nuf = UnionFind(n)\n\nfor i in range(1, q + 1):\n    parts = input_lines[i].split()\n    op = parts[0]\n    x, y = int(parts[1]), int(parts[2])\n    \n    if op == 'union':\n        uf.union(x, y)\n    else:\n        print(str(uf.find(x, y)).lower())",
			JAVASCRIPT:
				"const fs = require('fs');\n\nclass UnionFind {\n    constructor(n) {\n        // Write your code here\n        \n    }\n    \n    union(x, y) {\n        // Write your code here\n        \n    }\n    \n    find(x, y) {\n        // Write your code here\n        return false;\n    }\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [n, q] = input[0].split(' ').map(Number);\nconst uf = new UnionFind(n);\n\nfor (let i = 1; i <= q; i++) {\n    const parts = input[i].split(' ');\n    const op = parts[0];\n    const x = parseInt(parts[1]);\n    const y = parseInt(parts[2]);\n    \n    if (op === 'union') {\n        uf.union(x, y);\n    } else {\n        console.log(uf.find(x, y));\n    }\n}",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    static class UnionFind {\n        private int[] parent;\n        private int[] rank;\n        \n        public UnionFind(int n) {\n            parent = new int[n];\n            rank = new int[n];\n            for (int i = 0; i < n; i++) {\n                parent[i] = i;\n                rank[i] = 0;\n            }\n        }\n        \n        private int findRoot(int x) {\n            if (parent[x] != x) {\n                parent[x] = findRoot(parent[x]); // Path compression\n            }\n            return parent[x];\n        }\n        \n        public void union(int x, int y) {\n            int rootX = findRoot(x);\n            int rootY = findRoot(y);\n            \n            if (rootX != rootY) {\n                // Union by rank\n                if (rank[rootX] < rank[rootY]) {\n                    parent[rootX] = rootY;\n                } else if (rank[rootX] > rank[rootY]) {\n                    parent[rootY] = rootX;\n                } else {\n                    parent[rootY] = rootX;\n                    rank[rootX]++;\n                }\n            }\n        }\n        \n        public boolean find(int x, int y) {\n            return findRoot(x) == findRoot(y);\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int q = sc.nextInt();\n        sc.nextLine();\n        \n        UnionFind uf = new UnionFind(n);\n        \n        for (int i = 0; i < q; i++) {\n            String[] operation = sc.nextLine().split(" ");\n            String op = operation[0];\n            int x = Integer.parseInt(operation[1]);\n            int y = Integer.parseInt(operation[2]);\n            \n            if (op.equals("union")) {\n                uf.union(x, y);\n            } else {\n                System.out.println(uf.find(x, y));\n            }\n        }\n    }\n}',
			PYTHON: "class UnionFind:\n    def __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n    \n    def find_root(self, x):\n        if self.parent[x] != x:\n            self.parent[x] = self.find_root(self.parent[x])  # Path compression\n        return self.parent[x]\n    \n    def union(self, x, y):\n        root_x = self.find_root(x)\n        root_y = self.find_root(y)\n        \n        if root_x != root_y:\n            # Union by rank\n            if self.rank[root_x] < self.rank[root_y]:\n                self.parent[root_x] = root_y\n            elif self.rank[root_x] > self.rank[root_y]:\n                self.parent[root_y] = root_x\n            else:\n                self.parent[root_y] = root_x\n                self.rank[root_x] += 1\n    \n    def find(self, x, y):\n        return self.find_root(x) == self.find_root(y)\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn, q = map(int, input_lines[0].split())\nuf = UnionFind(n)\n\nfor i in range(1, q + 1):\n    parts = input_lines[i].split()\n    op = parts[0]\n    x, y = int(parts[1]), int(parts[2])\n    \n    if op == 'union':\n        uf.union(x, y)\n    else:\n        print(str(uf.find(x, y)).lower())",
			JAVASCRIPT:
				"const fs = require('fs');\n\nclass UnionFind {\n    constructor(n) {\n        this.parent = Array.from({length: n}, (_, i) => i);\n        this.rank = new Array(n).fill(0);\n    }\n    \n    findRoot(x) {\n        if (this.parent[x] !== x) {\n            this.parent[x] = this.findRoot(this.parent[x]); // Path compression\n        }\n        return this.parent[x];\n    }\n    \n    union(x, y) {\n        const rootX = this.findRoot(x);\n        const rootY = this.findRoot(y);\n        \n        if (rootX !== rootY) {\n            // Union by rank\n            if (this.rank[rootX] < this.rank[rootY]) {\n                this.parent[rootX] = rootY;\n            } else if (this.rank[rootX] > this.rank[rootY]) {\n                this.parent[rootY] = rootX;\n            } else {\n                this.parent[rootY] = rootX;\n                this.rank[rootX]++;\n            }\n        }\n    }\n    \n    find(x, y) {\n        return this.findRoot(x) === this.findRoot(y);\n    }\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [n, q] = input[0].split(' ').map(Number);\nconst uf = new UnionFind(n);\n\nfor (let i = 1; i <= q; i++) {\n    const parts = input[i].split(' ');\n    const op = parts[0];\n    const x = parseInt(parts[1]);\n    const y = parseInt(parts[2]);\n    \n    if (op === 'union') {\n        uf.union(x, y);\n    } else {\n        console.log(uf.find(x, y));\n    }\n}",
		},
		createdAt: "2025-06-06T18:42:08.642Z",
		updatedAt: "2025-06-06T18:42:08.642Z",
		solvedBy: [],
	},
	{
		id: "0ed1aa75-e5e5-4126-8cd4-cd33ed359273",
		title: "Topological Sort",
		description:
			"Perform topological sorting on a directed acyclic graph (DAG) using DFS or Kahn's algorithm.",
		difficulty: "MEDIUM",
		tags: ["graph", "topological-sort", "dfs", "Tesla"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "6 6\n5 2\n5 0\n4 0\n4 1\n2 3\n3 1",
				output: "5 4 2 3 1 0",
				explanation: "One valid topological ordering",
			},
			PYTHON: {
				input: "4 4\n0 1\n0 2\n1 3\n2 3",
				output: "0 1 2 3",
				explanation: "Topological ordering of the DAG",
			},
			JAVASCRIPT: {
				input: "3 2\n0 1\n1 2",
				output: "0 1 2",
				explanation: "Linear dependency chain",
			},
		},
		constraints: "1 ≤ V ≤ 1000, 1 ≤ E ≤ 5000",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "5 5\n0 1\n0 2\n1 3\n2 3\n3 4",
				output: "0 1 2 3 4",
			},
			{
				input: "2 1\n0 1",
				output: "0 1",
			},
			{
				input: "4 3\n0 1\n0 2\n0 3",
				output: "0 1 2 3",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static List<Integer> topologicalSort(int V, List<List<Integer>> adj) {\n        // Write your code here\n        \n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int V = sc.nextInt();\n        int E = sc.nextInt();\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());\n        \n        for (int i = 0; i < E; i++) {\n            int u = sc.nextInt();\n            int v = sc.nextInt();\n            adj.get(u).add(v);\n        }\n        \n        List<Integer> result = topologicalSort(V, adj);\n        for (int i = 0; i < result.size(); i++) {\n            System.out.print(result.get(i));\n            if (i < result.size() - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "def topological_sort(V, adj):\n    # Write your code here\n    \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nV, E = map(int, input_lines[0].split())\nadj = [[] for _ in range(V)]\n\nfor i in range(1, E + 1):\n    u, v = map(int, input_lines[i].split())\n    adj[u].append(v)\n\nresult = topological_sort(V, adj)\nprint(' '.join(map(str, result)))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction topologicalSort(V, adj) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [V, E] = input[0].split(' ').map(Number);\nconst adj = Array.from({length: V}, () => []);\n\nfor (let i = 1; i <= E; i++) {\n    const [u, v] = input[i].split(' ').map(Number);\n    adj[u].push(v);\n}\n\nconst result = topologicalSort(V, adj);\nconsole.log(result.join(' '));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static List<Integer> topologicalSort(int V, List<List<Integer>> adj) {\n        int[] indegree = new int[V];\n        for (int i = 0; i < V; i++) {\n            for (int neighbor : adj.get(i)) {\n                indegree[neighbor]++;\n            }\n        }\n        \n        Queue<Integer> queue = new LinkedList<>();\n        for (int i = 0; i < V; i++) {\n            if (indegree[i] == 0) {\n                queue.offer(i);\n            }\n        }\n        \n        List<Integer> result = new ArrayList<>();\n        while (!queue.isEmpty()) {\n            int curr = queue.poll();\n            result.add(curr);\n            \n            for (int neighbor : adj.get(curr)) {\n                indegree[neighbor]--;\n                if (indegree[neighbor] == 0) {\n                    queue.offer(neighbor);\n                }\n            }\n        }\n        \n        return result;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int V = sc.nextInt();\n        int E = sc.nextInt();\n        List<List<Integer>> adj = new ArrayList<>();\n        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());\n        \n        for (int i = 0; i < E; i++) {\n            int u = sc.nextInt();\n            int v = sc.nextInt();\n            adj.get(u).add(v);\n        }\n        \n        List<Integer> result = topologicalSort(V, adj);\n        for (int i = 0; i < result.size(); i++) {\n            System.out.print(result.get(i));\n            if (i < result.size() - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "from collections import deque\n\ndef topological_sort(V, adj):\n    indegree = [0] * V\n    for i in range(V):\n        for neighbor in adj[i]:\n            indegree[neighbor] += 1\n    \n    queue = deque()\n    for i in range(V):\n        if indegree[i] == 0:\n            queue.append(i)\n    \n    result = []\n    while queue:\n        curr = queue.popleft()\n        result.append(curr)\n        \n        for neighbor in adj[curr]:\n            indegree[neighbor] -= 1\n            if indegree[neighbor] == 0:\n                queue.append(neighbor)\n    \n    return result\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nV, E = map(int, input_lines[0].split())\nadj = [[] for _ in range(V)]\n\nfor i in range(1, E + 1):\n    u, v = map(int, input_lines[i].split())\n    adj[u].append(v)\n\nresult = topological_sort(V, adj)\nprint(' '.join(map(str, result)))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction topologicalSort(V, adj) {\n    const indegree = new Array(V).fill(0);\n    for (let i = 0; i < V; i++) {\n        for (const neighbor of adj[i]) {\n            indegree[neighbor]++;\n        }\n    }\n    \n    const queue = [];\n    for (let i = 0; i < V; i++) {\n        if (indegree[i] === 0) {\n            queue.push(i);\n        }\n    }\n    \n    const result = [];\n    while (queue.length > 0) {\n        const curr = queue.shift();\n        result.push(curr);\n        \n        for (const neighbor of adj[curr]) {\n            indegree[neighbor]--;\n            if (indegree[neighbor] === 0) {\n                queue.push(neighbor);\n            }\n        }\n    }\n    \n    return result;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [V, E] = input[0].split(' ').map(Number);\nconst adj = Array.from({length: V}, () => []);\n\nfor (let i = 1; i <= E; i++) {\n    const [u, v] = input[i].split(' ').map(Number);\n    adj[u].push(v);\n}\n\nconst result = topologicalSort(V, adj);\nconsole.log(result.join(' '));",
		},
		createdAt: "2025-06-06T18:43:47.467Z",
		updatedAt: "2025-06-06T18:43:47.467Z",
		solvedBy: [],
	},
	{
		id: "8ce0fd76-5f59-4bac-817f-00a8dc23a8d4",
		title: "Minimum Spanning Tree Kruskal",
		description:
			"Find minimum spanning tree of a weighted undirected graph using Kruskal's algorithm.",
		difficulty: "HARD",
		tags: ["graph", "mst", "kruskal", "union-find", "Spotify"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "4 5\n0 1 10\n0 2 6\n0 3 5\n1 3 15\n2 3 4",
				output: "19",
				explanation: "MST weight: edges (2,3)=4, (0,3)=5, (0,1)=10",
			},
			PYTHON: {
				input: "3 3\n0 1 1\n1 2 2\n0 2 3",
				output: "3",
				explanation: "MST weight: edges (0,1)=1, (1,2)=2",
			},
			JAVASCRIPT: {
				input: "2 1\n0 1 5",
				output: "5",
				explanation: "Only one edge in MST",
			},
		},
		constraints: "1 ≤ V ≤ 1000, 1 ≤ E ≤ 5000, 1 ≤ weight ≤ 1000",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "5 7\n0 1 2\n0 3 6\n1 2 3\n1 3 8\n1 4 5\n2 4 7\n3 4 9",
				output: "16",
			},
			{
				input: "4 4\n0 1 1\n1 2 2\n2 3 3\n0 3 4",
				output: "6",
			},
			{
				input: "1 0",
				output: "0",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    static class Edge {\n        int src, dest, weight;\n        Edge(int src, int dest, int weight) {\n            this.src = src;\n            this.dest = dest;\n            this.weight = weight;\n        }\n    }\n    \n    public static int kruskalMST(int V, List<Edge> edges) {\n        // Write your code here\n        \n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int V = sc.nextInt();\n        int E = sc.nextInt();\n        List<Edge> edges = new ArrayList<>();\n        \n        for (int i = 0; i < E; i++) {\n            int u = sc.nextInt();\n            int v = sc.nextInt();\n            int w = sc.nextInt();\n            edges.add(new Edge(u, v, w));\n        }\n        \n        System.out.println(kruskalMST(V, edges));\n    }\n}",
			PYTHON: "def kruskal_mst(V, edges):\n    # Write your code here\n    \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nV, E = map(int, input_lines[0].split())\nedges = []\n\nfor i in range(1, E + 1):\n    u, v, w = map(int, input_lines[i].split())\n    edges.append((u, v, w))\n\nprint(kruskal_mst(V, edges))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction kruskalMST(V, edges) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [V, E] = input[0].split(' ').map(Number);\nconst edges = [];\n\nfor (let i = 1; i <= E; i++) {\n    const [u, v, w] = input[i].split(' ').map(Number);\n    edges.push([u, v, w]);\n}\n\nconsole.log(kruskalMST(V, edges));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    static class Edge {\n        int src, dest, weight;\n        Edge(int src, int dest, int weight) {\n            this.src = src;\n            this.dest = dest;\n            this.weight = weight;\n        }\n    }\n    \n    static class UnionFind {\n        int[] parent, rank;\n        \n        UnionFind(int n) {\n            parent = new int[n];\n            rank = new int[n];\n            for (int i = 0; i < n; i++) parent[i] = i;\n        }\n        \n        int find(int x) {\n            if (parent[x] != x) parent[x] = find(parent[x]);\n            return parent[x];\n        }\n        \n        boolean union(int x, int y) {\n            int px = find(x), py = find(y);\n            if (px == py) return false;\n            if (rank[px] < rank[py]) parent[px] = py;\n            else if (rank[px] > rank[py]) parent[py] = px;\n            else { parent[py] = px; rank[px]++; }\n            return true;\n        }\n    }\n    \n    public static int kruskalMST(int V, List<Edge> edges) {\n        Collections.sort(edges, (a, b) -> a.weight - b.weight);\n        UnionFind uf = new UnionFind(V);\n        int mstWeight = 0, edgesUsed = 0;\n        \n        for (Edge edge : edges) {\n            if (uf.union(edge.src, edge.dest)) {\n                mstWeight += edge.weight;\n                edgesUsed++;\n                if (edgesUsed == V - 1) break;\n            }\n        }\n        \n        return mstWeight;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int V = sc.nextInt();\n        int E = sc.nextInt();\n        List<Edge> edges = new ArrayList<>();\n        \n        for (int i = 0; i < E; i++) {\n            int u = sc.nextInt();\n            int v = sc.nextInt();\n            int w = sc.nextInt();\n            edges.add(new Edge(u, v, w));\n        }\n        \n        System.out.println(kruskalMST(V, edges));\n    }\n}",
			PYTHON: "class UnionFind:\n    def __init__(self, n):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n    \n    def find(self, x):\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])\n        return self.parent[x]\n    \n    def union(self, x, y):\n        px, py = self.find(x), self.find(y)\n        if px == py:\n            return False\n        if self.rank[px] < self.rank[py]:\n            self.parent[px] = py\n        elif self.rank[px] > self.rank[py]:\n            self.parent[py] = px\n        else:\n            self.parent[py] = px\n            self.rank[px] += 1\n        return True\n\ndef kruskal_mst(V, edges):\n    edges.sort(key=lambda x: x[2])\n    uf = UnionFind(V)\n    mst_weight = 0\n    edges_used = 0\n    \n    for u, v, w in edges:\n        if uf.union(u, v):\n            mst_weight += w\n            edges_used += 1\n            if edges_used == V - 1:\n                break\n    \n    return mst_weight\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nV, E = map(int, input_lines[0].split())\nedges = []\n\nfor i in range(1, E + 1):\n    u, v, w = map(int, input_lines[i].split())\n    edges.append((u, v, w))\n\nprint(kruskal_mst(V, edges))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nclass UnionFind {\n    constructor(n) {\n        this.parent = Array.from({length: n}, (_, i) => i);\n        this.rank = new Array(n).fill(0);\n    }\n    \n    find(x) {\n        if (this.parent[x] !== x) {\n            this.parent[x] = this.find(this.parent[x]);\n        }\n        return this.parent[x];\n    }\n    \n    union(x, y) {\n        const px = this.find(x);\n        const py = this.find(y);\n        if (px === py) return false;\n        \n        if (this.rank[px] < this.rank[py]) {\n            this.parent[px] = py;\n        } else if (this.rank[px] > this.rank[py]) {\n            this.parent[py] = px;\n        } else {\n            this.parent[py] = px;\n            this.rank[px]++;\n        }\n        return true;\n    }\n}\n\nfunction kruskalMST(V, edges) {\n    edges.sort((a, b) => a[2] - b[2]);\n    const uf = new UnionFind(V);\n    let mstWeight = 0;\n    let edgesUsed = 0;\n    \n    for (const [u, v, w] of edges) {\n        if (uf.union(u, v)) {\n            mstWeight += w;\n            edgesUsed++;\n            if (edgesUsed === V - 1) break;\n        }\n    }\n    \n    return mstWeight;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst [V, E] = input[0].split(' ').map(Number);\nconst edges = [];\n\nfor (let i = 1; i <= E; i++) {\n    const [u, v, w] = input[i].split(' ').map(Number);\n    edges.push([u, v, w]);\n}\n\nconsole.log(kruskalMST(V, edges));",
		},
		createdAt: "2025-06-06T18:44:28.828Z",
		updatedAt: "2025-06-06T18:44:28.828Z",
		solvedBy: [],
	},
	{
		id: "9fede1be-385e-471e-b324-c4e36184d5c2",
		title: "Longest Common Prefix",
		description:
			"Find the longest common prefix string amongst an array of strings.",
		difficulty: "EASY",
		tags: ["string", "prefix", "array", "Airbnb"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "3\nflower\nflow\nflight",
				output: "fl",
				explanation: "Common prefix of all strings is 'fl'",
			},
			PYTHON: {
				input: "2\ndog\nracecar",
				output: "",
				explanation: "No common prefix",
			},
			JAVASCRIPT: {
				input: "4\ninterstellar\ninternet\ninterval\ninterface",
				output: "inter",
				explanation: "Common prefix is 'inter'",
			},
		},
		constraints: "1 ≤ n ≤ 200, 0 ≤ string length ≤ 200",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "3\nabc\nab\nabcd",
				output: "ab",
			},
			{
				input: "1\nhello",
				output: "hello",
			},
			{
				input: "2\n\na",
				output: "",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static String longestCommonPrefix(String[] strs) {\n        // Write your code here\n        \n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        sc.nextLine();\n        String[] strs = new String[n];\n        for (int i = 0; i < n; i++) {\n            strs[i] = sc.nextLine();\n        }\n        System.out.println(longestCommonPrefix(strs));\n    }\n}',
			PYTHON: "def longest_common_prefix(strs):\n    # Write your code here\n    \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nstrs = [input_lines[i+1] for i in range(n)]\nprint(longest_common_prefix(strs))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction longestCommonPrefix(strs) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst strs = input.slice(1, n + 1);\nconsole.log(longestCommonPrefix(strs));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static String longestCommonPrefix(String[] strs) {\n        if (strs == null || strs.length == 0) return "";\n        \n        String prefix = strs[0];\n        for (int i = 1; i < strs.length; i++) {\n            while (strs[i].indexOf(prefix) != 0) {\n                prefix = prefix.substring(0, prefix.length() - 1);\n                if (prefix.isEmpty()) return "";\n            }\n        }\n        return prefix;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        sc.nextLine();\n        String[] strs = new String[n];\n        for (int i = 0; i < n; i++) {\n            strs[i] = sc.nextLine();\n        }\n        System.out.println(longestCommonPrefix(strs));\n    }\n}',
			PYTHON: "def longest_common_prefix(strs):\n    if not strs:\n        return ''\n    \n    prefix = strs[0]\n    for s in strs[1:]:\n        while not s.startswith(prefix):\n            prefix = prefix[:-1]\n            if not prefix:\n                return ''\n    return prefix\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\nstrs = [input_lines[i+1] for i in range(n)]\nprint(longest_common_prefix(strs))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction longestCommonPrefix(strs) {\n    if (!strs || strs.length === 0) return '';\n    \n    let prefix = strs[0];\n    for (let i = 1; i < strs.length; i++) {\n        while (strs[i].indexOf(prefix) !== 0) {\n            prefix = prefix.substring(0, prefix.length - 1);\n            if (prefix === '') return '';\n        }\n    }\n    return prefix;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst strs = input.slice(1, n + 1);\nconsole.log(longestCommonPrefix(strs));",
		},
		createdAt: "2025-06-06T18:45:18.558Z",
		updatedAt: "2025-06-06T18:45:18.558Z",
		solvedBy: [],
	},
	{
		id: "4c72be3b-b1ef-4c94-83cf-5504a9f7376e",
		title: "Heap Sort Implementation",
		description:
			"Implement heap sort algorithm to sort an array in ascending order using max heap.",
		difficulty: "MEDIUM",
		tags: ["sorting", "heap", "algorithm", "LinkedIn"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "6\n12 11 13 5 6 7",
				output: "5 6 7 11 12 13",
				explanation: "Array sorted using heap sort",
			},
			PYTHON: {
				input: "4\n4 3 2 1",
				output: "1 2 3 4",
				explanation: "Reverse sorted array",
			},
			JAVASCRIPT: {
				input: "3\n1 1 1",
				output: "1 1 1",
				explanation: "All elements same",
			},
		},
		constraints: "1 ≤ n ≤ 10^5, 1 ≤ elements ≤ 10^9",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "5\n64 34 25 12 22",
				output: "12 22 25 34 64",
			},
			{
				input: "1\n42",
				output: "42",
			},
			{
				input: "7\n9 8 7 6 5 4 3",
				output: "3 4 5 6 7 8 9",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void heapSort(int[] arr) {\n        // Write your code here\n        \n    }\n    \n    private static void heapify(int[] arr, int n, int i) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n        \n        heapSort(arr);\n        \n        for (int i = 0; i < n; i++) {\n            System.out.print(arr[i]);\n            if (i < n - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "def heap_sort(arr):\n    # Write your code here\n    \n\ndef heapify(arr, n, i):\n    # Write your code here\n    \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\narr = list(map(int, input_lines[1].split()))\n\nheap_sort(arr)\nprint(' '.join(map(str, arr)))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction heapSort(arr) {\n    // Write your code here\n    \n}\n\nfunction heapify(arr, n, i) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst arr = input[1].split(' ').map(Number);\n\nheapSort(arr);\nconsole.log(arr.join(' '));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void heapSort(int[] arr) {\n        int n = arr.length;\n        \n        // Build max heap\n        for (int i = n / 2 - 1; i >= 0; i--) {\n            heapify(arr, n, i);\n        }\n        \n        // Extract elements from heap one by one\n        for (int i = n - 1; i > 0; i--) {\n            // Move current root to end\n            int temp = arr[0];\n            arr[0] = arr[i];\n            arr[i] = temp;\n            \n            // Call heapify on the reduced heap\n            heapify(arr, i, 0);\n        }\n    }\n    \n    private static void heapify(int[] arr, int n, int i) {\n        int largest = i;\n        int left = 2 * i + 1;\n        int right = 2 * i + 2;\n        \n        if (left < n && arr[left] > arr[largest]) {\n            largest = left;\n        }\n        \n        if (right < n && arr[right] > arr[largest]) {\n            largest = right;\n        }\n        \n        if (largest != i) {\n            int temp = arr[i];\n            arr[i] = arr[largest];\n            arr[largest] = temp;\n            \n            heapify(arr, n, largest);\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for (int i = 0; i < n; i++) {\n            arr[i] = sc.nextInt();\n        }\n        \n        heapSort(arr);\n        \n        for (int i = 0; i < n; i++) {\n            System.out.print(arr[i]);\n            if (i < n - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "def heap_sort(arr):\n    n = len(arr)\n    \n    # Build max heap\n    for i in range(n // 2 - 1, -1, -1):\n        heapify(arr, n, i)\n    \n    # Extract elements from heap one by one\n    for i in range(n - 1, 0, -1):\n        arr[0], arr[i] = arr[i], arr[0]\n        heapify(arr, i, 0)\n\ndef heapify(arr, n, i):\n    largest = i\n    left = 2 * i + 1\n    right = 2 * i + 2\n    \n    if left < n and arr[left] > arr[largest]:\n        largest = left\n    \n    if right < n and arr[right] > arr[largest]:\n        largest = right\n    \n    if largest != i:\n        arr[i], arr[largest] = arr[largest], arr[i]\n        heapify(arr, n, largest)\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\narr = list(map(int, input_lines[1].split()))\n\nheap_sort(arr)\nprint(' '.join(map(str, arr)))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction heapSort(arr) {\n    const n = arr.length;\n    \n    // Build max heap\n    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {\n        heapify(arr, n, i);\n    }\n    \n    // Extract elements from heap one by one\n    for (let i = n - 1; i > 0; i--) {\n        [arr[0], arr[i]] = [arr[i], arr[0]];\n        heapify(arr, i, 0);\n    }\n}\n\nfunction heapify(arr, n, i) {\n    let largest = i;\n    const left = 2 * i + 1;\n    const right = 2 * i + 2;\n    \n    if (left < n && arr[left] > arr[largest]) {\n        largest = left;\n    }\n    \n    if (right < n && arr[right] > arr[largest]) {\n        largest = right;\n    }\n    \n    if (largest !== i) {\n        [arr[i], arr[largest]] = [arr[largest], arr[i]];\n        heapify(arr, n, largest);\n    }\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst arr = input[1].split(' ').map(Number);\n\nheapSort(arr);\nconsole.log(arr.join(' '));",
		},
		createdAt: "2025-06-06T18:45:46.659Z",
		updatedAt: "2025-06-06T18:45:46.659Z",
		solvedBy: [],
	},
	{
		id: "983eb2ea-ba37-4456-a8d4-792356e1d0d3",
		title: "Bit Manipulation Count Set Bits",
		description:
			"Count the number of set bits (1s) in the binary representation of a given number.",
		difficulty: "EASY",
		tags: ["bit-manipulation", "binary", "counting", "Intel"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "11",
				output: "3",
				explanation: "11 in binary is 1011, which has 3 set bits",
			},
			PYTHON: {
				input: "7",
				output: "3",
				explanation: "7 in binary is 111, which has 3 set bits",
			},
			JAVASCRIPT: {
				input: "0",
				output: "0",
				explanation: "0 has no set bits",
			},
		},
		constraints: "0 ≤ n ≤ 2^31 - 1",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "15",
				output: "4",
			},
			{
				input: "1",
				output: "1",
			},
			{
				input: "128",
				output: "1",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int countSetBits(int n) {\n        // Write your code here\n        \n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(countSetBits(n));\n    }\n}",
			PYTHON: "def count_set_bits(n):\n    # Write your code here\n    \n\nn = int(input())\nprint(count_set_bits(n))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction countSetBits(n) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input);\nconsole.log(countSetBits(n));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int countSetBits(int n) {\n        int count = 0;\n        while (n != 0) {\n            count += n & 1;\n            n >>>= 1;\n        }\n        return count;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(countSetBits(n));\n    }\n}",
			PYTHON: "def count_set_bits(n):\n    count = 0\n    while n:\n        count += n & 1\n        n >>= 1\n    return count\n\nn = int(input())\nprint(count_set_bits(n))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction countSetBits(n) {\n    let count = 0;\n    while (n !== 0) {\n        count += n & 1;\n        n >>>= 1;\n    }\n    return count;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst n = parseInt(input);\nconsole.log(countSetBits(n));",
		},
		createdAt: "2025-06-06T18:47:00.552Z",
		updatedAt: "2025-06-06T18:47:00.552Z",
		solvedBy: [],
	},
	{
		id: "935de88d-52bf-4997-956f-f9ab7cc515d5",
		title: "Floyd Warshall All Pairs Shortest Path",
		description:
			"Find shortest paths between all pairs of vertices in a weighted graph using Floyd-Warshall algorithm.",
		difficulty: "HARD",
		tags: [
			"graph",
			"shortest-path",
			"floyd-warshall",
			"dynamic-programming",
			"Microsoft",
		],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "4\n0 5 -1 10\n-1 0 3 -1\n-1 -1 0 1\n-1 -1 -1 0",
				output: "0 5 8 9\n-1 0 3 4\n-1 -1 0 1\n-1 -1 -1 0",
				explanation: "All pairs shortest distances (-1 means no path)",
			},
			PYTHON: {
				input: "3\n0 1 4\n-1 0 2\n-1 -1 0",
				output: "0 1 3\n-1 0 2\n-1 -1 0",
				explanation: "Shortest paths between all pairs",
			},
			JAVASCRIPT: {
				input: "2\n0 3\n2 0",
				output: "0 3\n2 0",
				explanation: "Direct paths are shortest",
			},
		},
		constraints: "1 ≤ V ≤ 100, -1000 ≤ weight ≤ 1000, -1 means no edge",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "3\n0 2 -1\n1 0 3\n4 -1 0",
				output: "0 2 5\n1 0 3\n4 6 0",
			},
			{
				input: "1\n0",
				output: "0",
			},
			{
				input: "2\n0 -1\n-1 0",
				output: "0 -1\n-1 0",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void floydWarshall(int[][] graph) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int V = sc.nextInt();\n        int[][] graph = new int[V][V];\n        \n        for (int i = 0; i < V; i++) {\n            for (int j = 0; j < V; j++) {\n                graph[i][j] = sc.nextInt();\n            }\n        }\n        \n        floydWarshall(graph);\n        \n        for (int i = 0; i < V; i++) {\n            for (int j = 0; j < V; j++) {\n                System.out.print(graph[i][j]);\n                if (j < V - 1) System.out.print(" ");\n            }\n            System.out.println();\n        }\n    }\n}',
			PYTHON: "def floyd_warshall(graph):\n    # Write your code here\n    \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nV = int(input_lines[0])\ngraph = []\nfor i in range(1, V + 1):\n    row = list(map(int, input_lines[i].split()))\n    graph.append(row)\n\nfloyd_warshall(graph)\n\nfor row in graph:\n    print(' '.join(map(str, row)))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction floydWarshall(graph) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst V = parseInt(input[0]);\nconst graph = [];\nfor (let i = 1; i <= V; i++) {\n    graph.push(input[i].split(' ').map(Number));\n}\n\nfloydWarshall(graph);\n\nfor (const row of graph) {\n    console.log(row.join(' '));\n}",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static void floydWarshall(int[][] graph) {\n        int V = graph.length;\n        final int INF = -1;\n        \n        // Replace -1 with a large value for computation, except diagonal\n        for (int i = 0; i < V; i++) {\n            for (int j = 0; j < V; j++) {\n                if (i != j && graph[i][j] == -1) {\n                    graph[i][j] = Integer.MAX_VALUE / 2;\n                }\n            }\n        }\n        \n        for (int k = 0; k < V; k++) {\n            for (int i = 0; i < V; i++) {\n                for (int j = 0; j < V; j++) {\n                    if (graph[i][k] != Integer.MAX_VALUE / 2 && \n                        graph[k][j] != Integer.MAX_VALUE / 2 &&\n                        graph[i][k] + graph[k][j] < graph[i][j]) {\n                        graph[i][j] = graph[i][k] + graph[k][j];\n                    }\n                }\n            }\n        }\n        \n        // Convert back to -1 for unreachable paths\n        for (int i = 0; i < V; i++) {\n            for (int j = 0; j < V; j++) {\n                if (graph[i][j] == Integer.MAX_VALUE / 2) {\n                    graph[i][j] = -1;\n                }\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int V = sc.nextInt();\n        int[][] graph = new int[V][V];\n        \n        for (int i = 0; i < V; i++) {\n            for (int j = 0; j < V; j++) {\n                graph[i][j] = sc.nextInt();\n            }\n        }\n        \n        floydWarshall(graph);\n        \n        for (int i = 0; i < V; i++) {\n            for (int j = 0; j < V; j++) {\n                System.out.print(graph[i][j]);\n                if (j < V - 1) System.out.print(" ");\n            }\n            System.out.println();\n        }\n    }\n}',
			PYTHON: "def floyd_warshall(graph):\n    V = len(graph)\n    INF = float('inf')\n    \n    # Replace -1 with infinity for computation, except diagonal\n    for i in range(V):\n        for j in range(V):\n            if i != j and graph[i][j] == -1:\n                graph[i][j] = INF\n    \n    for k in range(V):\n        for i in range(V):\n            for j in range(V):\n                if graph[i][k] != INF and graph[k][j] != INF:\n                    graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])\n    \n    # Convert back to -1 for unreachable paths\n    for i in range(V):\n        for j in range(V):\n            if graph[i][j] == INF:\n                graph[i][j] = -1\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nV = int(input_lines[0])\ngraph = []\nfor i in range(1, V + 1):\n    row = list(map(int, input_lines[i].split()))\n    graph.append(row)\n\nfloyd_warshall(graph)\n\nfor row in graph:\n    print(' '.join(map(str, row)))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction floydWarshall(graph) {\n    const V = graph.length;\n    const INF = Infinity;\n    \n    // Replace -1 with infinity for computation, except diagonal\n    for (let i = 0; i < V; i++) {\n        for (let j = 0; j < V; j++) {\n            if (i !== j && graph[i][j] === -1) {\n                graph[i][j] = INF;\n            }\n        }\n    }\n    \n    for (let k = 0; k < V; k++) {\n        for (let i = 0; i < V; i++) {\n            for (let j = 0; j < V; j++) {\n                if (graph[i][k] !== INF && graph[k][j] !== INF) {\n                    graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);\n                }\n            }\n        }\n    }\n    \n    // Convert back to -1 for unreachable paths\n    for (let i = 0; i < V; i++) {\n        for (let j = 0; j < V; j++) {\n            if (graph[i][j] === INF) {\n                graph[i][j] = -1;\n            }\n        }\n    }\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst V = parseInt(input[0]);\nconst graph = [];\nfor (let i = 1; i <= V; i++) {\n    graph.push(input[i].split(' ').map(Number));\n}\n\nfloydWarshall(graph);\n\nfor (const row of graph) {\n    console.log(row.join(' '));\n}",
		},
		createdAt: "2025-06-06T18:47:49.970Z",
		updatedAt: "2025-06-06T18:47:49.970Z",
		solvedBy: [],
	},
	{
		id: "2d397e17-c445-4f27-83e5-017814d9b96b",
		title: "KMP String Matching",
		description:
			"Implement the Knuth-Morris-Pratt (KMP) algorithm for efficient string matching.",
		difficulty: "HARD",
		tags: ["string", "pattern-matching", "kmp", "algorithm", "Adobe"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "ABABDABACDABABCABAB\nABABCABAB",
				output: "10",
				explanation: "Pattern found at index 10",
			},
			PYTHON: {
				input: "AAAAABAAABA\nAAAA",
				output: "0",
				explanation: "Pattern found at index 0",
			},
			JAVASCRIPT: {
				input: "ABCABCDABABCDABCDABDE\nABCDABD",
				output: "15",
				explanation: "Pattern found at index 15",
			},
		},
		constraints: "1 ≤ text length ≤ 10^5, 1 ≤ pattern length ≤ 10^4",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "THIS IS A TEST TEXT\nTEST",
				output: "10",
			},
			{
				input: "AABAACAADAABAABAA\nAABA",
				output: "0",
			},
			{
				input: "SIMPLE TEXT\nNOTFOUND",
				output: "-1",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int kmpSearch(String text, String pattern) {\n        // Write your code here\n        \n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String text = sc.nextLine();\n        String pattern = sc.nextLine();\n        System.out.println(kmpSearch(text, pattern));\n    }\n}",
			PYTHON: "def kmp_search(text, pattern):\n    # Write your code here\n    \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\ntext = input_lines[0]\npattern = input_lines[1]\nprint(kmp_search(text, pattern))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction kmpSearch(text, pattern) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst text = input[0];\nconst pattern = input[1];\nconsole.log(kmpSearch(text, pattern));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int kmpSearch(String text, String pattern) {\n        int[] lps = computeLPSArray(pattern);\n        int i = 0;  // index for text\n        int j = 0;  // index for pattern\n        while (i < text.length()) {\n            if (pattern.charAt(j) == text.charAt(i)) {\n                j++;\n                i++;\n            }\n            if (j == pattern.length()) {\n                return i - j;\n            } else if (i < text.length() && pattern.charAt(j) != text.charAt(i)) {\n                if (j != 0) {\n                    j = lps[j - 1];\n                } else {\n                    i = i + 1;\n                }\n            }\n        }\n        return -1;\n    }\n\n    private static int[] computeLPSArray(String pattern) {\n        int[] lps = new int[pattern.length()];\n        int length = 0;  // length of the previous longest prefix suffix\n        int i = 1;\n        lps[0] = 0;  // lps[0] is always 0\n        while (i < pattern.length()) {\n            if (pattern.charAt(i) == pattern.charAt(length)) {\n                length++;\n                lps[i] = length;\n                i++;\n            } else {\n                if (length != 0) {\n                    length = lps[length - 1];\n                } else {\n                    lps[i] = 0;\n                    i++;\n                }\n            }\n        }\n        return lps;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String text = sc.nextLine();\n        String pattern = sc.nextLine();\n        System.out.println(kmpSearch(text, pattern));\n    }\n}",
			PYTHON: "def kmp_search(text, pattern):\n    lps = compute_lps_array(pattern)\n    i = 0  # index for text\n    j = 0  # index for pattern\n    while i < len(text):\n        if pattern[j] == text[i]:\n            j += 1\n            i += 1\n\n        if j == len(pattern):\n            return i - j\n        elif i < len(text) and pattern[j] != text[i]:\n            if j != 0:\n                j = lps[j - 1]\n            else:\n                i += 1\n    return -1\n\ndef compute_lps_array(pattern):\n    lps = [0] * len(pattern)\n    length = 0  # length of the previous longest prefix suffix\n    i = 1\n    while i < len(pattern):\n        if pattern[i] == pattern[length]:\n            length += 1\n            lps[i] = length\n            i += 1\n        else:\n            if length != 0:\n                length = lps[length - 1]\n            else:\n                lps[i] = 0\n                i += 1\n    return lps\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\ntext = input_lines[0]\npattern = input_lines[1]\nprint(kmp_search(text, pattern))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction kmpSearch(text, pattern) {\n    const lps = computeLPSArray(pattern);\n    let i = 0;  // index for text\n    let j = 0;  // index for pattern\n    while (i < text.length) {\n        if (pattern[j] === text[i]) {\n            j++;\n            i++;\n        }\n        if (j === pattern.length) {\n            return i - j;\n        } else if (i < text.length && pattern[j] !== text[i]) {\n            if (j !== 0) {\n                j = lps[j - 1];\n            } else {\n                i = i + 1;\n            }\n        }\n    }\n    return -1;\n}\n\nfunction computeLPSArray(pattern) {\n    const lps = new Array(pattern.length).fill(0);\n    let length = 0;  // length of the previous longest prefix suffix\n    let i = 1;\n    while (i < pattern.length) {\n        if (pattern[i] === pattern[length]) {\n            length++;\n            lps[i] = length;\n            i++;\n        } else {\n            if (length !== 0) {\n                length = lps[length - 1];\n            } else {\n                lps[i] = 0;\n                i++;\n            }\n        }\n    }\n    return lps;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst text = input[0];\nconst pattern = input[1];\nconsole.log(kmpSearch(text, pattern));",
		},
		createdAt: "2025-06-06T18:48:17.881Z",
		updatedAt: "2025-06-06T18:48:17.881Z",
		solvedBy: [],
	},
	{
		id: "69e48a8a-0bc8-4550-af9a-157e9e19947c",
		title: "Convex Hull Graham Scan",
		description:
			"Find the convex hull of a set of points in a 2D plane using Graham scan algorithm.",
		difficulty: "HARD",
		tags: ["geometry", "convex-hull", "algorithm", "math", "Snapchat"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "6\n0 3\n1 1\n2 2\n4 4\n0 0\n1 2",
				output: "0 0\n4 4\n0 3",
				explanation: "Points forming the convex hull",
			},
			PYTHON: {
				input: "4\n0 0\n1 0\n1 1\n0 1",
				output: "0 0\n1 0\n1 1\n0 1",
				explanation: "Square convex hull",
			},
			JAVASCRIPT: {
				input: "5\n0 0\n1 1\n2 2\n3 3\n4 0",
				output: "0 0\n4 0\n3 3",
				explanation: "Triangle convex hull",
			},
		},
		constraints: "1 ≤ n ≤ 10^5, -10^4 ≤ x, y ≤ 10^4",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "7\n0 0\n1 0\n2 0\n1 1\n2 1\n0 2\n2 2",
				output: "0 0\n2 0\n2 2\n0 2",
			},
			{
				input: "3\n0 0\n1 1\n2 2",
				output: "0 0\n2 2",
			},
			{
				input: "1\n5 5",
				output: "5 5",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    static class Point {\n        int x, y;\n        Point(int x, int y) {\n            this.x = x;\n            this.y = y;\n        }\n    }\n    \n    public static List<Point> convexHull(Point[] points) {\n        // Write your code here\n        \n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Point[] points = new Point[n];\n        for (int i = 0; i < n; i++) {\n            int x = sc.nextInt();\n            int y = sc.nextInt();\n            points[i] = new Point(x, y);\n        }\n        \n        List<Point> hull = convexHull(points);\n        for (Point p : hull) {\n            System.out.println(p.x + " " + p.y);\n        }\n    }\n}',
			PYTHON: "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\ndef convex_hull(points):\n    # Write your code here\n    \n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\npoints = []\nfor i in range(1, n + 1):\n    x, y = map(int, input_lines[i].split())\n    points.append(Point(x, y))\n\nhull = convex_hull(points)\nfor p in hull:\n    print(p.x, p.y)",
			JAVASCRIPT:
				"const fs = require('fs');\n\nclass Point {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n}\n\nfunction convexHull(points) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst points = [];\nfor (let i = 1; i <= n; i++) {\n    const [x, y] = input[i].split(' ').map(Number);\n    points.push(new Point(x, y));\n}\n\nconst hull = convexHull(points);\nfor (const p of hull) {\n    console.log(p.x, p.y);\n}",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    static class Point {\n        int x, y;\n        Point(int x, int y) {\n            this.x = x;\n            this.y = y;\n        }\n    }\n    \n    public static List<Point> convexHull(Point[] points) {\n        if (points == null || points.length < 3) {\n            return Arrays.asList(points);\n        }\n        \n        int n = points.length;\n        Arrays.sort(points, (p1, p2) -> {\n            int compare = Integer.compare(p1.x, p2.x);\n            if (compare == 0) return Integer.compare(p1.y, p2.y);\n            return compare;\n        });\n        \n        List<Point> upper = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            while (upper.size() >= 2 && !isCounterClockwise(upper.get(upper.size() - 2), upper.get(upper.size() - 1), points[i])) {\n                upper.remove(upper.size() - 1);\n            }\n            upper.add(points[i]);\n        }\n        \n        List<Point> lower = new ArrayList<>();\n        for (int i = n - 1; i >= 0; i--) {\n            while (lower.size() >= 2 && !isCounterClockwise(lower.get(lower.size() - 2), lower.get(lower.size() - 1), points[i])) {\n                lower.remove(lower.size() - 1);\n            }\n            lower.add(points[i]);\n        }\n        \n        upper.remove(upper.size() - 1);\n        lower.remove(lower.size() - 1);\n        upper.addAll(lower);\n        return upper;\n    }\n    \n    private static boolean isCounterClockwise(Point a, Point b, Point c) {\n        return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) > 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Point[] points = new Point[n];\n        for (int i = 0; i < n; i++) {\n            int x = sc.nextInt();\n            int y = sc.nextInt();\n            points[i] = new Point(x, y);\n        }\n        \n        List<Point> hull = convexHull(points);\n        for (Point p : hull) {\n            System.out.println(p.x + " " + p.y);\n        }\n    }\n}',
			PYTHON: "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\ndef convex_hull(points):\n    if not points or len(points) < 3:\n        return points\n    \n    n = len(points)\n    points.sort(key=lambda p: (p.x, p.y))\n    \n    def is_counter_clockwise(a, b, c):\n        return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) > 0\n    \n    upper = []\n    for i in range(n):\n        while len(upper) >= 2 and not is_counter_clockwise(upper[-2], upper[-1], points[i]):\n            upper.pop()\n        upper.append(points[i])\n    \n    lower = []\n    for i in range(n - 1, -1, -1):\n        while len(lower) >= 2 and not is_counter_clockwise(lower[-2], lower[-1], points[i]):\n            lower.pop()\n        lower.append(points[i])\n    \n    upper.pop()\n    lower.pop()\n    return upper + lower\n\nimport sys\ninput_lines = sys.stdin.read().strip().split('\\n')\nn = int(input_lines[0])\npoints = []\nfor i in range(1, n + 1):\n    x, y = map(int, input_lines[i].split())\n    points.append(Point(x, y))\n\nhull = convex_hull(points)\nfor p in hull:\n    print(p.x, p.y)",
			JAVASCRIPT:
				"const fs = require('fs');\n\nclass Point {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n}\n\nfunction convexHull(points) {\n    if (!points || points.length < 3) {\n        return points;\n    }\n    \n    const n = points.length;\n    points.sort((a, b) => a.x === b.x ? a.y - b.y : a.x - b.x);\n    \n    function isCounterClockwise(a, b, c) {\n        return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) > 0;\n    }\n    \n    const upper = [];\n    for (let i = 0; i < n; i++) {\n        while (upper.length >= 2 && !isCounterClockwise(upper[upper.length - 2], upper[upper.length - 1], points[i])) {\n            upper.pop();\n        }\n        upper.push(points[i]);\n    }\n    \n    const lower = [];\n    for (let i = n - 1; i >= 0; i--) {\n        while (lower.length >= 2 && !isCounterClockwise(lower[lower.length - 2], lower[lower.length - 1], points[i])) {\n            lower.pop();\n        }\n        lower.push(points[i]);\n    }\n    \n    upper.pop();\n    lower.pop();\n    return upper.concat(lower);\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim().split('\\n');\nconst n = parseInt(input[0]);\nconst points = [];\nfor (let i = 1; i <= n; i++) {\n    const [x, y] = input[i].split(' ').map(Number);\n    points.push(new Point(x, y));\n}\n\nconst hull = convexHull(points);\nfor (const p of hull) {\n    console.log(p.x, p.y);\n}",
		},
		createdAt: "2025-06-06T18:49:05.984Z",
		updatedAt: "2025-06-06T18:49:05.984Z",
		solvedBy: [],
	},
	{
		id: "1fdf17dc-f840-453d-90f8-4c0db0518f81",
		title: "Manacher's Algorithm Palindromes",
		description:
			"Find all palindromic substrings in a string using Manacher's algorithm in linear time.",
		difficulty: "HARD",
		tags: ["string", "palindrome", "manacher", "algorithm", "Palantir"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "ababa",
				output: "9",
				explanation: "Palindromes: a, b, a, b, a, aba, bab, aba, ababa",
			},
			PYTHON: {
				input: "aaa",
				output: "6",
				explanation: "Palindromes: a, a, a, aa, aa, aaa",
			},
			JAVASCRIPT: {
				input: "abc",
				output: "3",
				explanation: "Palindromes: a, b, c",
			},
		},
		constraints: "1 ≤ string length ≤ 10^5",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "racecar",
				output: "10",
			},
			{
				input: "abccba",
				output: "9",
			},
			{
				input: "a",
				output: "1",
			},
		],
		codeSnippets: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int countPalindromes(String s) {\n        // Write your code here\n        \n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(countPalindromes(s));\n    }\n}",
			PYTHON: "def count_palindromes(s):\n    # Write your code here\n    \n\ns = input().strip()\nprint(count_palindromes(s))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction countPalindromes(s) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconsole.log(countPalindromes(input));",
		},
		referenceSolutions: {
			JAVA: "import java.util.*;\n\npublic class Main {\n    public static int countPalindromes(String s) {\n        String processed = preprocess(s);\n        int n = processed.length();\n        int[] P = new int[n];\n        int center = 0, right = 0;\n        \n        for (int i = 0; i < n; i++) {\n            int mirror = 2 * center - i;\n            \n            if (i < right) {\n                P[i] = Math.min(right - i, P[mirror]);\n            }\n            \n            try {\n                while (processed.charAt(i + P[i] + 1) == processed.charAt(i - P[i] - 1)) {\n                    P[i]++;\n                }\n            } catch (StringIndexOutOfBoundsException e) {\n                // Do nothing\n            }\n            \n            if (i + P[i] > right) {\n                center = i;\n                right = i + P[i];\n            }\n        }\n        \n        int count = 0;\n        for (int len : P) {\n            count += (len + 1) / 2;\n        }\n        return count;\n    }\n    \n    private static String preprocess(String s) {\n        StringBuilder sb = new StringBuilder();\n        sb.append('^');\n        for (char c : s.toCharArray()) {\n            sb.append('#').append(c);\n        }\n        sb.append(\"#$\");\n        return sb.toString();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(countPalindromes(s));\n    }\n}",
			PYTHON: "def count_palindromes(s):\n    def preprocess(s):\n        return '^#' + '#'.join(s) + '#$'\n    \n    processed = preprocess(s)\n    n = len(processed)\n    P = [0] * n\n    center = right = 0\n    \n    for i in range(1, n - 1):\n        mirror = 2 * center - i\n        \n        if i < right:\n            P[i] = min(right - i, P[mirror])\n        \n        try:\n            while processed[i + P[i] + 1] == processed[i - P[i] - 1]:\n                P[i] += 1\n        except IndexError:\n            pass\n        \n        if i + P[i] > right:\n            center, right = i, i + P[i]\n    \n    return sum((length + 1) // 2 for length in P)\n\ns = input().strip()\nprint(count_palindromes(s))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction countPalindromes(s) {\n    function preprocess(s) {\n        return '^#' + s.split('').join('#') + '#$';\n    }\n    \n    const processed = preprocess(s);\n    const n = processed.length;\n    const P = new Array(n).fill(0);\n    let center = 0, right = 0;\n    \n    for (let i = 1; i < n - 1; i++) {\n        const mirror = 2 * center - i;\n        \n        if (i < right) {\n            P[i] = Math.min(right - i, P[mirror]);\n        }\n        \n        try {\n            while (processed[i + P[i] + 1] === processed[i - P[i] - 1]) {\n                P[i]++;\n            }\n        } catch (e) {\n            // Do nothing\n        }\n        \n        if (i + P[i] > right) {\n            center = i;\n            right = i + P[i];\n        }\n    }\n    \n    return P.reduce((count, length) => count + Math.floor((length + 1) / 2), 0);\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconsole.log(countPalindromes(input));",
		},
		createdAt: "2025-06-06T18:49:21.960Z",
		updatedAt: "2025-06-06T18:49:21.960Z",
		solvedBy: [],
	},
	{
		id: "59ef7a73-b63e-422f-a4f9-64965b4581be",
		title: "Suffix Array Construction",
		description:
			"Construct suffix array for a given string using efficient algorithm.",
		difficulty: "HARD",
		tags: ["string", "suffix-array", "sorting", "algorithm", "Dropbox"],
		userId: "b3015105-8bfb-465e-b8df-3873010b4c6c",
		examples: {
			JAVA: {
				input: "banana",
				output: "5 3 1 0 4 2",
				explanation: "Suffix array indices for sorted suffixes",
			},
			PYTHON: {
				input: "abab",
				output: "2 0 3 1",
				explanation: "Sorted suffixes: ab, abab, b, bab",
			},
			JAVASCRIPT: {
				input: "abc",
				output: "0 1 2",
				explanation: "Suffixes: abc, bc, c",
			},
		},
		constraints: "1 ≤ string length ≤ 10^5",
		hints: null,
		editorial: null,
		testcases: [
			{
				input: "mississippi",
				output: "10 7 4 1 0 9 8 6 3 5 2",
			},
			{
				input: "aaa",
				output: "2 1 0",
			},
			{
				input: "abcdef",
				output: "0 1 2 3 4 5",
			},
		],
		codeSnippets: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static int[] buildSuffixArray(String s) {\n        // Write your code here\n        \n        return new int[0];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        int[] result = buildSuffixArray(s);\n        for (int i = 0; i < result.length; i++) {\n            System.out.print(result[i]);\n            if (i < result.length - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "def build_suffix_array(s):\n    # Write your code here\n    \n\ns = input().strip()\nresult = build_suffix_array(s)\nprint(' '.join(map(str, result)))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction buildSuffixArray(s) {\n    // Write your code here\n    \n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst result = buildSuffixArray(input);\nconsole.log(result.join(' '));",
		},
		referenceSolutions: {
			JAVA: 'import java.util.*;\n\npublic class Main {\n    public static int[] buildSuffixArray(String s) {\n        int n = s.length();\n        Integer[] suffixes = new Integer[n];\n        for (int i = 0; i < n; i++) {\n            suffixes[i] = i;\n        }\n        \n        Arrays.sort(suffixes, (a, b) -> s.substring(a).compareTo(s.substring(b)));\n        \n        int[] result = new int[n];\n        for (int i = 0; i < n; i++) {\n            result[i] = suffixes[i];\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        int[] result = buildSuffixArray(s);\n        for (int i = 0; i < result.length; i++) {\n            System.out.print(result[i]);\n            if (i < result.length - 1) System.out.print(" ");\n        }\n    }\n}',
			PYTHON: "def build_suffix_array(s):\n    n = len(s)\n    suffixes = list(range(n))\n    suffixes.sort(key=lambda i: s[i:])\n    return suffixes\n\ns = input().strip()\nresult = build_suffix_array(s)\nprint(' '.join(map(str, result)))",
			JAVASCRIPT:
				"const fs = require('fs');\n\nfunction buildSuffixArray(s) {\n    const n = s.length;\n    const suffixes = Array.from({length: n}, (_, i) => i);\n    suffixes.sort((a, b) => s.substring(a).localeCompare(s.substring(b)));\n    return suffixes;\n}\n\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst result = buildSuffixArray(input);\nconsole.log(result.join(' '));",
		},
		createdAt: "2025-06-06T18:49:39.791Z",
		updatedAt: "2025-06-06T18:49:39.791Z",
		solvedBy: [],
	},
];


export default problems;