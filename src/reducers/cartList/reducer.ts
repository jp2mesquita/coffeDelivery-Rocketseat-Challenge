import { ActionTypes } from "./actions"
import { produce } from 'immer'


export interface CatalogProps{
  id: string,
  description: string,
  price: string,
  image: string,
  tags: string,
}

export type CartListProps = {
  id: string,
  item: CatalogProps,
  amount: number,
  amountPrice: number,
}

export function cartListReducer (state: CartListProps[], action: any) {

  switch (action.type){
    
    case ActionTypes.ADD_ITEM_TO_CART:{
      return produce(state, (draft) =>{
        draft.push(action.payload.newItem)
      })
    }

    case ActionTypes.ADD_ITEM_THAT_ALREAD_IS_IN_THE_CART: {

      const itemToAddIndex = state.findIndex(item => {
        return item.id == action.payload.itemToAdd.id
      })
      const newAmount = state[itemToAddIndex].amount  + action.payload.amount
      const newPrice = parseFloat(state[itemToAddIndex].item.price.replace(',','.'))* newAmount

      return produce(state, (draft) => {
          draft[itemToAddIndex].amount = newAmount,
          draft[itemToAddIndex].amountPrice =  newPrice
      })  
    
    }

    case ActionTypes.CLEAR_CART_LIST: {
      return produce(state , draft => [])
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART:{
      const listWithoutDeleteOne = state.filter(item => {
        return item.id != action.payload.itemToRemoveId
      })
      
      return produce(state, draft => listWithoutDeleteOne)
    }

    case ActionTypes.DECREASE_ITEM_AMOUNT_IN_CART:{
      const itemToDecreaseIndex = state.findIndex( item => {
        return item.id == action.payload.itemToDecreaseID
      })
      
      if(state[itemToDecreaseIndex].amount > 1){

        const newAmount = state[itemToDecreaseIndex].amount - 1
        const newPrice = parseFloat(state[itemToDecreaseIndex].item.price.replace(',','.')) * newAmount

        return produce(state, (draft) => {
          draft[itemToDecreaseIndex].amount = newAmount,
          draft[itemToDecreaseIndex].amountPrice = newPrice
        })
      }else{
        return state
      }

    }

    case ActionTypes.INCREASE_ITEM_AMOUNT_IN_CART:{
      const itemToIncreaseIndex = state.findIndex( item => {
        return item.id == action.payload.itemToIncreaseID
      })

      const newAmount = state[itemToIncreaseIndex].amount + 1
      const newPrice = parseFloat(state[itemToIncreaseIndex].item.price.replace(',','.')) * newAmount

      return produce(state, (draft) => {
        draft[itemToIncreaseIndex].amount = newAmount,
        draft[itemToIncreaseIndex].amountPrice = newPrice   
      })
    }

    default: return state
  }

}