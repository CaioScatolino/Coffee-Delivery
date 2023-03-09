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

  p {
    margin-bottom: 4.125rem;
  }

  span {
    display: flex;
    width: 100%;
    gap: 1rem;

    p {
      word-wrap: break-word;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 0.875rem;

      svg {
        color: ${props => props.theme['yellow-dark']};
      }
    }
  }
`

export const BannerImage = styled.img`
  width: 50%;
`
