import { ActionsContainer, AmountItemInCartIcon, HeaderContainer } from "./styles";
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import { lightTheme } from "../../styles/themes/light";

export function Header(){
  const  { cartList } = useContext(CartContext)

  const [cartIsEmpty, setCartIsEmpty] = useState<boolean>(true)

  useEffect( () => { 
    setCartIsEmpty((state) => !cartList.length )
  }, [cartList])

  const bgColor :  string = lightTheme["yellow-dark"]
  return(
    <HeaderContainer>
     
      <NavLink to={'/'} title='Home'>
        <img src={coffeeDeliveryLogo} alt="" />

      </NavLink>
     

      <ActionsContainer>
        <div>
          <MapPin size={22} weight='fill'/>
          Porto Alegre, RS
        </div>

        <NavLink to={'/checkout'} title='Shopping Cart'>
          {
            !cartIsEmpty &&
            <AmountItemInCartIcon>
            
            <span>{cartList.length}</span>
            
          </AmountItemInCartIcon>
          }
          
          <ShoppingCart size={22} weight='fill'/>
        </NavLink>

      </ActionsContainer>
    </HeaderContainer>
  )
}