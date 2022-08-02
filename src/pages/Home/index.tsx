
import { CoffeeCard } from "./components/CoffeeCard";
import { HomeHeader } from "./components/HomeHeader";
import { BaseButton, CardWrapper, CatalogContainer, FilterButtons, HomeContainer, Title } from "./styles";
import { catalog } from "../../db/db";
import { useContext, useState } from "react";
import { produce }  from 'immer'
import { CatalogContext, CatalogProps } from "../../contexts/catalogContext";




export function Home() {

  const { changeActiveFilters, filterList, activeFilters, listFiltered } = useContext(CatalogContext)
  const [catalogList, setCatalogList] = useState<CatalogProps[]>(catalog)

  function handleFilter( tagToFilter: string){
    filterList(tagToFilter)
  }


  return (
    <HomeContainer>
      <HomeHeader/>
      

      <CatalogContainer>
        <div>
          <Title>
            Nossos Cafés
          </Title>

          <FilterButtons>
            <BaseButton 
              onClick={() => {handleFilter("Tradicional")}}
              active={activeFilters.tradicional}
            >
              Tradicional
            </BaseButton>
            <BaseButton 
              onClick={() => {handleFilter("Especial")}}
              active={activeFilters.especial}
            >
              Especial
            </BaseButton >
            <BaseButton 
              onClick={() => {handleFilter("Com Leite")}}
              active={activeFilters.withMilk}
            >
              Com Leite
            </BaseButton>
            <BaseButton 
              onClick={() => {handleFilter("Alcoolico")}}
              active={activeFilters.alcolic}
            >
              Alcoólico
            </BaseButton>
            <BaseButton 
              onClick={() => {handleFilter("Gelado")}}
              active={activeFilters.iced}
            >
              Gelado
            </BaseButton>

          </FilterButtons>
        </div>

        <CardWrapper>

          {listFiltered.map(item => {
            return (
              <CoffeeCard 
                key={item.id}
                id={item.id}
                description={item.description} 
                price={item.price}
                image={item.image}
                tags={item.tags}
              />
            )
          })}

        </CardWrapper>
      </CatalogContainer>
    </HomeContainer>
  )
}
