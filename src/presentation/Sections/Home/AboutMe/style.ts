import styled from "styled-components";
import { Images } from "assets/images";
import { Parallax, SectionMaxWidth } from "presentation/styles/shared";

export const ContainerAboutMe = styled.section`
  .about {
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
    .about__profile {
      position: relative;
      .about__line {
        position: absolute;
        top: 0;
        left: 0;
        height: 90%;
        width: 90%;
        border: 7px solid ${props => props.theme.colors.BlueLight};
        border-bottom: none;
        border-right: 0;
      }
      .about__photo {
        width: 263px;
        height: 300px;
        margin: 14px 0 0 14px;
      }
    }
    .about__texts {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .about__paragraph {
        font-size: ${props => props.theme.fontSize.Normal1};
        font-family: ${props => props.theme.fonts.Montserrat};
        color: ${props => props.theme.colors.primaryWhite};
        font-weight: 500;
        line-height: 23px;
        .about__paragraph--strong {
          font-weight: 600;
          color: ${props => props.theme.colors.BlueLight};
        }
      }
      .about__list {
        display: flex;
        align-self: flex-end;
        gap: 20px;
      }
    }
  }

  @media screen and (max-width: 760px) {
    .about__infos {
      flex-direction: column;
      .about__profile {
        width: fit-content;
      }
      .about__texts {
        row-gap: 30px;
        .about__list {
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
      width: 80%;
    }
  }
`;
