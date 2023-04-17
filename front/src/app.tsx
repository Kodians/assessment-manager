import React from 'react'

import { Classe, Home, Module, Question, StudentView, TeacherView, Unknown } from '@pages'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="teacher" element={<TeacherView />}>
        <Route path="interrogations" element={<Question />} />
        <Route path="modules" element={<Module />} />
        <Route path="classes" element={<Classe />} />
      </Route>
      <Route path="student" element={<StudentView />} />
      <Route path="*" element={<Unknown />} />
    </Routes>
  </BrowserRouter>
)

export default App
