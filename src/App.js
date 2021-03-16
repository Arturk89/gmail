import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Mail from './components/EmailSection/MailDetails/Mail';
import EmailList from './components/EmailSection/EmailList/EmailList';
import SendMail from './components/EmailSection/MailPopup/SendMail';
import Login from './components/Login/Login';
import { auth } from './firebase'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser, login } from './features/userSlice';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
    }
  })
 }, [])

  
  return (
      <Router>
        {!user ? (
          <Login />
        ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
        )}
      </Router>
  );
}

export default App;
