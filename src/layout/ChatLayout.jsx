import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function ChatLayout() {
  return (
    <div>
      <h1>Chat loyout</h1>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default ChatLayout
