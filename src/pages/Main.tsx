import * as S from '@/components/Styles';

const Main = () => {
  return (
    <>
      <S.Global />
      <S.Container>
        <S.Title>맞춤법 검사기</S.Title>
        <S.Box>
          <S.TextBox />
          <span
            className="material-icons"
            style={{ fontSize: '4rem', color: '#333', display: 'flex', alignItems: 'center' }}
          >
            arrow_forward
          </span>
          <S.TextBox readOnly={true} />
        </S.Box>
        <S.Button>검사</S.Button>
      </S.Container>
    </>
  );
};

export default Main;
