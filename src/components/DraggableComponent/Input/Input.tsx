import React from "react";
import { Input as AntdInput, Form } from 'antd'
import { useNode, useEditor } from "@craftjs/core";
import { InputSettings } from "./InputSettings"
import { InputParent } from '../style'

interface InputProps {
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
}
export const Input: any = (props: InputProps) => {
  const { connectors: { connect, drag } } = useNode();
  const { enabled }: any = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));
  const {
    placeholder,
    label,
    name,
    required,
    errorMessage
  } = props
  return (
    <InputParent {...props}
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
        <AntdInput
          name={name}
          placeholder={placeholder}
        />
      </Form.Item>
    </InputParent>
  )
}

export const InputDefaultProps = {
  placeholder: 'Placeholder',
  value: 'demo',
  label: '',
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['0px', '0px', '0px', '10px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['1px', '1px', '1px', '1px'],
  variant: "outlined",
  width: "100%",
  height: "40px"
};

Input.craft = {
  props: { ...InputDefaultProps, CompType: 'input' },
  related: {
    settings: InputSettings,
  },
};