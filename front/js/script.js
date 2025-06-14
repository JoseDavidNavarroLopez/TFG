// Variables globales
const chatContainer = document.getElementById('chat');
const userInput = document.getElementById('userInput');
const quickReplies = document.getElementById('quickReplies');
const sideMenu = document.getElementById('sideMenu');
const aboutPopup = document.getElementById('about');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const chatHistoryPanel = document.getElementById('chatHistoryPanel');
const chatList = document.getElementById('chatList');

let modoMatematico = false;

// Enviar mensaje al backend
async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  quickReplies.style.display = "none";
  appendMessage(text, 'user');
  userInput.value = '';
  appendMessage("Escribiendo...", 'bot', true);

  const userId = sessionStorage.getItem('userId');
  if (!userId) {
    alert("Debes iniciar sesión para enviar mensajes.");
    removeTyping();
    return;
  }

  try {
    const res = await fetch('/api/chat/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: parseInt(userId),
        message: text,
        modoMatematico
      }),
    });

    const data = await res.json();
    removeTyping();

    if (res.ok && data.respuesta) {
      appendMessage(data.respuesta, 'bot');
    } else {
      appendMessage(data.error || "Error en la respuesta del servidor", 'bot');
    }
  } catch (e) {
    removeTyping();
    appendMessage("Error al conectar con el servidor", 'bot');
    console.error(e);
  }
}

// Mostrar mensaje en chat
function appendMessage(text, sender, isTyping = false) {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  
  // Usamos showdown para markdown si quieres (asegúrate de incluir showdown.js)
  if (typeof showdown !== 'undefined') {
    const converter = new showdown.Converter();
    msg.innerHTML = converter.makeHtml(text);
  } else {
    msg.textContent = text;
  }
  
  msg.dataset.typing = isTyping ? "true" : "false";
  chatContainer.appendChild(msg);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function removeTyping() {
  const typing = chatContainer.querySelector('[data-typing="true"]');
  if (typing) typing.remove();
}

// Login
async function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  if (!email || !password) {
    alert("Completa ambos campos.");
    return;
  }

  try {
    const res = await fetch('/usuarios/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    });
    const data = await res.json();
    if (data.error) {
      alert(data.error);
    } else {
      sessionStorage.setItem('userEmail', data.email);
      sessionStorage.setItem('userName', data.name);
      sessionStorage.setItem('userId', data.id);

      alert(`¡Bienvenido, ${data.name}!`);
      closeLogin();
      loadChatHistory(); // cargar historial al entrar
    }
  } catch (e) {
    alert("Error al conectar con el servidor");
    console.error(e);
  }
}

function closeLogin() {
  loginModal.style.display = 'none';
}

function showLogin() {
  if (sessionStorage.getItem('userEmail')) {
    showUserMenu();
  } else {
    loginModal.style.display = 'block';
  }
}

// Registro
async function handleRegister() {
  const name = document.getElementById('registerName').value.trim();
  const email = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value.trim();
  if (!name || !email || !password) {
    alert("Completa todos los campos.");
    return;
  }

  try {
    const res = await fetch('/usuarios/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, password}),
    });
    const data = await res.json();
    if (data.error) {
      alert(data.error);
    } else {
      alert("¡Registrado correctamente!");
      sessionStorage.setItem('userEmail', email);
      sessionStorage.setItem('userName', name);
      closeRegister();
    }
  } catch (e) {
    alert("Error al conectar con el servidor");
    console.error(e);
  }
}

function closeRegister() {
  registerModal.style.display = 'none';
}

function showRegister() {
  closeLogin();
  registerModal.style.display = 'block';
}

// Logout
function logout() {
  sessionStorage.clear();
  closeUserMenu();
  alert("Sesión cerrada.");
  clearChat();
}

// Mostrar menú usuario logueado
function showUserMenu() {
  closeUserMenu();
  const name = sessionStorage.getItem('userName') || 'Usuario';
  const email = sessionStorage.getItem('userEmail') || '';

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

  menu.innerHTML = `
    <p>👋 Hola, <strong>${name}</strong></p>
    <p style="font-size: 0.9em; color: gray;">${email}</p>
    <button onclick="openSettings()">Ajustes</button>
    <button onclick="logout()">Cerrar sesión</button>
  `;

  document.body.appendChild(menu);
}

function closeUserMenu() {
  const existing = document.getElementById('userMenu');
  if (existing) existing.remove();
}

function openSettings() {
  alert("Aquí irían los ajustes del usuario 😉");
  closeUserMenu();
}

// Modo matemático toggle
function toggleModoMatematico() {
  modoMatematico = !modoMatematico;
  const btn = document.getElementById('modoMatematicoBtn');
  if (modoMatematico) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
  document.getElementById('statusMessage').textContent = modoMatematico ? 'Modo Matemático ACTIVADO' : '';
  alert(`Modo matemático ${modoMatematico ? 'activado (temperatura 0.3)' : 'desactivado (temperatura 0.7)'}`);
}

// Historial chat
async function loadChatHistory() {
  const email = sessionStorage.getItem('userEmail');
  if (!email) {
    console.warn('Usuario no logueado');
    return;
  }

  try {
    const res = await fetch('/api/chat/historial', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email}),
    });
    if (!res.ok) throw new Error('Error al obtener historial');
    const chats = await res.json();

    chatList.innerHTML = '';
    chats.forEach(chat => {
      const li = document.createElement('li');
      const date = new Date(chat.fecha_inicio || chat.fecha_creacion).toLocaleString();
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
      chatList.appendChild(li);
    });

  } catch (e) {
    console.error(e);
  }
}

async function loadChatById(chatId) {
  try {
    const res = await fetch(`/api/chat/${encodeURIComponent(chatId)}`);
    if (!res.ok) throw new Error('Error al cargar chat');
    const data = await res.json();

    clearChat();
    data.messages.forEach(msg => {
      appendMessage(msg.mensaje, msg.emisor === 'user' ? 'user' : 'bot');
    });
  } catch (e) {
    console.error(e);
  }
}

function clearChat() {
  chatContainer.innerHTML = '';
}

// Eventos y listeners
document.addEventListener('DOMContentLoaded', () => {
  userInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendMessage();
  });

  window.addEventListener('click', e => {
    if (e.target === loginModal) closeLogin();
    if (e.target === registerModal) closeRegister();
    if (e.target === aboutPopup) aboutPopup.style.display = 'none';
    closeUserMenu();
  });

  // Si ya hay sesión, cargar historial
  if (sessionStorage.getItem('userEmail')) {
    loadChatHistory();
  }
});
