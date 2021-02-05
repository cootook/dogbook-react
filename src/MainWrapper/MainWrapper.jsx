import React from 'react';
import s from './MainWrapper.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from '../components/Profile/Profile';

export default function MainWrapper() {
  return (
    <main className={s.main}>
      {/* <BrowserRouter> */}
      {/* <Switch> */}

      <Route exact path='/' >
        HOME
          </Route>

      <Route path='/News' >
        News
          </Route>

      <Route path='/Profile' component={Profile} />

      <Route path='/Messages'>
        Messages
          </Route>

      <Route path='/Communities'>
        Communities
          </Route>

      <Route path='/Spots'>
        Spots
          </Route>

      <Route path='/Clinics'>
        Clinics
          </Route>

      <Route path='/Instructors'>
        Instructors
          </Route>

      <Route path='/Map'>
        Map
          </Route>

      <Route path='/Settings'>
        desrgar Settings
          </Route>
      {/* </Switch> */}
      {/* </BrowserRouter> */}
    </main>
  )
}
