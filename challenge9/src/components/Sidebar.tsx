import { createMenuTree } from "../data/menuData";
import MenuItem from "./MenuItem";
import "../App.css";

const Sidebar = () => {
  const menuTree = createMenuTree();

  return (
    <div className="sidebar">
      <h3>Menu</h3>
      {menuTree.children.map((child, index) => (
        <MenuItem key={index} node={child} />
      ))}
    </div>
  );
};

export default Sidebar;