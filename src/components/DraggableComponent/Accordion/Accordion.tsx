import React from "react";
import { Collapse } from 'antd';
import { useNode, useEditor } from "@craftjs/core";
import { AccordionSettings } from './Setting';
import { Text } from '../Text/Text'
const { Panel } = Collapse;

interface AccordionProps {
  disabled?: any;
  text?: any;
  description?: any;
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
  borderColor?: any,
  borderStyle?: any,
  borderWidth?: any,
  borderRadius?: any,
  opacity?: any,
  boxShadow?: any,
  groupSelect?: any
  children?: any,
  textComponent?: any
}
export const Accordion = (props: AccordionProps) => {
  const {
    text,
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
    borderColor,
    borderStyle,
    borderWidth,
    borderRadius,
    opacity,
    boxShadow,
    children,
    textComponent
  } = props

  const { connectors: { connect, drag } } = useNode();
  const { enabled }: any = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div ref={(ref: any) => {
      if (enabled) {
        connect(drag(ref))
      }
    }}>
      <Collapse
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
          fontWeight,
          fontStyle,
          textAlign,
          fontSize: `${fontSize}px`,
          color,
          lineHeight: `${lineHeight}px`,
          letterSpacing: `${letterSpacing}px`,
          backgroundColor,
          borderColor,
          borderStyle,
          borderLeftWidth: borderWidth[0],
          borderRightWidth: borderWidth[1],
          borderTopWidth: borderWidth[2],
          borderBottomWidth: borderWidth[3],
          borderRadius: `${borderRadius[0]} ${borderRadius[1]} ${borderRadius[2]} ${borderRadius[3]}`,
          opacity,
          boxShadow
        }}
      >
        <Panel
          header=
          {
            <Text {...textComponent}
              text={text}
              fontSize={fontSize}
              width={width}
              height={height}
              minWidth={minWidth}
              maxWidth={maxWidth}
              minHeight={minHeight}
              maxHeight={maxHeight}
              textAlign={textAlign}
              lineHeight={lineHeight}
              fontWeight={fontWeight}
              color={color}
            />
          }
          key="1">{children}</Panel>
        {/* <MaterialAccordionDetails></MaterialAccordionDetails> */}
      </Collapse>
    </div>
  )
}

export const AccordionDefaultProps = {
  disabled: false,
  text: 'accordion title',
  desctiption: '',
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['0px', '0px', '0px', '0px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px'],
  fontSize: 12,
  textComponent: {
    ...Text.craft.props,
  },
};

Accordion.craft = {
  props: { ...AccordionDefaultProps, CompType: 'accordion' },
  related: {
    settings: AccordionSettings,
  },
};