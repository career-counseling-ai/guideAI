import { 
    ReactFlow, 
    Controls, 
    Background
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodes = [
  {
    id: "1",
    data: { label: "React" },
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

const edges = [
  { id: "1-2", source: "1", target: "2", label: "test text", type: "smoothstep" },
  { id: "2-3", source: "2", target: "3", label: "connect", type: "simplebezier" }
];

function ReactMap() {
 
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
