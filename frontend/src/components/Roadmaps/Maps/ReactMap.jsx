import Map from "../Map";
import ReactData from '../Data/React.json';
import nodeTypes from "../NodeTypes";

function ReactMap() {
  const { nodes, edges } = ReactData;

  return (
    <Map 
      nodes={nodes} 
      edges={edges} 
      nodeTypes={nodeTypes}
    />
  );
}

export default ReactMap;
