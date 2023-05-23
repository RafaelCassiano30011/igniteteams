/** @format */

import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeProps = "primary" | "secondary";

interface Props {
  type: ButtonIconTypeProps;
}

export const Container = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "primary" ? theme.colors.green_700 : theme.colors.red,
}))``;
