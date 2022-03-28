import { SectionMaxWidth } from "presentation/styles/shared";
import styled from "styled-components";

interface ContainerNavHeaderProps {
  activeBackground: boolean;
  sandwich: boolean;
}

export const ContainerNavHeader = styled.nav<ContainerNavHeaderProps>`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: ${props => props.theme.colors.Primary};
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
    z-index: 1;
    ${SectionMaxWidth};
    padding: 20px;
    .header__link {
      font-family: ${props => props.theme.fonts.Archivo};
      font-weight: 500;
      color: ${props => props.theme.colors.primaryWhite};
    }
  }

  @media screen and (max-width: 768px) {
    .header {
      position: fixed;
      top: 0;
      height: 100vh;
      overflow: hidden !important;
      right: ${props => (props.sandwich ? "0" : "-100vw")};
      background-color: ${props => props.theme.colors.Primary};
      transition: all 0.4s;
      row-gap: 30px;
      flex-direction: column;
      .header__link {
        font-size: ${props => props.theme.fontSize.Normal2};
      }
    }
  }

  @media screen and (min-width: 769px) {
    overflow: hidden;
    transition: all 0.4s;
    max-height: ${props => (props.activeBackground ? "70px" : 0)};
    .header__link {
      font-size: ${props => props.theme.fontSize.Normal1};
    }
  }
`;
