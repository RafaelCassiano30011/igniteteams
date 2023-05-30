/** @format */

import React from "react";
import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

type FilterProps = TouchableOpacityProps &
  S.FitlerStyleProps & {
    title: string;
  };

export default function Filter({ title, ...rest }: FilterProps) {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
