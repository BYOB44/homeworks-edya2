import { useEffect } from "react";
import { BinaryTree } from "./models/BinaryTree";
import { treeToD3 } from "./utils/TreetoD3";
import TreeView from "./components/TreeView";
import "./App.css";

function App() {
  const tree = new BinaryTree();

  // Insertar valores
  [10, 5, 15, 3, 7, 12, 18].forEach(n => tree.insert(n));

  useEffect(() => {
    console.log("InOrder:");
    tree.inOrder(tree.root);

    console.log("PreOrder:");
    tree.preOrder(tree.root);

    console.log("PostOrder:");
    tree.postOrder(tree.root);

    console.log("¿Existe 7?:", tree.contains(7));
    console.log("¿Existe 20?:", tree.contains(20));
  }, []);

  const treeData = treeToD3(tree.root);

  return (
    <div className="container">
      <h1 className="title">Binary Tree Visualizer</h1>

      <div className="card">
        <TreeView data={treeData} />
      </div>
    </div>
  );
}

export default App;