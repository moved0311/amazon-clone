import React from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";

const Container = styled.div`
  display: flex;
  margin-top: 15px;
`;
const Left = styled.div`
  img {
    max-width: 180px;
    height: 180px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
    margin-right: 20px;
  }
`;
const Right = styled.div``;
const Title = styled.div`
  font-size: 17px;
  font-weight: 800;
`;
const Price = styled.div``;
const Rating = styled.div``;
const RemoveButton = styled.button`
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
`;

function CheckoutProduct({ id, image, rating, title, price }) {
  const [, dispatch] = useStateValue();

  function removeFromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }
  return (
    <Container>
      <Left>
        <img src={image} alt="error" />
      </Left>
      <Right>
        <Title>{title}</Title>
        <Price>
          <small>$</small> <strong>{price}</strong>
        </Price>
        <Rating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                ⭐
              </span>
            ))}
        </Rating>
        <RemoveButton onClick={removeFromBasket}>
          Remove from basket
        </RemoveButton>
      </Right>
    </Container>
  );
}

export default CheckoutProduct;
