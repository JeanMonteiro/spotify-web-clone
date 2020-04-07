import React from "react";

import { Container } from "./styles";

interface Props {
  title: string;
}

export default function CardGroup(props: Props) {
  return (
    <Container>
      <h3>{props.title}</h3>
    </Container>
  );
}
