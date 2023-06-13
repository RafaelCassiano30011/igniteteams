/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupsGetAll() {
  try {
    const groups = await AsyncStorage.getItem(GROUP_COLLECTION);

    return JSON.parse(groups ?? "[]");
  } catch (error) {
    throw error;
  }
}
