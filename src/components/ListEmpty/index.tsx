/** @format */

import { View, Text } from "react-native";
import React from "react";
import * as S from "./styles";

interface ListEmptyProps {
  message: string;
}

export default function ListEmpty({ message }: ListEmptyProps) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
