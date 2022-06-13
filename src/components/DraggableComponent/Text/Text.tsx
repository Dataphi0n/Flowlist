import { useNode, useEditor } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'
import { TextSettings } from './TextSettings'

interface TextProps {
  size?: string,
  text?: any,
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
}
export const Text = (props: TextProps) => {
  const {
    connectors: { connect, drag },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

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
    borderStyle,
    borderWidth,
    borderColor,
    borderRadius,
    opacity,
    boxShadow,
  } = props

  return (
    <div>
      <ContentEditable
        innerRef={(ref: any) => {
          if (enabled) {
            connect(drag(ref))
          }
        }}
        disabled={!enabled}
        html={text}
        onChange={(e: any) =>
          setProp((props: any) =>
            props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
          )
        }
        tagName="p"
        style={{
          fontSize: `${fontSize}px`,
          textAlign,
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

export const TextDefaultProps = {
  text: 'Hi',
  fontSize: 30,
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['0px', '0px', '0px', '0px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['0px', '0px', '0px', '0px'],
  textAlign: 'left',
  fontWeight: '500',
  color: { r: 92, g: 90, b: 90, a: 1 },
  shadow: 0,
  backgroundColor: { r: 255, g: 255, b: 255, a: 1 },
};

Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};
