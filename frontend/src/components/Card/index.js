import React from "react";
import InfoWrapper from "./styles/InfoWrapper";
import ItemImage from "./styles/ItemImage";
import Line from "./styles/Line";
import Wrapper from "./styles/Wrapper";
import DescriptionWrapper from "./styles/DescriptionWrapper";
import LocationWrapper from "./styles/LocationWrapper";
import { useNavigate } from 'react-router-dom';


const Card = ({ item }) => {
  const navigate = useNavigate();
  const formattAmount = (amount, currency) => new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0
  }).format(amount);

  const handleClick = id => {
    navigate(`/items/${id}`);
  };
  return (
    <Wrapper>
      <InfoWrapper>
        <ItemImage onClick={() => handleClick(item.id)} src={item.picture} />
        <DescriptionWrapper>
          <span onClick={() => handleClick(item.id)} >{formattAmount(item.price.amount, item.price.currency)}</span>
          <label onClick={() => handleClick(item.id)} >{item.title}</label>
        </DescriptionWrapper>
        <LocationWrapper>{item.location}</LocationWrapper>
      </InfoWrapper>
      <Line />
    </Wrapper>
  );
};

export default Card;
