import React from 'react'
import { Select } from 'antd';
import { useNode } from '@craftjs/core';


export const ToolbarDropDown = ({label, onChange, children, propKey, index}: any) => {
    const {
        actions: { setProp },
        propValue,
      } = useNode((node) => ({
        propValue: node.data.props[propKey],
      }));
      const value = Array.isArray(propValue) ? propValue[index] : propValue;
  return (
    <div style={{width: '50%',marginBottom:'10px'}}>
      {label ? (
                  <div style={{color: '#808080'}}>{label}</div>
                ) : null}
      <Select 
          style={{width: '90%',marginTop: '5px',minWidth:'90px'}}
          value={value}
          onChange={(value:any) =>
              setProp(
                (props: any) =>
                  (props[propKey] = onChange ? onChange(value) : value)
              )
            }
          >
              {children}
      </Select>
    </div>
  )
}
