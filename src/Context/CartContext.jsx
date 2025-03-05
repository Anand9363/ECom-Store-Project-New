import { createContext, useState } from "react";

export const CartContext=createContext();

const CartProvider=({children})=>{
    const[cart,setCart]=useState([]);

    // const addItemsToCart=(newItem)=>{
    //     // setCart((prev)=>[...prev,newItem])
    //     setCart([...cart,newItem])
    // }

    const addItemsToCart=(newItem)=>{
        setCart((prevcart)=>{

            const existingItems =prevcart.findIndex((items)=>items.id===newItem.id)

            if(existingItems !==-1){
                return prevcart.map((itemss,index)=>{
                        if(index===existingItems){
                            return{
                                ...itemss,
                                quantity:(itemss.quantity || 1)+1
                            }
                                 
                            
                        }
                        return itemss
                })

            }
            return[...prevcart,newItem]
        })
       
    }
    


   const Clearcart=()=>{
    setCart([])
   };

   const removeItemsFromcart=(itemsId)=>{
    const updateCart = cart.filter((items)=>{
        return items.id !==itemsId
    })
    setCart(updateCart)
   }

   const updateCartQuantity=(itemsId,newQuantity)=>{
    const updateCart=cart.map((items)=>{
        if(itemsId===items.id){
            return{...items,quantity:newQuantity}
        }
        return items
    })
    setCart(updateCart)
   }
    
    return(
        <>
        <CartContext.Provider value={{cart,addItemsToCart,Clearcart,removeItemsFromcart,updateCartQuantity}}>
        {children}
        </CartContext.Provider>
        </>
    );
};

export default CartProvider;


