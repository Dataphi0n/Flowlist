import React from "react";
import { Form, Upload as AntdUpload, Button } from 'antd';
import { useNode, useEditor } from "@craftjs/core";
import { UploadSettings } from './UploadSettings'
import { Text } from '../Text/Text'
import { UploadParent } from '../style'

interface UploadProps {
    children?: any;
    text?: any;
    margin?: any;
    padding?: any;
    width?: any;
    height?: any;
    minWidth?: any;
    maxWidth?: any;
    minHeight?: any;
    maxHeight?: any;
    overflow?: any;
    fontWeight?: any;
    fontStyle?: any;
    textAlign?: any;
    fontSize?: any;
    color?: any;
    lineHeight?: any;
    letterSpacing?: any;
    backgroundColor?: any;
    borderStyle?: any;
    borderWidth?: any;
    borderColor?: any;
    borderRadius?: any;
    opacity?: any;
    boxShadow?: any;
    groupSelect?: any;
    textComponent?: any;
    rows?: any;
    name?: any;
    label?: any;
    required?: any;
    errorMessage?: any;
}
export const Upload = (props: UploadProps) => {
    const {
        margin,
        padding,
        width,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        overflow,
        fontWeight,
        fontStyle,
        textAlign,
        fontSize,
        color,
        lineHeight,
        letterSpacing,
        backgroundColor,
        borderStyle,
        borderWidth,
        borderColor,
        borderRadius,
        opacity,
        boxShadow,
        name,
        label,
        required,
        errorMessage
    } = props
    const { connectors: { connect, drag } } = useNode();
    const { enabled }: any = useEditor((state, query) => ({
        enabled: state.options.enabled,
    }));
    return (
        <UploadParent {...props}
            ref={(ref: any) => {
                if (enabled) {
                    connect(drag(ref))
                }
            }}
        >
            <Form.Item
                name={name}
                label={label}
                rules={[
                    {
                        required: required,
                        message: errorMessage
                    }
                ]}
            >
                <AntdUpload>
                    <Button
                        style={{
                            margin: `${margin[0]} ${margin[1]} ${margin[2]} ${margin[3]}`,
                            padding: `${padding[0]} ${padding[1]} ${padding[2]} ${padding[3]}`,
                            width,
                            height: "auto",
                            minWidth,
                            maxWidth,
                            minHeight,
                            maxHeight,
                            overflow,
                            fontWeight,
                            fontStyle,
                            textAlign,
                            fontSize: `${fontSize}px`,
                            color,
                            lineHeight: `${lineHeight}px`,
                            letterSpacing: `${letterSpacing}px`,
                            backgroundColor,
                            borderStyle,
                            borderLeftWidth: borderWidth[0],
                            borderRightWidth: borderWidth[1],
                            borderTopWidth: borderWidth[2],
                            borderBottomWidth: borderWidth[3],
                            borderColor,
                            borderRadius: `${borderRadius[0]} ${borderRadius[1]} ${borderRadius[2]} ${borderRadius[3]}`,
                            opacity,
                            boxShadow
                        }}
                    >{props.children}</Button>
                </AntdUpload>
            </Form.Item>
        </UploadParent>
    )
}
export const UploadDefaultProps = {
    fontSize: 14,
    rows: 4,
    width: '100%',
    height: 'auto',
    margin: ['0px', '0px', '0px', '0px'],
    padding: ['0px', '5px', '0px', '5px'],
    borderRadius: ['0px', '0px', '0px', '0px'],
    borderWidth: ['1px', '1px', '1px', '1px'],
    textComponent: {
        ...Text.craft.props,
        textAlign: 'center',
    },
};
Upload.craft = {
    props: UploadDefaultProps,
    related: {
        settings: UploadSettings,
    },
};