import {
  BannerContainer,
  BannerImage,
  BannerText,
  CoffeeSvgIcon,
  PackageSvgIcon,
  ShoppingCartSvgIcon,
  TimerSvgIcon,
} from './styles'
import bannerimage from '../../../assets/images/banner-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
// import { useContext } from 'react'
// import { CoffeeContext } from '../../../contexts/CoffeeContext'

export function Banner() {
  // const { CoffeeCatalog } = useContext(CoffeeContext)

  return (
    <BannerContainer>
      <BannerText>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora{' '}
        </p>

        <span>
          <p>
            <ShoppingCartSvgIcon>
              <ShoppingCart size={16} weight="fill" />
            </ShoppingCartSvgIcon>{' '}
            Compra simples e segura
          </p>
          <p>
            <PackageSvgIcon>
              <Package size={16} weight="fill" />
            </PackageSvgIcon>{' '}
            Embalagem mantém o café intacto
          </p>
          <p>
            <TimerSvgIcon>
              <Timer size={16} weight="fill" />
            </TimerSvgIcon>
            Entrega rápida e rastreada
          </p>
          <p>
            <CoffeeSvgIcon>
              <Coffee size={16} weight="fill" />
            </CoffeeSvgIcon>
            O café chega fresquinho até você
          </p>
        </span>
      </BannerText>

      <BannerImage src={bannerimage} />
    </BannerContainer>
  )
}
