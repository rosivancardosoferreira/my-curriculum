import { SectionMaxWidth } from "presentation/styles/shared";
import styled from "styled-components";

export const ContainerSkills = styled.section``;

export const ContainerMapSkills = styled.div`
  ${SectionMaxWidth}
  display: flex;
  flex-wrap: wrap;
  .skill__item {
    border: 1px solid ${props => props.theme.colors.GrayTertiary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    height: 225px;
    margin: 0 -1px -1px 0;
    /* * {
      transition: transform 1s;
      transform-style: preserve-3d;
    } */
    .skill__name {
      margin-top: 30px;
      font-family: ${props => props.theme.fonts.Archivo};
      font-size: ${props => props.theme.fontSize.Normal3};
      color: ${props => props.theme.colors.WhiteSecondary};
      text-align: center;
      padding: 0 10px;
    }
    .skill__icon {
      width: 90px;
      height: 90px;
      transition: transform 1s;
      transform-style: preserve-3d;
    }
    :hover {
      .skill__icon {
        transform: rotateY(360deg) !important;
      }
    }
  }

  @media screen and (max-width: 830px) {
    .skill__item {
      width: 50%;
      height: 200px;
    }
  }

  @media (min-width: 831px) and (max-width: 1109px) {
    .skill__item {
      width: 25%;
    }
  }

  @media (min-width: 1110px) and (max-width: 1284px) {
    .skill__item {
      width: 20%;
    }
  }

  @media screen and (min-width: 1285px) {
    .skill__item {
      width: 16.666666667%;
    }
  }
`;
