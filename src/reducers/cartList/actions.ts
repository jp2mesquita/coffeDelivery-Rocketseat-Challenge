import { CartListProps, CatalogProps } from "./reducer"

export enum ActionTypes{
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  ADD_ITEM_THAT_ALREAD_IS_IN_THE_CART = "ADD_ITEM_THAT_ALREAD_IS_IN_THE_CART",
  CLEAR_CART_LIST = "CLEAR_CART_LIST",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  DECREASE_ITEM_AMOUNT_IN_CART =  "DECREASE_ITEM_AMOUNT_IN_CART",
  INCREASE_ITEM_AMOUNT_IN_CART = "INCREASE_ITEM_AMOUNT_IN_CART",
}

export function addNewItemToCart(itemToAdd: CatalogProps, amount: number){
  return {
    type: ActionTypes.ADD_ITEM_THAT_ALREAD_IS_IN_THE_CART,
    payload:{
      itemToAdd,
      amount
    }
  }
}

export function addItemThatAlreadIsInTheCart(newItem: CartListProps){
  return{
      type: ActionTypes.ADD_ITEM_TO_CART,
      payload: {
        newItem,
      }
  }
}

export function clearCart(){
  return {
    type : ActionTypes.CLEAR_CART_LIST,
  }
}

export function removeItem(itemToRemoveId: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload:{
      itemToRemoveId
    }
  }
}

export function decreaseAmountInCart(itemToDecreaseID: string){
  return {
    type: ActionTypes.DECREASE_ITEM_AMOUNT_IN_CART,
    payload: {
      itemToDecreaseID
    }
  }
}

export function increaseAmountInCart(itemToIncreaseID: string){
  return {
    type: ActionTypes.INCREASE_ITEM_AMOUNT_IN_CART,
    payload:{
      itemToIncreaseID
    }
  }
}