import React from 'react'

import { Classe, Home, Module, Question, StudentView, TeacherView, Unknown } from '@pages'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  const appRef = React.useRef<HTMLDivElement>(null)
  return (
    <div className="App" ref={appRef}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teacher" element={<TeacherView />}>
            <Route path="interrogations" element={<Question appRef={appRef} />} />
            <Route path="modules" element={<Module appRef={appRef} />} />
            <Route path="classes" element={<Classe appRef={appRef} />} />
          </Route>
          <Route path="student" element={<StudentView />} />
          <Route path="*" element={<Unknown />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
