import { useState } from "react";
import CreateNode from "./CreateNode";
import type { TreeNode } from "../../models/TreeNode";

type Props = {
  node: TreeNode;
  nodes: TreeNode[];
};

export default function NodeItem({ node, nodes }: Props) {
  const [open, setOpen] = useState(false);

  const children = nodes.filter(n => n.parentId === node.id);

  return (
    <li>
      <div onClick={() => setOpen(!open)}>
        {node.type === "folder" ? "📁" : "📄"} {node.name}
      </div>

      {node.type === "folder" && open && (
        <>
          <CreateNode parentId={node.id} parentType={node.type} />

          <ul>
            {children.map(child => (
              <NodeItem key={child.id} node={child} nodes={nodes} />
            ))}
          </ul>
        </>
      )}
    </li>
  );
}