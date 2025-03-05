import { useState } from "react";

const Comment = () => {

    // Local State Variable
    // const[name,setName]=useState("")
    // const[message,setMessage]=useState("")

    // Direct value
    const [data, setData] = useState({ name: "", message: "" })

    // Array
    const [finData, setFinData] = useState([])


    return (
        <>
            <p>Comments Pages</p>
            <label htmlFor="name"></label>
            <input type="text" id="name" className="border-2 border-black "
                onChange={(e) => {
                    // console.log(e.target.value);
                    // setData({name:e.target.value}) <===Direct value


                    // Callback Function
                    setData((prev) => {
                        return { ...prev, name: e.target.value }
                    })
                    // Callback Function


                }} />


            <label htmlFor="message"></label>
            <input type="text" id="message" className="border-2 border-black "
                onChange={(e) => {
                    // console.log(e.target.value);
                    // setData({message:e.target.value})  <===Direct value


                    // Callback Function
                    setData((prev) => {
                        return { ...prev, message: e.target.value }
                    })
                    // Callback Function


                }} />
            <button onClick={() => {
                setFinData((prev) => {
                    return [...prev, data]
                })
            }}>Submit</button>
            <p>{JSON.stringify(data)}</p>
            <p>{JSON.stringify(finData)}</p>


        </>
    )
}


export default Comment;