import React from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
`;
const Small = styled.small`
  display: flex;
  align-items: center;
  input {
    margin-right: 5px;
  }
`;
const Button = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
`;

function Subtotal() {
  const [{ basket }] = useStateValue();
  const total = basket.reduce((acc, { price }) => acc + price, 0);

  return (
    <Container>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <Small>
              <input type="checkbox" /> This order contains a gift
            </Small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <Button>Proceed to Checkout</Button>
    </Container>
  );
}

export default Subtotal;
