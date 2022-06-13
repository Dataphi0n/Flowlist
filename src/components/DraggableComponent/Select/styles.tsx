import styled from 'styled-components';


export const OptionBox = styled.div`
`

export const SelectParent = styled.div`
    .ant-select:not(.ant-select-customize-input) .ant-select-selector{
        width: ${(p:any)=>p.width};
        height: ${(p:any)=>p.height};
        min-width: ${(p:any)=>p.minWidth};
        max-width: ${(p:any)=>p.maxHeight};
        min-height: ${(p:any)=>p.minHeight};
        max-height: ${(p:any)=>p.maxHeight};
        overflow: ${(p:any)=>p.overflow};
        font-eeight: ${(p:any)=>p.fontWeight};
        font-style: ${(p:any)=>p.fontStyle};
        text-align: ${(p:any)=>p.textAlign};
        font-size: ${(p:any)=>p.fontSize}px;
        color ${(p:any)=>p.color};
        line-height: ${(p:any)=>p.lineHeight}px;
        letter-spacing: ${(p:any)=>p.letterSpacing}px;
        background-color: ${(p:any)=>p.backgroundColor};
        border-Style ${(p:any)=>p.borderStyle};
        border-left-width:${(p:any)=>p.borderWidth[0]};
        border-right-width: ${(p:any)=>p.borderWidth[1]}
        border-top-width:${(p:any)=>p.borderWidth[2]};
        border-bottom-width:${(p:any)=>p.borderWidth[3]};
        border-color:${(p:any)=>p.borderColor};
        border-radius: ${(p:any)=>p.borderRadius[0]} ${(p:any)=>p.borderRadius[1]} ${(p:any)=>p.borderRadius[2]} ${(p:any)=>p.borderRadius[3]};
        opacity:${(p:any)=>p.opacity};
        box-shadow: ${(p:any)=>p.boxShadow};
    }
    .ant-select.ant-select-in-form-item{
        margin: ${(p:any)=>p.margin[0]} ${(p:any)=>p.margin[1]} ${(p:any)=>p.margin[2]} ${(p:any)=>p.margin[3]};
        padding: ${(p:any)=>p.padding[0]} ${(p:any)=>p.padding[1]} ${(p:any)=>p.padding[2]} ${(p:any)=>p.padding[3]};
    }

    .ant-select-selector {
        display: flex;
        align-items: center;
    }
`