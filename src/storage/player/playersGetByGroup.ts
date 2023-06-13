/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { playerStorageDTO } from "./playerStorageDTO";
import { PLAYER_COLLECTION } from "@storage/storageConfig";

export const playersGetByGroup = async (group: string): Promise<playerStorageDTO[]> => {
  try {
    const players = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);
    return JSON.parse(players ?? "[]") as playerStorageDTO[];
  } catch (error) {
    throw error;
  }
};
