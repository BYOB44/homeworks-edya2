import { useState } from "react";
import { useAuth } from "../../context/AuthcContext";
import { createNode } from "../../services/nodeService";

export default function CreateNode({ parentId, parentType }: any) {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [type, setType] = useState("folder");

  const handleCreate = async () => {
    if (!user) {
      alert("Debe iniciar sesión");
      return;
    }

    if (parentType === "file") {
      alert("Un archivo no puede tener hijos");
      return;
    }

    await createNode({
      name,
      type,
      parentId: parentId || null,
      createdBy: user.email
    });

    setName("");
  };

  return (
    <div>
      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setType(e.target.value)}>
        <option value="folder">Carpeta</option>
        <option value="file">Archivo</option>
      </select>

      <button onClick={handleCreate}>Crear</button>
    </div>
  );
}