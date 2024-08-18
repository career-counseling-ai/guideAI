import { Handle, Position} from "@xyflow/react";

export const TopSource = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="source"
            position={Position.Top}
            />
        </div>
    )
};

export const BottomSource = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="source"
            position={Position.Bottom}
            />
        </div>
    )
};

export const LeftSource = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="source"
            position={Position.Left}
            />
        </div>
    )
};

export const RightSource = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="source"
            position={Position.Right}
            />
        </div>
    )
};

export const TopLeft = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="target"
            position={Position.Top}
            />
            <Handle
            type="source"
            position={Position.Left}
            />
        </div>
    )
};

export const TopRight = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="target"
            position={Position.Top}
            />
            <Handle
            type="target"
            position={Position.Right}
            />
        </div>
    )
};

export const LeftBottom = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="target"
            position={Position.Left}
            />
            <Handle
            type="source"
            position={Position.Bottom}
            />
        </div>
    )
};

export const RightBottom = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="target"
            position={Position.Right}
            />
            <Handle
            type="source"
            position={Position.Bottom}
            />
        </div>
    )
};

export const TopTarget = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="target"
            position={Position.Top}
            />
        </div>
    )
};

export const BottomTarget = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="target"
            position={Position.Bottom}
            />
        </div>
    )
};

export const LeftTarget = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="target"
            position={Position.Left}
            />
        </div>
    )
};

export const RightTarget = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="target"
            position={Position.Right}
            />
        </div>
    )
};

export const LeftRight = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="target"
            position={Position.Left}
            />
            <Handle
            type="source"
            position={Position.Right}
            />
        </div>
    )
};

export const RightLeft = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="target"
            position={Position.Right}
            />
            <Handle
            type="source"
            position={Position.Left}
            />
        </div>
    )
};

export const TopBottom = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="target"
            position={Position.Top}
            />
            <Handle
            type="source"
            position={Position.Bottom}
            />
        </div>
    )
};

export const TopLeftBottom = ({data})=>{
    return (
        <div style={{ padding: '10px', border: '1px solid black', borderRadius: '4px'}}>
            <div>{data.label}</div>
            <Handle
            type="target"
            position={Position.Top}
            />
            <Handle
            type="source"
            position={Position.Left}
            id="a"
            />
            <Handle
            type="source"
            position={Position.Bottom}
            id="b"
            />
        </div>
    )
};


