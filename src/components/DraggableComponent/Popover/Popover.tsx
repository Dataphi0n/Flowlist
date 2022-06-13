import React from 'react';
import { useNode, useEditor } from "@craftjs/core";
import { Popover as AntdPopover } from 'antd';
import { PopoverSetting } from './Setting'
import { Container } from './style'

interface PopoverProps {
  text?: any;
  icon?: any;
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
  poptext?: any,
  popbackground?: any,
  popcolor?: any
}

export const Popover = (props: PopoverProps) => {

  const { connectors: { connect, drag } } = useNode();
  const { enabled }: any = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));
  const {
    text,
    icon,
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
    poptext,
  } = props

  const popcontent = (
    <div>
      {poptext}
    </div>
  )
  return (
    <Container
      ref={(ref: any) => {
        if (enabled) {
          connect(drag(ref))
        }
      }}
      {...props}
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
        lineHeight,
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
      <AntdPopover
        getPopupContainer={(trigger: any) => trigger.parentNode}
        content={popcontent}
      >
        {text.length > 0 ?
          <div>
            {text}
          </div> :
          <i className={icon}></i>
        }
      </AntdPopover>
    </Container>
  )
}

export const PopoverDefaultProps = {
  text: '',
  icon: 'fa fa-question-circle',
  poptext: 'Popover',
  width: 'fit-content',
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['0px', '0px', '0px', '0px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px'],
};

Popover.craft = {
  props: PopoverDefaultProps,
  related: {
    settings: PopoverSetting,
  },
};