import React from 'react'
import { IconButton } from '@material-ui/core';

const ToolsRightComponents = ({emailDetailsRight}) => {
    return (
        <div className="mail__toolsRight">
            {
                emailDetailsRight.map(item => (
                    <IconButton key={item.id}>
                        <item.icon />
                    </IconButton>
                ))
            }
        </div>
    )
}

export default ToolsRightComponents
