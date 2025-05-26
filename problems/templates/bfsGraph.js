function bfs (adj, start) {
  const seen = new Set([start])
  const q = [start]
  while (q.length) {
    const node = q.shift()
    for (const nei of adj[node] ?? []) {
      if (!seen.has(nei)) {
        seen.add(nei)
        q.push(nei)
      }
    }
  }
  return seen
}
