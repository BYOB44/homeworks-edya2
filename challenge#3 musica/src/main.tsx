
export interface Song {
  title: string;
  artist: string;
  duration: string;
  cover?: string; // Opcional
}

export interface Page {
  title: string;
  url: string;
}


export class SongNode {
  public data: Song;
  public next: SongNode | null;

  constructor(data: Song) {
    this.data = data;
    this.next = null;
  }
}

export class PlaylistLinkedList {
  public head: SongNode | null;
  public size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data: Song): void {
    const newNode = new SongNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
}

// Mock Data
export const createMockPlaylist = (): PlaylistLinkedList => {
  const list = new PlaylistLinkedList();
  list.add({ title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" });
  list.add({ title: "Hotel California", artist: "Eagles", duration: "6:30" });
  list.add({ title: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02" });
  list.add({ title: "Imagine", artist: "John Lennon", duration: "3:01" });
  list.add({ title: "Billie Jean", artist: "Michael Jackson", duration: "4:54" });
  return list;
};

// --- LISTA DOBLEMENTE ENLAZADA (Historial Navegador) ---

export class PageNode {
  public data: Page;
  public prev: PageNode | null;
  public next: PageNode | null;

  constructor(data: Page) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

export class BrowserHistoryLinkedList {
  public head: PageNode | null;
  public tail: PageNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  visit(data: Page): void {
    const newNode = new PageNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode; // Si es el primero, es tanto head como tail
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  }
}

// Mock Data
export const createMockHistory = (): BrowserHistoryLinkedList => {
  const list = new BrowserHistoryLinkedList();
  list.visit({ title: "Nueva Pestaña", url: "browser://newtab" });
  list.visit({ title: "Google", url: "https://google.com" });
  list.visit({ title: "Buscar: React", url: "https://google.com/search?q=react" });
  list.visit({ title: "Documentación React", url: "https://react.dev" });
  list.visit({ title: "React Hooks", url: "https://react.dev/reference/hooks" });
  return list;
};