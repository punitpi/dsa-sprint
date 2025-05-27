# DSA‑Sprint

An end‑to‑end 6 week Data Structures & Algorithms sprint template using Node.js, VS Code + LeetCode extension, Obsidian, Git, and Anki.

## 📁 Repository Structure

```
~/dsa-sprint/        
├── LICENSE
├── mocks               # Mock interview problems
├── notes               # Obsidian vault (daily & retro notes)
│   ├── 00-patterns
│   │   └── patterns.md.md
│   ├── 01-daily
│   ├── 02-retro
│   └── 03-star
│       └── star.md.md
	
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

## 1️⃣ Daily Micro‑Workflow (Mon–Sat, ~1–2 h/day)

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
|  9   | Timed drill (optional)                        | 45 m |
|  10  | Retro entry (retro note)                      | 5 m  |

> **Tip:** Skip the timed drill on Day 1; aim to keep total ≤ 4 h.

## 2️⃣ 6‑Weeks Syllabus

### Week 1 – Arrays + Hash Map <br><small>filters: `#array`, `#hash-table`</small>
Add this when you complete the day successfuly ✅

| Day | Main Problems (stop at 2 per day)              | Bonus                               | Status            |
| --- | ---------------------------------------------- | ----------------------------------- | ----------------- |
| 1   | ★ 1 Two‑Sum • ★★ 560 Subarray = K              | ★ 349 Intersection                  | <center></center> |
| 2   | ★ 217 Contains Duplicate • ★ 242 Valid Anagram | (R) Re‑solve yesterday’s slower one | <center></center> |
| 3   | ★★ 15 3‑Sum                                    | ★ 1 (speed run)                     | <center></center> |
| 4   | (R) Any starred review • ★ 349 or 242          | —                                   | <center></center> |
| 5   | ★★ 15 (2nd approach) • ★★ 560 (2nd approach)   | —                                   | <center></center> |
| 6   | Lightning Mock (1 easy + 1 medium random)      | Fill daily & retro notes            | <center></center> |

---

### Week 2 – Sliding Window & Two Pointers <br><small>filters: `#sliding-window`, `#two-pointers`</small>

| Day | Main Problems                                                  | Bonus                             | Status            |
| --- | -------------------------------------------------------------- | --------------------------------- | ----------------- |
| 7   | ★★ 3 Longest Substring                                         | ★★ 125 Valid Palindrome (two‑ptr) | <center></center> |
| 8   | ★★ 424 Longest Repeating • ★★ 567 Permutation in String        | —                                 | <center></center> |
| 9   | ★★ 76 Minimum Window                                           | (R) Re‑solve 3 (speed)            | <center></center> |
| 10  | ★★ 167 Two‑Sum II • ★ 344 Reverse String                       | —                                 | <center></center> |
| 11  | ★★ 11 Container w/ Most Water                                  | ★★ 125 (alt approach)             | <center></center> |
| 12  | Timed Pair Drill: solve 424 & 567 back‑to‑back (≤30 min total) | Retro entry                       | <center></center> |

---

### Week 3 – Prefix‑Sum / Binary Search <br><small>filters: `keyword:"Kadane"`, `#binary-search`</small>

| Day | Main Problems                                                        | Bonus                          | Status            |
| --- | -------------------------------------------------------------------- | ------------------------------ | ----------------- |
| 13  | ★★ 53 Max Subarray (Kadane)                                          | ★★ 918 Circular Subarray       | <center></center> |
| 14  | ★★ 1423 Max Points from Cards                                        | (R) 53 rewrite                 | <center></center> |
| 15  | ★ 704 Binary Search • ★★ 33 Search Rotated                           | —                              | <center></center> |
| 16  | ★★ 34 First/Last Position                                            | ★★ 981 Time‑Based KV (if time) | <center></center> |
| 17  | ★★ 918 or 981 (whichever left)                                       | (R) Any slow binary‑search Q   | <center></center> |
| 18  | Mock 1 – LeetCode “Interview” set (FB or Amazon) • finish daily note | —                              | <center></center> |
| 19  | Pattern sheet rows → Kadane + 3 binary‑search templates • Clear Anki | —                              | <center></center> |

---

### Week 4 – Linked List → Stack → Tree

| Day | Main Problems                                                     | Bonus               | Status            |
| --- | ----------------------------------------------------------------- | ------------------- | ----------------- |
| 20  | ★ 206 Reverse LL • ★ 141 Cycle                                    | —                   | <center></center> |
| 21  | ★★ 19 Remove Nth Node                                             | ★★ 143 Reorder List | <center></center> |
| 22  | ★ 20 Valid Parentheses • ★★ 155 Min Stack                         | —                   | <center></center> |
| 23  | ★★ 739 Daily Temperatures                                         | (R) 20 speed        | <center></center> |
| 24  | ★ 94 In‑order Traversal • ★ 102 Level‑Order                       | —                   | <center></center> |
| 25  | Concept mini‑lab: Draw pointer diagrams for 19 & 143 • Retro note | —                   | <center></center> |

---

### Week 5 – Graphs & Backtracking

| Day | Main Problems                                | Bonus  | Status            |
| --- | -------------------------------------------- | ------ | ----------------- |
| 26  | ★ 78 Subsets • ★★ 46 Permutations            | —      | <center></center> |
| 27  | ★★ 51 N‑Queens                               | (R) 78 | <center></center> |
| 28  | ★★ 79 Word Search                            | —      | <center></center> |
| 29  | ★ 200 Number of Islands • ★★ 133 Clone Graph | —      | <center></center> |
| 30  | ★★ 417 Pacific Atlantic • ★★ 127 Word Ladder | —      | <center></center> |
| 31  | ★ 215 Kth Largest • ★★ 347 Top K Frequent    | Retro  | <center></center> |

---

### Week 6 – DP, Dijkstra, Bit Tricks

| Day | Main Problems                                                                                        | Bonus                  | Status            |
| --- | ---------------------------------------------------------------------------------------------------- | ---------------------- | ----------------- |
| 32  | ★ 70 Climb Stairs • ★★ 198 House Robber                                                              | —                      | <center></center> |
| 33  | ★★ 213 House Robber II                                                                               | ★★ 322 Coin Change     | <center></center> |
| 34  | ★★ 518 Coin Change II                                                                                | ★★ 279 Perfect Squares | <center></center> |
| 35  | ★★ 1143 LCS • ★★ 72 Edit Distance                                                                    | —                      | <center></center> |
| 36  | ★★ 743 Network Delay • ★★ 207 Course Sched I                                                         | —                      | <center></center> |
| 37  | ★★ 210 Course Sched II • ★ 136 Single Number • ★★ 371 Sum of Two Ints • ★★ 338 Counting Bits • Retro | —                      | <center></center> |

---

### Week 7 – Mock & Capstone

- **Day 38 **
  - 45‑min external mock → debrief
  - Pick any 15 hardest solved mediums → re‑code blindfolded (≤20 min each)
  - Review full STAR grid (behavioural stories)



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
