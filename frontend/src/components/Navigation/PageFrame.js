import * as React from "react";
import { Outlet } from "react-router-dom";
import FrameContainer from "./FrameContainer";
import LoaderWrapper from "../LoaderWrapper";
import Header from "../Header";

const PageFrame = () => {
  return (
    <FrameContainer>
      <Header />
      <LoaderWrapper>
        <Outlet />
      </LoaderWrapper>
    </FrameContainer>
  );
};

export default PageFrame;
