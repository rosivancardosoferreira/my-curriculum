import styled from "styled-components";
import { Images } from "assets/images";
import { GridSection, Parallax } from "presentation/styles/shared";

export const ContainerAboutMe = styled.section`
  .about__container {
    background-image: url(${Images.About.src});
    ${Parallax};
    padding: 50px 0;
  }
  @media screen and (max-width: 767px) {
  }

  @media (min-width: 768px) and (max-width: 1439px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const AboutMeInfos = styled.article`
  ${GridSection}
  .about__infos {
    grid-column: 1 / 10;
    display: flex;
    gap: 32px;
    .about__profile__photo {
      position: relative;
      .about__infos__line {
        position: absolute;
        top: 0;
        left: 0;
        height: 90%;
        width: 90%;
        border: 7px solid ${props => props.theme.colors.BlueLight};
        border-bottom: none;
        border-right: 0;
      }
      .about__infos__photo {
        width: 263px;
        height: 300px;
        margin: 14px 0 0 14px;
      }
    }
    .about__container__text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .about__container__text__p {
        font-size: ${props => props.theme.fontSize.Normal1};
        font-family: ${props => props.theme.fonts.Montserrat};
        color: ${props => props.theme.colors.primaryWhite};
        font-weight: 500;
        line-height: 23px;
        .about__container__text__strong {
          font-weight: 600;
          color: ${props => props.theme.colors.BlueLight};
        }
      }
    }
    .list__contacts {
      display: flex;
      align-self: flex-end;
      gap: 20px;
    }
  }
`;
