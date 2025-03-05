import { useEffect, useState } from "react"

const useOfflineStatus=()=>{
    

    const [status,setStatus]=useState(navigator.onLine);

useEffect(()=>{
    addEventListener("online",()=>{
        setStatus(false);
    })

    addEventListener("offline",()=>{
        setStatus(true);
    })
    
},[])

    return status;
}


export default useOfflineStatus