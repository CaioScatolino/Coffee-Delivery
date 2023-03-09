import { BannerContainer, BannerImage, BannerText } from './styles'
import bannerimage from '../../assets/images/banner-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Banner() {
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
            <ShoppingCart /> Compra simples e segura
          </p>
          <p>
            <Package /> Embalagem mantém o café intacto
          </p>
        </span>
        <span>
          <p>
            <Timer />
            Entrega rápida e rastreada
          </p>
          <p>
            <Coffee /> O café chega fresquinho até você
          </p>
        </span>
      </BannerText>

      <BannerImage src={bannerimage} />
    </BannerContainer>
  )
}
