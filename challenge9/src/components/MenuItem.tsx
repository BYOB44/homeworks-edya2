import { NaryNode } from "../models/NaryNode";
import type { MenuItemData } from "../types/MenuItemData";
import { Link } from "react-router-dom";
import "../App.css";

interface Props {
  node: NaryNode<MenuItemData>;
}

const MenuItem = ({ node }: Props) => {
  return (
    <div className="menu-item">
      <Link className="menu-link" to={node.value.path}>
        {node.value.title}
      </Link>

      {node.children.length > 0 && (
        <div className="submenu">
          {node.children.map((child, index) => (
            <MenuItem key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;