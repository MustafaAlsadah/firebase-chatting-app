import { Routes, Route } from 'react-router-dom'
import SignupPage from './signupPage'
import ChatRoomPage from './chatRoomPage'
import LoginPage from './LoginPage'
import Error from './Error'

export default function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={ <SignupPage/> } exact />
                <Route path="/chat" element={ <ChatRoomPage/> } />
                <Route path="/login" element={ <LoginPage/> } />

                <Route path='*' element={ <Error/> } />
            </Routes>    
        </>
    )
}