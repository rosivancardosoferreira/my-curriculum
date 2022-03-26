import styled, { css } from "styled-components";

const BtnPrimary = css`
  color: ${props => props.theme.colors.primaryWhite};
  border: 1px solid ${props => props.theme.colors.primaryWhite};
  display: block;
  width: fit-content;
  font-family: ${props => props.theme.fonts.Archivo};
  font-weight: 700;
  position: relative;
  :hover {
    color: ${props => props.theme.colors.primaryBlack};
    box-shadow: inset 0 -60px 0 0 ${props => props.theme.colors.primaryWhite};
  }
`;

const BtnDefault = css`
  padding: 10px 20px;
  font-size: ${props => props.theme.fontSize.Small3};
  cursor: pointer;
  transition: all 0.4s;
`;
interface PropsContainerButton {
  typeBtn?: "primary";
}

export const ContainerButton = styled.button<PropsContainerButton>`
  ${BtnDefault};
  ${props => props.typeBtn === "primary" && BtnPrimary};
`;

export const ContainerLinkButton = styled.a<PropsContainerButton>`
  ${BtnDefault};
  ${props => props.typeBtn === "primary" && BtnPrimary};
`;
