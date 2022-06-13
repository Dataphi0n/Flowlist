import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import { LinkSetting } from './Setting'
import { Link as MaterialLink } from "@material-ui/core";

interface LinkProps {
  link?: any;
  text?: any;
  line?: any;
  target?: any;
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
export const Link = (props: LinkProps) => {
  const {
    link,
    text,
    line,
    target,
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
  console.log("underline", line)
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
    >
      <MaterialLink
        target={target}
        href={link}
        underline={line}
        style={{
          color
        }}
      >{text}</MaterialLink>
    </div>

  )
}

export const LinkDefaultProps = {
  link: '#',
  text: 'link',
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['0px', '0px', '0px', '0px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px'],
  line: "none",
  target: "_blank"
};

Link.craft = {
  props: LinkDefaultProps,
  related: {
    settings: LinkSetting,
  },
};

