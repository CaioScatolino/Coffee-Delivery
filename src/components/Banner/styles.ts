import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2rem 0;
`

export const BannerText = styled.div`
  word-wrap: break-word;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  line-height: 1.3;

  & > p {
    width: 100%;
    margin-bottom: 4.125rem;
  }

  span {
    display: flex;
    width: 100%;

    p {
      width: 100%;
      word-wrap: break-word;
      display: flex;
      align-items: center;
      font-size: 1rem;
      gap: 6px;
    }
  }
`

export const BannerImage = styled.img`
  width: 50%;
`

export const BaseIcon = styled.div`
  color: ${(props) => props.theme.white};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99999px;
`

export const ShoppingCartSvgIcon = styled(BaseIcon)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
export const CoffeeSvgIcon = styled(BaseIcon)`
  background-color: ${(props) => props.theme.puprle};
`
export const TimerSvgIcon = styled(BaseIcon)`
  background-color: ${(props) => props.theme.yellow};
`
export const PackageSvgIcon = styled(BaseIcon)`
  background-color: ${(props) => props.theme['base-text']};
`
