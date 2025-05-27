// scripts/genSnippets.js
const fs = require('fs')
const path = require('path')

// Map each filename to its snippet metadata
const configs = [
  {
    file: 'base.js',
    name: 'Fast IO Boilerplate',
    prefix: 'basefast',
    desc: 'Fast IO (prefix fast)'
  },
  {
    file: 'binarySearch.js',
    name: 'Binary Search Lower Bound',
    prefix: 'bsearch',
    desc: 'lowerBound binary search'
  },
  {
    file: 'bfsGraph.js',
    name: 'BFS on Graph',
    prefix: 'bfs',
    desc: 'Breadth-first search'
  },
  {
    file: 'dfsRecursive.js',
    name: 'Recursive DFS',
    prefix: 'dfs',
    desc: 'Depth-first search'
  },
  {
    file: 'minHeap.js',
    name: 'Min-Heap Class',
    prefix: 'minheap',
    desc: 'Min-heap implementation'
  }
]

const snippets = {}
for (const { file, name, prefix, desc } of configs) {
  const lines = fs
    .readFileSync(
      path.join(__dirname, '..', 'problems', 'templates', file),
      'utf8'
    )
    .replace(/\r\n/g, '\n') // normalize line endings
    .split('\n')
  snippets[name] = {
    prefix,
    body: lines,
    description: desc
  }
}

// Output to .vscode/javascript.json
const outDir = path.join(__dirname, '..', '.vscode')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
fs.writeFileSync(
  path.join(outDir, 'javascript.json.code-snippets'),
  JSON.stringify(snippets, null, 2),
  'utf8'
)
console.log('✅ snippets written to .vscode/javascript.json.code-snippets')
