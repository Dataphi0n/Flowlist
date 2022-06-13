import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import { RowSettings } from "./RowSettings"
import { Row as RowAntd } from 'antd'


export type RowProps = {
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
  groupSelect?: any;
  optionData?: any;
  gutter?: any;
};

const defaultProps = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: '100%',
  height: 'auto',
};

export const Row = (props: Partial<RowProps>) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    children,

    display,
    justifyContent,
    alignItems,
    flexFlow,
    margin,
    padding,
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
    boxShadow,
    opacity,
    gutter
  } = props;
  const { connectors: { connect, drag } } = useNode();
  const { enabled } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  return (
    <RowAntd gutter={gutter}
      ref={(ref: any) => {
        if (enabled) {
          connect(drag(ref))
        }
      }}
      style={{
        display,
        justifyContent,
        alignItems,
        flexFlow,
        color: `rgba(${Object.values(color!)})`,
        padding: `${padding![0]} ${padding![1]} ${padding![2]} ${padding![3]}`,
        margin: `${margin![0]} ${margin![1]} ${margin![2]} ${margin![3]}`,
        boxShadow,
        borderRadius: `${borderRadius[0]} ${borderRadius[1]} ${borderRadius[2]} ${borderRadius[3]}`,
        overflow,
        fontWeight,
        fontStyle,
        textAlign,
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
        letterSpacing: `${letterSpacing}px`,
        backgroundColor,
        borderStyle,
        borderLeftWidth: borderWidth[0],
        borderRightWidth: borderWidth[1],
        borderTopWidth: borderWidth[2],
        borderBottomWidth: borderWidth[3],
        borderColor,
        opacity,
      }}
    >
      {children}
    </RowAntd>
  )
}

export const RowDefaultProps = {
  padding: ['20px', '20px', '20px', '20px'],
  margin: ['0px', '0px', '0px', '0px'],
  backgroundColor: 'white',
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px'],
  shadow: ""
};

Row.craft = {
  props: { ...RowDefaultProps, CompType: 'Row' },
  related: {
    settings: RowSettings,
  },
};