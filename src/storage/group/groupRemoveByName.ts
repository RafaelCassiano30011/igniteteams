/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./gruupsGetAll";

export const groupRemoveByName = async (group: string) => {
  try {
    const groups = await groupsGetAll();

    const newGroups = groups.filter((item: string) => item !== group);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newGroups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${group}`);
  } catch (error) {}
};
