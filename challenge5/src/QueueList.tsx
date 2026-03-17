export interface Person {
  id: number;
  name: string;
  amount: number;
  arrivalDate: Date;
}

interface Props {
  people: Person[];
}

export default function QueueList({ people }: Props) {
  return (
    <div>
      <h2>ATM Queue</h2>

      {people.map((p) => (
        <div key={p.id} className="card">
          <p><strong>Name:</strong> {p.name}</p>
          <p><strong>Amount:</strong> ${p.amount}</p>
          <p>
            <strong>Arrival:</strong>{" "}
            {p.arrivalDate.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}