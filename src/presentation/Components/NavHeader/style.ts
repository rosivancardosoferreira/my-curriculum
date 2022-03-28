import { SectionMaxWidth } from "presentation/styles/shared";
import styled from "styled-components";

interface ContainerNavHeaderProps {
  activeBackground: boolean;
}

export const ContainerNavHeader = styled.nav<ContainerNavHeaderProps>`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  width: 100%;
  overflow: hidden;
  transition: all 0.4s;
  max-height: ${props => (props.activeBackground ? "70px" : 0)};
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
      font-size: ${props => props.theme.fontSize.Normal1};
      font-family: ${props => props.theme.fonts.Archivo};
      font-weight: 500;
      color: ${props => props.theme.colors.primaryWhite};
    }
  }
`;
