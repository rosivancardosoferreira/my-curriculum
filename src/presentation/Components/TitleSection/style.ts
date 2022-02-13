import styled from "styled-components";

export const ContainerTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  .title__line {
    background-color: ${props => props.theme.colors.primaryWhite};
    height: 100px;
    width: 2px;
  }
  .section__title {
    color: ${props => props.theme.colors.primaryWhite};
    font-size: ${props => props.theme.fontSize.Normal4};
    font-family: ${props => props.theme.fonts.Archivo};
    font-family: 700;
    margin-top: 15px;
  }
`;
