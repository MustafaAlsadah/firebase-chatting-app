import { app, auth, db } from './firebase';
import { signInWithEmailAndPassword, signOut, 
         GoogleAuthProvider, signInWithPopup
} from "firebase/auth";


const handleLogin = (e)=>{
    try{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const credentials = signInWithEmailAndPassword(auth, email, password)
        alert('user has been logged in: ', credentials.user)
    }catch(err){
        alert(err)
    }
}

const handleLogout = async (e)=>{
    await signOut(auth)
    alert('user has been logged out')
}

export default function loginPage() {

    const signInWithGoogle = ()=>{
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    return (
        <div className="bg-slate-400 h-screen w-full p-11">
            <form id="login" onSubmit={(e)=>handleLogin(e)}>
                    <label htmlFor="email-input">email</label>
                    <input type="email" name="email" id="email-input" />
                    <br /><br />
                    <label htmlFor="password-input">password</label>
                    <input type="password" name="password" id="password-input" />
                    <br /><br />
                    <button className="bg-blue-600 text-white p-3 rounded-md">Login</button>
                </form>

                <button onClick={handleLogout} id="logout" className="bg-black text-white p-3 rounded-md">logout</button>

                <button className='bg-white text-orange-500 p-3' onClick={signInWithGoogle}>Sign in with google</button>
        </div>
    )
}