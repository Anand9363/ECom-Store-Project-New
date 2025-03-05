import { useEffect, useState } from "react"

const useFetchProductData=()=>{

    let [data, setdata] = useState()
    let [isloading, setisloading] = useState(true)

    useEffect(() => {
        fetchData()
        // console.log(data);
    }, [])

    let fetchData = async () => {
        try {
            setisloading(true)
            let res = await fetch("https://dummyjson.com/products")
            let data = await res.json()
            setdata(data.products)
            // console.log(data.products);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setisloading(false)
        }
    }
    return{data,isloading}
}

export default useFetchProductData