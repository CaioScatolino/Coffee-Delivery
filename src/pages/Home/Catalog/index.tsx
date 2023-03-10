import { ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeeContext'
import { CatalogContainer, CoffeeItem, CoffeeTag } from './style'

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
              <img src={coffee.image} alt=""></img>
              <CoffeeTag>
                {coffee.tag[0] && <h5>{coffee.tag[0]}</h5>}

                {coffee.tag[1] && <h5>{coffee.tag[1]}</h5>}

                {coffee.tag[2] && <h5>{coffee.tag[2]}</h5>}
              </CoffeeTag>
              <h4>{coffee.title}</h4>
              <p>{coffee.description}</p>
              <div>
                <span>R$ {coffee.price}</span>
                <form action="">
                  <input type="number" />

                  <button type="submit">
                    <ShoppingCartSimple size={22} />
                  </button>
                </form>
              </div>
            </CoffeeItem>
          )
        })}
      </ul>
    </CatalogContainer>
  )
}
