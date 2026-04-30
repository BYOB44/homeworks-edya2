import type { Product } from "../models/product";

class TrieNode {
  children: Map<string, TrieNode>;
  products: Product[];

  constructor() {
    this.children = new Map();
    this.products = [];
  }
}

export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(product: Product): void {
    let node = this.root;

    for (const char of product.name.toLowerCase()) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
      node.products.push(product); //se guarda el producto por prefijo 
    }
  }

  search(prefix: string): Product[] {
    let node = this.root;

    for (const char of prefix.toLowerCase()) {
      if (!node.children.has(char)) return [];
      node = node.children.get(char)!;
    }

    return node.products;
  }
}