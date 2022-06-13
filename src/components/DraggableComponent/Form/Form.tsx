import React from "react";
import { Form as AntdForm } from 'antd'
import { useNode, useEditor } from "@craftjs/core";
import { FormSettings } from "./FormSettings"


export type FormProps = {
  background: Record<'r' | 'g' | 'b' | 'a', number>;
  flexDirection: any;
  fillSpace: string;
  marginTop: number;
  marginLeft: number;
  marginBottom: number;
  marginRight: number;
  shadow: number;
  children: React.ReactNode;
  radius: number;

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
  borderStyle?: any;
  borderWidth?: any;
  borderColor?: any;
  borderRadius?: any;
  opacity?: any;
  boxShadow?: any;
  is?: any;
  canvas?: any;
  groupSelect?: any;
  layout?: any;
  name?: any;
};


export const Form = (props: Partial<FormProps>) => {
  const {
    flexDirection,
    fillSpace,
    children,
    display,
    justifyContent,
    alignItems,
    flexFlow,
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
    lineHeight,
    letterSpacing,
    backgroundColor,
    borderStyle,
    borderColor,
    boxShadow,
    opacity,
    layout,
    name
  } = props;
  const [form] = AntdForm.useForm();
  const { connectors: { connect, drag } } = useNode();
  const { enabled } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));
  const onFinish = (value: any) => {

  }
  return (
    <div
      ref={(ref: any) => {
        if (enabled) {
          connect(drag(ref))
        }
      }}
    >
      <AntdForm form={form} layout={layout} name={name} onFinish={onFinish}
        style={{
          justifyContent,
          flexDirection,
          alignItems,
          padding: `${padding![0]} ${padding![1]} ${padding![2]} ${padding![3]}`,
          margin: `${margin![0]} ${margin![1]} ${margin![2]} ${margin![3]}`,
          boxShadow,
          flex: fillSpace === 'yes' ? 1 : 'unset',
          display,
          flexFlow,
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
          lineHeight: `${lineHeight}px`,
          letterSpacing: `${letterSpacing}px`,
          backgroundColor,
          borderStyle,
          borderColor,
          opacity,
        }}
      >
        {children}
      </AntdForm>
    </div>
  );
}

export const FormDefaultProps = {
  padding: ['20px', '20px', '20px', '20px'],
  margin: ['0px', '0px', '0px', '0px'],
  width: 'auto',
  height: `auto`,
  backgroundColor: 'white',
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px'],
  name: "Form1",
  layout: "vertical"
};

Form.craft = {
  props: { ...FormDefaultProps, CompType: 'container' },
  related: {
    settings: FormSettings,
  },
};