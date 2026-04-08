import { TreeNode } from "../models/BinaryTree";

export interface D3Node {
  name: string;
  children?: D3Node[];
}

export function treeToD3(node: TreeNode | null): D3Node | null {
  if (!node) return null;
  const d3Node: D3Node = {
    name: String(node.value),
    children: [],
  };
  if (node.left) d3Node.children!.push(treeToD3(node.left)!);
  if (node.right) d3Node.children!.push(treeToD3(node.right)!);
  return d3Node;
}