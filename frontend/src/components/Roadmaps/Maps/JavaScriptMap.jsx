  /* Edges type can be 
1. "default"
2. "straight"
3. "step"
4. "smoothstep"
5. "simplebezier"
*/ 

/* <Background color="red" gap={100} /> */
/* <Background/> props
1. color='red'
2. gap={50} (default is 25) */
/* <Controls /> */


import Map from "../Map";
import JavaScriptData from '../Data/JavaScript.json';
import nodeTypes from "../NodeTypes";

function JavaScriptMap() {
  const { nodes, edges } = JavaScriptData;

  return (
    <Map 
      nodes={nodes} 
      edges={edges} 
      nodeTypes={nodeTypes}
    />
  );
}

export default JavaScriptMap;
