import React from "react";
import { Button as AntdButton, Form } from "antd";
import { useNode, useEditor } from "@craftjs/core";
import { ButtonSettings } from './ButtonSettings'
import { Text } from '../Text/Text'
import { ButtonParent } from '../style'

interface ButtonProps {
  children?: any;
  text?: any;
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
  groupSelect?: any,
  textComponent?: any,

}
export const Button = (props: ButtonProps) => {
  const {
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
    text,
    textComponent,
    boxShadow,
  } = props
  const { connectors: { connect, drag } } = useNode();
  const { enabled }: any = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ButtonParent>
      <Form.Item>
        <AntdButton
          ref={(ref: any) => {
            if (enabled) {
              connect(drag(ref))
            }
          }}
          htmlType="submit"
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
          <Text {...textComponent} text={text} fontSize={fontSize} />
        </AntdButton>
      </Form.Item>
    </ButtonParent>
  )
}
export const ButtonDefaultProps = {
  backgroundColor: '#1890ff',
  color: 'white',
  text: 'Click me',
  fontSize: 10,
  width: 'auto',
  height: 'auto',
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['5px', '5px', '5px', '5px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px'],
  textAlign: 'center',
  textComponent: {
    ...Text.craft.props,
  },
};
Button.craft = {
  props: { ...ButtonDefaultProps, CompType: 'button' },
  related: {
    settings: ButtonSettings,
  },
};