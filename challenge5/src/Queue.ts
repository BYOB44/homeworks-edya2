export interface Person {
  id: number;
  name: string;
  amount: number;
  arrivalDate: Date;
}

export class Queue {
  private people: Person[] = [];

  enqueue(person: Person) {
    this.people.push(person);
  }

  getAll(): Person[] {
    return this.people.sort(
      (a, b) => a.arrivalDate.getTime() - b.arrivalDate.getTime()
    );
  }
}