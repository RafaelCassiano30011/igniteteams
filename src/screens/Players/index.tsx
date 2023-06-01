/** @format */

import React, { useState } from "react";
import * as S from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import { FlatList } from "react-native";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";

export default function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState(["Rafael", "Isabela", "Rafael", "Isabela", "Rafael", "Isabela", "Rafael", "Isabela"]);

  const handleRemove = (name: string) => {
    const newPlayers = players.filter((item) => item !== name);

    setPlayers(newPlayers);
  };

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
        <S.NumberOfPLayers>{players.length}</S.NumberOfPLayers>
      </S.HeaderList>

      <FlatList
        data={players}
        renderItem={({ item }) => <PlayerCard onRemove={() => handleRemove(item)} name={item} />}
        ListEmptyComponent={() => {
          return <ListEmpty message="Nao ha pessoas nessee time" />;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, !players.length && { flex: 1, marginBottom: 0 }]}
      />

      <Button title="Remover Turma" type="secondary"></Button>
    </S.Container>
  );
}
