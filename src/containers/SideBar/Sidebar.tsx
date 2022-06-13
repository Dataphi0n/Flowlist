import React from 'react'
import {
    SidebarContainer,
    ItemButton
} from './styles'
import { useNavigate } from 'react-router-dom'
import {
    Drawer,
    List,
    ListItem,
} from '@material-ui/core'

const Sidebar = () => {
    // const navigate = useNavigate()
    return (
        <SidebarContainer>
            <Drawer variant="permanent">
                <List style={{ paddingTop: "52px" }}>
                    {[
                        {
                            title: "Flow List",
                            path: "/flow-list"
                        },
                        {
                            title: "Component List",
                            path: "/component-list"
                        },
                    ].map((text, index) => (
                        <ListItem key={text.path}>
                            {/* <ItemButton onClick={() => navigate(text.path)} style={window.location.pathname == text.path ? { width: '100%', borderRadius: "0", backgroundColor: "#fff", color: "#a55eea" } : { width: '100%', borderRadius: "0", color: "#fff" }}>{text.title}</ItemButton> */}
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </SidebarContainer>
    )
}

export default Sidebar