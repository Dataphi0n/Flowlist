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
// // import Context from '../../Context'
// import { useNavigate } from 'react-router-dom'
// import Sidebar from '../SideBar/Sidebar'
// import { SearchOutlined } from '@ant-design/icons'
// import { message, Modal } from 'antd';
// import ListPageHeader from './ListPageHeader'
// import CreateComponentModal from './CreateComponentModal'
// import { ExclamationCircleOutlined } from '@ant-design/icons';
// const { confirm } = Modal;

// const ElementList = (props: any) => {
//     const navigate: any = useNavigate()
//     // const contextValues: any = React.useContext(Context)
//     const [searchValue, setSearchValue]: any = React.useState("")
//     const [isModalVisible, setIsModalVisible] = React.useState(false);

//     // React.useEffect(() => {
//     //     contextValues.fetchComponent()
//     // },[])

//     const redirectToEdit = (id: any) => {
//         navigate("/component?id=" + id)
//     }

//     React.useEffect(() => {
//         contextValues.fetchComponent()
//     }, [])

//     const deleteComponent = (id: any) => {
//         let allElement:any = []
//         for (const nd of contextValues.elements) {
//             if (nd.id !== id) {
//                 allElement.push(nd)
//             }
//         }
//         contextValues.setElements(allElement);
//         message.success('Element is deleted', 2);
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
//                 contextValues.deleteComponent(id)
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
//             align: "center",
//             width: '12%',
//         },
//         {
//             title: "Name",
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

//     const createComponent = (ComponentName:any) => {
//         let data = {
//             name: ComponentName ? ComponentName : "App",
//         }
//         contextValues.createComponent(data)
//     }

//     return (
//         <ParentDiv>
//             <CreateComponentModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} onSave={createComponent}/>
//             <Sidebar />
//             <ContentDiv>
//                 <ListPageHeader functionCall={setIsModalVisible} />
//                 <FlowListContainer>
//                     <PageTitleContainer>
//                         <PageTitle>Components</PageTitle>
//                         <SearchInput
//                             value={searchValue}
//                             onChange={(e) => setSearchValue(e.target.value)}
//                             prefix={<SearchOutlined />}
//                         />
//                     </PageTitleContainer>
//                     <FlowListTable dataSource={contextValues.elements.filter((d: any) => d?.name?.toLowerCase().includes(searchValue.toLowerCase()))} columns={listColumn} />
//                 </FlowListContainer>
//             </ContentDiv>
//         </ParentDiv>
//     )
// }

// export default ElementList