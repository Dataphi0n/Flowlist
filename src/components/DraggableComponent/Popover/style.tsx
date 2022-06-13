import styled from 'styled-components';

export const Container = styled.div`
.ant-popover-inner {
    background: ${(props:any) => props.popbackground ? props.popbackground : 'white'} !important;
    color:${(p:any)=>p.popcolor?p.popcolor:"color"} !important;
 }
`