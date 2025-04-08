import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Help from './pages/Help'
import ChatLayout from './layout/ChatLayout'
import Chat from './pages/Chat'
import LogIn from './pages/LogIn'
import SignIn from './pages/SignUp'
import Profile from './pages/Profile'
import DietWorkout from './sub-pages/DietWorkout'
import FaceAnalysis from './sub-pages/FaceAnalysis'
import LeafAnalysis from './sub-pages/LeafAnalysis'
import StartUp from './sub-pages/StartUp'
import Writer from './sub-pages/Writer'
import BookSummary from './sub-pages/BookSummary'
import CaseStudy from './sub-pages/CaseStudy'
import ContentGenerator from './sub-pages/ContentGenerator'
import './index.css'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
          <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='help' element={<Help/>}/>
          <Route path='login' element={<LogIn/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Route>

      <Route path='chat' element={<ChatLayout/>}>
          <Route index element={<Chat/>}/>
          <Route path='case-study' element={<CaseStudy/>}/>
          <Route path='content-generator' element={<ContentGenerator/>}/>
          <Route path='book-summary' element={<BookSummary/>}/>
          <Route path='deit-workout' element={<DietWorkout/>} />
          <Route path='face-analysis' element={<FaceAnalysis/>} />
          <Route path='leaf-analysis' element={<LeafAnalysis/>}/>
          <Route path='start-up' element={<StartUp/>}/>
          <Route path='writer-ai' element={<Writer/>}/>
      </Route>
      </>
    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
