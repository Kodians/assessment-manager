import React from 'react'

import { AdminLayout, Layout } from '@components'
import { Home, Login, Register, StudentView, Unknown } from '@pages'

import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
    <Route path="admin" element={<AdminLayout />}>
      <Route path="student" element={<StudentView />} />
    </Route>
    <Route path="*" element={<Unknown />} />
  </Routes>
)

export default App
