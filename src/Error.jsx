import { Link } from 'react-router-dom'

export default function Error() {
    return(
        <>
            <div className='container'>
                <h1>ERR 404: Page not found</h1>  
                <Link to="/"><button className='bg-blue-600 border-4 text-white p-3 rounded'>Go back to the signup page</button></Link>
            </div>
        </>
    )
}