/** @format */

import React from "react";
import * as S from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";

export default function Players() {
  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />

      <S.Form>
        <Input autoCorrect={false} placeholder="Nome do participante" />
        <ButtonIcon icon="add" />
      </S.Form>
      <Filter title="TIME A dsde" isActive={true} />
    </S.Container>
  );
}
