import styled from 'styled-components'

export const CatalogContainer = styled.main`
  h1 {
    padding: 2rem 0;
    margin-bottom: 20px;
  }
  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    flex-wrap: wrap;
  }
`

export const CoffeeItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 13rem;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-card']};
  padding: 10px;
  border-radius: 0.5rem 2rem;

  img {
    margin-top: -30px;
  }

  div {
    display: flex;
    align-items: center;
    width: inherit;
    justify-content: space-around;
    flex: 1;

    form {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      input {
        background: transparent;
        width: 4rem;
        height: 2rem;
        border: 0;
        background-color: ${(props) => props.theme['base-button']};
        padding: 0.5rem;
        border-radius: 6px;
      }
    }
  }
`

export const CoffeeTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h5 {
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }
`
