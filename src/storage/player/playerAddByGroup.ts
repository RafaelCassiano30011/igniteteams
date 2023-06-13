/** @format */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { playerStorageDTO } from "./playerStorageDTO";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import { AppError } from "@utils/AppError";

export const playerAddByGroup = async (newPlayer: playerStorageDTO, group: string) => {
  try {
    const players = await playersGetByGroup(group);

    const playerAlreadyExist = players.find((player) => player.name === newPlayer.name);

    if (playerAlreadyExist) {
      throw new AppError("Essa pessoa ja esta em um time aqui");
    }

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, JSON.stringify([...players, newPlayer]));
  } catch (error) {
    throw error;
  }
};
