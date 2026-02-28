import { useState } from "react";
import { LinkedList } from "./LinkedList";
import { Node } from "./LinkedNode";

type Song = {
  id: number;
  title: string;
  artist: string;
};

const mockedSongs: Song[] = [
  { id: 1, title: "B.Y.O.B", artist: "System of a Down" },
  { id: 2, title: "Diablah", artist: "3am" },
  { id: 3, title: "Thirty Seconds To Mars", artist: "The Kill" },
  { id: 4, title: "Estrella Roja", artist: "3am, Andrea Ferrero" },
  { id: 5, title: "You only live once", artist:"Suicide Silence"},
  { id: 6, title: "Given up", artist:"linkin park"},
  { id: 7, title: "Back in black", artist:"AC/DC"},
  { id: 8, title: "The resistance", artist:"Skillet"},
  { id: 9, title: "UNA CANCION BONITA", artist:"3am, yami safdle"},
  { id: 10, title: "I wont give up", artist:"Jason Mraz"},
];

type PlayerState = {
  list: LinkedList;
  current: Node | null;
};

export default function LinkedReproductor() {
  const [player, setPlayer] = useState<PlayerState>(() => {
    const list = new LinkedList();
    mockedSongs.forEach((s) => list.append(s));
    return { list, current: list.head };
  });

  const siguiente = () => {
    setPlayer((p) => ({
      ...p,
      current: p.current?.next ? p.current.next : p.current,
    }));
  };

  const cancionInicial = () => {
    setPlayer((p) => ({ ...p, current: p.list.head }));
  };

  return (
    <>
      <h2>Linked Reproductor (Linked List)</h2>

      <p>
        Reproduciendo:{" "}
        {player.current
          ? `${player.current.value.title} - ${player.current.value.artist}`
          : "---"}
      </p>

      <button onClick={siguiente}>Siguiente</button>
      <button onClick={cancionInicial}>Canción Inicial</button>
    </>
  );
}