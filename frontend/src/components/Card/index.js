import React from "react";
import InfoWrapper from "./styles/InfoWrapper";
import ItemImage from "./styles/ItemImage";
import Line from "./styles/Line";
import Wrapper from "./styles/Wrapper";
import DescriptionWrapper from "./styles/DescriptionWrapper";
import LocationWrapper from "./styles/LocationWrapper";
import { useNavigate } from "react-router-dom";
import shipping from "../../resources/images/shipping.png";
import formatAmount from "../../utils/formatAmount";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/items/${id}`);
  };
  return (
    <Wrapper>
      <InfoWrapper>
        <ItemImage onClick={() => handleClick(item.id)} src={item.picture} />
        <DescriptionWrapper>
          <span onClick={() => handleClick(item.id)}>
            {formatAmount(item.price.amount, item.price.currency)}
            {item.free_shipping && <img height="18px" alt="shipping" src={shipping} />}
          </span>
          <label onClick={() => handleClick(item.id)}>{item.title}</label>
        </DescriptionWrapper>
        <LocationWrapper>{item.location}</LocationWrapper>
      </InfoWrapper>
      <Line />
    </Wrapper>
  );
};

export default Card;
