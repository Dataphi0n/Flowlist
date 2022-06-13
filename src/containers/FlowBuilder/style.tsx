import styled from 'styled-components';
import { Button, Drawer } from '@material-ui/core';
import { Button as AntdButton, Input as AntdInput, Select } from 'antd'

export const DrawerSidebar = styled(Drawer)`
    .MuiDrawer-paper{
        z-index:12 !important;
    }
    .ant-popover{
        z-index:9999 !important;
    }
`

export const DragBar = styled.aside`
   background: #FFF;
   padding: 10px;
   position: absolute;
   zIndex:9999;
   width: 20%;
`

export const Description = styled.div`
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
`
export const Dndnode = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
    border: 1px solid black;
    padding: 5px;
    margin-top: 8px; 
    cursor: grab;   
`

export const Block = styled(Button)`
    width:100%;
    margin-bottom:20px!important;
    background-color: #fff!important;
    padding: 15px 0px 10px 0px!important;
    box-shadow: 0px 4px 10px 1px #ddd!important;
    cursor:grab;
    .MuiButton-label {
        display: flex;
        align-items:center;
    }
`

export const ButtonSider = styled.div`
    height: 100%;
    background: blue;
    cursor:pointer;
    color: #fff;
    padding: 3px;
    border-radius: 5px 0 0 5px;
`
export const BlockTitle = styled.div`
    text-transform: capitalize;
    font-weight: 500;
    margin-top: 10px;
`
export const MenuItemsContainer = styled.div`
    padding:20px;
`

export const SidebarTitle = styled.div`
    font-size:15px;
    font-weight:800;
    padding:10px 20px;
    text-align:center;
`

export const EmptySideBar = styled.div`
    font-size:10px;
    cursor:pointer;
    padding:20px;
    color:rgb(165, 94, 234);
`

export const CanvasNodeContainer = styled.div`
    // background-color: #c5c5c5;
`

export const NodeHeaderContainer = styled.div`
    padding:10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icons-container{
        display:flex;
        align-items:center;
        i{
            display:flex;
            align-items:center;
            justify-content:center;
            margin:0 5px;
            background:#ffffff;
            padding:5px;
            width:25px;
            height:25px;
            border-radius:3px;
        }
    }
`

export const NodeTitle = styled.div`
    font-weight:800;
    color:#ffffff;
    width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const CreateButton = styled(AntdButton)`
    font-size:12px;
    // position:absolute;
    // bottom:10px !important;
    text-align:center;
    background-color:#a55eea;
    color:#ffffff;
    font-weight:800;
    width:100%;
`
export const SaveButton = styled(AntdButton)`
    font-size:12px;
    text-align:center;
    background-color:#ffffff;
    color:#a55eea;
    font-weight:800;
    margin-right: 5px;
`

export const DeleteButton = styled(AntdButton)`
    text-align:center;
    background-color:#ff8383;
    color:#ffffff;
    border-radius: 50%;
`



export const CardContainer = styled.div`
    display:flex;
    align-items:center;
`

export const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    i{
        background: blue;
        margin:0px 5px;
        height: 25px;
        width: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        border-radius:30px;
    }
`

export const ButtonInner = styled.div`
    width:90%;
    margin-left:12px;
    display:flex;
    align-items:center;
    flex-direction:column;
`




export const HeaderContainer = styled.div`
    padding:7px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:#efefef;
`
export const FlowName = styled.div`
    width: 100px;

`
export const ButtonWrapper = styled.div`
`
export const FlowInput = styled(AntdInput)`
    margin-right: 5px;
`
export const FlowSelect = styled(Select)`
    color: #a55eea;
    .ant-select-selection-placeholder {
        color: #a55eea;
    }
`

export const PopContainer = styled.div`
    display: flex;
`

export const FlowContainer = styled.div`
display: flex;
flex-grow: 1;
`