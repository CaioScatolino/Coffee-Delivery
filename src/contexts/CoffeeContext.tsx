import { createContext, ReactNode } from 'react'

interface CoffeeProps {
  id: number
  image: string
  tag: string[]
  title: string
  description: string
  price: number
  qtd: number
  onCart: boolean
}
interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextType {
  CoffeeCatalog: CoffeeProps[]
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const CoffeeCatalog: CoffeeProps[] = [
    {
      id: 1,
      image: 'foto',
      tag: ['Tradicional'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      qtd: 0,
      onCart: false,
    },
    {
      id: 2,
      image: 'foto',
      tag: ['Tradicional'],
      title: 'Expresso',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      qtd: 0,
      onCart: false,
    },
  ]

  return (
    <CoffeeContext.Provider value={{ CoffeeCatalog }}>
      {children}
    </CoffeeContext.Provider>
  )
}
