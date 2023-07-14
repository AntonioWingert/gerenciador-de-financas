import * as S from './styles';

import CustomTitle from '../CustomTitle';

export default function Header() {
  return (
    <S.Container>
      <CustomTitle $size="md" $as="h1" $color="primary">
        Gerenciador de Finanças
      </CustomTitle>
    </S.Container>
  );
}
