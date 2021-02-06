import React from 'react';
import s from './MainWrapper.module.scss';
import { Route } from 'react-router-dom';
import Profile from '../components/Profile/Profile';
import Messages from '../components/Messages/Messages';

export default function MainWrapper() {
  return (
    <main className={s.main}>

      <Route path='/News' >
        News
          </Route>

      <Route path='/Profile' component={Profile} />

      <Route path='/Messages' component={Messages} />

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

      <Route exact path='/' >
        HOME
          </Route>

    </main>
  )
}
