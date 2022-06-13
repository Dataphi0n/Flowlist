import React from "react";
import { Paper } from "@material-ui/core";
import { useNode, useEditor } from "@craftjs/core";
import { Resizer } from '../../Resizer';
import { ContainerSettings } from "./ContainerSettings"


export type ContainerProps = {
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
  boxShadow?: any,
  groupSelect?: any
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

export const Container = (props: Partial<ContainerProps>) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    flexDirection,
    fillSpace,
    background,
    shadow,
    radius,
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
  } = props;
  const { connectors: { connect, drag } } = useNode();
  const { enabled } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? (
    <Resizer
      propKey={{ width: 'width', height: 'height' }}
      style={{
        justifyContent,
        flexDirection,
        alignItems,
        color: `rgba(${Object.values(color!)})`,
        padding: `${padding![0]} ${padding![1]} ${padding![2]} ${padding![3]}`,
        margin: `${margin![0]} ${margin![1]} ${margin![2]} ${margin![3]}`,
        boxShadow,
        borderRadius: `${borderRadius[0]} ${borderRadius[1]} ${borderRadius[2]} ${borderRadius[3]}`,

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
        borderLeftWidth: borderWidth[0],
        borderRightWidth: borderWidth[1],
        borderTopWidth: borderWidth[2],
        borderBottomWidth: borderWidth[3],
        borderColor,
        opacity,
      }}
    >
      {children}
    </Resizer>
  ) :
    <div
      style={{
        justifyContent,
        flexDirection,
        alignItems,
        color: `rgba(${Object.values(color!)})`,
        padding: `${padding![0]} ${padding![1]} ${padding![2]} ${padding![3]}`,
        margin: `${margin![0]} ${margin![1]} ${margin![2]} ${margin![3]}`,
        boxShadow,
        borderRadius: `${borderRadius[0]} ${borderRadius[1]} ${borderRadius[2]} ${borderRadius[3]}`,

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
        borderLeftWidth: borderWidth[0],
        borderRightWidth: borderWidth[1],
        borderTopWidth: borderWidth[2],
        borderBottomWidth: borderWidth[3],
        borderColor,
        opacity,
      }}
    >{children}</div>;
}

export const ContainerDefaultProps = {
  padding: ['0px', '0px', '0px', '0px'],
  margin: ['0px', '0px', '0px', '0px'],
  width: 'auto',
  height: `auto`,
  backgroundColor: 'white',
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px']
};

Container.craft = {
  props: { ...ContainerDefaultProps, CompType: 'container' },
  related: {
    settings: ContainerSettings,
  },
};