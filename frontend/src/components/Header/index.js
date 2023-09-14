import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import HeaderWrapper from "./styles/HeaderWrapper";
import SearchInput from "./styles/SearchInput"
import SearchButton from "./styles/SearchButton"
import Img from "./styles/Img"
import logo from "../../resources/images/logo.png";
import search from "../../resources/images/search.png";

const Header = () => {
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`items?search=${value}`)
  };
  return (
    <HeaderWrapper>
      <form onSubmit={handleSubmit}>
        <Img alt="Mercado Libre Logo" onClick={() => navigate('/')} height="35px" src={logo} />
        <SearchInput
          type="text"
          value={value}
          onChange={e => setvalue(e.target.value)}
          placeholder="Nunca dejes de buscar"
        />
        <SearchButton type="submit">
          <Img alt="Icono de Busqueda" height="17px" src={search} />
        </SearchButton>
      </form>
    </HeaderWrapper>
  );
};

export default Header;
