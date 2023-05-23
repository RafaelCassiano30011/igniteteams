/** @format */

import { TouchableOpacityProps } from "react-native";
import React from "react";
import * as S from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface ButtonIconsProps extends TouchableOpacityProps {
  type?: S.ButtonIconTypeProps;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export default function ButtonIcon({ type = "primary", icon, ...rest }: ButtonIconsProps) {
  return (
    <S.Container {...rest}>
      <S.Icon name={icon} type={type} />
    </S.Container>
  );
}
