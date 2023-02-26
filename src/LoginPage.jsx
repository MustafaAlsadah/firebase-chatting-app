import { app, auth, db } from './firebase';
import { signInWithEmailAndPassword
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

export default function loginPage() {
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
        </div>
    )
}