import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import { Switch as AntdSwitch, Form } from 'antd'
import { SwitchSettings } from "./SwitchSettings"
import { SwitchParent } from '../style'

interface SwitchProps {
  label?: any;
  layout?: any;
  switchColor?: any;
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
  name?: any;
  required?: any;
  errorMessage?: any;
}
export const Switch = (props: SwitchProps) => {
  const {
    label,
    layout,
    name,
    required,
    errorMessage
  } = props
  const { connectors: { connect, drag } } = useNode();
  const { enabled }: any = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));
  return (
    <SwitchParent {...props}
      ref={(ref: any) => {
        if (enabled) {
          connect(drag(ref))
        }
      }}
      style={layout === "inline" ? { display: "flex", flexDirection: "row", alignItems: "center" } : { display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <label style={{ marginRight: '5px' }}>{label}</label>
      <Form.Item
        name={name}
        style={{ marginBottom: '0' }}
        rules={[
          {
            required: required,
            message: errorMessage
          }
        ]}>
        <AntdSwitch />
      </Form.Item>
    </SwitchParent>
  )
}

export const SwitchDefaultProps = {
  label: "Label",
  layout: "inline",
  switchColor: "",
  backgroundColor: '#1890ff',
  color: 'black',
  text: 'Click me',
  fontSize: 10,
  width: 'auto',
  height: 'auto',
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['0px', '0px', '0px', '0px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px'],
};

Switch.craft = {
  props: { ...SwitchDefaultProps, CompType: 'switch' },
  related: {
    settings: SwitchSettings,
  },
};