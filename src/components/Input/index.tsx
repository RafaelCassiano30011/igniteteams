/** @format */

import React from "react";
import * as S from "./styles";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps {
  placeholder?: string;
  inputRef?: React.RefObject<TextInput>;
}

export default function Input({ placeholder, inputRef, ...rest }: InputProps) {
  const { colors } = useTheme();

  return <S.Container ref={inputRef} placeholderTextColor={colors.gray_300} placeholder={placeholder} {...rest}></S.Container>;
}
