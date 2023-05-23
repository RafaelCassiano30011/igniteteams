/** @format */
import * as S from "./styles";

interface HighlightProps {
  title: string;
  subtitle: string;
}

export default function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <S.Contaienr>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Contaienr>
  );
}
