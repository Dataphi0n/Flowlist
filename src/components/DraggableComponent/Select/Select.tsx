import React from "react";
import { Select as AntdSelect, Form } from 'antd'
import { useNode, useEditor } from "@craftjs/core";
import { SelectSettings } from "./Setting"
import { SelectParent } from './styles'

interface SelectProps {
  disabled?: any;
  children?: any;
  optionData?: any
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
  name?: any;
  label?: any;
  placeholder?: any;
  required?: any;
  errorMessage?: any;
}
export const Select = (props: SelectProps) => {
  const { Option } = AntdSelect
  const { connectors: { connect, drag } } = useNode();
  const { enabled }: any = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));
  const {
    optionData,
    margin,
    padding,
    width,
    height,
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
    placeholder,
    required,
    errorMessage
  } = props

  return (
    <SelectParent
      ref={(ref: any) => {
        if (enabled) {
          connect(drag(ref))
        }
      }}
      {...props}
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
        <AntdSelect
          placeholder={placeholder}
          style={{
            margin: `${margin[0]} ${margin[1]} ${margin[2]} ${margin[3]}`,
            padding: `${padding[0]} ${padding[1]} ${padding[2]} ${padding[3]}`,
            width,
            height,
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
        >
          {optionData && optionData?.map((item: any, index: any) => {
            return (
              <Option value={item.value}>{item.label}</Option>
            )
          })}
        </AntdSelect>
      </Form.Item>
    </SelectParent>
  )
}

export const CheckboxDefaultProps = {
  disabled: false,
  size: 'small',
  optionData: [],
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['0px', '0px', '0px', '0px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['1px', '1px', '1px', '1px'],
  height: "40px"
};

Select.craft = {
  props: CheckboxDefaultProps,
  related: {
    settings: SelectSettings,
  },
};