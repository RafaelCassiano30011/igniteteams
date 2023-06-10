/** @format */

import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCart";
import { FlatList } from "react-native";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navegation = useNavigation();

  const handleNewGroup = () => {
    navegation.navigate("new");
  };s

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        renderItem={({ item }) => <GroupCard title={item} />}
        keyExtractor={(item) => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma" />}
      />

      <Button onPress={handleNewGroup} title="Criar nova turma" />
    </S.Container>
  );
}
