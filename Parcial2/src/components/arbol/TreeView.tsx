import NodeItem from "./NodeItem";
import type { TreeNode } from "../../models/TreeNode";

type Props = {
  nodes: TreeNode[];
};

export default function TreeView({ nodes }: Props) {
  const roots = nodes.filter(n => n.parentId === null);

  return (
    <ul>
      {roots.map(node => (
        <NodeItem key={node.id} node={node} nodes={nodes} />
      ))}
    </ul>
  );
}