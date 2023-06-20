import React from 'react'
import { Link } from 'react-router-dom'
import { InboxActions } from './ReduxStore/InboxReducer'
import './Inbox.css'
import SideBar from './SideBar'
import { useDispatch,useSelector } from 'react-redux'
const Inbox = () => {
    const dispatch = useDispatch()
    const InboxData = useSelector(state => state.inboxReducer.inboxData)

    let url =  'https://emailbox-42ee5-default-rtdb.firebaseio.com'

    const email = localStorage.getItem('email').replace(/['@','.']/g,'');


    const deleteData =async(id)=>{
        try {
               const response = await fetch(`${url}/Inbox/${email}/${id}.json`,{
                method:'DELETE'
               })
               dispatch(InboxActions.updateGet())
        } catch (error) {
            console.log(error)
            
        }
}

const deleteHandler =(id)=>{
    deleteData(id)
}

  return (
    <div className='ParentBox'>
        <div className='Sidebar'>
            <SideBar/>
        </div>
        <div className='tableParent'>
               <table className='table'>
                      <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>From</th>
                            <th scope='col'>Subject</th>
                            <th scope='col'>Message</th>
                            <th scope='col'>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {InboxData.map((item,index)=>{
                            return(
                                <tr key={item.id}>
                                 <td scope='row'>{index + 1}</td>

                                 {/* to show UNREAD MESSAGES  */}
                                 <td>{!item.read && <div style={{width:'10px',height:'10px',borderRadius:'100%',backgroundColor:'red'}}></div> }{item.from}</td>
                                 <td>{item.subject}</td>
                                 <td><Link to={`/Inbox/${item.id}`}>Open Message </Link></td>
                                 <td><button type='button' class='btn btn-danger' onClick={deleteHandler.bind(null,item.id)}>delete</button></td>
                                </tr>
                            )
                        })} 
                      </tbody>
               </table>
        </div>
    </div>
  )
}

export default Inbox