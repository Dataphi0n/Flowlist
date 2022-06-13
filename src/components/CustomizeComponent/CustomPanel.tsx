import React from 'react'
import { useNode } from '@craftjs/core';
import { ToolbarSection } from './ToolbarSection';
import { Grid } from "@material-ui/core";
import { Select, Radio, Upload, Input, Alert } from 'antd';
import { RadiusBottomleftOutlined, RadiusBottomrightOutlined, RadiusUpleftOutlined, RadiusUprightOutlined, AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined } from "@ant-design/icons"
import { ToolbarDropDown } from './ToolbarDropDown';
import { ToolbarInput } from './ToolbarInput';
import { ToolbarInputIndex, ToolbarGroup } from './ToolbarInputIndex';
import { ToolbarSwitch } from './ToolbarSwitch';
import { ToolbarColorpicker } from './ToolbarColorpicker';
import { ToolbarSelect } from './ToolbarSelect';
import styled from 'styled-components';
// import { Context } from '../../Context'
import axios from 'axios'
import { constants } from '../../constants';
const { Option } = Select;




export const CustomLayout = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection title="Layout">
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarDropDown propsValue={props["display"]} propKey="display" label="Display">
          <Option value="inline">inline</Option>
          <Option value="block">block</Option>
          <Option value="flex">flex</Option>
        </ToolbarDropDown>
        {props.display == "flex" ?
          <>
            <ToolbarDropDown propsValue={props["justifyContent"]} propKey="justifyContent" label="Justify content">
              <Option value="flex-start">flex-start</Option>
              <Option value="center">center</Option>
              <Option value="flex-end">flex-end</Option>
              <Option value="space-between">space-between</Option>
              <Option value="space-around">space-around</Option>
              <Option value="space-evenly">space-evenly</Option>
            </ToolbarDropDown>
            <ToolbarDropDown propsValue={props["alignItems"]} propKey="alignItems" label="Align items">
              <Option value="flex-start">flex-start</Option>
              <Option value="center">center</Option>
              <Option value="flex-end">flex-end</Option>
              <Option value="stretch">stretch</Option>
              <Option value="baseline">baseline</Option>
            </ToolbarDropDown>
            <ToolbarDropDown propsValue={props["flexFlow"]} propKey="flexFlow" label="Direction">
              <Option value="row">row</Option>
              <Option value="row-reverse">row-reverse</Option>
              <Option value="column">column</Option>
              <Option value="column-reverse">column-reverse</Option>
              <Option value="initial">initial</Option>
              <Option value="inherit">inherit</Option>
            </ToolbarDropDown>
          </>
          : null}
      </Grid>
    </ToolbarSection>
  )
}

export const CustomMargin = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Margin"
    >
      <Grid container>
        <Grid item xs={3}>
          <ToolbarInputIndex propsValue={props["margin"]} propKey='margin' index={0} label="Top" />
        </Grid>
        <Grid item xs={3}>
          <ToolbarInputIndex propsValue={props["margin"]} propKey='margin' index={1} label="Right" />
        </Grid>
        <Grid item xs={3}>
          <ToolbarInputIndex propsValue={props["margin"]} propKey='margin' index={2} label="Bottom" />
        </Grid>
        <Grid item xs={3}>
          <ToolbarInputIndex propsValue={props["margin"]} propKey='margin' index={3} label="Left" />
        </Grid>
        <ToolbarGroup propValue={props["margin"]} propKey='margin' index={0} />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomPadding = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Padding"
    >
      <Grid container>
        <Grid item xs={3}>
          <ToolbarInputIndex propsValue={props["padding"]} propKey='padding' index={0} label="Top" />
        </Grid>
        <Grid item xs={3}>
          <ToolbarInputIndex propsValue={props["padding"]} propKey='padding' index={1} label="Right" />
        </Grid>
        <Grid item xs={3}>
          <ToolbarInputIndex propsValue={props["padding"]} propKey='padding' index={2} label="Bottom" />
        </Grid>
        <Grid item xs={3}>
          <ToolbarInputIndex propsValue={props["padding"]} propKey='padding' index={3} label="Left" />
        </Grid>
        <ToolbarGroup propsValue={props["padding"]} propKey='padding' index={0} />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomSize = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Size"
    >
      <Grid container direction="row" alignItems="center" justify="space-between">
        <ToolbarInput propsValue={props["width"]} propKey='width' label="width" />
        <ToolbarInput propsValue={props["height"]} propKey='height' label="height" />
        <ToolbarInput propsValue={props["minWidth"]} propKey='minWidth' label="Min width" />
        <ToolbarInput propsValue={props["maxWidth"]} propKey='maxWidth' label="Max width" />
        <ToolbarInput propsValue={props["minHeight"]} propKey='minHeight' label="Min height" />
        <ToolbarInput propsValue={props["maxHeight"]} propKey='maxHeight' label="Max height" />
        <ToolbarDropDown propsValue={props["overflow"]} propKey="overflow" label="Overflow">
          <Option value="visible">visible</Option>
          <Option value="hidden">hidden</Option>
          <Option value="clip">clip</Option>
          <Option value="scroll">scroll</Option>
          <Option value="auto">auto</Option>
          <Option value="initial">initial</Option>
          <Option value="inherit">inherit</Option>
        </ToolbarDropDown>
      </Grid>
    </ToolbarSection>
  )
}

export const CustomTypography = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <ToolbarSection
      title="Typography"
    >
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarDropDown propsValue={props["fontWeight"]} propKey="fontWeight" label="Font weight">
          <Option value="100">100</Option>
          <Option value="200">200</Option>
          <Option value="300">300</Option>
          <Option value="400">400</Option>
          <Option value="500">500</Option>
          <Option value="600">600</Option>
          <Option value="700">700</Option>
          <Option value="800">800</Option>
          <Option value="900">900</Option>
          <Option value="bold">bold</Option>
          <Option value="bolder">bolder</Option>
          <Option value="lighter">lighter</Option>
          <Option value="normal">normal</Option>
        </ToolbarDropDown>
        <ToolbarDropDown propsValue={props["fontStyle"]} propKey="fontStyle" label="Font style">
          <Option value="italic">italic</Option>
          <Option value="normal">normal</Option>
          <Option value="oblique">oblique</Option>
        </ToolbarDropDown>
        {/* <ToolbarDropDown propKey="textAlign" label="Text align">
              <Option value="left">left</Option>
              <Option value="right">right</Option>
              <Option value="center">center</Option>
              <Option value="justify">justify</Option>
          </ToolbarDropDown> */}
        <div style={{ margin: '10px 0' }}>
          <div style={{ color: '#808080', marginBottom: "5px" }}>Text Align</div>
          <Radio.Group
            optionType="button"
            defaultValue='px'
            value={props["textAlign"]}
            onChange={(e: any) => {
              setProp((props: any) => props["textAlign"] = e.target.value);
            }}
          >
            <Radio.Button value="left"><AlignLeftOutlined /></Radio.Button>
            <Radio.Button value="center"><AlignCenterOutlined /></Radio.Button>
            <Radio.Button value="right"><AlignRightOutlined /></Radio.Button>
          </Radio.Group>
        </div>

        <ToolbarInput propsValue={props["fontSize"]} propKey='fontSize' label="Font size" />
        <ToolbarInput propsValue={props["lineHeight"]} propKey='lineHeight' label="Line height" />
        <ToolbarInput propsValue={props["letterSpacing"]} propKey='letterSpacing' label="Letter spacing" />
        <ToolbarColorpicker propsValue={props["color"]} propKey='color' label="Color" />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomBackground = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Background"
    >
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarColorpicker propsValue={props["backgroundColor"]} propKey='backgroundColor' label="Background color" />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomBorder = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const IconDiv = styled.div`
    .anticon {
      font-size: 18px;
      color: #08c;
    }
  `
  return (
    <ToolbarSection
      title="Border"
    >
      <Grid container direction='column'>
        <Grid container direction="row" alignItems='center'>
          <label style={{ color: "#808080" }}>Border Width</label>
          <Grid container style={{ paddingBottom: "10px" }}>
            <Grid item xs={3}>
              <ToolbarInputIndex propsValue={props["borderWidth"][0]} propKey='borderWidth' index={0} label="Left" />
            </Grid>
            <Grid item xs={3}>
              <ToolbarInputIndex propsValue={props["borderWidth"][1]} propKey='borderWidth' index={1} label="Right" />
            </Grid>
            <Grid item xs={3}>
              <ToolbarInputIndex propsValue={props["borderWidth"][2]} propKey='borderWidth' index={2} label="Top" />
            </Grid>
            <Grid item xs={3}>
              <ToolbarInputIndex propsValue={props["borderWidth"][3]} propKey='borderWidth' index={3} label="Bottom" />
            </Grid>
          </Grid>
          {/* <ToolbarInput propsValue={props["borderWidth"]} propKey='borderWidth'  label="Border Width"/> */}
        </Grid>

        <Grid container direction="row" alignItems="center" justify="space-between" >
          <ToolbarDropDown propsValue={props["borderStyle"]} propKey="borderStyle" label="Border Style">
            <Option value="dotted">dotted</Option>
            <Option value="dashed">dashed</Option>
            <Option value="solid">solid</Option>
            <Option value="double">double</Option>
            <Option value="groove">groove</Option>
            <Option value="ridge">ridge</Option>
            <Option value="inset">inset</Option>
            <Option value="outset">outset</Option>
            <Option value="none">none</Option>
            <Option value="hidden">hidden</Option>
          </ToolbarDropDown>
          <ToolbarColorpicker propsValue={props["borderColor"]} propKey='borderColor' label="Border color" />
        </Grid>
        <Grid container direction='row' >
          <Grid item xs={3}>
            <ToolbarInputIndex propsValue={props["borderRadius"]} propKey='borderRadius' index={0} label={<IconDiv><RadiusUpleftOutlined /></IconDiv>} />
          </Grid>
          <Grid item xs={3}>
            <ToolbarInputIndex propsValue={props["borderRadius"]} propKey='borderRadius' index={1} label={<IconDiv><RadiusUprightOutlined /></IconDiv>} />
          </Grid>
          <Grid item xs={3}>
            <ToolbarInputIndex propsValue={props["borderRadius"]} propKey='borderRadius' index={2} label={<IconDiv><RadiusBottomrightOutlined /></IconDiv>} />
          </Grid>
          <Grid item xs={3}>
            <ToolbarInputIndex propsValue={props["borderRadius"]} propKey='borderRadius' index={3} label={<IconDiv><RadiusBottomleftOutlined /></IconDiv>} />
          </Grid>
          <ToolbarGroup propsValue={props["borderRadius"]} propKey='borderRadius' index={0} />
        </Grid>
      </Grid>
    </ToolbarSection>
  )
}

export const CustomEffect = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Effect"
    >
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarInput propsValue={props["opacity"]} propKey='opacity' label="Opacity" />
        <ToolbarInput propsValue={props["boxShadow"]} propKey='boxShadow' label="Box shadow" />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomAlert = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Alert"
    >
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarDropDown propsValue={props["type"]} propKey="type" label="Alert Type">
          <Option value="success">Success</Option>
          <Option value="info">Info</Option>
          <Option value="warning">Warning</Option>
          <Option value="error">Error</Option>
        </ToolbarDropDown>
        <ToolbarSwitch propsValue={props["showIcon"]} propKey="showIcon" label={"Show Icon"} />
        <ToolbarInput propsValue={props["message"]} propKey="message" label="Text" />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomSwitch = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Switch"
    >
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarInput propsValue={props["name"]} propKey='name' label="Field Name" />
        <ToolbarInput propsValue={props["label"]} propKey='label' label="Label" />
        <ToolbarDropDown propsValue={props["layout"]} propKey="layout" label="Switch Type">
          <Option value="top">Top</Option>
          <Option value="inline">Inline</Option>
        </ToolbarDropDown>
        <ToolbarColorpicker propsValue={props["switchColor"]} propKey="switchColor" label="Switch color" />
        <ToolbarSwitch propsValue={props["required"]} propKey="required" label="Required" />
        <ToolbarInput propsValue={props["errorMessage"]} propKey='errorMessage' label="Error Message" />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomInput = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Input"
    >
      <Grid container direction="row" alignItems="center" justify="space-between">
        <ToolbarInput propsValue={props["name"]} propKey='name' label="Field Name" />
        <ToolbarSwitch propsValue={props["required"]} propKey="required" label="Required" />
        <ToolbarInput propsValue={props["errorMessage"]} propKey='errorMessage' label="Error Message" />
        <ToolbarInput propsValue={props["placeholder"]} propKey='placeholder' label="Placeholder" />
        <ToolbarInput propsValue={props["label"]} propKey='label' label="Label" />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomAccordion = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Accordion"
    >
      <Grid container >
        <ToolbarInput propsValue={props["title"]} propKey='title' label="Title" />
        <ToolbarInput propsValue={props["description"]} propKey='description' label="Description" />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomSelect = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Select"
    >
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarInput propsValue={props["name"]} propKey='name' label="Field Name" />
        <ToolbarInput propsValue={props["placeholder"]} propKey='placeholder' label="Placeholder" />
        <ToolbarInput propsValue={props["label"]} propKey='label' label="Label" />
        <ToolbarSwitch propsValue={props["required"]} propKey="required" label="Required" />
        <ToolbarInput propsValue={props["errorMessage"]} propKey='errorMessage' label="Error Message" />
        <ToolbarSelect propsValue={props["optionData"]} propKey='optionData' label="Add option for select" />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomTabs = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Select"
    >
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarSelect propsValue={props["optionData"]} propKey='optionData' label="Add option for Tabs" />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomLink = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Link"
    >
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarInput propValue={props["link"]} propKey="link" label="link" />
        <ToolbarInput propValue={props["text"]} propKey="text" label="text" />
        <ToolbarDropDown propValue={props["line"]} propKey="line" label="underline">
          <Option value="none">none</Option>
          <Option value="hover">hover</Option>
          <Option value="always">always</Option>
        </ToolbarDropDown>
        <ToolbarDropDown propValue={props["target"]} propKey="target" label="target">
          <Option value="_blank">blank</Option>
          <Option value="_self">self</Option>
          <Option value="_parent">parent</Option>
          <Option value="_top">top</Option>
        </ToolbarDropDown>
      </Grid>
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarDropDown propsValue={props["variant"]} propKey="variant" label="Input Type">
          <Option value="outlined">Outlined</Option>
          <Option value="filled">Filled</Option>
          <Option value="standard">Standard</Option>
        </ToolbarDropDown>
      </Grid>
    </ToolbarSection>
  )
}

export const CustomRadio = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Radio Button"
    >
      <Grid container direction="column" >
        <ToolbarInput propsValue={props["name"]} propKey='name' label="Field Name" />
        <ToolbarSwitch propsValue={props["required"]} propKey="required" label="Required" />
        <ToolbarInput propsValue={props["errorMessage"]} propKey='errorMessage' label="Error Message" />
        <ToolbarSelect propsValue={props["optionData"]} propKey='optionData' label="Add items for radio button" />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomCheckBox = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Checkbox"
    >
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarDropDown propsValue={props["group"]} propKey="group" label="Select checkbox type">
          <Option value="1">Single Checkbox</Option>
          <Option value="2">Group Checkbox</Option>
        </ToolbarDropDown>
        <ToolbarInput propsValue={props["name"]} propKey='name' label="Field Name" />
        {props["group"] === '1' ?
          <>
            <ToolbarInput propsValue={props["text"]} propKey='text' label="Label" />
          </>
          : ''}
        <ToolbarSwitch propsValue={props["required"]} propKey="required" label="Required" />
        <ToolbarInput propsValue={props["errorMessage"]} propKey='errorMessage' label="Error Message" />
        {props["group"] === '2' ?
          <>
            <ToolbarInput propsValue={props["label"]} propKey='label' label="Group Label" />
            <ToolbarSelect propKey='optionData' label="Add items for checkbox button" />
          </>
          : null}
      </Grid>
    </ToolbarSection>
  )
}

export const CustomTextArea = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="TextArea"
    >
      <Grid container direction="row" alignItems="center" justify="space-between">
        <ToolbarInput propsValue={props["name"]} propKey='name' label="Field Name" />
        <ToolbarInput propsValue={props["placeholder"]} propKey='placeholder' label="Placeholder" />
        <ToolbarInput propsValue={props["label"]} propKey='label' label="Label" />
        <ToolbarInput type="number" propsValue={props["rows"]} propKey='rows' label={"Rows"} />
        <ToolbarDropDown propsValue={props["variant"]} propKey="variant" label="Input Type">
          <Option value="outlined">Outlined</Option>
          <Option value="filled">Filled</Option>
          <Option value="standard">Standard</Option>
        </ToolbarDropDown>
        <ToolbarSwitch propsValue={props["required"]} propKey="required" label="Required" />
        <ToolbarInput propsValue={props["errorMessage"]} propKey='errorMessage' label="Error Message" />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomForm = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Form"
    >
      <Grid container direction="column" >
        <ToolbarInput propsValue={props["name"]} propKey='name' label="Field Name" />
      </Grid>
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarDropDown propsValue={props["layout"]} propKey="layout" label="Form Type">
          <Option value="horizontal">Horizontal</Option>
          <Option value="vertical">Vertical</Option>
        </ToolbarDropDown>
      </Grid>
    </ToolbarSection>
  )
}

export const CustomImage = () => {
  const {
    props,
    actions: { setProp },
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const [fileList, setFileList] = React.useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const nodeid = urlParams.get('id');
  // const contextValues: any = React.useContext(Context)
  const [current, setCurrent]: any = React.useState('')

  const onChange = async (newFileList: any) => {
    const urlParams = new URLSearchParams(window.location.search);
    const componentid = urlParams.get('id');
    let formData = new FormData()
    formData.append('files', newFileList);
    setFileList(newFileList);


    try {
      const request_data = {
        method: "POST",
        url: constants.url.uploads,
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await sessionStorage.getItem("ADMIN_TOKEN")}`
        }
      };
      const response = await axios(request_data);
      if ([200, 201].includes(response.status) && response.data) {
        setProp((props:any) => props["src"] = "http://localhost:1337" + response.data[0].url)
        setCurrent(response.data[0].url)
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ToolbarSection
      title="Image"
    >
      <Grid container direction="column" >
        <input type="file" onChange={(e: any) => onChange(e.target.files[0])} />
        <ToolbarInput propsValue={props["src"]} propKey='src' label={"Add Image"} />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomDivider = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Divider"
    >
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <ToolbarInput propsValue={props["text"]} propKey='text' label={"Text"} />
        <ToolbarDropDown propValue={props["type"]} propKey="type" label="type">
          <Option value="horizontal">horizontal</Option>
          <Option value="vertical">vertical</Option>
        </ToolbarDropDown>
        <ToolbarDropDown propValue={props["orientation"]} propKey="orientation" label="orientation">
          <Option value="left">left</Option>
          <Option value="center">center</Option>
          <Option value="right">right</Option>
        </ToolbarDropDown>
      </Grid>
    </ToolbarSection>
  )
}

export const CustomComponent = () => {
  const {
    actions: { setProp, setCustom },
    custom,
  } = useNode((node) => ({
    props: node.data.props,
    custom: node.data.custom
  }));


  const [fileList, setFileList] = React.useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const nodeid = urlParams.get('id');
  // const contextValues: any = React.useContext(Context)
  const [current, setCurrent]: any = React.useState({})

  // React.useEffect(() => {
  //   if (Object.keys(current).length == 0) {
  //     for (const ele of contextValues.elements) {
  //       if (ele.id == nodeid) {
  //         setCurrent(ele)
  //       }
  //     }
  //   }
  // }, [setCurrent])
  const onChange = async (newFileList: any) => {
    const urlParams = new URLSearchParams(window.location.search);
    const componentid = urlParams.get('id');
    let formData = new FormData()
    formData.append('files', newFileList);
    setFileList(newFileList);

    try {
      const request_data = {
        method: "POST",
        url: constants.url.uploads,
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await sessionStorage.getItem("ADMIN_TOKEN")}`
        }
      };
      const response = await axios(request_data);
      if ([200, 201].includes(response.status) && response.data) {
        try {
          const image_request = {
            method: "PUT",
            url: constants.url.components + "/" + componentid,
            data: {
              data: {
                icon: response.data[0].url
              }
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${await sessionStorage.getItem("ADMIN_TOKEN")}`
            }
          };
          const res = await axios(image_request);
          if ([200, 201].includes(res.status) && res.data) {
            // contextValues.fetchComponent()
          }
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ToolbarSection
      title="Component Settings"
    >
      <Grid container direction="column" >
        <div style={{ color: '#808080' }}>{"Component Name"}</div>
        <Input
          value={custom.displayName}
          onChange={(e) => {
            setCustom((value: any) => {
              value.displayName = e.target.value
            }, 500)
          }}
          style={{ marginBottom: "10px" }}
        />
        <div>Component Icon</div>
        <img src={"http://localhost:1337" + current?.attributes?.icon} style={{ width: '50px', margin: "20px" }} />
        {/* <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          maxCount={1}
        >
          {fileList.length < 5 && '+ Upload'}
        </Upload> */}
        <input type="file" onChange={(e: any) => onChange(e.target.files[0])} />
      </Grid>
    </ToolbarSection>
  )
}


export const CustomColumn = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <ToolbarSection
      title="Grid"
    >
      <Grid container direction="column">
        <Alert message="Total of span size of all columns in perticular row should be 24" type="warning" />
        <ToolbarInput type="number" propsValue={props["span"]} propKey='span' label={"Span Size"} />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomRow = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <ToolbarSection
      title="gutter"
    >
      <Grid container direction="column">
        {/* <Alert message="Total of span size of all columns in perticular row should be 24" type="warning" /> */}
        <ToolbarInput type="number" propsValue={props["gutter"]} propKey='gutter' label={"gutter Size"} />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomPopover = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <ToolbarSection
      title="Popover"
    >
      <Grid container direction="row">
        <ToolbarInput type="icon" propsValue={props["icon"]} propKey='icon' label={"icon"} />
        <ToolbarInput type="text" propsValue={props["text"]} propKey='text' label={"text"} />
        <ToolbarInput type="poptext" propsValue={props["poptext"]} propKey='poptext' label={"popover text"} />
        <ToolbarColorpicker type="popbackground" propsValue={props["popbackground"]} propKey='popbackground' label={"popover background"} />
        <ToolbarColorpicker type="popcolor" propsValue={props["popcolor"]} propKey='popcolor' label={"popover color"} />
      </Grid>
    </ToolbarSection>
  )
}

export const CustomDatePicker = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <ToolbarSection
      title="DatePicker"
    >
      <Grid container direction="row">
        <ToolbarSwitch propsValue={props["rangepicker"]} propKey="rangepicker" label="RangePicker" />
        <ToolbarSwitch propsValue={props["showtime"]} propKey="showtime" label="Show Time" />
        <ToolbarDropDown propValue={props["picker"]} propKey="picker" label="Picker">
          <Option value="date">date</Option>
          <Option value="week">week</Option>
          <Option value="month">month</Option>
          <Option value="quarter">quarter</Option>
          <Option value="year">year</Option>
        </ToolbarDropDown>
        <ToolbarInput propsValue={props["name"]} propKey='name' label="Field Name" />
        <ToolbarSwitch propsValue={props["required"]} propKey="required" label="Required" />
        <ToolbarInput propsValue={props["errorMessage"]} propKey='errorMessage' label="Error Message" />
        <ToolbarInput propsValue={props["label"]} propKey='label' label="Label" />
      </Grid>
    </ToolbarSection>
  )
}


export const CustomSegmented = () => {
  const {
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <ToolbarSection
      title="Segmented"
    >
      <Grid container direction="column" >
        {/* <ToolbarInput propsValue={props["name"]} propKey='name' label="Field Name" />
        <ToolbarSwitch propsValue={props["required"]} propKey="required" label="Required" />
        <ToolbarInput propsValue={props["errorMessage"]} propKey='errorMessage' label="Error Message" /> */}
        <ToolbarSelect propsValue={props["optionData"]} propKey='optionData' label="Add items for radio button" />
      </Grid>
    </ToolbarSection>
  )
}