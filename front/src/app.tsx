import React from 'react'

import { Layout } from '@components'
import { Home, Module, Question, StudentView, TeacherView, Unknown } from '@pages'

import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="student" element={<StudentView />} />
    <Route path="teacher" element={<TeacherView />} />
    <Route path="question" element={<Question />} />
    <Route path="module" element={<Module />} />

    <Route path="*" element={<Unknown />} />
  </Routes>
)

export default App
