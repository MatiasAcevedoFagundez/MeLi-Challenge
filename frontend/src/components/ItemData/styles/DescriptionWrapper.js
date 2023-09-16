import styled from "styled-components";
import { COLORS } from "../../../resources/colors";

const DescriptionWrapper = styled.div`
  margin-bottom: 32px;

  h2 {
    margin-bottom: 32px;
    font-size: 28px;
    font-weight: 400;
    color: ${COLORS.textGeneral};
  }

  span {
    font-size: 16px;
    color: ${COLORS.breadcrumbsColor};
    width: 80%;
    display: flex;
  }
`;

export default DescriptionWrapper;
