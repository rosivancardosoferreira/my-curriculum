import styled from "styled-components";
import { Images } from "assets/images";
import { Parallax } from "presentation/styles/shared";
export const ContainerBanner = styled.section`
  background-image: url(${Images.Banner.src});
  ${Parallax};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  position: relative;
  .banner__infos {
    .banner__infos__name,
    .banner__infos__dev {
      color: ${props => props.theme.colors.primaryWhite};
      text-align: center;
      font-family: ${props => props.theme.fonts.Archivo};
      transition: all 0.2s;
    }
    .banner__infos__dev {
      margin-top: 2rem;
      font-size: ${props => props.theme.fontSize.Normal3};
    }
  }

  .banner__contacts {
    display: flex;
    gap: 10px;
  }

  .icon__arrow__model2 {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    animation: animate 1s ease-in-out infinite alternate;
  }

  @keyframes animate {
    from {
      transform: translate3d(0, 60%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  @media screen and (max-width: 767px) {
    background-position: 60%;
    .banner__infos {
      .banner__infos__name {
        font-size: ${props => props.theme.fontSize.phone.ExtraLarge};
      }
    }
    .icon__arrow__model2 {
      bottom: 5.5rem;
      width: 30px;
    }
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    background-position: center;
    .banner__infos {
      .banner__infos__name {
        font-size: ${props => props.theme.fontSize.tablet.ExtraLarge};
      }
    }
    .banner__contacts {
      gap: 20px;
    }
    .icon__arrow__model2 {
      bottom: 3.5rem;
    }
  }

  @media screen and (min-width: 1440px) {
    background-position: center;
    .banner__infos {
      .banner__infos__name {
        font-size: ${props => props.theme.fontSize.desktop.ExtraLarge};
      }
      .banner__infos__dev {
        font-size: ${props => props.theme.fontSize.desktop.Normal3};
      }
    }
    .banner__contacts {
      gap: 30px;
    }
    .icon__arrow__model2 {
      bottom: 3.2rem;
    }
  }
`;
