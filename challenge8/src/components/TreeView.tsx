import Tree from "react-d3-tree";

interface Props {
  data: any;
}

const TreeView = ({ data }: Props) => {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Tree
        data={data}
        orientation="vertical"
        pathFunc="elbow"
      />
    </div>
  );
};

export default TreeView;