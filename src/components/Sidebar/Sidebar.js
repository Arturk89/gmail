import React from 'react'
import SidebarOption from './SidebarOption';
import { useDispatch } from 'react-redux'
import { openSendMessage } from '../../features/mailSlice';
import { sidebarMenu } from '../../data/sidebarOptionMenu';
import { bottomMenu } from '../../data/sidebarOptionMenu';

import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import './Sidebar.css'



const Sidebar = () => {

    const dispatch = useDispatch()

    return (
        <div className="sidebar">
            <Button startIcon={
                <AddIcon fontSize="large"/>
            } className="sidebar__compose"
              onClick={() => dispatch(openSendMessage())} >
                Create
            </Button>
            {
                sidebarMenu.map(item => (
                    <SidebarOption 
                        key={item.id}
                        Icon={item.icon}
                        title={item.title}
                        number={item.number}
                        selected={item.selected}
                    />
                ))
            }
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    {
                        bottomMenu.map(item => (
                            <IconButton key={item.id}>
                                {
                                    <item.icon />
                                }
                            </IconButton>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar
