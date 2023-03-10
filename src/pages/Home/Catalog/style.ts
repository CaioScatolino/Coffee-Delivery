import styled from 'styled-components'

export const CatalogContainer = styled.main`
  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    flex-wrap: wrap;

    li {
      display: flex;
      flex-direction: column;
      gap: 6px;
      width: 16rem;
      align-items: center;
      justify-content: center;
      background: red;

      h5 {
        gap: 10px;
      }
    }
  }
`

export const CoffeeItem = styled.li``
