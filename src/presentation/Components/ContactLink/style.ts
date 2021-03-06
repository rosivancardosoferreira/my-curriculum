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
  .contact {
    max-width: 200px;
    position: absolute;
    left: -55px;
    top: -80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 0;
    transform: scale(0);
    transition: all 0.5s;
    overflow: hidden;
    border: 1px solid transparent;
    .contact__list {
      padding: 6px 15px;
      background-color: ${props => props.theme.colors.WhiteSecondary};
      width: 160px;
      display: flex;
      flex-direction: column;
      row-gap: 6px;
      .contact__item {
        display: flex;
        align-items: center;
        column-gap: 10px;
        padding: 5px 0;
        svg {
          transform: scale(1.7);
        }
        .contact__link {
          color: ${props => props.theme.colors.PrimaryLight};
          font-size: ${props => props.theme.fontSize.Normal2};
          font-family: ${props => props.theme.fonts.Montserrat};
          font-weight: 600;
          border: none;
          background-color: transparent;
        }
        .contact__link--cursor {
          cursor: pointer;
        }
        .contact__link--copy {
          cursor: copy;
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
    .contact {
      max-height: 170px;
      top: -100px;
      padding-bottom: 10px;
      transform: scale(1);
    }
  }
`;
