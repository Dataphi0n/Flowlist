import React from 'react'
import { useNode } from '@craftjs/core';
import { Slider, FormControl, FormLabel } from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';
import { CustomMargin, CustomPadding, CustomSize, CustomTypography, CustomBackground, CustomBorder, CustomEffect, CustomLayout, CustomComponent } from '../../CustomizeComponent/CustomPanel';
// import Context from '../../../Context';


export const ContainerSettings = () => {
  // const contextValues: any = React.useContext(Context)
    const {
      background,
      padding,
      props,
      actions: { setProp, setCustom },
    } = useNode((node) => ({
      background: node.data.props.background,
      padding: node.data.props.padding,
      props: node.data.props,
      custom: node.data.custom
    }));

    // React.useEffect(() => {
    //   const urlParams = new URLSearchParams(window.location.search);
    //   const flowid = urlParams.get('id');
    //   for(const data of contextValues.elements ){
    //     if(data.id == flowid)
    //     setCustom((value: any) => {
    //       value.displayName = data.name
    //     }, 500)
    //   }
    // },[contextValues.elements])
  
    return (
      <div>
        <CustomComponent {...props} />
        <CustomLayout {...props} />
        <CustomMargin {...props} />
        <CustomPadding {...props} />
        <CustomSize {...props} />
        <CustomTypography {...props} />
        <CustomBackground {...props} />
        <CustomBorder {...props} />
        <CustomEffect {...props} />
      </div>
    );
  };