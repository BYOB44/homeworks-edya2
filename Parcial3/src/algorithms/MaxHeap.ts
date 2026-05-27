import type { ISong } from "../interfaces/song.interface";

export class MaxHeap {
  private heap: ISong[];

  constructor(initialSongs: ISong[] = []) {
    this.heap = [...initialSongs];
    this.heapify();
  }

  push(song: ISong): void {
    this.heap.push(song);
    this.percolateUp();
  }

  pop(): ISong | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const maxSong: ISong = this.heap[0];
    const lastSong: ISong | undefined = this.heap.pop();

    if (lastSong !== undefined) {
      this.heap[0] = lastSong;
      this.percolateDown(0);
    }

    return maxSong;
  }

  peek(): ISong | undefined {
    return this.heap[0];
  }

  getTopK(quantity: number): ISong[] {
    const copyHeap = new MaxHeap(this.heap);
    const result: ISong[] = [];

    for (let i = 0; i < quantity; i++) {
      const song = copyHeap.pop();

      if (song === undefined) {
        break;
      }

      result.push(song);
    }

    return result;
  }

  size(): number {
    return this.heap.length;
  }

  toArray(): ISong[] {
    return [...this.heap];
  }

  private heapify(): void {
    const start: number = Math.floor((this.heap.length - 2) / 2);

    for (let i = start; i >= 0; i--) {
      this.percolateDown(i);
    }
  }

  private percolateUp(): void {
    let currentIndex: number = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex: number = Math.floor((currentIndex - 1) / 2);

      if (this.heap[currentIndex].popularity > this.heap[parentIndex].popularity) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  private percolateDown(index: number): void {
    let currentIndex: number = index;

    while (2 * currentIndex + 1 < this.heap.length) {
      const leftChildIndex: number = 2 * currentIndex + 1;
      const rightChildIndex: number = 2 * currentIndex + 2;

      let biggestChildIndex: number = leftChildIndex;

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].popularity > this.heap[leftChildIndex].popularity
      ) {
        biggestChildIndex = rightChildIndex;
      }

      if (this.heap[biggestChildIndex].popularity > this.heap[currentIndex].popularity) {
        this.swap(biggestChildIndex, currentIndex);
        currentIndex = biggestChildIndex;
      } else {
        break;
      }
    }
  }

  private swap(firstIndex: number, secondIndex: number): void {
    const temp: ISong = this.heap[firstIndex];
    this.heap[firstIndex] = this.heap[secondIndex];
    this.heap[secondIndex] = temp;
  }
}