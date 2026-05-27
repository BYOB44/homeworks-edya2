export class SongGraph {
  private nodes: string[];
  private adjList: Record<string, string[]>;

  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node: string): void {
    if (!this.searchNode(node)) {
      this.nodes.push(node);
      this.adjList[node] = [];
    }
  }

  addEdge(nodeA: string, nodeB: string): void {
    if (!this.searchNode(nodeA)) {
      this.addNode(nodeA);
    }

    if (!this.searchNode(nodeB)) {
      this.addNode(nodeB);
    }

    if (!this.adjList[nodeA].includes(nodeB)) {
      this.adjList[nodeA].push(nodeB);
    }

    if (!this.adjList[nodeB].includes(nodeA)) {
      this.adjList[nodeB].push(nodeA);
    }
  }

  searchNode(node: string): boolean {
    return this.nodes.includes(node);
  }

  getRecommendations(node: string): string[] {
    if (!this.searchNode(node)) {
      return [];
    }

    return this.adjList[node];
  }

  printGraph(): Record<string, string[]> {
    return this.adjList;
  }
}