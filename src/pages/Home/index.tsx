import { Banner } from './Banner'
import { Catalog } from './Catalog'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Catalog />
    </HomeContainer>
  )
}
