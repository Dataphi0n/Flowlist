import React, { Component } from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './index.css'
const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

const Loader = (props:any) => {
        return (
            <React.Fragment>
                {props.loading ? (
                    <div className="loading_shade">
                        <div className="loading_shade_spin_container">
                            <Spin indicator={antIcon} spinning={props.loading} />
                        </div>
                    </div>
                ) : null}
            </React.Fragment>
        )
    }

export default Loader;