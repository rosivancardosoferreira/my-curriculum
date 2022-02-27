import { SectionMaxWidth } from "presentation/styles/shared";
import styled from "styled-components";

export const ContainerSkills = styled.section``;

export const ContainerMapSkills = styled.div`
  ${SectionMaxWidth}
  display: flex;
  flex-wrap: wrap;
  display: none;
  .skill__item {
    border: 1px solid ${props => props.theme.colors.GrayTertiary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    height: 243px;
    margin: 0 -1px -1px 0;
    .skill__name {
      margin-top: 30px;
      font-family: ${props => props.theme.fonts.Archivo};
      font-size: ${props => props.theme.fontSize.Normal3};
      color: ${props => props.theme.colors.WhiteSecondary};
    }
    .skill__icon {
      width: 90px;
      height: 90px;
    }
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1024px) {
    .skill__item {
      width: 16.666666667%;
    }
  }
`;
