import styled from "styled-components";
import { Parallax, SectionMaxWidth } from "presentation/styles/shared";
import { Images } from "assets/images";

export const ContainerExperience = styled.section`
  background-image: url(${Images.Experience.src});
  ${Parallax};
  padding: 90px 0;
  background-color: white;
  display: none;

  .fixed {
    position: fixed;
    border: 1px solid red;
    top: 0;
    width: 100%;
    z-index: 0;
  }
  .experience__container {
    ${SectionMaxWidth}
    display: flex;
    justify-content: space-around;

    .experience__box {
      display: flex;
      flex-direction: column;
      align-items: center;
      .experience__box__number,
      .experience__box__description {
        color: ${props => props.theme.colors.WhiteSecondary};
        font-family: ${props => props.theme.fonts.Archivo};
      }
      .experience__box__number {
        font-size: ${props => props.theme.fontSize.Large};
      }
      .experience__box__description {
        font-size: ${props => props.theme.fontSize.Normal4};
        margin-top: 20px;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
`;
