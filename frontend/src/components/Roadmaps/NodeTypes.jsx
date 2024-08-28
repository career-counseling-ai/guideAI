//custom nodes
import {BottomSource, BottomTarget, LeftBottom, LeftRight, LeftSource, LeftTarget, LeftTopRight, RightBottom, RightLeft, RightSource, RightTarget, TopBottom, TopLeft, TopLeftBottom, TopRight, TopRightBottom, TopSource, TopTarget} from './CustomNodes'

const nodeTypes = {
  'TopSource':TopSource,
  'BottomSource':BottomSource,
  'LeftSource':LeftSource,
  'RightSource':RightSource,

  'TopLeft':TopLeft,
  'TopRight':TopRight,
  'LeftBottom':LeftBottom,
  'RightBottom':RightBottom,

  'TopTarget':TopTarget,
  'BottomTarget':BottomTarget,
  'LeftTarget':LeftTarget,
  'RightTarget':RightTarget,

  'LeftRight':LeftRight,
  'RightLeft':RightLeft,
  'TopBottom':TopBottom,

  'TopLeftBottom':TopLeftBottom,
  'TopRightBottom':TopRightBottom,
  'LeftTopRight':LeftTopRight,
  

};

export default nodeTypes;