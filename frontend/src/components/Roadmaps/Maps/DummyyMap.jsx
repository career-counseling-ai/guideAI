import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import DummyData from "../Data/Dummy.json";

export default function DummyyMap() {
  const { nodes, edges } = DummyData;

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
