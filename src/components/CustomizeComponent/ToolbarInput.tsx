import React from 'react'
import { Input } from 'antd';
import { useNode } from '@craftjs/core';
import { Radio } from 'antd';
const { TextArea } = Input;

const plainOptions = ['%', 'vh', 'px'];

export const ToolbarInput = ({label,onChange, propKey, index,...props}: any) => {
    const [type, setType] = React.useState('px')
    const gropbutton = ['width', 'height', 'minWidth','maxWidth','minWidth','minHeight', 'maxHeight']
    const groupAccordion = ['title', 'description']
    const widthProp = ['auto','fit-content','max-content','min-content','revert','unset']
    const {
        actions: { setProp },
        propValue,
      } = useNode((node) => ({
        propValue: node.data.props[propKey],
      }));
      const value = Array.isArray(propValue) ? propValue[index] : propValue;
      const formatvalue = value !== undefined && gropbutton.includes(propKey) ? value.replace('vh','').replace('%','').replace('px','') : ''
  return (
    <div style={{width:  gropbutton.includes(propKey) ? '100%' : groupAccordion.includes(propKey) ? '100%' : '50%', marginTop: '3px'}}>
    {label ? (
                <div style={{color: '#808080'}}>{label}</div>
              ) : null}
      <div style={{display: 'flex',justifyContent: 'space-between', width: '100%', marginTop: '5px'}}>
            <Input type={props.type=="number"?props.type:"text"} style={{width: gropbutton.includes(propKey) ? '45%' : '90%',marginBottom:'10px' }}
              defaultValue={gropbutton.includes(propKey) ? formatvalue : value}
              onChange={(e:any) => {
                setProp((props: any) => {
                  if( gropbutton.includes(propKey)){
                    (props[propKey] = onChange ? onChange(e.target.value+type) : widthProp.includes(e.target.value) ? e.target.value : e.target.value + type )
                  }
                   else {
                    props[propKey] = onChange ? onChange(e.target.value) : e.target.value;
                  }
                }, 500);
              }}
             />
         {gropbutton.includes(propKey) ?
          <div className='toolbar-group'>
              <Radio.Group 
                onChange={(e:any) => {
                  setType(e.target.value)
                  setProp(
                      (props: any) =>
                        (props[propKey] = onChange ? onChange(formatvalue + e.target.value) : formatvalue + e.target.value)
                    )
                  }}
                options={plainOptions} 
                optionType="button" 
                defaultValue='px'
              />
          </div>
          : ''
          }
      </div>
    </div>
  )
}
