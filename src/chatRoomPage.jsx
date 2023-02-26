import { useState, useEffect } from 'react'
import { app, auth, db } from './firebase'
import { getFirestore, collection, getDoc,
         addDoc, deleteDoc, doc, onSnapshot,
         query, where, orderBy, serverTimestamp,
         updateDoc
        } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import MessageLog from './components/MessageLog';

function App() {
  const [messages, setMessages] = useState([])
  const [messageInput, setMessageInput] = useState("")

  const messagesRef = collection(db, "messages")

  const handleSending = (e)=>{
    const msgContent = messageInput
    const time = serverTimestamp()
    addDoc(messagesRef, {content: msgContent,
                         time: time,
                         sender: "sadah9999@gmail.com"
                        })
    setMessageInput(()=>"")
  }

  let q = query(messagesRef, orderBy("time", 'asc'))
  useEffect(()=>{
    onSnapshot(q, (snapshot)=>{
      const arr = snapshot.docs.map((doc) => {return {...doc.data(), id:doc.id}})
      setMessages(()=>{
        return arr.map((msg)=> <MessageLog key={msg.id} content={msg.content} isSender={false} />)
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
      <div className='flex w-full'>
        <input type="text" name="message" id="" onChange={(e)=>setMessageInput(e.target.value)} value={messageInput} className='w-1/3 rounded'  />
        <button type='button' onClick={(e)=> handleSending(e)} className='bg-blue-600 text-white px-4 py-1 rounded'>Send</button>
      </div>
    </div>
  )
}

export default App
