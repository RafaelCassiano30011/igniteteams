/** @format */

import React, { useState } from "react";
import * as S from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import { FlatList } from "react-native";

export default function Players() {
  const [team, setTeam] = useState("Time A");

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />

      <S.Form>
        <Input autoCorrect={false} placeholder="Nome do participante" />
        <ButtonIcon icon="add" />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          renderItem={({ item }) => <Filter title={item} onPress={() => setTeam(item)} isActive={team === item} />}
          horizontal
        />
        <S.NumberOfPLayers>2</S.NumberOfPLayers>
      </S.HeaderList>
    </S.Container>
  );
}
