import { 
  ReactFlow, 
  Controls, 
  Background
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import JavaScriptData from '../Data/JavaScript.json'

import nodeTypes from "../NodeTypes";

function JavaScriptMap() {

  const {nodes, edges} = JavaScriptData;

  /* Edges type can be 
1. "default"
2. "straight"
3. "step"
4. "smoothstep"
5. "simplebezier"
*/ 

return (
  <div className="h-screen w-full">
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodesDraggable={false} //can't drag nodes
      nodesConnectable={false} //can't make more edges
      elementsSelectable={true} //can make a node on focus
      nodeTypes={nodeTypes}
      fitView
    >
      <Background color="red" gap={100} />
      {/* <Background/> props
      1. color='red'
      2. gap={50} (default is 25) */}
      <Controls />
    </ReactFlow>
  </div>
);
}

export default JavaScriptMap;
