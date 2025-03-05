import { useEffect, useState } from "react";

const useFetchProductDetailsData=(productId)=>{

    const [isloading,setIsLoading]=useState(true);
    const [data,setdata]=useState([]);

  useEffect(()=>{
    fetchDataByProductsID(productId);
  },[productId])
  
  const fetchDataByProductsID = async (id)=>{
    try{
        setIsLoading(true)
        // console.log(id);
        
        const res =await fetch("https://dummyjson.com/products/" + id);
        const data=await res.json();
        // console.log(data);    
        setdata(data)
             

    }catch(error){
        console.log(error);
    }finally{
        setIsLoading(false)
    }
  }

    return{isloading,data}
}

export default useFetchProductDetailsData;