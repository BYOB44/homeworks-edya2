import { useEffect, useState } from "react";
import { getNodes } from "./services/nodeService";
import TreeView from "./components/arbol/TreeView";
import CreateNode from "./components/arbol/CreateNode";
import Login from "./auth/Login";
import { useAuth } from "./context/AuthcContext";
import "./App.css";

function App() {
  const { user } = useAuth();
  const [nodes, setNodes] = useState<any[]>([]);

  const loadNodes = async () => {
    const data = await getNodes();
    setNodes(data);
  };

  useEffect(() => {
    if (user) loadNodes();
  }, [user]);

  if (!user) return <Login />;

  return (
    <div className="container">
      <h1>Gestor de Archivos</h1>

      <CreateNode parentId={null} parentType="folder" />

      <button onClick={loadNodes}>Actualizar</button>

      <div className="tree-container">
        <h3>Árbol de archivos</h3>
        <TreeView nodes={nodes} />
      </div>
    </div>
  );
}

export default App;