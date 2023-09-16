import styled from "styled-components";
import { COLORS } from "../../../resources/colors";

const PriceWrapper = styled.div`
  max-width: 370px;
  label {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
    color: ${COLORS.textGeneral};
  }

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 32px;
    color: ${COLORS.textGeneral};
  }

  span {
    font-size: 36px;
    font-weight: 300;
    color: ${COLORS.textGeneral};
  }

  button {
    margin-top: 32px;
  }
`;

export default PriceWrapper;
