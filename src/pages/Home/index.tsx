
import { CoffeeCard } from "./components/CoffeeCard";
import { HomeHeader } from "./components/HomeHeader";
import { BaseButton, CardWrapper, CatalogContainer, FilterButtons, HomeContainer, Title } from "./styles";
import { catalog } from "../../db/db";
import { useState } from "react";


interface CatalogProps{
  id: string,
  description: string,
  price: string,
  image: string,
  tags: string,
}

export interface FilterProps{
  tradicional: boolean,
  especial: boolean,
  withMilk: boolean,
  alcolic: boolean,
  iced: boolean,
}

export function Home() {

  
  const [catalogList, setCatalogList] = useState<CatalogProps[]>(catalog)

  const [activeFilters, setActiveFilters] = useState<FilterProps>(
    {
      tradicional: false,
      especial: false,
      withMilk: false,
      alcolic: false,
      iced: false,
    }
  )

  const [listFiltered,  setListFiltered] = useState<CatalogProps[]>(catalog)



  function changeActiveFilters(tagToFilter: string){

    if(tagToFilter=="Tradicional"){
      // const changeFilterProp =  !activeFilters.tradicional
      // setActiveFilters({...activeFilters, ...changeFilterProp})

    const aux: FilterProps = {
      tradicional: !activeFilters.tradicional,
      especial: activeFilters.especial,
      withMilk: activeFilters.withMilk,
      alcolic: activeFilters.alcolic,
      iced: activeFilters.iced,
    }
      setActiveFilters(aux)
      
      return aux
    }

    if(tagToFilter=="Especial"){
      // const changeFilterProp = {especial : !activeFilters.especial}
      // setActiveFilters({...activeFilters, ...changeFilterProp})
      const aux: FilterProps = {
        tradicional: activeFilters.tradicional,
        especial: !activeFilters.especial,
        withMilk: activeFilters.withMilk,
        alcolic: activeFilters.alcolic,
        iced: activeFilters.iced,
      }
        setActiveFilters(aux)
        
        return aux
    }
    if(tagToFilter=="Com Leite"){
      // const changeFilterProp = {withMilk : !activeFilters.withMilk}
      // setActiveFilters({...activeFilters, ...changeFilterProp})
      const aux: FilterProps = {
        tradicional: activeFilters.tradicional,
        especial: activeFilters.especial,
        withMilk: !activeFilters.withMilk,
        alcolic: activeFilters.alcolic,
        iced: activeFilters.iced,
      }
        setActiveFilters(aux)
        
        return aux
    }
    if(tagToFilter=="Alcoolico"){
      // const changeFilterProp = {alcolic : !activeFilters.alcolic}
      // setActiveFilters({...activeFilters, ...changeFilterProp})
      const aux: FilterProps = {
        tradicional: activeFilters.tradicional,
        especial: activeFilters.especial,
        withMilk: activeFilters.withMilk,
        alcolic: !activeFilters.alcolic,
        iced: activeFilters.iced,
      }
        setActiveFilters(aux)
        
        return aux

    }
    if(tagToFilter=="Gelado"){
      // const changeFilterProp = {iced : !activeFilters.iced}
      // setActiveFilters({...activeFilters, ...changeFilterProp})
      const aux: FilterProps = {
        tradicional: activeFilters.tradicional,
        especial: activeFilters.especial,
        withMilk: activeFilters.withMilk,
        alcolic: activeFilters.alcolic,
        iced: !activeFilters.iced,
      }
        setActiveFilters(aux)
        
        return aux

    }

  }

  function catalogFilter(notFilters: any[], tagToFilter : string){
    const filteredList = notFilters.reduce(function (prev, curr){
      const tradicionalOrNot = curr.tags.includes(tagToFilter) ? 'filtered' : 'notFiltered'

      prev[tradicionalOrNot].push(curr);
      return prev
    },{ filtered: []  , notFiltered: [] })


    return filteredList
  }


  function handleFilter( tagToFilter: string){
    const actives : FilterProps | any = changeActiveFilters(tagToFilter)
    
    let filters: any[] = []
    let notFilters: CatalogProps[] = catalog

    let count = 0
    
    if(actives.tradicional){
      
      const aux = catalogFilter(notFilters, "Tradicional")

      if(aux.filtered.length > 0){
        // filters = []
        filters.push(aux.filtered)
        count++
      }
      notFilters = aux.notFiltered
 
    }

    if(actives.especial){

      const aux = catalogFilter(notFilters, "Especial")

      if(aux.filtered.length > 0){
        // filters = []
        filters.push(aux.filtered)
        count++
      }
      notFilters = aux.notFiltered
      
    }

    if(actives.withMilk){

      const aux = catalogFilter(notFilters, "Com Leite")

      if(aux.filtered.length > 0){
        // filters = []
        filters.push(aux.filtered)
        count++
      }
      notFilters = aux.notFiltered
    }

    if(actives.alcolic){

      const aux = catalogFilter(notFilters, "Alcoolico")
  
      if(aux.filtered.length > 0){
        // filters = []
        filters.push(aux.filtered)
        count++
      }
      notFilters = aux.notFiltered
    
    }

    if(actives.iced){

      const aux = catalogFilter(notFilters, "Gelado")

      if(aux.filtered.length > 0){
        // filters = []
        filters.push(aux.filtered)
        count++
      }
      notFilters = aux.notFiltered
     
    }

    if(count>0){
      const catalogFiltered : CatalogProps[] = []
      filters.forEach(element => {
        catalogFiltered.push(...element)
      });
      setListFiltered(catalogFiltered)      
    }else{
      setListFiltered(catalog)
    }

   
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
