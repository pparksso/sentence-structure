import { Configuration, OpenAIApi } from 'openai';

export default function generate(question: string) {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_API_KEY,
    organization: import.meta.env.VITE_ORGANIZATION
  });

  delete configuration.baseOptions.headers['User-Agent'];

  const openAi = new OpenAIApi(configuration);

  const generateAnswer = async () => {
    const res = await openAi.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are a competent Korean teacher. I just need to correct the wrong spelling in my Korean sentences and make the sentence structure more readable. Please tell me the correct answer to the sentence I said. Please do not edit the high-pitched and short-spoken words.'
        },
        { role: 'user', content: question }
      ]
    });
    return res;
  };
  return generateAnswer();
}
