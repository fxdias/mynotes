/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import SubjectIcon from '@mui/icons-material/Subject';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import { useNavigate, useLocation } from 'react-router-dom'

const drawerWidth = 240
const menuItems = [
    {
        text: 'My Notes',
        icon: <SubjectIcon color="secondary" />,
        path: '/'
    },
    {
        text: 'Create Note',
        icon: <AddCircleOutlineIcon color="secondary" />, //
        path: '/create'
    }
]
function Layout({ children }) {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div css={css`display: flex;`}>
            <Drawer sx={{ width: drawerWidth, ".MuiDrawer-paper": { width: drawerWidth } }}
                variant="permanent"
                anchor="left"
            >
                <div>
                    <Typography variant="h5">Net Notes</Typography>
                </div>
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => navigate(item.path)}
                            sx={location.pathname == item.path ? { backgroundColor: '#f4f4f4' } : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <div css={css`
                background: #f9f9f9;
                width: 100%;
            `}
            >
                {children}
            </div>
        </div >
    )
}

export default Layout
