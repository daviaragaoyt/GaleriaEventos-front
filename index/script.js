// Função para alternar entre o formulário de login e cadastro
function toggleForm() {
    const loginContainer = document.getElementById("login-container");
    const signupContainer = document.getElementById("signup-container");

    // Verifique se os containers estão visíveis ou não
    if (loginContainer.style.display === "none" || loginContainer.style.display === "") {
        loginContainer.style.display = "block";  // Exibe o container de login
        signupContainer.style.display = "none";  // Esconde o container de cadastro
    } else {
        loginContainer.style.display = "none";  // Esconde o container de login
        signupContainer.style.display = "block";  // Exibe o container de cadastro
    }
}

// Função de login para enviar dados para o backend e validar as credenciais
function login() {
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-senha").value;
    
    const loginData = {
        email: email,
        senha: senha
    };

    // Envia uma requisição POST para o backend para autenticação
    fetch('http://localhost:8080/admins/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    })
    .then(response => {
        if (response.ok) {
            // Se a resposta for bem-sucedida, redireciona para a próxima página
            alert('Login realizado com sucesso!');
            window.location.href = '/pagina-destino';  // Substitua pela página de destino desejada
        } else {
            // Caso haja erro no login
            throw new Error('Erro de login: Verifique suas credenciais');
        }
    })
    .catch(error => {
        alert(error.message);  // Exibe a mensagem de erro
    });
}

// Função de cadastro (simulada, pois o backend não foi especificado para cadastro)
function signup() {
    const userType = document.getElementById("signup-type").value;
    alert(`Cadastro realizado com sucesso como ${userType}!`);
    // Aqui você pode adicionar a lógica de cadastro
    window.location.href = '/pagina-destino'; // Substitua pelo caminho desejado
}
