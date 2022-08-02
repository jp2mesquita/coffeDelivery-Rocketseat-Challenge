import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { DeliveryContainer, DeliveryHeader, DeliveryResume } from "./styles";
import deliveryIllustration from '../../assets/delivery-illustration.svg'
import { BaseIcon } from "../../components/BaseIcon";
import { lightTheme } from "../../styles/themes/light";

import { useContext } from 'react'
import { CartContext } from "../../contexts/cartContext";

export function Delivery() {

  const { order } = useContext(CartContext)


  return(
    <DeliveryContainer>
      <div>
        <DeliveryHeader>
            <strong>Uhu! Pedido confirmado</strong>
            <p>Agora é só aguardar que logo o café chegará até você</p>
        </DeliveryHeader>

        <DeliveryResume>
            <div>
              <BaseIcon bgColor={lightTheme["purple"]}>
                <MapPin size={22} weight="fill" />
              </BaseIcon>
             
              <span>
                <p>Entrega em <span>{order.deliveryUserData.adress}, {order.deliveryUserData.number?.toLocaleString('pt-br')}</span></p>
                <p>{order.deliveryUserData.district} - {order.deliveryUserData.city}, {order.deliveryUserData.UF}</p>
              </span>
            </div>
            <div>
              <BaseIcon bgColor={lightTheme["yellow"]}>
                <Timer size={22} weight="fill" />
              </BaseIcon>
              
              <span>
                <p>Previsão de entrega</p>
                <p><span>20 min - 30 min</span></p>
              </span>
            </div>
            
            <div>
              <BaseIcon bgColor={lightTheme["yellow-dark"]}>
                <CurrencyDollar size={22} weight="fill" />
              </BaseIcon>
              <span>
                <p>Pagamento na entrega</p>
                <p><span>{order.paymentFormat}</span></p>
              </span>
            </div>
        </DeliveryResume>
      </div>

      <div>
        <img src={deliveryIllustration} alt="" />
      </div>

      
    </DeliveryContainer>
    
  )
}