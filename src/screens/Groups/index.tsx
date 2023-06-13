/** @format */

import { useCallback, useContext, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCart";
import { FlatList } from "react-native";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { groupsGetAll } from "@storage/group/gruupsGetAll";
import Loading from "@components/Loading";

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();

      setGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleOpenGroup = (group: string) => {
    navigation.navigate("players", {
      group: group,
    });
  };

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          renderItem={({ item }) => <GroupCard onPress={() => handleOpenGroup(item)} title={item} />}
          keyExtractor={(item) => item}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma" />}
        />
      )}
      <Button onPress={handleNewGroup} title="Criar nova turma" />
    </S.Container>
  );
}
