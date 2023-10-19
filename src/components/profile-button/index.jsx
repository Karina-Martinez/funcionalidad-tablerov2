import React from "react";
import * as S from "./styles";

function ProfileButton() {
  return (
    <S.ProfileButton>
      <S.Image
        src="https://avatars.githubusercontent.com/u/145304102?v=4"
        alt="Karina Martínez"
      />
      <S.Content>
        <S.Text>Karina Martínez </S.Text>
        <S.Subtitle>Admin</S.Subtitle>
      </S.Content>
    </S.ProfileButton>
  );
}

export { ProfileButton };
