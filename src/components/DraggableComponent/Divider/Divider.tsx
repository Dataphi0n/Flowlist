import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import { DividerSetting } from './Setting'
import { Divider as MaterialDivider } from "antd";

interface DividerProps {
  type?: any,
  text?: any,
  orientation?: any,
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
  boxShadow?: any,
}

export const Divider = (props: DividerProps) => {
  const {
    type,
    text,
    orientation,
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
  } = props
  const { connectors: { connect, drag } } = useNode();
  const { enabled }: any = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div
      ref={(ref: any) => {
        if (enabled) {
          connect(drag(ref))
        }
      }}
      className='divider-text'
    >
      <MaterialDivider
        type={type}
        orientation={orientation}
        style={{
          fontSize: `${fontSize}px`,
          textAlign,
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
          lineHeight: `${lineHeight}px`,
          color,
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
          boxShadow,
        }}
      >{text}</MaterialDivider>
    </div>

  )
}

export const DividerDefaultProps = {
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['0px', '0px', '0px', '0px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['2px', '2px', '2px', '2px'],
  type: 'horizontal',
};

Divider.craft = {
  props: DividerDefaultProps,
  related: {
    settings: DividerSetting,
  },
};

