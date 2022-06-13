import { useNode } from '@craftjs/core';
import { 
  CustomMargin,
  CustomPadding,
  CustomSize, 
  CustomTypography, 
  CustomBackground, 
  CustomBorder, 
  CustomEffect,
  CustomImage
} from '../../CustomizeComponent/CustomPanel';


export const ImageSettings = () => {
    const {
      actions: { setProp },
      props,
    } = useNode((node) => ({
      props: node.data.props,
    }));
  
    return (
      <div>
        <CustomImage {...props} />
        <CustomMargin {...props} />
        <CustomPadding {...props} />
        <CustomSize {...props} /> 
        <CustomBackground {...props} /> 
        <CustomBorder {...props} />
        <CustomEffect {...props} />
      </div>
    );
  };