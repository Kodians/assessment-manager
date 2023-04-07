import React from 'react'

import { Layout } from '@components'
import { Home, Login, Register, StudentView, Unknown } from '@pages'

import { TeacherView } from './pages/teacherView'
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
    <Route path="student" element={<StudentView />} />
    <Route path="teacher" element={<TeacherView />} />
    <Route path="*" element={<Unknown />} />
  </Routes>
)

export default App
