/** @format */

import styled, { css } from "styled-components/native";

export const Contaienr = styled.View`
  width: 100%;
  margin: 32px 0px;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.font_size.xl}px;
    font-weight: ${theme.font_family.bold};
    color: ${theme.colors.white};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    font-weight: ${theme.font_family.regular};
    color: ${theme.colors.gray_300};
  `}
`;
