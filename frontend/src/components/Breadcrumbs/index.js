import React from "react";
import Chevron from "../../resources/svgs/chevron-right.svg";
import Wrapper from "./styles/Wrapper";

const Breadcrumbs = ({ categories }) => {
  return (
    <Wrapper>
      {categories.map((category, index) => (
        <React.Fragment key={category}>
          {index > 0 && <img alt="chevron" height="10px" src={Chevron} />}
          <span>{category}</span>
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default Breadcrumbs;
