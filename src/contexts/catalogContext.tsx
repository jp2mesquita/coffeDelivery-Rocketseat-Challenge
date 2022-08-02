import produce from "immer";
import { createContext, ReactNode, useState } from "react";
import { catalog } from '../db/db'


export interface CatalogProps{
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

interface CatalogContextType{
  listFiltered: CatalogProps[],
  activeFilters: FilterProps,
  changeActiveFilters: (tagToFilter: string) => FilterProps | void,
  catalogFilter: (tagToFilter: string) => void
}

export const CatalogContext = createContext({} as CatalogContextType)

interface CatalogContextProviderProps{
  children: ReactNode
}

export function CatalogContextProvider( {children} : CatalogContextProviderProps){

  const [listFiltered,  setListFiltered] = useState<CatalogProps[]>(catalog)
  const [activeFilters, setActiveFilters] = useState<FilterProps>(
    {
      tradicional: false,
      especial: false,
      withMilk: false,
      alcolic: false,
      iced: false,
    }
  )

  function changeActiveFilters(tagToFilter: string){

    if(tagToFilter=="Tradicional"){
      const filterUpdate =  produce(activeFilters, (draft) => {
        const newValue: boolean = !draft.tradicional
        draft.tradicional = newValue
      })
      
      setActiveFilters(filterUpdate)
      return filterUpdate
    }

    if(tagToFilter=="Especial"){
      const filterUpdate =  produce(activeFilters, (draft) => {
        const newValue: boolean = !draft.especial
        draft.especial = newValue
      })
      
      setActiveFilters(filterUpdate)
      return filterUpdate
    }

    if(tagToFilter=="Com Leite"){
      const filterUpdate =  produce(activeFilters, (draft) => {
        const newValue: boolean = !draft.withMilk
        draft.withMilk = newValue
      })
      
      setActiveFilters(filterUpdate)
      return filterUpdate
    }

    if(tagToFilter=="Alcoolico"){
      const filterUpdate =  produce(activeFilters, (draft) => {
        const newValue: boolean = !draft.alcolic
        draft.alcolic = newValue
      })
      
      setActiveFilters(filterUpdate)
      return filterUpdate
    }
    
    if(tagToFilter=="Gelado"){
      const filterUpdate =  produce(activeFilters, (draft) => {
        const newValue: boolean = !draft.iced
        draft.iced = newValue
      })
      
      setActiveFilters(filterUpdate)
      return filterUpdate
    }
  }

  function listFilter(tagToFilter : string, notFilters: CatalogProps[]){
    const filtered = notFilters.filter(item => {
      return item.tags.includes(tagToFilter)
    })
    return filtered
  }


  function catalogFilter( tagToFilter: string ){
    const actives : FilterProps | any = changeActiveFilters(tagToFilter)

    let notFilters: CatalogProps[] = catalog

    let count = 0
    
    if(actives.tradicional){
      const filtered = listFilter("Tradicional", notFilters)
      if(filtered){
        count++
      }
      notFilters = filtered
    }

    if(actives.especial){
      const filtered = listFilter("Especial", notFilters)
      if(filtered){
        count++
      }
      notFilters = filtered
    }

    if(actives.withMilk){
      const filtered = listFilter("Com Leite", notFilters)
      if(filtered){
        count++
      }
      notFilters = filtered
    }

    if(actives.alcolic){
      const filtered = listFilter("Alcoolico", notFilters)
      if(filtered){
        count++
      }
      notFilters = filtered
    }

    if(actives.iced){
      const filtered = listFilter("Gelado", notFilters)
      if(filtered){
        count++
      }
      notFilters = filtered
    }
    
    if(count>0){
      setListFiltered(notFilters)      
    }else{
      setListFiltered(catalog)
    }
  }

  return(
    <CatalogContext.Provider value={{
      changeActiveFilters,
      catalogFilter,
      listFiltered,
      activeFilters,
    }}>

      { children }

    </CatalogContext.Provider>
  )
}