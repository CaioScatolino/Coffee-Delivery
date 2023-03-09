import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeeContext'
import { CatalogContainer, CoffeeItem } from './style'

export function Catalog() {
  const { CoffeeCatalog } = useContext(CoffeeContext)

  console.log(CoffeeCatalog)
  return (
    <CatalogContainer>
      <h1>Nossos cafés</h1>
      <ul>
        {CoffeeCatalog.map((coffee) => {
          return <CoffeeItem key={coffee.id}>{coffee.title}</CoffeeItem>
        })}
      </ul>
    </CatalogContainer>
  )
}
