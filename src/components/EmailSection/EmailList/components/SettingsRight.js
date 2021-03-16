import React from 'react'
import { IconButton } from '@material-ui/core'

const SettingsRight = ({emailListRightOptions}) => {
    return (
        <div className="emailList__settingsRight">
            {
                emailListRightOptions.map(item => (
                    <IconButton key={item.id}>
                        <item.icon />
                    </IconButton>
                ))
            }
        </div>
    )
}

export default SettingsRight
