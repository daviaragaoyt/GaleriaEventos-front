const containerEventos = document.getElementById("containerEventos");
const API_BASE_URL = "http://localhost:8080"; // Altere para a URL do seu backend
const token = localStorage.getItem("token"); // Recupera o token de login para autenticação
const nomeUsuario = localStorage.getItem("nome_usuario"); // Recupera o nome do usuário (pode ser salvo durante o login)
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');

// Função para listar eventos
async function listarEventos() {
  try {
    const response = await fetch(`${API_BASE_URL}/evento/listar`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Envia o token no cabeçalho para autenticação
      },
    });

    if (!response.ok) throw new Error("Erro ao listar eventos.");

    const eventos = await response.json();
    containerEventos.innerHTML = ""; // Limpa a lista de eventos

    eventos.forEach((evento) => {
      containerEventos.innerHTML += `
                <div class="event-item" data-id="${evento.id}">
    <img class="img" src="${evento.imgUrl || "placeholder.jpg"}" alt="${
        evento.nome
      }" />
    <h3>${evento.nome}</h3>
    <p>${evento.descricao}</p>
    
    <button onclick="reservarEvento(${evento.id})">Participar</button>
   
</div>
`;
    });
  } catch (error) {
    console.error("Erro ao listar eventos:", error);
    alert("Não foi possível carregar os eventos. Tente novamente mais tarde.");
  }
}

// Função para realizar a reserva
async function reservarEvento(id) {
  

  // Simula o delay de 5 segundos
  setTimeout(async () => {
    // Após 5 segundos, realiza a reserva e redireciona para a página de confirmação
    try {
      const reserva = {
        id_evento: id,
        id_usuario: userId,
      
      };
      const response = await fetch(`${API_BASE_URL}/reservas/cadastrar`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reserva),
      });
// Redireciona para a página de loading
window.location.href = "../loading/loading.html"; // A página de loading pode ser um HTML com animação de carregamento
     
    } catch (error) {
      console.error("Erro ao reservar evento:", error);
      alert("Erro ao tentar reservar o evento. Tente novamente mais tarde.");
    }
  }, 5000); // Espera 5 segundos
}

// Inicializa a listagem de eventos ao carregar a página
listarEventos();
