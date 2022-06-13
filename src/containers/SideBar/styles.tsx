import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const SidebarContainer = styled.div`
    padding-top:40px;
    width:12%;
    height:100vh;
    .MuiListItem-gutters{
        padding:0;
    }
    .MuiDrawer-paper{
        width:12%;
        background-color:#a55eea;
    }
`

export const ItemButton = styled(Button)`
    font-size:14px !important;
    text-transform: capitalize !important;
    font-weight:700 !important;
`