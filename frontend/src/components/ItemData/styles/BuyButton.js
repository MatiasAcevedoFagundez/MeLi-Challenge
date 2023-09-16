import styled from "styled-components";
import { COLORS } from "../../../resources/colors";

const BuyButton = styled.button`
  background-color: ${COLORS.buttonBlue};
  border-radius: 6px;
  display: inline-block;
  font-family: Proxima Nova, -apple-system, Roboto, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  padding: 0 24px;
  text-align: center;
  border-color: transparent;
  color: ${COLORS.cardBackground};
  width: 100%;
  cursor: pointer;
`;

export default BuyButton;
