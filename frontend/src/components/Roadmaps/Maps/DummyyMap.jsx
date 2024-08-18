import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import DummyData from "../Data/Dummy.json";
import nodeTypes from "../NodeTypes";

export default function DummyyMap() {
  const { nodes, edges } = DummyData;

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
