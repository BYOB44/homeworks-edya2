import { NaryNode } from "../models/NaryNode";
import type { MenuItemData } from "../types/MenuItemData";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Electronics from "../pages/Electronics";
import Clothing from "../pages/Clothing";

export const createMenuTree = () => {
  const root = new NaryNode<MenuItemData>({
    title: "Root",
    path: "/",
    component: Home as any 
  });

  const productsNode = new NaryNode<MenuItemData>({
    title: "Products",
    path: "/products",
    component: Products as any
  });

  const electronicsNode = new NaryNode<MenuItemData>({
    title: "Electronics",
    path: "/products/electronics",
    component: Electronics as any
  });

  const clothingNode = new NaryNode<MenuItemData>({
    title: "Clothing",
    path: "/products/clothing",
    component: Clothing as any
  });

  root.addChild(productsNode);
  productsNode.addChild(electronicsNode);
  productsNode.addChild(clothingNode);

  return root;
};