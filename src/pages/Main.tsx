import * as S from '@/components/Styles';
import { useState } from 'react';
import generate from '@/api/genarate';

const Main = () => {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const questionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setQuestion(value);
    if (value.length === 0) setAnswer('');
  };

  const generateHandler = async (que: string) => {
    setLoading(true);
    const res = await generate(que);
    setLoading(false);
    const originalWords = question.split(' ');
    const modifiedWords: string[] | undefined = res.data.choices[0].message?.content?.split(' ');
    if (modifiedWords) {
      const highlightedWords = modifiedWords.map((word) => {
        if (!originalWords.includes(word)) return `<span>${word}</span>`;
        else return word;
      });
      const result = highlightedWords.join(' ').replace(/\n/g, `</br>`);
      setAnswer(result);
    }
  };

  return (
    <>
      <S.Global />
      {loading && (
        <S.Cover>
          <img src="../../src/assets/images/loading.gif" alt="loading" style={{ width: '10rem', height: '10rem' }} />
        </S.Cover>
      )}
      <S.Container>
        <S.Title>맞춤법 검사기</S.Title>
        <S.Box>
          <S.WrapTextBox>
            <S.TextBox value={question} onChange={questionHandler} />
          </S.WrapTextBox>
          <span
            className="material-icons"
            style={{ fontSize: '4rem', color: '#333', display: 'flex', alignItems: 'center' }}
          >
            arrow_forward
          </span>
          <S.AnswerBox dangerouslySetInnerHTML={{ __html: answer }}></S.AnswerBox>
        </S.Box>
        <S.Button onClick={() => generateHandler(question)}>검사</S.Button>
      </S.Container>
    </>
  );
};

export default Main;
