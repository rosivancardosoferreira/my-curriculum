import { SectionMaxWidth } from "presentation/styles/shared";
import styled from "styled-components";

interface PropsContainerSimpleAlert {
  open: boolean;
}

export const ContainerSimpleAlert = styled.div<PropsContainerSimpleAlert>`
  ${SectionMaxWidth}
  position: fixed;
  width: 100%;
  bottom: ${props => (props.open ? "20px" : "-50px")};
  z-index: 2;
  transition: all 0.3s;
  .simplealert__article {
    background-color: ${props => props.theme.colors.BlueLigh02};
    padding: 10px 30px;
    border-radius: 10px;
    width: fit-content;
    .simplealert__text {
      font-size: ${props => props.theme.fontSize.Normal1};
      font-family: ${props => props.theme.fonts.Archivo};
      font-weight: 500;
      color: ${props => props.theme.colors.Primary};
    }
  }
`;
