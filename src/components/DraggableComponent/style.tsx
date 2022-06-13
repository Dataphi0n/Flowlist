import styled from 'styled-components';

export const GroupedItems = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:20px;
`

export const SwitchParent = styled.div`
    margin: ${(p: any) => p.margin[0]} ${(p: any) => p.margin[1]} ${(p: any) => p.margin[2]} ${(p: any) => p.margin[3]};
    padding: ${(p: any) => p.padding[0]} ${(p: any) => p.padding[1]} ${(p: any) => p.padding[2]} ${(p: any) => p.padding[3]};
    width:${(p: any) => p.width ? p.width : "auto"};
    height:${(p: any) => p.height};
    min-width:${(p: any) => p.minWidth};
    max-width:${(p: any) => p.maxWidth};
    min-height:${(p: any) => p.minHeight};
    max-height:${(p: any) => p.maxHeight};
    border-style:${(p: any) => p.borderStyle};
    border-color:${(p: any) => p.borderColor};
    border-radius:${(p: any) => p.borderRadius[0]} ${(p: any) => p.borderRadius[1]} ${(p: any) => p.borderRadius[2]} ${(p: any) => p.borderRadius[3]};
    border-left-width:${(p: any) => p.borderWidth[0]};
    border-right-width:${(p: any) => p.borderWidth[1]};
    border-top-width:${(p: any) => p.borderWidth[2]};
    border-bottom-width:${(p: any) => p.borderWidth[3]};
    .MuiSwitch-colorSecondary.Mui-checked{
        color:${(p: any) => p.switchColor}   
    }
    .ant-switch-checked{
        background:${(p: any) => p.switchColor}!important;
    }
    label{
        font-weight:${(p: any) => p.fontWeight};
        font-style:${(p: any) => p.fontStyle};
        text-align:${(p: any) => p.textAlign};
        font-size:${(p: any) => p?.fontSize};
        letter-spacing:${(p: any) => p.letterSpacing};
        line-height:${(p: any) => p.height};
        color:${(p: any) => p.color};
    }
`

export const ItemsContainer = styled.div`
    display:flex;
`

export const CheckBoxContainer = styled.div`
        margin: ${(p: any) => p.margin[0]} ${(p: any) => p.margin[1]} ${(p: any) => p.margin[2]} ${(p: any) => p.margin[3]};
        padding: ${(p: any) => p.padding[0]} ${(p: any) => p.padding[1]} ${(p: any) => p.padding[2]} ${(p: any) => p.padding[3]};
        width: ${(p: any) => p.width};
        height: ${(p: any) => p.height};
        min-width: ${(p: any) => p.minWidth};
        max-width: ${(p: any) => p.maxHeight};
        min-height: ${(p: any) => p.minHeight};
        max-height: ${(p: any) => p.maxHeight};
        overflow: ${(p: any) => p.overflow};
        font-weight: ${(p: any) => p.fontWeight};
        font-style: ${(p: any) => p.fontStyle};
        text-align: ${(p: any) => p.textAlign};
        font-size: ${(p: any) => p.fontSize}px;
        color ${(p: any) => p.color};
        line-height: ${(p: any) => p.lineHeight}px;
        letter-spacing: ${(p: any) => p.letterSpacing}px;
        background-color: ${(p: any) => p.backgroundColor};
        border-Style ${(p: any) => p.borderStyle};
        border-left-width:${(p: any) => p.borderWidth[0]};
        border-right-width: ${(p: any) => p.borderWidth[1]}
        border-top-width:${(p: any) => p.borderWidth[2]};
        border-bottom-width:${(p: any) => p.borderWidth[3]};
        border-color:${(p: any) => p.borderColor};
        border-radius: ${(p: any) => p.borderRadius[0]} ${(p: any) => p.borderRadius[1]} ${(p: any) => p.borderRadius[2]} ${(p: any) => p.borderRadius[3]};
        opacity:${(p: any) => p.opacity};
        box-shadow: ${(p: any) => p.boxShadow};
`


export const InputParent = styled.div`
    width:${(p: any) => p.width ? p.width : "auto"};
    .ant-input{
        height:${(p: any) => p.height};
        margin: ${(p: any) => p.margin[0]} ${(p: any) => p.margin[1]} ${(p: any) => p.margin[2]} ${(p: any) => p.margin[3]};
        padding: ${(p: any) => p.padding[0]} ${(p: any) => p.padding[1]} ${(p: any) => p.padding[2]} ${(p: any) => p.padding[3]};
        width:100%;
        height:${(p: any) => p.height};
        min-width:${(p: any) => p.minWidth};
        max-width:${(p: any) => p.maxWidth};
        min-height:${(p: any) => p.minHeight};
        max-height:${(p: any) => p.maxHeight};
        border-style:${(p: any) => p.borderStyle};
        border-color:${(p: any) => p.borderColor};
        border-radius:${(p: any) => p.borderRadius[0]} ${(p: any) => p.borderRadius[1]} ${(p: any) => p.borderRadius[2]} ${(p: any) => p.borderRadius[3]};
        border-left-width:${(p: any) => p.borderWidth[0]};
        border-right-width:${(p: any) => p.borderWidth[1]};
        border-top-width:${(p: any) => p.borderWidth[2]};
        border-bottom-width:${(p: any) => p.borderWidth[3]};
        background:${(p: any) => p.backgroundColor};
        font-weight:${(p: any) => p.fontWeight};
        font-style:${(p: any) => p.fontStyle};
        text-align:${(p: any) => p.textAlign};
        font-size:${(p: any) => p?.fontSize};
        letter-spacing:${(p: any) => p.letterSpacing};
        line-height:${(p: any) => p.height};
        color:${(p: any) => p.color};
    }
`

export const TextAreaParent = styled.div`
    textarea{
        height:auto !important;
        overflow-y:auto !important;
    }
`

export const ButtonParent = styled.div`
    width:${(p: any) => p.width ? p.width : "auto"};
`

export const UploadParent = styled.div`
    padding:5px;
`

export const SegmentedParent = styled.div`

`