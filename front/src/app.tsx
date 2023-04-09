import React from 'react'

import { Layout } from '@components'
import { Home, StudentView, TeacherView, Unknown } from '@pages'

import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="student" element={<StudentView />} />
    <Route path="teacher" element={<TeacherView />} />
    <Route path="*" element={<Unknown />} />
  </Routes>
)

export default App
