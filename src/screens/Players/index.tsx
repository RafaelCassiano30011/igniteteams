/** @format */

import React, { useRef, useEffect, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as S from "./styles";

import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";

import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerStorageDTO } from "@storage/player/playerStorageDTO";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";

import { AppError } from "@utils/AppError";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import Loading from "@components/Loading";

type RouteParams = {
  group: string;
};

export default function Players() {
  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState("Time A");
  const [player, setPlayer] = useState("");
  const [players, setPlayers] = useState<playerStorageDTO[]>([]);
  const route = useRoute();
  const { group } = route.params as RouteParams;
  const navigation = useNavigation();

  const newPlayerInputRef = useRef<TextInput>(null);

  const fetchPlayersByTeam = async () => {
    try {
      setIsLoading(true);

      const data = (await playersGetByGroupAndTeam(group, team)) ?? [];

      setPlayers(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Pessoas", "Nao foi possivel carregar as pessoas do time selecionado");
    } finally {
      setIsLoading(false);
    }
  };

  const groupRemove = async () => {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover Grupo", "Nao foi possivel remover o grupo");
    }
  };

  const handleRemoveGroup = async () => {
    Alert.alert("Remover", "Deseja remover o grupo", [
      { text: "Nao", style: "cancel" },
      {
        text: "Sim",
        onPress: () => groupRemove(),
      },
    ]);
  };

  const handleRemovePlayer = async (playerName: string) => {
    try {
      await playerRemoveByGroup(playerName, group);
      await fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert("Remover pessoa", "Nao foi possivel remover essa pessoa.");
    }
  };

  const handleAddPlayer = async () => {
    if (player.trim() === "") {
      return Alert.alert("Novo Jogador", "Digite o nome do Jogador");
    }

    try {
      const newPlayer = {
        name: player,
        team,
      };
      await playerAddByGroup(newPlayer, group);
      setPlayer("");
      fetchPlayersByTeam();
      newPlayerInputRef.current?.blur();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Jogador", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova Jogador");
      }
    }
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <S.Form>
        <Input
          inputRef={newPlayerInputRef}
          value={player}
          onChangeText={setPlayer}
          autoCorrect={false}
          placeholder="Nome do participante"
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon onPress={handleAddPlayer} icon="add" />
      </S.Form>

      <S.HeaderList>
        {
          <FlatList
            data={["Time A", "Time B"]}
            renderItem={({ item }) => <Filter title={item} onPress={() => setTeam(item)} isActive={team === item} />}
            horizontal
          />
        }
        <S.NumberOfPLayers>{players.length}</S.NumberOfPLayers>
      </S.HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          renderItem={({ item }) => <PlayerCard onRemove={() => handleRemovePlayer(item.name)} name={item.name} />}
          keyExtractor={(item) => item.name}
          ListEmptyComponent={() => {
            return <ListEmpty message="Nao ha pessoas nessee time" />;
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 100 }, !players.length && { flex: 1, marginBottom: 0 }]}
        />
      )}

      <Button onPress={handleRemoveGroup} title="Remover Turma" type="secondary"></Button>
    </S.Container>
  );
}
