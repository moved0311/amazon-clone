import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;
`;
const ProductInfo = styled.div`
  height: 100px;
  margin-bottom: 15px;
`;
const ProductTitle = styled.div``;
const ProductPrice = styled.div`
  margin-top: 5px;
`;
const ProductRating = styled.div``;
const ImageContainer = styled.div`
  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }
`;
const AddToBasket = styled.button`
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
`;
function Product({ title, price, rating, image }) {
  return (
    <Container>
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </ProductPrice>
        <ProductRating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                ⭐
              </span>
            ))}
        </ProductRating>
      </ProductInfo>
      <ImageContainer>
        <img src={image} alt="error" />
      </ImageContainer>
      <AddToBasket>Add to Basket</AddToBasket>
    </Container>
  );
}

export default Product;
