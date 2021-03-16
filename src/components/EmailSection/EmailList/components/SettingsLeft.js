import React from 'react'
import { Checkbox, IconButton } from '@material-ui/core'

const SettingsLeft = ({emailListLeftOptions}) => {
    return (
        <div className="emailList__settingsLeft">
            <Checkbox />
                {
                    emailListLeftOptions.map(item => (
                        <IconButton key={item.id}>
                            <item.icon />
                        </IconButton>
                    ))
                }
        </div>
    )
}

export default SettingsLeft
