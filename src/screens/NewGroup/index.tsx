/** @format */

import React, { useState } from "react";
import * as S from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export default function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState("");

  const handleNewPlayers = async () => {
    try {
      if (group.trim() === "") {
        return  Alert.alert("Novo Grupo", "Informe o nome da turma");
      }

      await groupCreate(group); 
      navigation.navigate("players", {
        group: group,
      });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Nao foi possivel criar um novo grupo");
        console.log(error);
      }
    }

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
