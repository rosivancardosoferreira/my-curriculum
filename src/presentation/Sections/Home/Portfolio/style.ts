import { SectionMaxWidth } from "presentation/styles/shared";
import styled from "styled-components";

export const ContainerPortfolio = styled.section``;

export const MapPortfolio = styled.section`
  ${SectionMaxWidth}
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 40px;
  .portfolio {
    flex-direction: column;
    display: flex;
    border: 1px solid ${props => props.theme.colors.GrayTertiary};
    .portfolio__image {
      position: relative;
      .portfolio__picture {
        width: 100%;
        height: 100%;
      }
      .portfolio__hidden {
        transform: scale(0);
        transition: all 0.4s;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        row-gap: 20px;
        justify-content: center;
        background: rgba(0, 0, 0, 0.8);
        .portfolio__internal {
          color: ${props => props.theme.colors.WhiteSecondary};
          font-family: ${props => props.theme.fonts.Archivo};
          font-size: ${props => props.theme.fontSize.Normal2};
        }
      }
      :hover {
        .portfolio__hidden {
          transform: scale(1);
        }
      }
    }
    .portfolio__image--mobile {
      border-bottom: 1px solid ${props => props.theme.colors.GrayTertiary};
      padding: 28px 0;
      display: flex;
      justify-content: center;
      column-gap: 28px;
      .portfolio__picture--mobile {
        height: 318px;
        width: 156px;
        :first-child {
          z-index: 1;
        }
      }
    }
    .portfolio__infos {
      flex-direction: column;
      display: flex;
      row-gap: 20px;
      padding: 0 20px;
      margin-top: 20px;
      .portfolio__techs {
        display: flex;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 12px;
        .styled {
          background: linear-gradient(
            180deg,
            #efac68 0%,
            #ed9a45 0.01%,
            #e79479 44.79%,
            #de788d 77.6%
          ) !important;
        }
      }
      .portfolio__title {
        font-size: ${props => props.theme.fontSize.Normal3};
        font-family: ${props => props.theme.fonts.Archivo};
        color: ${props => props.theme.colors.primaryWhite};
        font-weight: 500;
      }
      .portfolio__description {
        font-size: ${props => props.theme.fontSize.Normal1};
        font-family: ${props => props.theme.fonts.Montserrat};
        color: ${props => props.theme.colors.WhiteTertiary};
      }
    }
    .portfolio__created {
      padding: 20px 20px 10px 20px;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: flex-end;
      .portfolio__datas {
        display: flex;
        justify-content: space-between;
        .portfolio__calendar {
          display: flex;
          column-gap: 10px;
        }
        .portfolio__date {
          font-size: ${props => props.theme.fontSize.Small2};
          font-family: ${props => props.theme.fonts.Montserrat};
          color: ${props => props.theme.colors.WhiteTertiary};
        }
        .portfolio__github {
          display: flex;
          gap: 5px;
          align-items: center;
          .icon__github {
            width: 16px;
            height: 17px;
          }
          .item__on {
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 6px;
            background-color: ${props => props.theme.colors.GreenNeon};
          }
        }
      }
    }
  }
  @media screen and (max-width: 830px) {
    .portfolio {
      width: 100%;
    }
  }
  @media screen and (min-width: 831px) {
    .portfolio {
      width: calc(50% - 20px);
    }
  }
`;

interface PropsTechs {
  BgColor: string;
  ftColor: string;
}
export const Tech = styled.strong<PropsTechs>`
  padding: 5px 10px;
  background-color: ${props => props.BgColor};
  color: ${props => props.ftColor};
  font-family: ${props => props.theme.fonts.Archivo};
  font-size: ${props => props.theme.fontSize.Small3};
`;
