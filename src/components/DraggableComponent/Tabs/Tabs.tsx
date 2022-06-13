import React from "react";
import { useNode, Element, useEditor } from "@craftjs/core";
import { Tabs as AntdTabs } from "antd";
import { Container } from '../Container/Container'
import { Text } from '../Text/Text'
import { TabsSettings } from './TabsSettings'

const { TabPane } = AntdTabs;

interface TabsProps {
    link?: any;
    text?: any;
    line?: any;
    target?: any;
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
    optionData?: any;
}
export const Tabs = (props: TabsProps) => {
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
        lineHeight,
        letterSpacing,
        backgroundColor,
        borderStyle,
        borderWidth,
        borderColor,
        borderRadius,
        opacity,
        boxShadow,
        optionData
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
            <AntdTabs defaultActiveKey="0">
                {optionData.map((tab: any, index: any) => (
                    <TabPane tab={tab.label} key={index}>
                        <Element
                            id={`tab${index}`}
                            canvas
                            is={Container}
                            background={{ r: 78, g: 78, b: 78, a: 1 }}
                            color={{ r: 0, g: 0, b: 0, a: 1 }}
                            height="300px"
                            width="100%"
                        >
                            <Text
                                text="Tab1"
                                fontSize={15}
                                data-cy="card-top-text-2"
                            />
                        </Element>
                    </TabPane>
                ))}
            </AntdTabs>
        </div>

    )
}

export const TabsDefaultProps = {
    link: '',
    text: 'antd',
    optionData: [],
    margin: ['0px', '0px', '0px', '0px'],
    padding: ['0px', '0px', '0px', '0px'],
    borderRadius: ['0px', '0px', '0px', '0px'],
    borderWidth: ['0px', '0px', '0px', '0px'],
    target: "_blank"
};

Tabs.craft = {
    props: TabsDefaultProps,
    related: {
        settings: TabsSettings,
    },
};

