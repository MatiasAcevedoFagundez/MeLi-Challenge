import styled from "styled-components";
import { COLORS } from "../../../resources/colors";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 35px;
  background: ${COLORS.brandYellow};
  padding: 10px 0;

  form {
    margin: 0px 150px;
    display: flex;
  }
`;

export default HeaderWrapper;
