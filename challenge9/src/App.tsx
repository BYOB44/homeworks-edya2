import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { createMenuTree } from "./data/menuData";
import "./App.css";

function App() {
  const menuTree = createMenuTree();

  const generateRoutes = (node: any): any[] => {
    let routes: any[] = [];

    routes.push(
      <Route
        key={node.value.path}
        path={node.value.path}
        element={node.value.component}
      />
    );

    node.children.forEach((child: any) => {
      routes = routes.concat(generateRoutes(child));
    });

    return routes;
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />

        <div className="main-content">
          <Routes>{generateRoutes(menuTree)}</Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;