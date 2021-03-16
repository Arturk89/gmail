import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase';

import SettingsLeft from './components/SettingsLeft';
import SettingsRight from './components/SettingsRight';
import OverlapSection from './components/OverlapSection';
import EmailListComponent from './components/EmailListComponent';

import { emailOverlaps } from '../../../data/emailOverlaps';
import { emailListLeftOptions, emailListRightOptions } from '../../../data/emailListOptions';

import './EmailList.css'

const EmailList = () => {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))))
    }, [])

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <SettingsLeft emailListLeftOptions={emailListLeftOptions} />
                <SettingsRight emailListRightOptions={emailListRightOptions} />
            </div>
            <OverlapSection emailOverlaps={emailOverlaps} />
            <EmailListComponent emails={emails} />
        </div>
    )
}

export default EmailList
