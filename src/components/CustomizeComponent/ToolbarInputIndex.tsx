import React from 'react'
import { Input } from 'antd';
import { useNode } from '@craftjs/core';
import { Radio } from 'antd';

const plainOptions = ['%', 'vh', 'px'];

let GroupValue = 'px'

export const ToolbarInputIndex = ({label,onChange, propKey, index}: any) => {
    const {
        actions: { setProp },
        propValue,
      } = useNode((node) => ({
        propValue: node.data.props[propKey],
      }));
      const value = Array.isArray(propValue) ? propValue[index] : propValue;
      const formatvalue = value !== undefined ? value.replace('vh','').replace('%','').replace('px','') : ''

  return (
    <div style={{width: '100%'}}>
    {label ? (
                <div style={{color: '#808080', textAlign: propKey == 'borderRadius' ? 'center' : 'left'}}>{label}</div>
              ) : null}
    <div style={{display: 'flex',justifyContent: 'space-between', width: '100%'}}>
            <Input type='number' style={{width: '90%' }}
              defaultValue={formatvalue}
              onChange={(e:any) => {
                setProp((props: any) => {
                  if (Array.isArray(propValue)) {
                    props[propKey][index] = onChange ? onChange(e.target.value + GroupValue) : e.target.value + GroupValue;
                  }
                }, 500);
              }}
             />
    </div>
    </div>
  )
}

export const ToolbarGroup = ({propKey, index, onChange}: any) => {
    const [type, setType] = React.useState('px')
    GroupValue = type
    const {
        actions: { setProp },
        propValue,
      } = useNode((node) => ({
        propValue: node.data.props[propKey],
      }));
        const firstindex = propValue !== undefined ? propValue[0].replace('vh','').replace('%','').replace('px','') : ''
        const secondindex =  propValue !== undefined ? propValue[1].replace('vh','').replace('%','').replace('px','') : ''
        const thirdindex =  propValue !== undefined ? propValue[2].replace('vh','').replace('%','').replace('px','') : ''
        const fourthindex =  propValue !== undefined ? propValue[3].replace('vh','').replace('%','').replace('px','') : ''
      
  return (
    <div className='margin-group'>
      <Radio.Group 
        options={plainOptions} 
        optionType="button" 
        defaultValue='px'
        onChange={(e:any) => {
          setProp((props: any) => {
            setType(e.target.value)
            if (Array.isArray(propValue)) {
              props[propKey][0] = onChange ? onChange(firstindex + e.target.value) : firstindex + e.target.value;
              props[propKey][1] = onChange ? onChange(secondindex + e.target.value) : secondindex + e.target.value;
              props[propKey][2] = onChange ? onChange(thirdindex + e.target.value) : thirdindex + e.target.value;
              props[propKey][3] = onChange ? onChange(fourthindex + e.target.value) : fourthindex + e.target.value;
            }
          }, 500);
        }}
      />
    </div>
  )
} 
