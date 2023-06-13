/** @format */

import { playersGetByGroup } from "./playersGetByGroup";
import { playerStorageDTO } from "./playerStorageDTO";

export const playersGetByGroupAndTeam = async (group: string, team: string): Promise<playerStorageDTO[] | undefined> => {
  try {
    const storage = await playersGetByGroup(group);

    return storage.filter((player) => player.team === team);
  } catch (error) {}
};
