import { useState } from "react";
import { Queue } from "./Queue";
import PersonForm from "./PersonForm";
import QueueList from "./QueueList";
import type { Person } from "./Person";
import "./App.css";


const queue = new Queue();

// mock data
queue.enqueue({
  id: 1,
  name: "Juan",
  amount: 200,
  arrivalDate: new Date(Date.now() - 50000),
});

queue.enqueue({
  id: 2,
  name: "Maria",
  amount: 500,
  arrivalDate: new Date(Date.now() - 30000),
});

queue.enqueue({
  id: 3,
  name: "Carlos",
  amount: 100,
  arrivalDate: new Date(Date.now() - 10000),
});

function App() {
  const [people, setPeople] = useState<Person[]>(queue.getAll());

  const addPerson = (name: string, amount: number) => {
    const newPerson: Person = {
      id: Date.now(),
      name,
      amount,
      arrivalDate: new Date(), // random system time
    };

    queue.enqueue(newPerson);
    setPeople([...queue.getAll()]);
  };

  return (
    <div className="container">
      <h1>ATM Queue System</h1>

      <PersonForm onAdd={addPerson} />

      <QueueList people={people} />
    </div>
  );
}

export default App;