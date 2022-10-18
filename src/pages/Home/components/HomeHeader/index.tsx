import { AtributesList, HeaderContainer, Subtilte, TextContainer, Title } from "./styles";
import coffeeCup from '../../../../assets/coffee-cup.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { BaseIcon} from "../../../../components/BaseIcon";
import { lightTheme } from "../../../../styles/themes/light";

export function HomeHeader(){
  return (
    <HeaderContainer>
      <TextContainer>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Subtilte>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </Subtilte>

        <AtributesList>
          <ul>
              <li>
                <BaseIcon bgColor={lightTheme["purple-dark"]}>
                  <ShoppingCart size={16} weight='fill'/>
                </BaseIcon>
                Compra simples e segura
              </li>

              <li>
                <BaseIcon bgColor={lightTheme["yellow"]}>
                  <Timer size={16} weight="fill" />
                </BaseIcon>
                Entrega rápida e rastreada
              </li>
          </ul>

          <div>
            <img src={coffeeCup} alt="" />
          </div>

          <ul>
            <li>
            <BaseIcon bgColor={lightTheme["base-text"]}>
                <Package size={16} weight="fill" />
              </BaseIcon>
              Embalagem mantém o café intácto
            </li>

            <li>
            <BaseIcon bgColor={lightTheme["purple"]}>
                <Coffee size={16} weight='fill'/>
            </BaseIcon>
              O Café chega fresquinho até você
            </li>

          </ul>

        </AtributesList>
      </TextContainer>

      <div>
       <img src={coffeeCup} alt="" />
      </div>

    </HeaderContainer>
  )
}