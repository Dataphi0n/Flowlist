import React from "react";
import { Alert as AntdAlert } from 'antd';
import { useNode, useEditor } from "@craftjs/core";
import { AlertSettings } from "./AlertSettings"

interface AlertProps {
  type: any;
  message: any,
  showIcon: any,
  display?: any,
  justifyContent?: any,
  alignItems?: any,
  flexFlow?: any,
  margin?: any,
  padding?: any,
  width?: any,
  height?: any,
  minWidth?: any,
  maxWidth?: any,
  minHeight?: any,
  maxHeight?: any,
  overflow?: any,
  fontWeight?: any,
  fontStyle?: any,
  textAlign?: any,
  fontSize?: any,
  color?: any,
  lineHeight?: any,
  letterSpacing?: any,
  backgroundColor?: any,
  borderStyle?: any,
  borderWidth?: any,
  borderColor?: any,
  borderRadius?: any,
  opacity?: any,
  boxShadow?: any
}
export const Alert = (props: AlertProps) => {
  const { connectors: { connect, drag } } = useNode();
  const { enabled }: any = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));
  const {
    type,
    message,
    showIcon,
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
    color,
    lineHeight,
    letterSpacing,
    backgroundColor,
    borderStyle,
    borderWidth,
    borderColor,
    borderRadius,
    opacity,
    boxShadow
  } = props
  return (
    <div
      ref={(ref: any) => {
        if (enabled) {
          connect(drag(ref))
        }
      }}
      className="alert-text"
      style={{
        display,
        justifyContent,
        alignItems,
        flexFlow
      }}
    >
      <AntdAlert
        message={message}
        type={type}
        showIcon={showIcon}
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
      />
    </div>
  )
}

export const AlertDefaultProps = {
  type: "success",
  message: "Enter message here",
  showIcon: false,
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['5px', '5px', '5px', '5px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px'],
};

Alert.craft = {
  props: AlertDefaultProps,
  related: {
    settings: AlertSettings,
  },
};