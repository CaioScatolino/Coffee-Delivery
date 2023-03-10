import { ShoppingCartSimple } from 'phosphor-react'
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
          return (
            <CoffeeItem key={coffee.id}>
              <p>{coffee.image}</p>
              <h5>
                {coffee.tag[0]} {coffee.tag[1]} {coffee.tag[2]}
              </h5>
              <h4>{coffee.title}</h4>
              <p>{coffee.description}</p>
              <div>
                <span>R$ {coffee.price}</span>
                <input type="number" />
                <button type="submit">
                  <ShoppingCartSimple size={22} />
                </button>
              </div>
            </CoffeeItem>
          )
        })}
      </ul>
    </CatalogContainer>
  )
}
