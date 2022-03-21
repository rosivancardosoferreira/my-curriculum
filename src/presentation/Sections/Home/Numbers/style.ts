import styled from "styled-components";
import { SectionMaxWidth } from "presentation/styles/shared";
import { Images } from "assets/images";

export const ContainerNumber = styled.section`
  background-image: url(${Images.Infos.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 90px 0;
  .number__article {
    ${SectionMaxWidth}
    display: flex;
    justify-content: space-around;

    .number__infos {
      .number__title,
      .number__description {
        text-align: center;
        font-family: ${props => props.theme.fonts.Archivo};
        color: ${props => props.theme.colors.primaryWhite};
        transition: all 0.2s;
      }
      .number__title {
        font-weight: 500;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 70px 0;
    background-position: top;
    .number__article {
      flex-direction: column;
      gap: 4.5rem;
      .number__infos {
        .number__title {
          font-size: ${props => props.theme.fontSize.Large00};
        }
        .number__description {
          font-size: ${props => props.theme.fontSize.Normal3};
        }
      }
    }
  }

  @media screen and (min-width: 769px) {
    .number__article .number__infos {
      .number__title {
        font-size: ${props => props.theme.fontSize.Large};
      }
      .number__description {
        font-size: ${props => props.theme.fontSize.Normal4};
      }
    }
  }
`;
