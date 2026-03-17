import { useState } from "react";

interface Props {
  onAdd: (name: string, amount: number) => void;
}

export default function PersonForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || amount <= 0) return;

    onAdd(name, amount);

    setName("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Person</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Withdrawal Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button type="submit">Add to Queue</button>
    </form>
  );
}