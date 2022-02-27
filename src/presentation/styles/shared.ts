import { css } from "styled-components";

export const GridSection = css`
  @media screen and (min-width: 0) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding-left: 32px;
    padding-right: 32px;
    column-gap: 16px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: ${props => props.theme.size.maxWidthTablet};
    column-gap: 32px;
  }

  @media screen and (min-width: 1024px) {
    max-width: ${props => props.theme.size.maxWidthDesktop};
    grid-template-columns: repeat(12, 1fr);
    padding-left: 72px;
    padding-right: 72px;
  }
`;

export const SectionMaxWidth = css`
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 0) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1024px) {
    max-width: ${props => props.theme.size.maxWidthDesktop};
    padding-left: 72px;
    padding-right: 72px;
  }
`;
