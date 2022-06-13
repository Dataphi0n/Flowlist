import React from "react";
import { Checkbox as AntdCheckbox, Form } from "antd"
import { useNode, useEditor } from "@craftjs/core";
import { CheckboxSettings } from './CheckboxSettings'
import { Text } from '../Text/Text'
import { CheckBoxContainer } from '../style'
interface CheckboxProps {
  checked: any;
  disabled?: any;
  size?: any;
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
  label?: any;
  group?: any;
}
export const Checkbox = (props: CheckboxProps) => {
  const {
    text,
    name,
    required,
    errorMessage,
    optionData,
    label,
    group
  } = props

  const { connectors: { connect, drag } } = useNode();
  const { enabled }: any = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));
  return (
    <CheckBoxContainer {...props} ref={(ref: any) => {
      if (enabled) {
        connect(drag(ref))
      }
    }}>
      {group === '1' ?
        <>
          <Form.Item
            name={name}
            valuePropName="checked"
            rules={[
              {
                required: required,
                message: errorMessage
              }
            ]}
          >
            <AntdCheckbox>{text}</AntdCheckbox>
          </Form.Item>
        </> :
        <>
          <Form.Item
            label={label}
            name={name}
            valuePropName="checked"
            rules={[
              {
                required: required,
                message: errorMessage
              }
            ]}
          >
            <AntdCheckbox.Group options={optionData} />
          </Form.Item>
        </>
      }
    </CheckBoxContainer>
  )
}

export const CheckboxDefaultProps = {
  group: '1',
  color: 'gray',
  text: 'Click me',
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['0px', '0px', '0px', '0px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px'],
  optionData: [{ value: "Checkbox", label: "Checkbox" }],
  textComponent: {
    ...Text.craft.props,
    textAlign: 'center',
  },
};

Checkbox.craft = {
  props: { ...CheckboxDefaultProps, CompType: 'checkbox' },
  related: {
    settings: CheckboxSettings,
  },
};