/** @format */

import React from "react";
import * as S from "./styles";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps {
  placeholder?: string;
}

export default function Input({ placeholder, ...rest }: InputProps) {
  const { colors } = useTheme();

  return <S.Container placeholderTextColor={colors.gray_300} placeholder={placeholder} {...rest}></S.Container>;
}
