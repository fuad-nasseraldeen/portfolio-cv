import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import '../src/globals.css'

import Home from 'pages/home/Home.tsx'

import { getProfile, } from './actions/profile'
import _ from 'lodash'
import { RootState } from '@/utill/types.tsx'
import RootLayout from './components/Layout/RootLayout.tsx';
import About from 'pages/about/About.tsx'
import ProjectPage from 'pages/projects/components/projectPage/ProjectPage.tsx'
import ContactPage from 'pages/contact/ContactPage.tsx'
import RecommendationsPage from 'pages/recommendations/RecommendationsPage/RecommendationsPage.tsx'

const App = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state: RootState) => state.profile)

  useEffect(() => {
    if (_.isEmpty(profile)) { // Add a check for 'loading' property
      getProfile(dispatch)
    }

  }, [dispatch, profile])

  return (
    <Router>

      <div className='container'>
        <RootLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/recommendations' element={<RecommendationsPage />} />
            <Route path='*' element={<Navigate to='/' />} />

          </Routes>
        </RootLayout>
      </div>
    </Router >
  )
}

export default App;
