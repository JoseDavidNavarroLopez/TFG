const respuestas = {
    "hola": "¡Hola! ¿En qué puedo ayudarte?",
    "adiós": "¡Hasta luego! Que tengas un buen día.",
    "qué eres": "Soy un chatbot hecho para un TFG :)"
  };
  
  function responderChat(req, res) {
    const { mensaje } = req.body;
    const respuesta = respuestas[mensaje.toLowerCase()] || "No entiendo lo que me dices 🤔";
    res.json({ respuesta });
  }
  
  module.exports = { responderChat };
  