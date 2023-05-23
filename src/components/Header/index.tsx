/** @format */

import * as S from "./styles";
import logoImg from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export default function Header({ showBackButton }: HeaderProps) {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={logoImg} />
    </S.Container>
  );
}
