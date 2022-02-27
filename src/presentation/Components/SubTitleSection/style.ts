import { SectionMaxWidth } from "presentation/styles/shared";
import styled from "styled-components";

export const ContainerTitleSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  ${SectionMaxWidth}
  .sub__title__line {
    background-color: ${props => props.theme.colors.primaryWhite};
    width: 60px;
  }
  .section__sub__title {
    color: ${props => props.theme.colors.primaryWhite};
    font-size: ${props => props.theme.fontSize.Normal4};
    font-family: ${props => props.theme.fonts.Archivo};
    font-family: 700;
    margin-left: 15px;
  }
`;
