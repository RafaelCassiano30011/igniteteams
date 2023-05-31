/** @format */

import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_600};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray_700};
  border-radius: 6px;
  margin-bottom: 32px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const NumberOfPLayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm};
  `}
`;
