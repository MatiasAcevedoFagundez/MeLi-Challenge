import React from "react";
import { useLoaderData } from "react-router-dom";
import Wrapper from "./styles/Wrapper";
import Breadcrumbs from "../../components/Breadcrumbs";
import Card from "../../components/Card";

const SearchResult = () => {
  const loaderData = useLoaderData();
  const { searchedItems } = loaderData;
  return (
    <Wrapper>
      <Breadcrumbs categories={searchedItems.categories} />
      {searchedItems.items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};

export default SearchResult;
