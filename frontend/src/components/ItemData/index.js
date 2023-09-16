import React from "react";
import Wrapper from "./styles/Wrapper";
import TopWrapper from "./styles/TopWrapper";
import formatAmount from "../../utils/formatAmount";
import PriceWrapper from "./styles/PriceWrapper";
import BuyButton from "./styles/BuyButton";
import DescriptionWrapper from "./styles/DescriptionWrapper";

const ItemData = ({ item }) => {
  return (
    <Wrapper>
      <TopWrapper>
        <img alt="selling item" width="680px" src={item.picture} />
        <PriceWrapper>
          <label>
            {item.condition} - {item.sold_quantity} vendidos
          </label>
          <h1>{item.title}</h1>
          <span>{formatAmount(item.price.amount, item.price.currency)}</span>
          <BuyButton>Comprar</BuyButton>
        </PriceWrapper>
      </TopWrapper>
      <DescriptionWrapper>
        <h2>Descripción del producto</h2>
        <span>{item.description}</span>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default ItemData;
