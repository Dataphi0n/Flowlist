import React from "react";
import { Form, Radio as AntdRadio } from 'antd'
import { useNode, useEditor } from "@craftjs/core";
import { RadioButtonSettings } from "./RadioButtonSettings"
import { Text } from '../Text/Text'
import styled from 'styled-components';
interface RadioProps {
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
  optionData?: any;
  name?: any;
  required?: any;
  errorMessage?: any;
}
const RadioButtonParent = styled.div`
  .MuiTypography-body1{
    color: ${(p: any) => p.color};
    font-size: ${(p: any) => p.fontSize};
    font-weight: ${(p: any) => p.fontWeight};
    letter-spacing: ${(p: any) => p.letterSpacing};
  }
  .MuiFormControlLabel-root{
    justify-content: ${(p: any) => p.textAlign === "left" ? "flex-start" : p.textAlign === "right" ? "flex-end" : p.textAlign} !important;
  }
`
export const Radio = (props: RadioProps) => {
  const {
    optionData,
    name,
    required,
    errorMessage
  } = props
  const { connectors: { connect, drag } } = useNode();
  const { enabled }: any = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));
  return (
    <RadioButtonParent {...props}>
      <Form.Item
        name={name}
        rules={[
          {
            required: required,
            message: errorMessage
          }
        ]}
      >
        <AntdRadio.Group
          ref={(ref: any) => {
            if (enabled) {
              connect(drag(ref))
            }
          }}
        >
          {optionData ? optionData?.map((item: any, index: any) => {
            return (
              <AntdRadio value={item.value} key={index}>{item.label}</AntdRadio>
              // <FormControlLabel value={item.value} control={<MaterialRadio />} label={item.label} />
            )
          }) : <Radio>{"Radio Button"}</Radio>}
        </AntdRadio.Group>
      </Form.Item>
    </RadioButtonParent>
  )
}

export const RadioDefaultProps = {
  backgroundColor: '#1890ff',
  color: 'black',
  text: 'Click me',
  width: 'auto',
  height: 'auto',
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['0px', '0px', '0px', '0px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px'],
  optionData: [{ value: "Radio", label: "Radio Button" }],
  textComponent: {
    ...Text.craft.props,
    textAlign: 'center',
  },
};

Radio.craft = {
  props: { ...RadioDefaultProps, CompType: 'radio' },
  related: {
    settings: RadioButtonSettings,
  },
};