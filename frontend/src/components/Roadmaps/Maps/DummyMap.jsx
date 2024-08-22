import Map from "../Map";
import DummyData from '../Data/Dummy.json';
import nodeTypes from "../NodeTypes";

function DummyMap() {
  const { nodes, edges } = DummyData;

  return (
    <Map 
      nodes={nodes} 
      edges={edges} 
      nodeTypes={nodeTypes}
    />
  );
}

export default DummyMap;