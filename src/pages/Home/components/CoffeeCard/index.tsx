import { AddToCartButton, ButtonControler, Card, CoffeeImage, Price, Prop, Properties } from "./styles";
import expresso from '../../../../assets/coffee-options/expresso.svg'
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { MouseEventHandler, useContext, useState } from "react";
import { CartContext } from "../../../../contexts/cartContext";

interface CoffeeCardProps{
  id: string;
  description: string;
  price: string;
  image: string;
  tags: string;
}


export function CoffeeCard({id, description, price, image, tags} : CoffeeCardProps) {

  const { addItemToCart } = useContext(CartContext)
  const [ itemAmount, setItemAmount ] = useState(1)

  const splitTags = tags.split(' - ')
  
  function handleAddAmount(){
   
    setItemAmount((state) => {
      return state + 1
    })

  }


  function handleSubtractAmount(){
    if(itemAmount > 1){
      setItemAmount((state) => {
        return state - 1
      })
    }
  }
  
  function handleAddItemToCart(){
    const itemToAdd: CoffeeCardProps = {
      id: id,
      description: description,
      price: price,
      image: image,
      tags: tags,
    }
    addItemToCart(itemToAdd, itemAmount)
    setItemAmount(1)
  }

  return(
    <Card>
      <CoffeeImage>
        <img src={image} alt="" />
      </CoffeeImage>
      
      
      <Properties>
        {
          splitTags.map((tag) =>
            {
            return(
              <Prop key={tag}>
                {tag}
              </Prop>
            )
          })
        }
      </Properties>
  

      <div>
        <strong>
          {id}
        </strong>
        <p>
          {description}
        </p>
      </div>

      <div>
        <Price>
          R$ <span>{price}</span>
        </Price>

        <ButtonControler>
          <span>
           <Minus size={14} weight='bold' onClick={handleSubtractAmount}/>
          </span>
          
            <div>{itemAmount}</div>
          <span>
          <Plus size={14} weight='bold' onClick={handleAddAmount} />
          </span>
          
        </ButtonControler>

        <AddToCartButton onClick={handleAddItemToCart}>
          <ShoppingCartSimple size={22} weight='fill'/>
        </AddToCartButton>
      </div>
    </Card>
  )
} 