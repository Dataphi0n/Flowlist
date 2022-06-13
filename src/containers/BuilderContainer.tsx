import React from 'react';
import { Container } from '../components/DraggableComponent/Container/Container';
import { Button } from '../components/DraggableComponent/Button/Button';
import { ThemeProvider } from '@material-ui/styles';
import { Text } from '../components/DraggableComponent/Text/Text';
import { Radio } from '../components/DraggableComponent/Radio/Radio';
import { Checkbox } from '../components/DraggableComponent/Checkbox/Checkbox'
import { Input } from '../components/DraggableComponent/Input/Input';
import { Form } from '../components/DraggableComponent/Form/Form';
import { Select } from '../components/DraggableComponent/Select/Select';
import { Tabs } from '../components/DraggableComponent/Tabs/Tabs';
import { Accordion } from '../components/DraggableComponent/Accordion/Accordion';
import { Switch } from '../components/DraggableComponent/Switch/Switch';
import { Alert } from '../components/DraggableComponent/Alert/Alert';
import { Image } from '../components/DraggableComponent/Image/Image';
import { Textarea } from '../components/DraggableComponent/Textarea/Textarea';
import { Link } from '../components/DraggableComponent/Link/Link';
import { Divider } from '../components/DraggableComponent/Divider/Divider';
import { Row } from '../components/DraggableComponent/Row/Row';
import { Column } from '../components/DraggableComponent/Column/Column';
import { Popover } from '../components/DraggableComponent/Popover/Popover';
import { DatePicker } from '../components/DraggableComponent/DatePicker/DatePicker';
import { Upload } from '../components/DraggableComponent/Upload/Upload'
import { Segmented } from '../components/DraggableComponent/Segmented/Segmented'

import { Editor } from "@craftjs/core";
import { createMuiTheme } from '@material-ui/core';

// import { RenderNode } from '../components/RenderNode'
import Builder from './Builder';

const theme: any = createMuiTheme({
  palette: {
    primary: {
      main: "#4791db"
    },
    secondary: {
      main: "#64b5f6"
    },
  },
  typography: {
    fontFamily: [
      'acumin-pro',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

const BuilderContainer = (props: any) => {
  const [propertiesStatus, setPropertiesStatus]: any = React.useState(false)
  React.useEffect(() => {
    if (window.location.pathname.includes("/properties")) {
      setPropertiesStatus(true)
    }
  }, [])
  const [nodeJSON, setNodeJSON] = React.useState('')
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '100vh' }}>
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
          Upload,
          Segmented
        }}
          indicator={{
            'success': '#2d9d78',
            'error': '#e34850'
          }}
          onNodesChange={query => {
            const json = query.serialize();
            setNodeJSON(json)
          }}
          // onRender={RenderNode}
        >
          <Builder {...props} nodeJSON={nodeJSON} setNodeJSON={setNodeJSON} propertiesStatus={propertiesStatus} />
        </Editor>
      </div>
    </ThemeProvider>
  );
}

export default BuilderContainer
