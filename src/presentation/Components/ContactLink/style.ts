import styled from "styled-components";

export const ContainerContactLink = styled.div`
  position: relative;
  .link__svg {
    padding: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      transform: scale(1.3);
    }
  }
  .link__hover {
    max-width: 200px;
    position: absolute;
    left: -55px;
    top: -60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 0;
    transition: all 0.6s;
    overflow: hidden;
    .link__hover__list {
      padding: 6px 15px;
      background-color: ${props => props.theme.colors.WhiteSecondary};
      width: 160px;
      display: flex;
      flex-direction: column;
      row-gap: 6px;
      .link__hover__list__item {
        display: flex;
        align-items: center;
        column-gap: 10px;
        cursor: pointer;
        padding: 5px 0;
        svg {
          transform: scale(1.7);
        }
        .link__item {
          color: ${props => props.theme.colors.PrimaryLight};
          font-size: ${props => props.theme.fontSize.Normal2};
          font-family: ${props => props.theme.fonts.Montserrat};
          font-weight: 600;
        }
      }
    }
    .icon__arrow__down {
      margin-top: -1px;
      transform: scale(1.2);
      path {
        fill: ${props => props.theme.colors.WhiteSecondary};
      }
    }
  }

  :hover {
    z-index: 1;
    .link__svg {
      background-color: ${props => props.theme.colors.PrimaryLight};
    }
    .link__hover {
      max-height: 170px;
      top: -100px;
      padding-bottom: 10px;
    }
  }
`;
