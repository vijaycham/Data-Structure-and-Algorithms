/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  let graph = {};
  for (let [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }
  for (let node in graph) {
    graph[node].sort();
  }

  let path = [];
  let dfs = (curr) => {
    while (graph[curr] && graph[curr].length) {
      let neighbor = graph[curr].shift(); 
      dfs(neighbor);
    }
    path.push(curr);
  };

  dfs("JFK");
  return path.reverse(); 
};