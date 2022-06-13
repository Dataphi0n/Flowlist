import React from "react";
import { Segmented as AntdSegmented, Form } from 'antd'
import { useNode, useEditor } from "@craftjs/core";
import { SegmentedSettings } from "./SegmentedSettings"
import { SegmentedParent } from '../style'

interface SegmentedProps {
    placeholder: any;
    value?: any;
    label?: any;
    variant?: any;
    display?: any;
    justifyContent?: any;
    alignItems?: any;
    flexFlow?: any;
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
    borderColor?: any;
    borderStyle?: any;
    borderWidth?: any;
    borderRadius?: any;
    opacity?: any;
    boxShadow?: any;
    groupSelect?: any;
    name?: any;
    required?: any;
    errorMessage?: any;
    optionData?: any;
}
export const Segmented: any = (props: SegmentedProps) => {
    const { connectors: { connect, drag } } = useNode();
    const { enabled }: any = useEditor((state, query) => ({
        enabled: state.options.enabled,
    }));
    const {
        label,
        name,
        required,
        errorMessage,
        optionData
    } = props
    return (
        <SegmentedParent {...props}
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
                <AntdSegmented
                    options={optionData}
                />
            </Form.Item>
        </SegmentedParent>
    )
}

export const SegmentedDefaultProps = {
    placeholder: 'Placeholder',
    value: 'demo',
    label: '',
    margin: ['0px', '0px', '0px', '0px'],
    padding: ['0px', '0px', '0px', '10px'],
    borderRadius: ['0px', '0px', '0px', '0px'],
    borderWidth: ['1px', '1px', '1px', '1px'],
    variant: "outlined",
    width: "100%",
    height: "40px",
    optionData: [
        { label: 'Daily', value: 'Daily' },
        { label: 'Monthly', value: 'Monthly' },
        { label: 'Weekly', value: 'Weekly' },
        { label: 'Yearly', value: 'Yearly' }
    ]
};

Segmented.craft = {
    props: { ...SegmentedDefaultProps, CompType: 'Segmented' },
    related: {
        settings: SegmentedSettings,
    },
};