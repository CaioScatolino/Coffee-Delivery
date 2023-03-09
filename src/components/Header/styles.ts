import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  nav {
    display: flex;
    gap: 0.875rem;
    align-items: center;

    div {
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme['puprle-light']};
      padding: 0.5rem;
      border-radius: 6px;

      span {
        color: ${(props) => props.theme.puprle};
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    a {
      width: 2.5rem;
      height: 2.5rem;
      background: ${(props) => props.theme['yellow-light']};
      padding: 0.5rem;
      border-radius: 6px;
      color: ${(props) => props.theme['yellow-dark']};
      font-weight: bold;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
