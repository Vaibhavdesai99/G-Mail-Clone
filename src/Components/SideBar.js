import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { InboxActions } from './ReduxStore/InboxReducer'
import { authActions } from './ReduxStore/AuthSlice'
import './SideBar.css'
const SideBar = () => {
    const dispatch = useDispatch()
    const unread = useSelector(state =>state.inboxReducer.unread)
    const getRequest=useSelector(state =>state.inboxReducer.getReq)
    const[render,setRender]=useState(true)


    let url =  "https://mail-box-client-72ab7-default-rtdb.firebaseio.com/"
    const email = localStorage.getItem('email').replace(/['@','.']/g, "")

    const getData=async()=>{
        try {
            const response = await fetch(`${url}/Inbox/${email}.json`)
            const data = await response.json()
            // console.log(data)
            let arrayOfData=[]
            for(let key in data){
                arrayOfData.unshift({id:key,...data[key]})
            }

            dispatch(InboxActions.changeInbox(arrayOfData))

            let count =0;
            arrayOfData.forEach((msg)=>{
                if(msg.read === false)
                {
                    count++;
                }
            })
            dispatch(InboxActions.updateUnread(count))
        } catch (error) {
            console.log(error)
            
        }
    }

    // LogOutHandler :
    const logOutHandler =()=>{
        dispatch(authActions.logOut())
    }

    const id =setInterval(()=>{
        setRender(!render)
    },2000)

useEffect(()=>{
    getData();
    return ()=>{
        clearInterval(id)
    }
},[])

  return (
    <div className='SideBarContainer' style={{marginTop:'2rem' }}>
   <div>ALL MAILS</div>
   <div className='allsidebarMenu'>
   <Link to='/welcomeScreen'><Button>Compose Mail</Button></Link> 
   <Link to='/Inbox'><Button>Inbox</Button>{unread}</Link> 
    <Button>Sent</Button>
    <Button onClick={logOutHandler}>LogOut</Button>
   </div>
    </div>
  )
}

export default SideBar