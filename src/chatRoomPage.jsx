import { useState, useEffect, useRef } from 'react'
import { app, auth, db } from './firebase'
import { getFirestore, collection, getDoc,
         addDoc, deleteDoc, doc, onSnapshot,
         query, where, orderBy, serverTimestamp,
         updateDoc
        } from 'firebase/firestore';
import MessageLog from './components/MessageLog';

function ChatRoomPage() {
  const [messages, setMessages] = useState([])
  const [messageInput, setMessageInput] = useState("")

  const dummy = useRef(null)

  useEffect(()=>{
      console.log("Scrolled")

      setTimeout(()=>{
        if(dummy.current){
          dummy.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
          })
        }
      }, 500)
  }, [])

  const messagesRef = collection(db, "messages")

  const handleSending = (e)=>{
    const msgContent = messageInput
    const time = serverTimestamp()
    addDoc(messagesRef, {message: msgContent,
                         createdAt: time,
                         uid: auth.currentUser.uid,
                         senderName: auth.currentUser.displayName
                        })
    setMessageInput(()=>"")

    dummy.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'start'
    })
  }
 
  let q = query(messagesRef, orderBy("createdAt", 'asc'))
  useEffect(()=>{
    console.log(auth.currentUser)
    onSnapshot(q, (snapshot)=>{
      const arr = snapshot.docs.map((doc) => {return {...doc.data(), id:doc.id}})
      setMessages(()=>{
        return arr.map((msg)=> <MessageLog key={msg.id} content={msg.message} isSender={auth.currentUser.uid==msg.uid ? false : true} name={msg.senderName} />)
      })
    })
  }, [])

  const docRef = doc(db, "users", "sadah9999@gmail.com")
  updateDoc(docRef, {
    name: "Mustafa Alsadah"
  })
 


  return (
    <div className='bg-slate-400 h-full w-full p-11'>
      {messages}
      
      <div className='bg-green-900 p-20 m-10'> 
          <input type="text" name="message" id="" onChange={(e)=>setMessageInput(e.target.value)} value={messageInput} className='w-1/3 rounded'  />
          <button type='button' onClick={(e)=> handleSending(e)} className='bg-blue-600 text-white px-4 py-1 rounded'>Send</button>
      </div>
      <br /><br /><br />
      <div ref={dummy} >

      </div>
    </div>
  )
}

export default ChatRoomPage
