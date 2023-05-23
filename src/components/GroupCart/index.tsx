/** @format */

import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

interface GroupCardProps extends TouchableOpacityProps {
  title: string;
}

export default function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
