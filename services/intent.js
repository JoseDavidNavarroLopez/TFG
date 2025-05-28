const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function detectIntentFromMessage(message) {
  const prompt = `Dado el siguiente mensaje de un usuario, responde solo con una sola palabra que represente su intención (por ejemplo: saludo, reservar, consulta, clima, despedida):

"${message}"`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
  });

  return completion.choices[0].message.content.trim().toLowerCase();
}

module.exports = {
  detectIntentFromMessage,
};
