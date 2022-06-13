import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap
} from 'react-flow-renderer';
import FlowHeader from './FlowHeader'
import PropertiesDrawer from './Drawer/Drawer'
// import Context from '../../Context'
import { message } from 'antd';
import CustomNode from './CustomNode'
import ButtonEdge from './ButtonEdge';
import { constants } from '../../constants';
import axios from 'axios'
import { FlowContainer } from './style'
import Loader from './Loader';
import './index.css'



import FlowBuilderSideBar from './FlowBuilderSideBar';

// import '../../index.css';

const edgeTypes :any = {
  buttonedge: ButtonEdge,
};

let id = 0;
const getId = () => `dndnode_${id++}`;
const nodeTypes: any = { textUpdater: CustomNode };

const DnDFlow = (props: any) => {
  // const contextValues: any = React.useContext(Context)
  const [edges, setEdges, onEdgesChange]: any = useEdgesState([]);
  const [nodes, setNodes, onNodesChange]: any = useNodesState([]);
  const [elements, setElements]: any = React.useState([])
  const [flowData, setFlowData]: any = React.useState([])
  const [componentOpen, setcomponentOpen]: any = React.useState(false)
  const [drawerValue, setDrawerValue]: any = React.useState({})
  const [loading, setLoading]:any = React.useState(false)

  const reactFlowWrapper: any = useRef(null);
  const urlParams = new URLSearchParams(window.location.search);
  // const flowid = urlParams.get('id');
  const flowid = props.EnterpriseId;
  // const [nodes, setNodes, onNodesChange]: any = useNodesState([]);
  // const [edges, setEdges, onEdgesChange]: any = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance]: any = useState(null);
  const [selectedFlow, setSelectedFlow]: any = React.useState({})
  const [selectedNode, setSelectedElement]: any = React.useState([])
  const onConnect = (params:any) => setEdges((eds:any) => addEdge({ ...params, type: 'buttonedge', data : { onDelete: (nodeid: any) => deleteEdge(nodeid) } }, eds));

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  React.useEffect(() => {
    fetchComponent()
    fetchFlow()
  },[])

//   const fetchUsers = async () => {
//     try {
//         const request_data = {
//             method: "GET",
//             url: constants.url.users + '?populate=*',
//             headers: {
//                 "Content-Type": "application/json",
//                 // Authorization: `Bearer ${await sessionStorage.getItem("ADMIN_TOKEN")}`
//             }
//         };

//         const response = await axios(request_data);
//         if ([200, 201].includes(response.status) && response.data) {
//             // console.log("customer", response.data.onboard.country);
//             const USER:any = window.sessionStorage.getItem("USER")
//             const ParseUser = JSON.parse(USER)
//             const Filterdata =  response.data?.find((d:any) => d.id == "4") 
//             setElements(Filterdata?.components)
//             setFlowData(Filterdata?.flow_data)
//         } else {
//             message.error('Error',2)
//         }
//     } catch (error) {
//         message.error('Error',2)
//         console.error(error);
//     }

// }

const fetchComponent = async () => {
  setLoading(true)
  try {
      const request_data = {
          method: "GET",
          url: constants.url.components,
          headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${await sessionStorage.getItem("ADMIN_TOKEN")}`
          }
      };

      const response = await axios(request_data);
      if ([200, 201].includes(response.status) && response.data) {
        setLoading(false)
          // console.log("customer", response.data.onboard.country);
          for (const data of response.data.data) {
              data.attributes['id'] = data.id
          }
          setElements(response.data.data)
      } else {
        setLoading(false)
          message.error('Error in featching Component',2)
      }
  } catch (error) {
    setLoading(false)
      message.error('Error in featching Component',2)
      console.error(error);
  }

}

const fetchFlow = async () => {
  setLoading(true)
  try {
      const request_data = {
          method: "GET",
          url: constants.url.flow_data,
          headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${await sessionStorage.getItem("ADMIN_TOKEN")}`
          },
      };

      const response = await axios(request_data);
      if ([200, 201].includes(response.status) && response.data) {
        setLoading(false)
          // console.log("customer", response.data.onboard.country);
          for (const data of response.data.data) {
              data.attributes['id'] = data.id
          }
          setFlowData(response.data.data)
      } else {
        setLoading(false)
          message.error('Error in featching Flow',2)
      }
  } catch (error) {
    setLoading(false)
      message.error('Error in featching Flow',2)
      console.error(error);
  }

}


  React.useEffect(() => {
    if (flowid) {
      const filteredFlow: any = flowData.find((d: any) => d.id == flowid)
      if (filteredFlow?.nodes) {
        setNodes([])
        filteredFlow.nodes.map((nds:any) => {
          let newNodeData = elements.find((d: any) => d.id == nds.data.createdNode.id)
          const newNode = {
            id: nds.id,
            type: 'textUpdater',
            position: {x: nds.position.x, y: nds.position.y},
            data: {
              createdNode: newNodeData,
              onDelete: (nodeid: any) => deleteNode(nodeid),
              setcomponentOpen: (e: any) => setcomponentOpen(e),
              setDrawerValue: (e: any) => setDrawerValue(e)
            },
          };
          setNodes((nds: any) => nds.concat(newNode));
        })
      } else {
        setNodes([])
      }
      if (filteredFlow?.edges) {
        for (const data of filteredFlow?.edges){
          data['data'] = { onDelete: (nodeid: any) => deleteEdge(nodeid) }
        }
        setEdges(filteredFlow?.edges)
      } else {
        setEdges([])
      }
      if(filteredFlow){
      setSelectedFlow(filteredFlow)
      } else {
        setSelectedFlow(selectedFlow)
      }
    }
  }, [flowid, setSelectedFlow, setNodes, setEdges, flowData])

  const deleteNode = (id: any) => {
    setNodes((nds: any) => {
      let allnodes:any = []
      for (const nd of nds) {
        if (nd.id !== id) {
          allnodes.push(nd)
        }
      }
      return allnodes
    });
    message.success('Node is deleted', 2);
  }

  const deleteEdge = (id: any) => {
    setEdges((eds: any) => {
      let alledges:any = []
      for (const nd of eds) {
        if (nd.id !== id) {
          alledges.push(nd)
        }
      }
      return alledges
    });
    message.success('Node is deleted', 2);
  }

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const reactFlowBounds: any = reactFlowWrapper.current.getBoundingClientRect();
      const type: any = event.dataTransfer.getData('application/reactflow');
      let newNodeData = elements.find((d: any) => d.id == type)

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const nodeId: any = getId()
      const Number: any = Math.floor(100000 + Math.random() * 900000)
      const ID: any = `dndnode_${Number}`;
      const newNode = {
        id: ID,
        type: 'textUpdater',
        position,
        data: {
          createdNode: newNodeData,
          onDelete: (nodeid: any) => deleteNode(nodeid),
          setcomponentOpen: (e: any) => setcomponentOpen(e),
          setDrawerValue: (e: any) => setDrawerValue(e)
        },
      };

      setNodes((nds: any) => nds.concat(newNode));
    },
    [reactFlowInstance,elements]
  );


  const onClickElement = useCallback((event: any, element: any) => {
    // Set the clicked element in local state
    setSelectedElement(element)
  }, [])



  return (
    <>
    {
      loading ? 
      <Loader loading={loading}/> : 
      <div className="dndflow">
        <ReactFlowProvider>
          <FlowBuilderSideBar elements={elements}/>
          <div style={{ width: "85%" }}>
            <FlowHeader 
              selectedFlow={selectedFlow} 
              elements={elements} 
              edges={edges}
              nodes={nodes}
              // fetchUsers={fetchUsers}
              />
            <div className="reactflow-wrapper" ref={reactFlowWrapper}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={setReactFlowInstance}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onNodeClick={onClickElement}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes }
                fitView
                defaultZoom={0.5}
                snapToGrid={true}
                className="react-flow-subflows-example"
              >
                <Controls />
                <Background />
                <MiniMap 
                  nodeStrokeColor={(n:any) => {
                    if (n.style?.background) return n.style.background;
                    if (n?.selected === true) 
                     { 
                       return '#00FF00';
                     } else return '#6B6B6B';
                    }}              
                    nodeBorderRadius={6}
                />
              </ReactFlow>
            </div>
          </div>
          {componentOpen ? (
            <PropertiesDrawer 
              componentOpen={componentOpen}
              setcomponentOpen={setcomponentOpen}
              drawerValue={drawerValue}
              setDrawerValue={setDrawerValue}
              />
          ) : null}
        </ReactFlowProvider>
      </div>

    }
    </>
  );
};

export default DnDFlow;
