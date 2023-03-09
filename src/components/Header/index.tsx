import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import coffeeLogo from '../../assets/images/coffee-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={coffeeLogo} alt="" />
      </span>
      <nav>
        <div>
          <span>
            <MapPin size={22} weight="fill" />
          </span>{' '}
          Paraisópolis, MG
        </div>

        <NavLink to={'/checkout'}>
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
