/** @format */

import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "primary" | "secondary";

interface Props {
  type: ButtonTypeStyleProps;
}
export const Container = styled.TouchableOpacity<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) => (type === "primary" ? theme.colors.green_700 : theme.colors.red_dark)};
  border-radius: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.white};
  `}
`;
