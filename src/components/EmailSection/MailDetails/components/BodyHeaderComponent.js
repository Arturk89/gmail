import React from 'react'
import { LabelImportant } from '@material-ui/icons'

const BodyHeaderComponent = ({selectedMail}) => {
    return (
        <div className="mail__bodyHeader">
            <h2>{selectedMail?.subject}</h2>
            <LabelImportant className="mail__important" />
            <p>{selectedMail?.title}</p>
            <p className="mail__time">{selectedMail?.time}</p>
        </div>
    )
}

export default BodyHeaderComponent
