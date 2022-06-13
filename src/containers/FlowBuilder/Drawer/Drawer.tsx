import React from 'react'
// import { Drawer } from "antd";
import { Editor, Frame } from "@craftjs/core";
import { Container } from '../../../components/DraggableComponent/Container/Container';
import { Button } from '../../../components/DraggableComponent/Button/Button';
import { Text } from '../../../components/DraggableComponent/Text/Text';
import { Radio } from '../../../components/DraggableComponent/Radio/Radio';
import { Checkbox } from '../../../components/DraggableComponent/Checkbox/Checkbox'
import { Input } from '../../../components/DraggableComponent/Input/Input';
import { Form } from '../../../components/DraggableComponent/Form/Form';
import { Select } from '../../../components/DraggableComponent/Select/Select';
import { Tabs } from '../../../components/DraggableComponent/Tabs/Tabs';
import { Accordion } from '../../../components/DraggableComponent/Accordion/Accordion';
import { Switch } from '../../../components/DraggableComponent/Switch/Switch';
import { Alert } from '../../../components/DraggableComponent/Alert/Alert';
import { Image } from '../../../components/DraggableComponent/Image/Image';
import { Textarea } from '../../../components/DraggableComponent/Textarea/Textarea';
import { Link } from '../../../components/DraggableComponent/Link/Link';
import { Divider } from '../../../components/DraggableComponent/Divider/Divider';
import { Row } from '../../../components/DraggableComponent/Row/Row';
import { Column } from '../../../components/DraggableComponent/Column/Column';
import { Upload } from '../../../components/DraggableComponent/Upload/Upload';
import { Popover } from '../../../components/DraggableComponent/Popover/Popover';
import { DatePicker } from '../../../components/DraggableComponent/DatePicker/DatePicker';
import lz from "lzutf8";
import { DrawerContainer } from './style'


export default function PropertiesDrawer(props: any) {
  let width = props?.drawerValue?.length > 0 ? JSON.parse(lz.decompress(lz.decodeBase64(props.drawerValue))).ROOT?.props?.width : 300;
  console.log("propsprops",props)

  return (
    <div>
      <React.Fragment>
        <DrawerContainer placement="right"
          visible={props.componentOpen}
          onClose={() => props.setcomponentOpen(false)}
          closable={false}
          width={width}
          className="properties-drawer"
        >
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
            Upload,
            Popover,
            DatePicker
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
            <Frame data={lz.decompress(lz.decodeBase64(props.drawerValue))}>
            </Frame>
          </Editor>
        </DrawerContainer>
      </React.Fragment>
    </div>
  );
}
