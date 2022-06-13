import React from 'react'
import { Switch } from '@material-ui/core';
import { useNode } from '@craftjs/core';


export const ToolbarSwitch = ({label, onChange, children, propKey, index}: any) => {
    const {
        actions: { setProp },
        propValue,
      } = useNode((node) => ({
        propValue: node.data.props[propKey],
      }));
      const value = Array.isArray(propValue) ? propValue[index] : propValue;
  return (
    <div style={{width: '50%'}}>
    {label ? (
                <div style={{color: '#808080'}}>{label}</div>
              ) : null}
        <Switch 
          checked={value}
          onChange={(value:any) =>
            setProp(
              (props: any) =>
                (props[propKey] = onChange ? onChange(value.target.checked) : value.target.checked)
            )
          } 
        />
    </div>
  )
}
