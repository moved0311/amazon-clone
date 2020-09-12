import React from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
`;
const ImageContainer = styled.div`
  img {
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;
const ProductRow = styled.div`
  display: flex;
`;

function Home() {
  return (
    <Container>
      <ImageContainer>
        <img src="./images/banner.jpg" alt="error" />
      </ImageContainer>
      <ProductRow>
        <Product
          id="1"
          title="product1 product1 product1 product1"
          image="/images/product1.jpg"
          price={19.99}
          rating={5}
        />
        <Product
          id="2"
          title="product2 product2 product2 product2"
          image="/images/product2.jpg"
          price={119.99}
          rating={2}
        />
      </ProductRow>
      <ProductRow>
        <Product
          id="3"
          title="product3 product3 product3 product3"
          image="/images/product3.jpg"
          price={15.33}
          rating={1}
        />
        <Product
          id="4"
          title="product4 product4 product4 product4 "
          image="/images/product4.jpeg"
          price={500.11}
          rating={4}
        />
        <Product
          id="5"
          title="product5 product5 product5 product5"
          image="/images/product5.jpg"
          price={125.09}
          rating={3}
        />
      </ProductRow>
      <ProductRow>
        <Product
          id="6"
          title="product6 product6 product6 product6"
          image="/images/product6.jpg"
          price={19911.14}
          rating={5}
        />
      </ProductRow>
    </Container>
  );
}

export default Home;
