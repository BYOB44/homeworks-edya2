import type { Product } from "../models/product";

export class MaxHeap {
  private heap: Product[] = [];

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private heapifyUp(index: number) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (this.heap[parent].popularity >= this.heap[index].popularity) break;

      this.swap(parent, index);
      index = parent;
    }
  }

  private heapifyDown(index: number) {
    const length = this.heap.length;

    while (true) {
      let largest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      if (
        left < length &&
        this.heap[left].popularity > this.heap[largest].popularity
      ) {
        largest = left;
      }

      if (
        right < length &&
        this.heap[right].popularity > this.heap[largest].popularity
      ) {
        largest = right;
      }

      if (largest === index) break;

      this.swap(index, largest);
      index = largest;
    }
  }

  insert(product: Product) {
    this.heap.push(product);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMax(): Product | undefined {
    if (this.heap.length === 0) return undefined;

    const max = this.heap[0];
    const end = this.heap.pop()!;

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }

    return max;
  }
}