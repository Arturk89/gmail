import React from 'react'
import EmailRow from '../EmailRow/EmailRow';

const EmailListComponent = ({emails}) => {
    return (
        <div className="emailList__list">
                {
                    emails.map(({id, data: {to, subject, message, timestamp}}) => (
                        <EmailRow 
                            key={id}
                            id={id}
                            title={to}
                            subject={subject}
                            description={message}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}
                        />
                    ))
                }
            </div>
    )
}

export default EmailListComponent
