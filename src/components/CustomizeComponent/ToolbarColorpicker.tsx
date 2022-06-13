import React from 'react'
import { useNode } from '@craftjs/core';
import { ChromePicker } from 'react-color';
import { Input } from 'antd';

export const ToolbarColorpicker = ({label, onChange, propKey}: any) => {
    const {
        actions: { setProp },
        propValue,
      } = useNode((node) => ({
        propValue: node.data.props[propKey],
      }));
      const [internalValue, setInternalValue] = React.useState(propValue);
      const [active, setActive] = React.useState(false)
      React.useEffect(() => {
        setInternalValue(propValue);
      }, [propValue, propKey]);

    function useOutsideAlerter(ref:any) {
        React.useEffect(() => {
          function handleClickOutside(event:any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setActive(false)
            }
          }
          document.addEventListener("mousedown", handleClickOutside);
        }, [ref]);
      }

      const wrapperRef = React.useRef(null);
      useOutsideAlerter(wrapperRef);

  return (
    <div style={{width: '50%'}} ref={wrapperRef}>
       {label ? (
       <div style={{color: '#808080'}}>{label}</div>
           ) : null}
       <Input style={{width: '90%',marginBottom:'10px' }}
           value={propValue == undefined ? '' : !Object.keys(propValue).includes('r',) ? propValue : `rgba(${Object.values(propValue)})`}
           onChange = {(e) => setProp(
               (props: any) =>
                 (props[propKey] = onChange ? onChange(e.target.value) : e.target.value)
             )} 
           onFocus = {() => setActive(true)}
       />
       {active ? 
         <div style={{width: '90%',right:'0',zIndex:"999999"}}>
           <ChromePicker
            color={internalValue}
            onChange={(color: any) =>
            setProp(
              (props: any) =>
                (props[propKey] = onChange ? onChange(`rgba(${Object.values(color.rgb)})`) : `rgba(${Object.values(color.rgb)})`)
            )}
           />
         </div> : null }
    </div>
    
  )
}
