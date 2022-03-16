import styled from "styled-components";
import { SectionMaxWidth } from "presentation/styles/shared";
import { Images } from "assets/images";

export const ContainerNumber = styled.section`
  background-image: url(${Images.Infos.src});
  background-size: cover;
  background-repeat: no-repeat;
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
      }
      .number__title {
        font-size: ${props => props.theme.fontSize.Large};
        font-weight: 500;
      }
      .number__description {
        font-size: ${props => props.theme.fontSize.Normal4};
      }
    }
  }
`;
