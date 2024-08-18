import { 
    ReactFlow, 
    Controls, 
    Background
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import ReactData from "../Data/React.json"
import nodeTypes from "../NodeTypes";

function ReactMap() {

  const {nodes, edges} = ReactData;
 
  return (
    <div className="h-screen w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false} 
        nodesConnectable={false} 
        elementsSelectable={true} 
        nodeTypes={nodeTypes}
        fitView
      >
        <Background color="red" gap={100} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default ReactMap;
