# DSA‑Sprint

An end‑to‑end 21‑day Data Structures & Algorithms sprint template using Node.js, VS Code + LeetCode extension, Obsidian, Git, and Anki.

## 📁 Repository Structure

```
~/dsa-sprint/        
├── LICENSE
├── mocks               # Mock interview problems
├── notes               # Obsidian vault (daily & retro notes)
│   ├── 00-patterns
│   ├── 01-daily
│   ├── 02-retro
│   └── 03-star
├── problems            # LeetCode problem files
│   └── templates
│       ├── base.js
│       ├── bfsGraph.js
│       ├── binarySearch.js
│       ├── dfsRecursive.js
│       └── minHeap.js
├── README.md
├── scripts
│   └── genSnippets.js
└── Templates           # Obsidian vault templates
    ├── daily-dsa-note.md.md
    └── retro-entry.md.md
```

## 0️⃣ Environment Setup

1. **Node.js LTS**
   ```bash
   node -v   # v22.x.x
   npm -v
   ```
2. **VS Code**
   - LeetCode extension installed & logged in
   - Snippet installed
3. **VSCode Settings** (`~/.vscode/settings.json`):
   ```json
   {
     "leetcode.defaultLanguage": "javascript",
     "leetcode.workspaceFolder": "~/dsa-sprint/problems",
     "leetcode.nodePath": "/full/path/to/node"
   }
   ```
4. **Git**
   ```bash
   mkdir -p ~/dsa-sprint/{problems,notes,templates,mocks}
   cd ~/dsa-sprint && git init
   ```
5. **Obsidian**
   - Vault in `~/dsa-sprint/notes`
   - Templates: `daily-dsa-note.md`, `retro-entry.md`
6. **Anki**
   - Deck: `LeetCode-JS`

## 1️⃣ Daily Micro‑Workflow (Mon–Sat, ~3–4 h/day)

| Step | Task                                          | ⏱️   |
| :--: | :-------------------------------------------- | :--- |
|  0   | Warm‑up: Re‑code yesterday’s toughest problem | 15 m |
|  1   | Pull problem (Explorer → Show Problem)        | 2 m  |
|  2   | Boilerplate (type snippet + Tab)              | 1 m  |
|  3   | Plan: scribble pattern & edge cases           | 7 m  |
|  4   | Code & run (F5 or `node file.js`)             | 25 m |
|  5   | Test & submit                                 | 5 m  |
|  6   | Document in Obsidian (daily note)             | 5 m  |
|  7   | Create 2–3 Anki cards                         | 5 m  |
|  8   | Git commit & push                             | 3 m  |
|  9   | Timed drill (Week 2+; 3 medias back‑to‑back)  | 45 m |
|  10  | Retro entry (retro note)                      | 5 m  |

> **Tip:** Skip the timed drill on Day 1; aim to keep total ≤ 4 h.

## 2️⃣ 21‑Day Syllabus

### Week 1 – Foundations

- **Day 1**: Arrays & Hash‑Map
  - ★ [1] Two Sum • ★ [217] Contains Duplicate • ★ [242] Valid Anagram • ★ [349] Intersection • ★★ [560] Subarray Sum = K • ★★ [15] 3‑Sum
- **Day 2**: Sliding Window
  - ★★ [3] Longest Substring w/o Repeat • ★★ [424] Longest Repeating Char Replacement • ★★ [567] Permutation in String • ★★ [76] Minimum Window Substring
- **Day 3**: Two Pointers
  - ★ [125] Valid Palindrome • ★ [344] Reverse String • ★★ [167] Two Sum II • ★★ [11] Container w/ Most Water • ★★ [18] 4‑Sum
- **Day 4**: Prefix / Running Sum
  - ★★ [53] Maximum Subarray • ★★ [1423] Maximum Points from Cards • ★★ [918] Maximum Sum Circular
- **Day 5**: Sorting & Binary Search
  - ★ [704] Binary Search • ★★ [33] Search in Rotated Sorted Array • ★★ [34] Find First/Last Position • ★★ [981] Time Based Key‑Value Store
- **Day 6**: Review
  - Re‑solve your 4 slowest starred problems
- **Day 7**: Mock 0 + STAR
  - 1 question from Contest tab; draft 2 STAR stories

### Week 2 – Classic DS & Recursion

- **Day 8**: Linked Lists
  - ★ [206] Reverse Linked List • ★ [141] Linked List Cycle • ★★ [19] Remove Nth Node • ★★ [143] Reorder List
- **Day 9**: Stack & Monotonic Stack
  - ★ [20] Valid Parentheses • ★★ [739] Daily Temperatures • ★★ [84] Largest Rectangle • ★★ [155] Min Stack
- **Day 10**: Trees
  - ★ [94] Inorder Traversal • ★ [102] Level‑Order Traversal • ★★ [105] Construct Binary Tree from Preorder & Inorder • ★★ [230] Kth Smallest in BST
- **Day 11**: Backtracking
  - ★ [78] Subsets • ★★ [46] Permutations • ★★ [51] N‑Queens • ★★ [79] Word Search
- **Day 12**: Graph BFS/DFS
  - ★ [200] Number of Islands • ★★ [133] Clone Graph • ★★ [417] Pacific Atlantic Water Flow • ★★ [127] Word Ladder
- **Day 13**: Heap & Priority Queue
  - ★ [215] Kth Largest Element in an Array • ★★ [347] Top K Frequent Elements • ★★ [23] Merge K Sorted Lists • ★★ [295] Find Median from Data Stream
- **Day 14**: Mock 1
  - LeetCode Interview → “Facebook” (45 min)

### Week 3 – DP, Graph & Conditioning

- **Day 15**: Intro to DP
  - ★ [70] Climbing Stairs • ★★ [198] House Robber • ★★ [213] House Robber II • ★★ [322] Coin Change
- **Day 16**: Unbounded DP
  - ★★ [518] Coin Change II • ★★ [279] Perfect Squares • ★★ [368] Largest Divisible Subset
- **Day 17**: String DP
  - ★★ [1143] Longest Common Subsequence • ★★ [72] Edit Distance • ★★ [647] Palindromic Substrings
- **Day 18**: Dijkstra & Topo Sort
  - ★★ [743] Network Delay Time • ★★ [787] Cheapest Flights Within K Stops • ★★ [207] Course Schedule I • ★★ [210] Course Schedule II
- **Day 19**: Bit Manipulation & Math
  - ★ [136] Single Number • ★★ [371] Sum of Two Integers • ★ [191] Number of 1 Bits • ★★ [338] Counting Bits
- **Day 20**: Mock 2 + STAR
  - External mock (Pramp/io) + finish STAR grid
- **Day 21**: Capstone
  - Pick 20 favourite problems → hide descriptions → re‑code blind (≤ 2 min each)

## 🔄 3️⃣ Weekly Ritual (Every Sunday)

- Rewrite pattern cheat‑sheet by hand in Obsidian (`00-patterns/patterns.md`)
- Review `02-retro/retro.md`: cluster “Tripped” themes → schedule fix‐blocks
- Clear all due Anki cards
- Star/unstar problems in Explorer based on confidence

## 🛠️ 4️⃣ Memory & Tracking

- **Obsidian Vault** (`~/dsa-sprint/notes`):
  - `00-patterns/patterns.md`
  - `01-daily/DD-MM-YYYY.md` (uses `daily-dsa-note.md`)
  - `02-retro/DD-MM-YYYY.md` (uses `retro-entry.md`)
  - `03-star/star.md`
- **Anki Deck**: `LeetCode-JS` (pattern, transition, edge-case cards)
- **Git**: one commit per problem & daily note; tags `week-1`/`week-2`/`week-3`

## 5️⃣ JS Boilerplates & Snippets (`~/problems/templates/`)

- **base.js** (`fast`)
  ```js
  /* eslint-disable no-console */
  const fs = require('fs')
  const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/)
  let idx = 0,
    next = () => input[idx++]
  // ---------- solve ----------
  function solve() {
    /*…*/
  }
  solve()
  ```
- **binarySearch.js** (`bsearch`)
- **bfsGraph.js** (`bfs`)
- **dfsRecursive.js** (`dfs`)
- **minHeap.js** (`minheap`)

## 🤔 Tips & Tactics

- On stuck: 20 min cap → read hint → 10 min retry → skim editorial → code from blank
- Sketch on paper/whiteboard
- Rubber‑duck: explain aloud before typing
- Log every “stuck” in `02-retro/retro.md` to spot patterns

---
