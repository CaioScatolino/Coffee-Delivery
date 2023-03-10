import { createContext, ReactNode } from 'react'
import capuccino from '../assets/images/coffees/capuccino.svg'
import comleite from '../assets/images/coffees/com-leite.svg'
import expressoamericano from '../assets/images/coffees/expresso-americano.svg'
import expressocremoso from '../assets/images/coffees/expresso-cremoso.svg'
import expressogelado from '../assets/images/coffees/expresso-gelado.svg'
import expressotradicional from '../assets/images/coffees/expresso-tradicional.svg'
import latte from '../assets/images/coffees/latte.svg'
import macchiato from '../assets/images/coffees/macchiato.svg'

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
      image: expressotradicional,
      tag: ['Tradicional'],
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      qtd: 0,
      onCart: false,
    },
    {
      id: 2,
      image: expressoamericano,
      tag: ['Tradicional'],
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      qtd: 0,
      onCart: false,
    },
    {
      id: 3,
      image: expressocremoso,
      tag: ['Tradicional'],
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      qtd: 0,
      onCart: false,
    },
    {
      id: 4,
      image: expressogelado,
      tag: ['Tradicional', 'Gelado'],
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      qtd: 0,
      onCart: false,
    },
    {
      id: 5,
      image: comleite,
      tag: ['Tradicional', 'Com leite'],
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      qtd: 0,
      onCart: false,
    },
    {
      id: 6,
      image: latte,
      tag: ['Tradicional', 'Com leite'],
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      qtd: 0,
      onCart: false,
    },
    {
      id: 7,
      image: capuccino,
      tag: ['Tradicional', 'Com leite'],
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      qtd: 0,
      onCart: false,
    },
    {
      id: 8,
      image: macchiato,
      tag: ['Tradicional', 'Com leite'],
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
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
