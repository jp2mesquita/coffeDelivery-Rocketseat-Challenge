import { createContext, ReactNode, useReducer, useState } from "react";

import { addItemThatAlreadIsInTheCart, addNewItemToCart, clearCart, decreaseAmountInCart, increaseAmountInCart, removeItem } from "../reducers/cartList/actions";
import { CartListProps, cartListReducer, CatalogProps } from "../reducers/cartList/reducer";


interface DeliveryUserDataProps{
  complement?: string | undefined,
  number: number | undefined,
  CEP: number | undefined,
  adress: string,
  district: string,
  city: string,
  UF: string,
}

interface OrderProps{
  finishedCartList: CartListProps[],
  deliveryUserData: DeliveryUserDataProps,
  paymentFormat: string,
}

interface CartContextType{
  cartList: CartListProps[],
  order: OrderProps,
  paymentFormat: string,
  clearCartList: () => void,
  changePaymentFormat: (newPaymentFormat: string) => void,
  finishOrder: (userData: DeliveryUserDataProps) => void,
  addItemToCart: (itemToAdd: CatalogProps, amount: number) => void,
  removeItemFromCart: (itemToRemoveId: string) => void,
  decreaseItemAmountInCart: (itemToDecreaseId: string) => void,
  increaseItemAmountInCart: (itemToIncreaseId: string) => void,
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps{
  children: ReactNode
}

export function CartContextProvider( { children } : CartContextProviderProps){

  const [ cartList, dispatch ] = useReducer(cartListReducer,[])

  const [paymentFormat,  setPaymentFormat] =useState<string>('')

  function changePaymentFormat(newPaymentFormat: string){
    setPaymentFormat(newPaymentFormat)
  }

  const [ order, setOrder ] = useState<OrderProps>({
    finishedCartList: [],
    deliveryUserData: {
      complement: '',
      number: undefined,
      CEP: undefined,
      adress: '',
      district: '',
      city: '',
      UF: '',
    },
    paymentFormat: '',
  })


  function finishOrder(userData: DeliveryUserDataProps){
    const newOrder: OrderProps  = {
      finishedCartList : cartList,
      deliveryUserData: userData,
      paymentFormat: paymentFormat,
    }
    setOrder(newOrder)
  }

  function  addItemToCart(itemToAdd: CatalogProps, amount: number){

    const itemAlreadIsInTheCart = !!cartList.find( ( item ) => item.id == itemToAdd.id)

    if(itemAlreadIsInTheCart){
      
      dispatch(addNewItemToCart(itemToAdd, amount))

    }else{
      const newItem = {
        id: itemToAdd.id,
        item: itemToAdd,
        amount: amount,
        amountPrice: parseFloat(itemToAdd.price.replace(',','.')) * amount,
      }

      dispatch(addItemThatAlreadIsInTheCart(newItem))
     }
  }

  function clearCartList ()  {
    dispatch(clearCart())
  }
  

  function removeItemFromCart(itemToRemoveId: string){
    dispatch(removeItem(itemToRemoveId))
  }

  function decreaseItemAmountInCart(itemToDecreaseID: string){
    dispatch(decreaseAmountInCart(itemToDecreaseID))
  }

  function increaseItemAmountInCart(itemToIncreaseID: string){
    dispatch(increaseAmountInCart(itemToIncreaseID))
  }


  return(
    <CartContext.Provider value={
      {
        cartList, 
        order,
        finishOrder,
        paymentFormat,
        changePaymentFormat,
        addItemToCart, 
        removeItemFromCart,
        decreaseItemAmountInCart,
        increaseItemAmountInCart,
        clearCartList,
      }
    }>
      { children }
    </CartContext.Provider>
  )
}