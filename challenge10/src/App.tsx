import React, { useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import type { City, Person } from "./types";

const App: React.FC = () => {

  const [cities] = useState<City[]>([
    { id: "c1", name: "Cali" },
    { id: "c2", name: "Bogotá" },
    { id: "c3", name: "Medellín" },
  ]);

  const [people] = useState<Person[]>([
    { id: "p1", name: "Juan", age: 25, cityId: "c1" },
    { id: "p2", name: "Ana", age: 30, cityId: "c2" },
    { id: "p3", name: "Luis", age: 22, cityId: "c1" },
    { id: "p4", name: "Sofia", age: 28, cityId: "c3" },
    { id: "p5", name: "Carlos", age: 35, cityId: "c2" },
    { id: "p6", name: "Maria", age: 27, cityId: "c3" },
  ]);

  const [selectedCity, setSelectedCity] = useState<string>("");


  const graphData = {
    nodes: [
      ...cities.map((c) => ({
        id: c.id,
        label: c.name,
        type: "city",
      })),
      ...people.map((p) => ({
        id: p.id,
        label: `${p.name} (${p.age})`,
        type: "person",
      })),
    ],
    links: people.map((p) => ({
      source: p.id,
      target: p.cityId,
    })),
  };

 
  const peopleInCity = people.filter(
    (p) => p.cityId === selectedCity
  );

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>Friends & Cities Graph</h1>

      {/* SELECT */}
      <select onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">Select a city</option>
        {cities.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      {/* LIST */}
      <h2>People in city:</h2>
      <ul>
        {peopleInCity.map((p) => (
          <li key={p.id}>
            {p.name} - {p.age} años
          </li>
        ))}
      </ul>

      {/* GRAPH */}
      <div style={{ height: "500px", background: "#0f172a" }}>
        <ForceGraph2D
          graphData={graphData}

   
          linkWidth={2}
          linkColor={() => "#ffffff"}

         
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={0.005}

    
          nodeLabel={(node: any) => node.label}

     
          nodeCanvasObject={(
            node: any,
            ctx: CanvasRenderingContext2D,
            globalScale: number
          ) => {
            const label = node.label;
            const fontSize = 12 / globalScale;

            ctx.font = `${fontSize}px Sans-Serif`;
           ctx.fillStyle =
              node.type === "city" ? "orange" : "black";

            ctx.beginPath();
            ctx.arc(node.x, node.y, 6, 0, 2 * Math.PI);
            ctx.fill();


            ctx.fillStyle = "white";
            ctx.fillText(label, node.x + 8, node.y + 4);
          }}
        />
      </div>
    </div>
  );
};

export default App;