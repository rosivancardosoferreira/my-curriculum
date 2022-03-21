import { SectionMaxWidth } from "presentation/styles/shared";
import styled from "styled-components";

export const ContainerFooter = styled.footer`
  background-color: ${props => props.theme.colors.primaryBlack};
  .footer__save {
    ${SectionMaxWidth}
    display: flex;
    margin-top: 50px;
    padding: 40px 0 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    .footer__thanks {
      font-size: ${props => props.theme.fontSize.Normal3};
      font-family: ${props => props.theme.fonts.Montserrat};
      color: ${props => props.theme.colors.primaryWhite};
      font-weight: 500;
    }

    .footer__contacts {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      .footer__contacts-item {
        display: flex;
        align-items: center;
        column-gap: 10px;
        .footer__contacts-icon {
          border-radius: 50%;
          width: 35px;
          height: 35px;
          background-color: ${props => props.theme.colors.PrimaryLight};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer__contacts-link {
          font-size: ${props => props.theme.fontSize.Normal1};
          font-family: ${props => props.theme.fonts.Archivo};
          color: ${props => props.theme.colors.primaryWhite};
          padding: 7px 0;
          :hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
    .footer__credits {
      font-size: ${props => props.theme.fontSize.Small3};
      font-family: ${props => props.theme.fonts.Archivo};
      color: ${props => props.theme.colors.primaryWhite};
      font-weight: 400;
      width: 100%;
      margin-top: 32px;
      text-align: center;
    }
  }
  @media screen and (max-width: 700px) {
    .footer__save {
      .footer__thanks,
      .footer__contacts {
        width: 100%;
      }
      .footer__thanks {
        margin-top: 40px;
      }
    }
  }
  @media screen and (min-width: 700px) {
    .footer__thanks,
    .footer__contacts {
      width: calc(50% - 16px);
    }
  }
`;
