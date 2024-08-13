import { 
  ReactFlow, 
  Controls, 
  Background
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes = [
{
  id: "1",
  data: { label: "Javascript" },
  position: { x: 0, y: 0 },
  type: "input",
},
{
  id: "2",
  data: { label: "Roadmap" },
  position: { x: 0, y: 100 },
},
{
  id: "3",
  data: { label: "test" },
  position: { x: 200, y: 0 },
},
];


/* Edges type can be 
1. "default"
2. "straight"
3. "step"
4. "smoothstep"
5. "simplebezier"
*/ 

const edges = [
{ id: "1-2", source: "1", target: "2", label: "connect", type: "step" },
{ id: "2-3", source: "2", target: "3", label: "connect", type: "step" }
];

function JavaScriptMap() {

return (
  <div style={{ height: "100%" }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodesDraggable={false} //can't drag nodes
      nodesConnectable={false} //can't make more edges
      elementsSelectable={true} //can make a node on focus
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
