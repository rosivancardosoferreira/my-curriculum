import { SectionMaxWidth } from "presentation/styles/shared";
import styled from "styled-components";

export const ContainerTitleSection = styled.div`
  ${SectionMaxWidth}
  display: flex;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 50px;
  .subtitle__line {
    background-color: ${props => props.theme.colors.primaryWhite};
    width: 60px;
  }
  .subtitle__title {
    color: ${props => props.theme.colors.primaryWhite};
    font-size: ${props => props.theme.fontSize.Normal4};
    font-family: ${props => props.theme.fonts.Archivo};
    font-family: 700;
    margin-left: 15px;
  }
`;
