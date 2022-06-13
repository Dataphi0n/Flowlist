import React from 'react';
import { HeaderContainer, SaveButton, FlowName, ButtonWrapper, FlowInput, PopContainer, DeleteButton } from './style'
import { Link } from 'react-router-dom';
import { Popover, Breadcrumb, Button } from 'antd';
// import Context from '../../Context'
import { message } from 'antd';
import axios from 'axios';
import { constants } from '../../constants';


const FlowHeader = (props: any) => {
    const { fetchUsers } = props;
    // const contextValues: any = React.useContext(Context)
    const [value, setValue]: any = React.useState('')
    const UpdateFlow = async (props: any) => {
        const createData = {
            name: props.name,
            edges: props.edges,
            nodes: props.nodes,
        };
        try {
            const elements_req_obj = {
                method: "PUT",
                url: `${constants.url.flow_data}/${props.id}`,
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${await sessionStorage.getItem("ADMIN_TOKEN")}`
                },
                data: JSON.stringify({ data: createData })
            }
    
            const elements_response = await axios(elements_req_obj)
            if ([200, 201].includes(elements_response.status) && elements_response.data) {
                message.success('Flow updated successfully!', 2);
                fetchUsers()
            } else {
                message.error('Error in updating Flow',2)
            }
        } catch (error) {
            message.error('Error in updating Flow',2)
            console.error(error)
        };
    }

    const onSave = () => {
                let data = {
                    id: props.selectedFlow.id,
                    nodes: props.nodes,
                    edges: props.edges
                }
                UpdateFlow(data)
    }
    const onName = () => {
                let data = {
                    id: props.selectedFlow.id,
                    name : value
                }
                UpdateFlow(data)
            }

    const PopContent = () => {
        return (
            <PopContainer>
                <FlowInput defaultValue={props.selectedFlow?.attributes?.name} onChange={(e: any) => setValue(e.target.value)} />
                <Button type="primary" onClick={onName}>save</Button>
            </PopContainer>
        )
    }

    return (
        <HeaderContainer>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        {/* <Link to={"/flow-list"}>Flow List</Link> */}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Popover
                            content={PopContent}
                        >
                            <FlowName>{props.selectedFlow?.attributes?.name}</FlowName>
                        </Popover>
                    </Breadcrumb.Item>
                </Breadcrumb>

            </div>
            <ButtonWrapper>
                <SaveButton onClick={onSave}>Save</SaveButton>
                {/* <SaveButton onClick={newFlow}>New Flow</SaveButton> */}
                {/* <FlowSelect placeholder='Select Flow' onChange={handleChange}>
            {contextValues.flowData.map((flow:any) => {
             return( 
                 <Option value={flow.id}>{flow.flowName}</Option> 
                 )
                })}
            </FlowSelect> */}
            </ButtonWrapper>
        </HeaderContainer>
    )
}

export default FlowHeader