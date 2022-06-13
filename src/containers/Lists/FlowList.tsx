// import React from 'react'
// import {
//     ParentDiv,
//     FlowListContainer,
//     FlowHeader,
//     CreateButton,
//     FlowListTable,
//     ActionContainer,
//     ContentDiv,
//     PageTitle,
//     PageTitleContainer,
//     SearchInput
// } from './styles'
// import Context from '../../Context'
// import { useNavigate } from 'react-router-dom'
// import Sidebar from '../SideBar/Sidebar'
// import { SearchOutlined } from '@ant-design/icons'
// import CreateFlowModal from '../../components/CreateFlowModal'
// import { message, Modal } from 'antd';
// import ListPageHeader from './ListPageHeader'
// import { ExclamationCircleOutlined } from '@ant-design/icons';
// const { confirm } = Modal;

// const FlowList = (props: any) => {
//     const navigate: any = useNavigate()
//     const contextValues: any = React.useContext(Context)
//     const [searchValue, setSearchValue]: any = React.useState("")
//     const [isModalVisible, setIsModalVisible] = React.useState(false);

//     const onSave = (flowName: any) => {
//         let data = {
//             name: flowName ? flowName : "Flow",
//         }
//         contextValues.createFlow(data)
//         // let flow = {
//         //     nodesData: [],
//         //     edgesData: [],
//         //     flowName: flowName ? flowName : "Flow",
//         //     id: contextValues.flowData.length + 1,
//         // }
//         // contextValues.setFlowData([...contextValues.flowData, flow])
//         // navigate("/flow?id=" + flow.id)
//     }

//     const redirectToEdit = (id: any) => {
//         navigate("/flow?id=" + id)
//     }

//     React.useEffect(() => {
//         contextValues.fetchFlow()
//     }, [])

//     const deleteFlow = (id: any) => {
//         let allFlow = []
//         for (const nd of contextValues.flowData) {
//             if (nd.id !== id) {
//                 allFlow.push(nd)
//             }
//         }
//         contextValues.setFlowData(allFlow);
//         message.success('Flow is deleted', 2);
//     }

//     const showDeleteConfirm = (id: any) => {
//         confirm({
//             title: 'Are you sure delete this component?',
//             icon: <ExclamationCircleOutlined />,
//             content: 'You will not get back this component.',
//             okText: 'Yes',
//             okType: 'danger',
//             cancelText: 'No',
//             onOk() {
//                 contextValues.deleteFlow(id)
//             },
//             onCancel() {
//                 console.log('Cancel');
//             },
//         });
//     };


//     const listColumn: any = [
//         {
//             title: "Id",
//             dataIndex: "id",
//             key: "id",
//             align: "center"
//         },
//         {
//             title: "Flow Name",
//             dataIndex: "name",
//             key: "name",
//             align: "center",
//             // render: (id: any, data: any) => {
//             //     return (
//             //         <div>{data.attributes.name}</div>
//             //     )
//             // }
//         },
//         {
//             title: "Action",
//             dataIndex: "id",
//             key: "id",
//             align: "center",
//             width: '12%',
//             render: (id: any, data: any) => {
//                 return (
//                     <ActionContainer>
//                         <i className="fa fa-pencil-square" onClick={() => { redirectToEdit(data.id) }} aria-hidden="true"></i>
//                         <i className="fa fa-trash" onClick={() => showDeleteConfirm(data.id)} aria-hidden="true"></i>
//                     </ActionContainer>
//                 )
//             }
//         }
//     ]

//     return (
//         <ParentDiv>
//             <CreateFlowModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} onSave={onSave} />
//             <Sidebar />
//             <ContentDiv>
//                 <ListPageHeader functionCall={setIsModalVisible} />
//                 <FlowListContainer>
//                     <PageTitleContainer>
//                         <PageTitle>Flows</PageTitle>
//                         <SearchInput
//                             value={searchValue}
//                             onChange={(e) => setSearchValue(e.target.value)}
//                             prefix={<SearchOutlined />}
//                         />
//                     </PageTitleContainer>
//                     <FlowListTable dataSource={contextValues.flowData.filter((d: any) => d?.name?.toLowerCase().includes(searchValue.toLowerCase()))} columns={listColumn} />
//                 </FlowListContainer>
//             </ContentDiv>
//         </ParentDiv>
//     )
// }

// export default FlowList