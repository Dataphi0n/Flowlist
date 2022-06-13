import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Editor, Frame, Element } from "@craftjs/core";
import { Container } from '../../components/DraggableComponent/Container/Container';
import { Button } from '../../components/DraggableComponent/Button/Button';
import { ThemeProvider } from '@material-ui/styles';
import { Text } from '../../components/DraggableComponent/Text/Text';
import { Radio } from '../../components/DraggableComponent/Radio/Radio';
import { Checkbox } from '../../components/DraggableComponent/Checkbox/Checkbox'
import { Input } from '../../components/DraggableComponent/Input/Input';
import { Form } from '../../components/DraggableComponent/Form/Form';
import { Select } from '../../components/DraggableComponent/Select/Select';
import { Tabs } from '../../components/DraggableComponent/Tabs/Tabs';
import { Accordion } from '../../components/DraggableComponent/Accordion/Accordion';
import { Switch } from '../../components/DraggableComponent/Switch/Switch';
import { Alert } from '../../components/DraggableComponent/Alert/Alert';
import { Image } from '../../components/DraggableComponent/Image/Image';
import { Textarea } from '../../components/DraggableComponent/Textarea/Textarea';
import { Link } from '../../components/DraggableComponent/Link/Link';
import { Divider } from '../../components/DraggableComponent/Divider/Divider';
import { Row } from '../../components/DraggableComponent/Row/Row';
import { Column } from '../../components/DraggableComponent/Column/Column';
import { Upload } from '../../components/DraggableComponent/Upload/Upload';
import { Popover } from '../../components/DraggableComponent/Popover/Popover'
import { DatePicker } from '../../components/DraggableComponent/DatePicker/DatePicker'
import { useEditor } from '@craftjs/core';
import FlowHeader from './FlowHeader'
import { CanvasNodeContainer, NodeHeaderContainer, NodeTitle } from './style'
import PropertiesDrawer from './Drawer/Drawer'
// import Context from '../../Context'
import { message } from 'antd';
import lz from "lzutf8";
// import '../../index.css';
import { Handle, Position } from 'react-flow-renderer';

const CustomNode = ({ data, id }: any) => {
    console.log("idddd",data)
    // const navigate: any = useNavigate()
    return (
        <CanvasNodeContainer className="canvas-node-container">
            <Handle type="target" position={Position.Top} />
            <NodeHeaderContainer className="node-header-container">
                <NodeTitle>
                    {data.createdNode.attributes.name}
                </NodeTitle>
                <div className="icons-container">
                    {/* <i className="fa fa-pencil-square-o" style={{ cursor: 'pointer' }}
                        onClick={() => {
                            navigate('/component?id=' + data.createdNode.id)
                        }}
                        aria-hidden="true"
                    ></i> */}
                    <i className="fa fa-sliders" style={{ cursor: 'pointer' }}
                        onClick={() => {
                            data.setcomponentOpen(true)
                            data.setDrawerValue(data.createdNode.attributes.attributeData)
                        }} aria-hidden="true"></i>
                    <i className="fa fa-trash" style={{ cursor: 'pointer' }} onClick={(e) => { data.onDelete(id) }} aria-hidden="true"></i>
                </div>
            </NodeHeaderContainer>
            {/* @ts-ignore */}
            <Editor resolver={{
                Button, Text, Container, Radio, Checkbox, Input, Select, Switch,
                Form,
                Alert,
                Image,
                Accordion, Textarea,
                Link,
                Divider,
                Tabs,
                Row,
                Column,
                Popover,
                DatePicker,
                Upload
            }}
                indicator={{
                    'success': '#2d9d78',
                    'error': '#e34850'
                }}
                onNodesChange={query => {

                }}
                enabled={false}
            >
                {/* @ts-ignore */}
                <Frame data={lz.decompress(lz.decodeBase64(data.createdNode.attributes.nodeData))}>


                </Frame>
            </Editor>
            <Handle type="source" position={Position.Bottom} id="b" />
        </CanvasNodeContainer>
    )
}

export default CustomNode