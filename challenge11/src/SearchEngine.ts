import { Trie } from "./structures/Trie";
import { MaxHeap } from "./structures/MaxHeap";
import type { Product } from "./models/product";

export class SearchEngine {
  private trie: Trie;

  constructor() {
    this.trie = new Trie();
  }

  insert(name: string, popularity: number): void {
    this.trie.insert({ name, popularity });
  }

 searchTopK(prefix: string, k: number): Product[] {
  const results = this.trie.search(prefix);

  const unique = Array.from(
    new Map(results.map(p => [p.name, p])).values()
  );

  const heap = new MaxHeap();
  unique.forEach(p => heap.insert(p));

  const topK: Product[] = [];
  for (let i = 0; i < k; i++) {
    const max = heap.extractMax();
    if (!max) break;
    topK.push(max);
  }

  return topK; 
  }


}