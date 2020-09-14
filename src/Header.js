import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
`;
const HeaderLogo = styled.div`
  img {
    width: 100px;
    object-fit: container;
    margin: 18px 20px 0 20px;
  }
`;
const HeaderSearch = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;
const HeaderSearchIcon = styled(SearchIcon)`
  padding: 5px;
  height: 22px;
  background: #cd9042;
`;
const HeaderBasketIcon = styled(ShoppingBasketIcon)`
  color: white;
`;
const SearchInput = styled.input`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
`;
const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
`;
const BasketOption = styled.div`
  align-items: center;
  color: white;
  display: flex;
`;
const OptionLineOne = styled.span`
  font-size: 10px;
`;
const OptionLineTwo = styled.span`
  font-size: 13px;
  font-weight: 800;
`;
const CountNumber = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo>
          <img src="/images/amazon_logo.png" alt="error" />
        </HeaderLogo>
      </Link>
      <HeaderSearch>
        <SearchInput />
        <HeaderSearchIcon />
      </HeaderSearch>
      <HeaderNav>
        <Link to={!user && "/login"}>
          <HeaderOption onClick={handleLogout}>
            <OptionLineOne>Hello Guest</OptionLineOne>
            <OptionLineTwo>{user ? "Sign Out" : "Sign In"}</OptionLineTwo>
          </HeaderOption>
        </Link>
        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Your</OptionLineOne>
          <OptionLineTwo>Prime</OptionLineTwo>
        </HeaderOption>
        <BasketOption>
          <OptionLineOne>
            <Link to="/checkout">
              <HeaderBasketIcon />
            </Link>
          </OptionLineOne>
          <OptionLineTwo>
            <CountNumber> {basket?.length}</CountNumber>
          </OptionLineTwo>
        </BasketOption>
      </HeaderNav>
    </HeaderContainer>
  );
}

export default Header;
