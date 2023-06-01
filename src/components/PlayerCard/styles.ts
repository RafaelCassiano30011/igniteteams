/** @format */

import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  height: 54px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  margin-bottom: 16px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray_500};
  `}
`;

export const Name = styled.Text`
  flex: 1;
  text-transform: capitalize;
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_200};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray_200,
}))`
  margin-right: 4px;
  width: 27px;
`;
