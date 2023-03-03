import { Routes, Route } from 'react-router-dom'
import SignupPage from './signupPage'
import ChatRoomPage from './ChatRoomPage'
import LoginPage from './LoginPage'
import Error from './Error'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { app, db, auth } from "./firebase"

export default function App() {
    const [user] = useAuthState(auth);

    if(user){
        return(
            <Routes>
                <Route path="/" element={ <ChatRoomPage/> } exact />
                <Route path="/signup" element={ <SignupPage/> } />
                <Route path="/login" element={ <LoginPage/> } />

                <Route path='*' element={ <Error/> } />
            </Routes>
        )
    }else{
        return(
            <LoginPage/>
        )
    }
}