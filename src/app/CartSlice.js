import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    cartstate : false ,
    cartItems : localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    cartTotalAmount :  0,

};
const CartSlice = createSlice ({

    initialState,
    name :'cart',
    reducers : {

            setOpenCart:(state , action) =>{
                state.cartstate = action.payload.cartstate;
              
            },
            setCloseCart:(state , action) =>{
                state.cartstate = action.payload.cartstate;
            },

            setAddItemToCart:(state , action) =>{
                const itemIndex = state.cartItems.findIndex((item) => (
                item.id === action.payload.id) )

               if(itemIndex >= 0 )
               {
                 state.cartItems[itemIndex].cartQuantity +=1 ;
                 state.cartTotalAmount =parseInt(state.cartTotalAmount) + 1;
                  toast.success(`Item QTY Increased`)
               }
               else
               {
                 const temp  = {...action.payload , cartQuantity : 1}
                 state.cartItems.push(temp);
                 toast.success(`${action.payload.title} added tot Cart`)
                 state.cartTotalAmount =parseInt(state.cartTotalAmount) + 1;
               }
               localStorage.setItem('cart' , JSON.stringify(state.cartItems))
               localStorage.setItem('amount' , parseInt(localStorage.getItem("amount")) +1)
             
         
              
            },

            setRemoveItemCart:(state , action) =>{
                const removeItem = state.cartItems.filter((item) =>
                    item.id !== action.payload.id
                )
                state.cartItems = removeItem;
                state.cartTotalAmount -=1;
                localStorage.setItem("cart" , JSON.stringify(state.cartItems));
                toast.success(`${action.payload.title} Removed From Cart`)
                
            },

            setIncreaseItemQTY:(state , action) =>{
                const index = state.cartItems.findIndex((item) => 
                item.id === action.payload.id)
                if(state.cartItems[index].cartQuantity >= 0)
                {
                    state.cartItems[index].cartQuantity +=1;
                    toast.success(`Item QTY Increased`)
                    state.cartTotalAmount +=1;
                }
                localStorage.setItem('cart' , JSON.stringify(state.cartItems))

               
            },

            setDecreaseItemQTY:(state , action) =>{
                
                const index = state.cartItems.findIndex((item) => 
                item.id === action.payload.id)
                if(state.cartItems[index].cartQuantity > 1)
                {
                    state.cartItems[index].cartQuantity -=1;
                    state.cartTotalAmount -=1;
                    toast.success(`Item QTY Decreased`)
                    
                }
                localStorage.setItem('cart' , JSON.stringify(state.cartItems))


            },

            setClearCartItem:(state , action) =>{
                state.cartItems = [];
                state.cartTotalAmount = 0;
                toast.success(`Cart Cleared`)
                localStorage.setItem('amount' , 0)
            },  

           
    }
}); 

export const {setOpenCart , setCloseCart , setAddItemToCart , setRemoveItemCart , setIncreaseItemQTY , setDecreaseItemQTY , setClearCartItem } = CartSlice.actions;
export default CartSlice.reducer

