import type { ISong } from "../interfaces/song.interface";
import { TrieNode } from "./TrieNode";

export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode(null);
  }

  private normalizeText(text: string): string {
    return text.trim().toLowerCase();
  }

  insert(song: ISong): void {
    const word = this.normalizeText(song.title);
    let current: TrieNode = this.root;

    for (const character of word) {
      if (current.children[character] === undefined) {
        current.children[character] = new TrieNode(character);
      }

      current = current.children[character];
    }

    current.isEndOfWord = true;
    current.song = song;
  }

  search(title: string): boolean {
    const word = this.normalizeText(title);
    let current: TrieNode = this.root;

    for (const character of word) {
      if (current.children[character] === undefined) {
        return false;
      }

      current = current.children[character];
    }

    return current.isEndOfWord;
  }

  getSuggestions(prefix: string): ISong[] {
    const cleanPrefix = this.normalizeText(prefix);
    const suggestions: ISong[] = [];

    if (cleanPrefix.length === 0) {
      return suggestions;
    }

    let current: TrieNode = this.root;

    for (const character of cleanPrefix) {
      if (current.children[character] === undefined) {
        return suggestions;
      }

      current = current.children[character];
    }

    this.collectSongs(current, suggestions);

    return suggestions;
  }

  private collectSongs(node: TrieNode, suggestions: ISong[]): void {
    if (node.isEndOfWord && node.song !== null) {
      suggestions.push(node.song);
    }

    for (const character in node.children) {
      this.collectSongs(node.children[character], suggestions);
    }
  }
}