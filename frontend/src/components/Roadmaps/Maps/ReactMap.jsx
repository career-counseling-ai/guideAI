import Map from "../Map";
import ReactData from '../Data/React.json';
import ReactEdges from '../Data/ReactEdges.json'
import nodeTypes from "../NodeTypes";

function ReactMap() {
  const nodes = ReactData.nodes;
  const edges = ReactEdges.edges;

  return (
    <Map 
      nodes={nodes} 
      edges={edges} 
      nodeTypes={nodeTypes}
    />
  );
}

export default ReactMap;
