import styled from "styled-components";
import { Images } from "assets/images";
import { Parallax, SectionMaxWidth } from "presentation/styles/shared";

export const ContainerAboutMe = styled.section`
  /* display: none; */

  .about__container {
    background-image: url(${Images.About.src});
    ${Parallax};
    padding: 50px 0;
  }
`;

export const AboutMeInfos = styled.article`
  ${SectionMaxWidth}
  .about__infos {
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
      .list__contacts {
        display: flex;
        align-self: flex-end;
        gap: 20px;
      }
    }
  }

  @media screen and (max-width: 760px) {
    .about__infos {
      flex-direction: column;
      .about__profile__photo {
        width: fit-content;
      }
      .about__container__text {
        row-gap: 30px;

        .list__contacts {
          margin-right: 6vw;
        }
      }
    }
  }

  @media (min-width: 761px) and (max-width: 1109px) {
    .about__infos {
      width: 95%;
    }
  }

  @media (min-width: 1110px) and (max-width: 1299px) {
    .about__infos {
      width: 80%;
    }
  }

  @media screen and (min-width: 1300px) {
    .about__infos {
      width: 75%;
    }
  }
`;
