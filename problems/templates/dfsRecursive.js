function dfs (u, parent, adj, seen = new Set()) {
  seen.add(u)
  for (const v of adj[u] ?? []) {
    if (v !== parent && !seen.has(v)) dfs(v, u, adj, seen)
  }
}
