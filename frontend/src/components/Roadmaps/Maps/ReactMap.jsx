import { 
    ReactFlow, 
    Controls, 
    Background
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ReactData from "../Data/React.json"

function ReactMap() {

  const {nodes, edges} = ReactData;
 
  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false} 
        nodesConnectable={false} 
        elementsSelectable={true} 
        fitView
      >
        <Background color="red" gap={100} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default ReactMap;
