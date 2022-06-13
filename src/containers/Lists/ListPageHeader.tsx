import React from 'react'
import {
    FlowHeader,
    CreateButton
} from './styles'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Popover } from 'antd'
import { useNavigate } from 'react-router-dom'

const ListPageHeader = (props: any) => {
    // const navigate = useNavigate()
    const content = () => {
        return (
            <Button onClick={() => {
                window.sessionStorage.clear()
                // navigate("/login")
            }} style={{ width: '100%' }}><i className="fa fa-sign-out" aria-hidden="true"></i> &nbsp;Logout</Button >
        )
    }
    const USER:any = window.sessionStorage.getItem("USER")
    const ParseUser = JSON.parse(USER)
    return (
        <FlowHeader>
            <CreateButton
                onClick={() => {
                    if (window.location.pathname == "/flow-list") {
                        props.functionCall(true)
                    } else {
                        props.functionCall(true)
                    }
                }}
            >
               {window.location.pathname == "/flow-list" ? "Create Flow" : "Create Component"}
            </CreateButton>
            <Popover style={{ cursor: 'pointer' }} placement="bottomRight" title={ParseUser?.username} content={content} trigger="hover">
                <Avatar icon={<UserOutlined />} />
            </Popover>
        </FlowHeader>
    )
}

export default ListPageHeader