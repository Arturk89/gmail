import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ToolsLeftComponents from './components/ToolsLeftComponents';
import ToolsRightComponents from './components/ToolsRightComponents';
import BodyHeaderComponent from './components/BodyHeaderComponent';
import MailMessageComponent from './components/MailMessageComponent';

import { selectOpenMail } from '../../../features/mailSlice';
import { emailDetailsLeft, emailDetailsRight } from '../../../data/emailDetailsOptions';

import './Mail.css'

const Mail = () => {
    const history = useHistory()
    const selectedMail = useSelector(selectOpenMail)

    return (
        <div className="mail">
            <div className="mail__tools">
                <ToolsLeftComponents emailDetailsLeft={emailDetailsLeft} history={history} />
                <ToolsRightComponents emailDetailsRight={emailDetailsRight} />
            </div>
            <div className="mail__body">
                <BodyHeaderComponent selectedMail={selectedMail} />
                <MailMessageComponent selectedMail={selectedMail} />
            </div>
        </div>
    )
}

export default Mail
