const catalogo = document.getElementById("containerCatalogo");
const API_BASE_URL = "http://localhost:8080"; // Altere para a URL correta do seu backend
const adicionarEventoBtn = document.getElementById("adicionarEventoBtn");

// Função para listar eventos a partir do backend
async function listarEventos() {
    try {
        const response = await fetch(`${API_BASE_URL}/evento/listar`);
        if (!response.ok) throw new Error("Erro ao listar eventos.");

        const eventos = await response.json();
        catalogo.innerHTML = ""; // Limpa o catálogo antes de renderizar os eventos
        eventos.forEach(evento => {
            catalogo.innerHTML += `
                <div class="event-item" data-id="${evento.id}">
<<<<<<< HEAD
                     <img class="img" src="../../imgs/Literatura.jpeg" alt="">
=======
                    <img class="img" src="/imgs/imagem.png" alt="${evento.nome}" />
>>>>>>> 324d1cdcbc7da27f5de735959fbc4e6246dd9bef
                    <h3>${evento.nome}</h3>
                    <p>${evento.descricao}</p>
                    <button onclick="editarEvento(${evento.id})">Editar</button>
                    <button onclick="excluirEvento(${evento.id})">Excluir</button>
                </div>`;
        });
    } catch (error) {
        console.error("Erro ao listar eventos:", error);
        alert("Não foi possível carregar os eventos. Tente novamente mais tarde.");
    }
}

// Função para editar evento
async function editarEvento(id) {
    const novoNome = prompt("Digite o novo nome do evento:");
    const novaDescricao = prompt("Digite a nova descrição do evento:");

    if (novoNome && novaDescricao) {
        try {
            const response = await fetch(`${API_BASE_URL}/evento/atualizar/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({nome: novoNome, descricao: novaDescricao }),
            });

            if (response.ok) {
                alert("Evento atualizado com sucesso!");
                listarEventos(); // Recarrega a lista de eventos
            } else {
                alert("Erro ao atualizar evento. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao editar evento:", error);
            alert("Erro ao editar evento. Tente novamente mais tarde.");
        }
    } else {
        alert("Nome e descrição são obrigatórios para editar um evento.");
    }
}

// Função para excluir evento
async function excluirEvento(id) {
    if (confirm("Tem certeza de que deseja excluir este evento?")) {
        try {
            const response = await fetch(`${API_BASE_URL}/evento/del/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                alert("Evento excluído com sucesso!");
                listarEventos(); // Recarrega a lista de eventos
            } else {
                alert("Erro ao excluir evento. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao excluir evento:", error);
            alert("Erro ao excluir evento. Tente novamente mais tarde.");
        }
    }
}

// Função para adicionar novo evento
async function adicionarEvento() {
    const nome = prompt("Digite o nome do evento:");
    const descricao = prompt("Digite a descrição do evento:");
    const imgUrl = prompt("Digite a URL da imagem do evento (opcional):");

    if (nome && descricao) {
        try {
            const response = await fetch(`${API_BASE_URL}/evento/add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, descricao, imgUrl }),
            });

            if (response.ok) {
                alert("Evento adicionado com sucesso!");
                listarEventos(); // Recarrega a lista de eventos
            } else {
                alert("Erro ao adicionar evento. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao adicionar evento:", error);
            alert("Erro ao adicionar evento. Tente novamente mais tarde.");
        }
    } else {
        alert("Nome e descrição são obrigatórios para adicionar um evento.");
    }
}

// Evento para o botão de adicionar novo evento
adicionarEventoBtn.addEventListener("click", adicionarEvento);

// Inicializa a listagem de eventos ao carregar a página
listarEventos();
