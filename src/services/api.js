import axios from 'axios';

const API_URL = process.env.REACT_APP_CHATGPT_API_URL;
const API_KEY = process.env.REACT_APP_CHATGPT_API_KEY;

export const analyzeSentiment = async (text) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Analyze the sentiment of the following text:\n${text}`,
          },
        ],
        max_tokens: 100,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    throw new Error('Failed to analyze sentiment. Please try again later.');
  }
};
