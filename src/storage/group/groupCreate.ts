/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./gruupsGetAll";
import NewGroup from "@screens/NewGroup";

export async function groupCreate(newGroup: string) {
  try {
    const groups = await groupsGetAll();

    const groupAlreadyExist = groups.includes(newGroup);

    if (groupAlreadyExist) {
      throw new Error("Group already exist");
    }

    const newGroups = JSON.stringify([...groups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, newGroups);
  } catch (error) {
    throw error;
  }
}
