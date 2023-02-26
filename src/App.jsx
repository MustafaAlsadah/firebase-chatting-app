import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { initializeApp } from "firebase/app"
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

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDLksnARiZ53kzR2qQbAjiLXH8a8EWFHgk",
    authDomain: "fb-tutorial-10fb6.firebaseapp.com",
    projectId: "fb-tutorial-10fb6",
    storageBucket: "fb-tutorial-10fb6.appspot.com",
    messagingSenderId: "3366885639",
    appId: "1:3366885639:web:d458eb07eb8c85ece50da2",
    measurementId: "G-GR76ZG5EW8"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth()
  const db = getFirestore(app);
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
