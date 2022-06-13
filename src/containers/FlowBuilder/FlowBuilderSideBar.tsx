import React from 'react';
import { Divider } from '@material-ui/core'
import { Block, ButtonSider, BlockTitle, MenuItemsContainer, SidebarTitle, CreateButton, ButtonContainer, CardContainer, ButtonInner } from './style'
import { useNavigate } from 'react-router-dom';
import { Popover } from 'antd'
// import Context from '../../Context'

const FlowBuilderSideBar = (props: any) => {
  // const contextValues: any = React.useContext(Context)
  // const navigate = useNavigate()
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  // const createComponent = () => {
  //   let newComponent = {
  //     nodeData: "",
  //     name: "App",
  //     icon: "",
  //     id: contextValues.elements.length + 1,
  //     attributeData: ""
  //   }
  //   contextValues.setElements([...contextValues.elements, newComponent])
  //   props.setCreatedNode([...props.createdNode, newComponent])
  //   navigate('/component?id=' + newComponent.id)
  // }
  // const deleteNode = (id: any) => {
  //   let allElement:any = []
  //   for (const nd of contextValues.elements) {
  //     if (nd.id !== id) {
  //       allElement.push(nd)
  //     }
  //   }
  //   contextValues.setElements(allElement);
  // }

  return (
    // <aside style={{position:"absolute",zIndex:"9999"}}>
    <div style={{ width: "15%", background: "#fff", height: "auto", overflowY: "scroll" }}>
      <SidebarTitle>FLOW BUILDER</SidebarTitle>
      <Divider />
      <div>
        {/* <CreateButton onClick={() => createComponent()}>Create Component</CreateButton> */}
      </div>
      <MenuItemsContainer>
        {props?.elements.map((data: any, index: any) => (
          <>
          {console.log("dataaaaaaaaaaaaaaaaaaaa",data)}
          {data?.nodeData !== null ? 
            <CardContainer>
              <Block variant="contained" onDragStart={(event) => onDragStart(event, data.id)} draggable>
                <ButtonInner>
                  <img src={"http://localhost:1337" + data?.attributes?.icon} alt='' height="20px" width="20px" />
                  <BlockTitle>{data?.attributes?.name}</BlockTitle>
                </ButtonInner>
                {/* <Popover
                  content={
                    <ButtonContainer>
                      <i className="fa fa-pencil-square-o" style={{ cursor: 'pointer' }}
                        onClick={() => {
                          navigate('/component?id=' + data.id)
                        }}
                        aria-hidden="true"
                      />
                      <i className="fa fa-trash" style={{ cursor: 'pointer' }} onClick={() => { deleteNode(data.id) }} aria-hidden="true"></i>
                    </ButtonContainer>
                  }
                  trigger="hover"
                  placement="bottom"
                  getPopupContainer={(trigger: any) => trigger.parentNode}
                >
                  <ButtonSider>
                    <i className='fa fa-ellipsis-v' />
                  </ButtonSider>
                </Popover> */}
              </Block>
            </CardContainer>
            : null 
          }
          </>
        ))}
      </MenuItemsContainer>
    </div>
    // </aside>
  );
};
export default FlowBuilderSideBar