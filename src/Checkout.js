import React from "react";
import styled from "styled-components";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
`;
const Left = styled.div`
  img {
    width: 100%;
    margin-bottom: 10px;
  }
`;
const Title = styled.h2`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;
const Right = styled.div``;

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <Container>
      <Left>
        <img src="/images/ad.jpg" alt="error" />
        <Title>Your shopping Basket</Title>
        {basket.map((item, idx) => (
          <CheckoutProduct {...item} key={idx}></CheckoutProduct>
        ))}
      </Left>
      <Right>
        <Subtotal />
      </Right>
    </Container>
  );
}

export default Checkout;
