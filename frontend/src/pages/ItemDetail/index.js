import React from "react";
import { useLoaderData } from "react-router-dom";
import Wrapper from "./styles/Wrapper";
import Breadcrumbs from "../../components/Breadcrumbs";
import ItemWrapper from "./styles/ItemWrapper";
import ItemData from "../../components/ItemData";

const ItemDetail = () => {
  const loaderData = useLoaderData();
  const { detailItem } = loaderData;
  return (
    <Wrapper>
      <Breadcrumbs categories={detailItem.categories} />
      <ItemWrapper>
        <ItemData item={detailItem.item} />
      </ItemWrapper>
    </Wrapper>
  );
};

export default ItemDetail;
