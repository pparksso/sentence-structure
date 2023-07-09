import * as S from '@/components/Styles';
import { ChangeEvent, useEffect, useState } from 'react';
import generate from '@/api/genarate';

const Main = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const questionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setQuestion(value);
    if (value.length === 0) setAnswer('');
  };

  const generateHandler = async (que: string) => {
    const res = await generate(que);
    setAnswer(res.data.choices[0].message?.content as string);
  };

  return (
    <>
      <S.Global />
      <S.Container>
        <S.Title>맞춤법 검사기</S.Title>
        <S.Box>
          <S.WrapTextBox>
            <S.TextBox style={{ width: '100%' }} value={question} onChange={questionHandler} />
          </S.WrapTextBox>
          <span
            className="material-icons"
            style={{ fontSize: '4rem', color: '#333', display: 'flex', alignItems: 'center' }}
          >
            arrow_forward
          </span>
          <S.TextBox readOnly={true} value={answer} />
        </S.Box>
        <S.Button onClick={() => generateHandler(question)}>검사</S.Button>
      </S.Container>
    </>
  );
};

export default Main;
