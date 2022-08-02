import { Cart } from "./components/Cart";
import { DeliveryDataForm } from "./components/DeliveryDataForm";
import { CheckoutContainer } from "./styles";



export function Checkout(){

  return(
    <CheckoutContainer>
      <div>
        Complete o seu pedido
        <DeliveryDataForm />
        
      </div>
      <div>
        Cafés Selecionados
        <Cart />
      </div>
    </CheckoutContainer>
  )
}