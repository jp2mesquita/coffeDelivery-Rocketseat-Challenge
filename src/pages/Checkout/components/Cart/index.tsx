import { ButtonsWrapper, CartContainer, CartContent, ControlerButton, FinishOrderButton, RemoveButton } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/cartContext";


export function Cart(){

  const { cartList, removeItemFromCart, decreaseItemAmountInCart, increaseItemAmountInCart} = useContext(CartContext)

  const deliveryFee: number = cartList.length > 0 ? 3.5 : 0
  const deliveryFeeInCurrency : string = deliveryFee.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

  let cartPrice: number = 0

  cartList.length > 0 && cartList.forEach( (item) => {
    cartPrice += item.amountPrice
  })

  const cartPriceInCurrency : string = cartPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

  const finalPriceAmount : number = cartPrice + deliveryFee
  const finalPriceAmountInCurrency: string = finalPriceAmount.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

  function handleRemoveItemFromCart(itemToRemoveId: string){
    removeItemFromCart(itemToRemoveId)
  }

  function handleDecreaseItemAmountInCart(itemToDescreaseId: string){
    decreaseItemAmountInCart(itemToDescreaseId)
  }

  function handleIecreaseItemAmountInCart(itemToIncreaseId: string){
    increaseItemAmountInCart(itemToIncreaseId)
  }
  
  return (
    <CartContainer>

      {cartList.map((item) => {
        const priceAmount : string = item.amountPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

        return(
          <CartContent key={item.id}>
            <div>
              <img src={item.item.image} alt="" />
            </div>

            <div>
              <p>{item.item.id}</p>
              
              <ButtonsWrapper>
                <ControlerButton>
                  <Minus
                    id="minus" 
                    size={14} 
                    weight="bold" 
                    onClick={() => handleDecreaseItemAmountInCart(item.item.id)}
                  />
                  <span>{item.amount}</span>
                  <Plus 
                    id="minus" 
                    size={14} 
                    weight="bold"
                    onClick={() => handleIecreaseItemAmountInCart(item.item.id)}
                  />
                </ControlerButton>

                <RemoveButton onClick={() => handleRemoveItemFromCart(item.item.id) }>
                  <Trash size={16} weight='bold'/>
                  <span>Remover</span>
                </RemoveButton>

              </ButtonsWrapper>
            </div>

            <div>
              <span>{priceAmount}</span>
            </div>
          </CartContent>
        )
      })}

      <section>
        <p>Total de itens <span>{cartPriceInCurrency}</span></p>
        <p>Entrega <span>{deliveryFeeInCurrency}</span> </p>
        <p>Total <span>{finalPriceAmountInCurrency}</span> </p>
      </section>

      
      <FinishOrderButton 
          type='submit' 
          form="userDataForm">
      
          Confirmar pedido
        
      </FinishOrderButton>
      

      

    </CartContainer>
  )
}