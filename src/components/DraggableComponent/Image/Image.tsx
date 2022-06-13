import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import { ImageSettings } from "./ImageSettings"

interface ImageProps {
  src?: any;
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
  border?: any;
  borderRadius?: any;
  opacity?: any;
  boxShadow?: any;
  groupSelect?: any;
}
export const Image = (props: ImageProps) => {
  const { connectors: { connect, drag } } = useNode();
  const { enabled }: any = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));
  const {
    src,
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
    backgroundColor,
    border,
    borderRadius,
    opacity,
    boxShadow,
  } = props
  return (
    <div
      ref={(ref: any) => {
        if (enabled) {
          connect(drag(ref))
        }
      }}
      style={{ width: "fit-content" }}
    >
      <img
        src={src}
        alt="no"
        style={{
          display,
          justifyContent,
          alignItems,
          flexFlow,
          margin: `${margin[0]} ${margin[1]} ${margin[2]} ${margin[3]}`,
          padding: `${padding[0]} ${padding[1]} ${padding[2]} ${padding[3]}`,
          width,
          height,
          minWidth,
          maxWidth,
          minHeight,
          maxHeight,
          overflow,
          backgroundColor,
          border,
          borderRadius: `${borderRadius[0]} ${borderRadius[1]} ${borderRadius[2]} ${borderRadius[3]}`,
          opacity,
          boxShadow
        }}
      />
    </div>
  )
}

export const ImageDefaultProps = {
  backgroundColor: 'white',
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['0px', '0px', '0px', '0px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px'],
  src: "data:image/webp;base64,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"
};

Image.craft = {
  props: ImageDefaultProps,
  related: {
    settings: ImageSettings,
  },
};