const chatContainer = document.getElementById('chat');
const userInput = document.getElementById('userInput');
const quickReplies = document.getElementById('quickReplies');
const sideMenu = document.getElementById('sideMenu');
const aboutPopup = document.getElementById('about');

const API_KEY = "sk-d9818b65ca4b485e9d8355d8cad3a7bc";
const API_URL = "https://api.deepseek.com/v1/chat/completions";

let modoMatematico = false; // Estado inicial del modo matemático

//---------------------------------------------------------------------------------------------------------------------------------
function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;
  
    // Ocultar las respuestas rápidas
    quickReplies.style.display = "none";
  
    appendMessage(text, 'user');
    userInput.value = '';
  
    appendMessage("Escribiendo...", 'bot', true);
  
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":` Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "Eres una asistente llamada AteneAI, amigable y útil." },
          { role: "user", content: text }
        ],
        temperature: modoMatematico ? 0.3 : 0.7
      })
    })
      .then(res => res.json())
      .then(data => {
        let botMsg = "Lo siento, no tengo respuesta.";
  
        if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
          botMsg = data.choices[0].message.content;
        } else if (data.error) {
          botMsg = `Error: ${data.error.message};`
        }
  
        removeTyping();
        appendMessage(botMsg, 'bot');
      })
      .catch(err => {
        removeTyping();
        appendMessage("Hubo un error al conectar con la IA 😢", 'bot');
        console.error(err);
      });
  }
//---------------------------------------------------------------------------------------------------------------------------------
function appendMessage(text, sender, isTyping = false) {
    const msg = document.createElement('div');
    msg.className = `message ${sender};`
  
    // Convertir Markdown a HTML utilizando Showdown
    const converter = new showdown.Converter();
    const html = converter.makeHtml(text);  // Convertir Markdown a HTML
    
    msg.innerHTML = html;  // Usamos innerHTML para interpretar el formato HTML
    msg.dataset.typing = isTyping ? "true" : "false";
    
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  
  
function removeTyping() {
  const typing = chatContainer.querySelector('[data-typing="true"]');
  if (typing) typing.remove();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function toggleMenu() {
  sideMenu.style.display = sideMenu.style.display === "block" ? "none" : "block";
}

function closeMenu() {
  sideMenu.style.display = "none";
}

function showAbout() {
  aboutPopup.style.display = "block";
}

function closeAbout() {
  aboutPopup.style.display = "none";
}

function sendMessageQuick(message) {
    // Ocultar las respuestas rápidas
    quickReplies.style.display = "none";
  
    userInput.value = message;
    sendMessage();
  }


//----------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const userInput = document.getElementById('userInput');
  if (userInput) {
    userInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") sendMessage();
    });
  }

  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');

  // Cerrar modales al hacer clic fuera
  window.addEventListener('click', function (e) {
    if (loginModal && e.target === loginModal) closeLogin();
    if (registerModal && e.target === registerModal) closeRegister();
  });
});


function showLogin() {
  const user = sessionStorage.getItem('userEmail');
  if (user) {
    showUserMenu();
  } else {
    loginModal.style.display = 'block';
  }
}

function closeLogin() {
  loginModal.style.display = 'none';
}

function showRegister() {
  closeLogin();
  registerModal.style.display = 'block';
}

function closeRegister() {
  registerModal.style.display = 'none';
}
//CONFIGURAR LOGIN********************************************************************************************************
function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  if (!email || !password) {
    alert("Por favor, completa ambos campos.");
    return;
  }

  fetch('/usuarios/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      alert(data.error);
    } else {
      sessionStorage.setItem('userEmail', data.email);
      sessionStorage.setItem('userName', data.name);
      sessionStorage.setItem('userId', data.id); // Guardamos el ID del usuario

      alert(`¡Bienvenido, ${data.name}!`);
      closeLogin();
    }
  })
  .catch(err => console.error("Error:", err));
}


//CONFIGURAR REGISTRO*****************************************************************************************************
function handleRegister() {
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value.trim();

  if (!name || !email || !password) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  fetch('/usuarios/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      alert(data.error);
    } else {
      alert("¡Registrado correctamente!");
      sessionStorage.setItem('userEmail', email);
      sessionStorage.setItem('userName', name);
      closeRegister();
    }
  })
  .catch(err => console.error("Error:", err));
}


// Cerrar modales al hacer clic fuera
window.addEventListener('click', function(e) {
  if (e.target === loginModal) closeLogin();
  if (e.target === registerModal) closeRegister();
});

// Menú de usuario ya logueado
function showUserMenu() {

  const name = sessionStorage.getItem('userName') || 'Usuario';
  const email = sessionStorage.getItem('userEmail');

  const menu = document.createElement('div');
  menu.id = 'userMenu';
  menu.style.position = 'absolute';
  menu.style.top = '60px';
  menu.style.right = '20px';
  menu.style.background = 'var(--bg-color)';
  menu.style.color = 'var(--text-color)';
  menu.style.border = '1px solid #ccc';
  menu.style.padding = '10px';
  menu.style.borderRadius = '10px';
  menu.style.boxShadow = '0 4px 10px var(--shadow-color)';
  menu.style.zIndex = '1000';

   menu.innerHTML =` 
    <p style="margin: 5px 0;">👋 Hola, <strong>${name}</strong></p>
    <p style="margin: 5px 0; font-size: 0.9em; color: gray;">${email}</p>
    <button onclick="openSettings()">Ajustes</button>
    <button onclick="logout()">Cerrar sesión</button>`
  ;

  closeUserMenu(); // Elimina otro menú si ya está
  document.body.appendChild(menu);
}
//---------------------------------------------------------------------------------------------------------------------------------
function closeUserMenu() {
  const existing = document.getElementById('userMenu');
  if (existing) existing.remove();
}
//---------------------------------------------------------------------------------------------------------------------------------
function logout() {
  sessionStorage.removeItem('userEmail');
  closeUserMenu();
  alert("Sesión cerrada.");
}
//---------------------------------------------------------------------------------------------------------------------------------
function openSettings() {
  alert("Aquí irían los ajustes del usuario 😉");
  closeUserMenu();
}



//---------------------------------------------------------------------------------------------------------------------------------
function toggleModoMatematico() {
  modoMatematico = !modoMatematico;
document.getElementById('statusMessage').textContent = modoMatematico ? 'Modo Matemático ACTIVADO' : '';

  const btn = document.getElementById('modoMatematicoBtn');
  if (modoMatematico) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }

  alert(`Modo matemático ${modoMatematico ? 'activado (temperatura 0.3)' : 'desactivado (temperatura 0.7)'}`);
}

//---------------------------------------------------------------------------------------------------------------------------------

function toggleChatHistory() {
  const panel = document.getElementById('chatHistoryPanel');
  const isVisible = panel.style.display === 'block';
  panel.style.display = isVisible ? 'none' : 'block';

  if (!isVisible) {
    loadChatHistory();
  }
}

function clearChat() {
  const chatContainer = document.getElementById("chat-container");
  if (chatContainer) {
    chatContainer.innerHTML = ""; // Elimina todos los mensajes del contenedor
  } else {
    console.warn("Contenedor de chat no encontrado: #chat-container");
  }
}


function loadChatHistory() {
  const email = sessionStorage.getItem('userEmail');
  if (!email) {
    console.error('No hay usuario en sesión');
    return;
  }

  fetch('/api/chat/historial', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
    .then(res => {
      if (!res.ok) throw new Error('Error al obtener historial');
      return res.json();
    })
    .then(chats => {
      const list = document.getElementById('chatList');
      list.innerHTML = '';

      chats.forEach(chat => {
        const li = document.createElement('li');
        const date = new Date(chat.fecha_creacion).toLocaleString();
        li.textContent = date;
        li.style.cursor = 'pointer';
        li.style.padding = '6px 10px';
        li.style.borderRadius = '8px';
        li.style.marginBottom = '5px';
        li.style.background = 'var(--input-bg)';
        li.style.color = 'var(--text-color)';
        li.onmouseover = () => li.style.background = 'var(--button-hover-bg)';
        li.onmouseout = () => li.style.background = 'var(--input-bg)';
        li.onclick = () => loadChatById(chat.id_conversacion);
        list.appendChild(li);
      });
    })
    .catch(err => console.error('Error cargando historial:', err));
}

function loadChatById(chatId) {
  fetch(`/api/chat/${encodeURIComponent(chatId)}`)
    .then(res => {
      if (!res.ok) throw new Error('Error al cargar el chat');
      return res.json();
    })
    .then(chat => {
      clearChat(); // limpia el contenedor del chat actual
      chat.messages.forEach(msg => {
        appendMessage(msg.mensaje, msg.emisor === 'user' ? 'user' : 'assistant');
      });
    })
    .catch(err => console.error('Error cargando chat:', err));
}


//---------------------------------------------------------------------------------------------------------------------------------

    function goToChat() {
      // Asegura que se mantiene la sesión al ir al chat
      const email = sessionStorage.getItem("userEmail");
      if (email) {
        window.location.href = "html/chat.html";
      } else {
        showLogin();
      }
    }

//---------------------------------GUARDAR CONVERSACIÓN-----------------------------------------------------------------------
async function guardarConversacionEnBackend(mensajes) {
  const userId = sessionStorage.getItem('userId');
  if (!userId) {
    console.error("Usuario no identificado. No se puede guardar la conversación.");
    return;
  }

  const payload = {
    userId,
    mensajes: mensajes.map(msg => ({
      emisor: msg.emisor,
      mensaje: msg.mensaje
    }))
  };

  try {
    const res = await fetch('/api/chat/convers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (res.ok) {
      console.log("Conversación guardada con éxito:", data);
    } else {
      console.error("Error al guardar la conversación:", data.error || data);
    }
  } catch (error) {
    console.error("Fallo al enviar conversación:", error);
  }
}

