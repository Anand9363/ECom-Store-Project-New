import { useState } from "react";

const Contact=()=>{

    const[mail,setMail]=useState();
    const[message,setMessage]=useState();
    return(
        <>
        <div className="h-[100vh]">

        <form onSubmit={(e)=>{
            e.preventDefault()
            console.log("Form Submit:" ,mail,message);
            

        }}>
            <label htmlFor="mail">Email</label>
            <input  id="mail" onChange={(e)=>{
            setMail(e.target.value)  
            }}/>



            <label htmlFor="message">Message</label>
            <textarea  id="message" onChange={(e)=>{
            setMessage(e.target.value)
            }}></textarea>


            
            <button>Submit</button>
        </form>
        </div>
        </>
    )
}

export default Contact