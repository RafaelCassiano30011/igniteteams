/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./gruupsGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroup: string) {
  try {
    const groups = await groupsGetAll();

    const groupAlreadyExist = groups.includes(newGroup);

    if (groupAlreadyExist) {
      throw new AppError("O grupo ja existe");
    }

    const newGroups = JSON.stringify([...groups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, newGroups);
  } catch (error) {
    throw error;
  }
}
