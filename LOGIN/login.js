// Aqui você pode definir os usuários e senhas correspondentes
// alterar para matricula
const users = {
    "raysa": "senha1",
    "marcio": "senha2",
    "matheus": "senha3"
};

// Função para verificar as credenciais de login
function login(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value.toLowerCase();
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        // Redirecionar com base no usuário
        if (username === "raysa") {
            window.location.href = "pagina_raysa.html";
        } else if (username === "marcio") {
            window.location.href = "pagina_marcio.html";
        } else if (username === "matheus") {
            window.location.href = "pagina_matheus.html";
        }
    } else {
        alert("Você digitou algo errado. Verifique e tente novamente.");
    }
}

// Adicionar evento de submissão para o formulário de login
document.getElementById("login-form").addEventListener("submit", login);
