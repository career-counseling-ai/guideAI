import { 
    ReactFlow, 
    // Controls, 
    // Background
  } from "@xyflow/react";
  import "@xyflow/react/dist/style.css";
  
  function Map({ nodes, edges, nodeTypes }) {
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
        {/* <Background color="red" gap={100}/> */}
        {/*gap default is 25*/}
        {/* <Controls/> */}
        </ReactFlow>
      </div>
    );
  }
  
  export default Map;
  