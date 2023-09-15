import styled from "styled-components";
import { COLORS } from "../../../resources/colors";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 7px;
  align-items: center;
  margin: 16px 0;

  span {
    color: ${COLORS.breadcrumbsColor};
    font-size: 14px;
  }

  img {
    opacity: 0.5;
    margin-top: 2px;
  }
`;

export default Wrapper;
