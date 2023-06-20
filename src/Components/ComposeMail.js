import React,{useState} from 'react'

import './ComposeMail.css'
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import SideBar from './SideBar';

const ComposeMail = () => {
    const [editorState,setEditorState] = useState(()=> EditorState.createEmpty())
    const[receiver,setReceiver]=useState('')
    const [subject,setSubject]=useState('')

    let url = "https://mail-box-client-72ab7-default-rtdb.firebaseio.com/";
    const sender = localStorage.getItem('email').replace(/['@','.']/g,'')
    const sender1=localStorage.getItem('email')


    const postDataToSentBox = async()=>{
        try {
            const response = await fetch(`${url}/sentBox/${sender}.json`,{
                method:'POST',
                body:JSON.stringify({
                    to:receiver,
                    subject:subject,
                    message:editorState.getCurrentContent().getPlainText()
                }),
                headers:{
                    'Content-Type':'application/json'
                }
            })
        } catch (error) {
            alert(error)
        }
    }

 const postDataToInbox =async()=>{
    const receiver1 =receiver.replace(/['@','.']/g,'')
    try {
        const response = await fetch(`${url}/Inbox/${receiver1}.json`,{
            method:'POST',
            body:JSON.stringify({
                from:sender1,
                subject:subject,
                message:editorState.getCurrentContent().getPlainText(),
                read:false

            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
    } catch (error) {
        alert(error)
        
    }
 }



 const EditorStateChangeHandler=(e)=>{
    setEditorState(e)
 }

 const receiverHandler =(e)=>{
    setReceiver(e.target.value)
 }

 const subjectHandler =(e)=>{
    setSubject(e.target.value)
 }


 const submitHandler =(e)=>{
    e.preventDefault()
    postDataToInbox()
    postDataToSentBox()
    setReceiver('')
    setSubject('')
    setEditorState('')
 }

  return (
    <div className='container'>
        <div className='sidebar'>
              <SideBar/>
        </div>
        <div className='ComposeParentMailBox'>
            <div className='ChildBox1'>
               <div>
                To:
               </div>
             <input type='email' placeholder='Enter Email here' onChange={receiverHandler} value={receiver}/>
             <button className='btn btn-primary' onClick={submitHandler}>Send</button>
            </div>
            <div className='childBox2'>
               <div>subject : </div>
               <input type='text' value={subject} onChange={subjectHandler}/>
            </div>
          <div className='childBox3'>
         <Editor 
         editorState={editorState}
         onEditorStateChange={EditorStateChangeHandler}/>
          </div>
        </div>
    </div>
  )
}

export default ComposeMail;