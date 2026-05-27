import type { ISong } from "../interfaces/song.interface";

export class TrieNode {
  value: string | null;
  children: Record<string, TrieNode>;
  isEndOfWord: boolean;
  song: ISong | null;

  constructor(value: string | null) {
    this.value = value;
    this.children = {};
    this.isEndOfWord = false;
    this.song = null;
  }
}