const API_BASE_URL = 'http://localhost:8080'; // Altere conforme necessário

// Alterna entre os formulários de login e cadastro
function toggleForm() {
    const loginContainer = document.getElementById("login-container");
    const signupContainer = document.getElementById("signup-container");

    if (loginContainer.style.display === "none" || loginContainer.style.display === "") {
        loginContainer.style.display = "block";
        signupContainer.style.display = "none";
    } else {
        loginContainer.style.display = "none";
        signupContainer.style.display = "block";
    }
}

// Função de login utilizando o backend
async function login() {
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-senha").value;

    try {
        const response = await fetch(`${API_BASE_URL}/usuarios/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha }),
        });

        if (response.ok) {
            const data = await response.json(); // Obtém a resposta JSON

            console.log(data); // Verifique o conteúdo da resposta

            if (data) { // Verifica se existe um token na resposta
                console.log(data); // Verifique o conteúdo da resposta
                alert("Login realizado com sucesso!");
                // Armazenar o token no localStorage ou sessionStorage
                
                window.location.href = "../eventos/events.html"; // Redireciona para a página de eventos
            } else {
                alert("Credenciais inválidas. Tente novamente!"); // Se não houver token
            }
        } else {
            alert("Credenciais inválidas. Tente novamente!"); // Caso o status da resposta não seja 2xx
        }
    } catch (error) {
        console.error("Erro durante o login:", error);
        alert("Ocorreu um erro ao tentar realizar o login. Por favor, tente novamente.");
    }
}

// Função de cadastro utilizando o backend
async function signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const response = await fetch(`${API_BASE_URL}/usuarios/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: name, email, senha }),
        });

        if (response.ok) {
            const data = await response.json(); // A resposta deve ser JSON
            alert(`Cadastro realizado com sucesso! Bem-vindo(a), ${name}!`);
            if (data.token) {
                localStorage.setItem("token", data.token); // Armazenar o token
                window.location.href = "../eventos/events.html"; // Redireciona para a página de eventos
            }
        } else {
            const errorData = await response.json();
            alert(`Erro ao realizar cadastro: ${errorData.message || "Tente novamente mais tarde."}`);
        }
    } catch (error) {
        console.error("Erro durante o cadastro:", error);
        alert("Ocorreu um erro ao tentar realizar o cadastro. Por favor, tente novamente.");
    }
}

