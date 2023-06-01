/** @format */

import React from "react";
import * as S from "./styles";
import ButtonIcon from "@components/ButtonIcon";

interface PlayerCardProps {
  name: string;
  onRemove: () => void;
}

export default function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>
      <ButtonIcon onPress={onRemove} icon="close" type="secondary" />
    </S.Container>
  );
}
