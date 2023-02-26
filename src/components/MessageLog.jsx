export default function MessageLog(props){
    let returnedLog = props.isSender ? <>
                                            <div className='flex w-full justify-start text-white mb-8'>
                                                <span className='p-3 px-6 bg-black rounded-md shadow-md break-all w-1/2'>{props.content}</span>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className='flex w-full justify-end text-white mb-8'>
                                                <span className='p-3 px-6 bg-blue-700 rounded-md shadow-md break-all w-1/2'>{props.content}</span>
                                            </div>
                                        </>
                                        
    return(
        returnedLog
    )
}