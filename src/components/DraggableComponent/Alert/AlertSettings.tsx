import { useNode } from '@craftjs/core';
import { 
  CustomLayout,
  CustomMargin,
  CustomPadding,
  CustomSize, 
  CustomTypography, 
  CustomBackground, 
  CustomBorder, 
  CustomEffect,
  CustomAlert
} from '../../CustomizeComponent/CustomPanel';


export const AlertSettings = () => {
    const {
      actions: { setProp },
      props,
    } = useNode((node) => ({
      props: node.data.props,
    }));
  
    return (
      <div>
        <CustomAlert {...props} />
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