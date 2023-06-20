import React from 'react'
import { Button } from 'react-bootstrap'
import './SideBar.css'
const SideBar = () => {
  return (
    <div className='SideBarContainer' style={{marginTop:'2rem' }}>
   <div>ALL MAILS</div>
   <div className='allsidebarMenu'>
    <Button>Compose Mail</Button>
    <Button>Inbox</Button>
    <Button>Sent</Button>
    <Button>LogOut</Button>
   </div>
    </div>
  )
}

export default SideBar