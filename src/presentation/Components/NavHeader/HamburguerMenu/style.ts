import styled from "styled-components";

export const ContainerHamburguerMenu = styled.div`
  width: 24px;
  display: block;
  z-index: 3;
  position: inherit;
  position: fixed;
  right: 32px;
  top: 40px;
  .header__menu {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
    transform: all 0.5s ease-in-out;
    box-sizing: border-box;
    .header__menu_burger,
    .header__menu_burger::before,
    .header__menu_burger::after {
      background-color: ${props => props.theme.colors.WhiteSecondary};
      transition: all 0.5s ease-in-out;
      height: 2px;
    }

    .header__menu_burger {
      width: 20px;
      margin-right: 3px;
    }

    .header__menu_burger::before,
    .header__menu_burger::after {
      background-color: ${props => props.theme.colors.WhiteSecondary};
      content: "";
      right: 3px;
      position: absolute;
      width: 20px;
    }
    .header__menu_burger::before {
      transform: translateY(-7px);
    }

    .header__menu_burger::after {
      transform: translateY(7px);
    }
  }

  .header__menu.header__open .header__menu_burger {
    transform: translateX(-50px);
    background-color: transparent;
    box-shadow: none;
  }

  .header__menu.header__open .header__menu_burger::before {
    transform: rotate(45deg) translate(35px, -35px);
    right: 0;
  }

  .header__menu.header__open .header__menu_burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
    right: 0;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
