import React from "react";

import { Container } from "./styles";

export default function Card() {
  return (
    <Container>
      <img src={require("src/assets/artists/billie_eilish.jpg")} />
    </Container>
  );
}
