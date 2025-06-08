const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getChatbotResponse(messages, temperatura = 0.7) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    temperature: temperatura,
  });

  return response.choices[0].message.content;
}

async function detectIntentFromMessage(message) {
  const prompt = `Dado este mensaje de un usuario, responde solo con el nombre de la intención principal (una sola palabra, sin explicaciones):

Mensaje: "${message}"`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0,
  });

  const intent = completion.choices[0].message.content.trim().toLowerCase();
  return intent;
}

module.exports = {
  getChatbotResponse,
  detectIntentFromMessage,
};

