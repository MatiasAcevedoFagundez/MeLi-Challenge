import styled from "styled-components";
import { COLORS } from "../../../resources/colors";

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 32px;
  flex: 3;
  span {
    color: ${COLORS.textGeneral};
    font-size: 24px;
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  label {
    color: ${COLORS.textGeneral};
    font-size: 18px;
    cursor: pointer;
  }
`;

export default DescriptionWrapper;
