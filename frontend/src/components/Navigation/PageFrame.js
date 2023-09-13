import * as React from "react";
import { Outlet } from "react-router-dom";
import { FrameContainer } from "./FrameContainer";

export const PageFrame = () => {
  return (
    <FrameContainer>
      {/* TODO: Aca va a ir el buscador */}
        <Outlet />
    </FrameContainer>
  );
};
