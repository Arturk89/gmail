import React from 'react'
import { IconButton } from '@material-ui/core';

const ToolsLeftComponents = ({emailDetailsLeft, history}) => {
    return (
        <div className="mail__toolsLeft">
            {
                emailDetailsLeft.map(item => (
                    <IconButton key={item.id}>
                        <item.icon 
                            onClick={item.goBack ? () => history.push("/") : null}
                        />
                    </IconButton>
                ))
            }
        </div>
    )
}

export default ToolsLeftComponents
