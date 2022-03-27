import styled from "styled-components";

export const ContainerWhatsApp = styled.div`
  position: fixed;
  z-index: 2;
  right: 30px;
  bottom: 30px;
  .whatsapp__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    .whatsapp__effect {
      transform: scale(0);
      position: absolute;
      transition: all 0.3s;
      top: 0;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.GreenWhats};
      border: 3px solid ${props => props.theme.colors.GreenWhats};
      box-shadow: inset 0 0 0 2px ${props => props.theme.colors.primaryWhite};
    }
    .whatsapp__icon {
      width: 35px;
      height: 35px;
      z-index: 1;
    }
    :hover {
      .whatsapp__effect {
        transform: scale(1);
      }
    }
  }
`;
