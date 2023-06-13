/** @format */

import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { groupsGetAll } from "@storage/group/gruupsGetAll";

export default function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState("");

  const handleNewPlayers = async () => {
    groupCreate(group);
    // navigation.navigate("players", {
    //   group: group,
    // });

    setGroup("");
  };

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight title="Nova turma" subtitle="crie a turma para adicionar as pessoas" />
        <Input value={group} onChangeText={setGroup} placeholder="Nome da turma" />
        <Button onPress={handleNewPlayers} title="Criar" style={{ marginTop: 20 }} />
      </S.Content>
    </S.Container>
  );
}
