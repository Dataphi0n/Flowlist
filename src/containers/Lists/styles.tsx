import styled from 'styled-components';
import { Button, Table, Input } from 'antd'

export const ParentDiv = styled.div`
    display:flex;
    width:100%;

`

export const FlowListContainer = styled.div`
    padding:50px 50px;
`
export const FlowHeader = styled.div`
    padding:10px 20px;
    background-color:#fff;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

export const CreateButton = styled(Button)`
    
`

export const FlowListTable = styled(Table)`

`

export const ActionContainer = styled.div`
    display:flex;
    align-iems:center;
    i{
        padding:5px 10px;
        cursor:pointer;
    }
`

export const ContentDiv = styled.div`
    width:88%;
`

export const PageTitle = styled.div`
    font-size:20px;
    font-weight:700;
`

export const PageTitleContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-bottom:10px;
`

export const SearchInput = styled(Input)`
    height:40px;
    border-radius:6px;
    width:30%;
`