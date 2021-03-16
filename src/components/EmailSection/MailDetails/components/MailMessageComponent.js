import React from 'react'

const MailMessageComponent = ({selectedMail}) => {
    return (
        <div className="mail__message">
            <p>{selectedMail?.description}</p>
        </div>
    )
}

export default MailMessageComponent
