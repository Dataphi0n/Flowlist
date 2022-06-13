import React from 'react';
import { getBezierPath, getEdgeCenter, getMarkerEnd } from 'react-flow-renderer';
import { DeleteButton } from './style'
// import Context from '../../Context'

// import './index.css';

const foreignObjectSize = 40;


const ButtonEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
  ...props
}:any) => {
  // const contextValues: any = React.useContext(Context)
  const [elements, setElements]: any = React.useState([])
  // const { asdf } = props
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const onEdgeClick = (evt:any, id:any) => {
    evt.stopPropagation();
    props.setEdges((eds: any) => {
      let alledges:any = []
      for (const nd of eds) {
        if (nd.id !== id) {
          alledges.push(nd)
        }
      }
      return alledges
    });
  };

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <body>
          <DeleteButton className="edgebutton" onClick={(e) => { data.onDelete(id) }}>
            ×
          </DeleteButton>
        </body>
      </foreignObject>
    </>
  );
}

export default ButtonEdge;
