import produce from "immer";
import { createContext, ReactNode, useState } from "react";
import { catalog } from '../db/db'
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

interface CatalogContextType{
  listFiltered: CatalogProps[],
  activeFilters: FilterProps,
  changeActiveFilters: (tagToFilter: string) => FilterProps | void,
  filterList: (tagToFilter: string) => void
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


  function catalogFilter(notFilters: any[], tagToFilter : string){
    const filteredList = notFilters.reduce(function (prev, curr){
      const tradicionalOrNot = curr.tags.includes(tagToFilter) ? 'filtered' : 'notFiltered'

      prev[tradicionalOrNot].push(curr);
      return prev
    },{ filtered: []  , notFiltered: [] })

    return filteredList
  }

  function filterList( tagToFilter: string ){
    const actives : FilterProps | any = changeActiveFilters(tagToFilter)

    let filters: any[] = []
    let notFilters: CatalogProps[] = catalog

    let count = 0

    console.log(activeFilters)
    
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


  return(
    <CatalogContext.Provider value={{
      changeActiveFilters,
      filterList,
      listFiltered,
      activeFilters,
    }}>

      { children }

    </CatalogContext.Provider>
  )
}