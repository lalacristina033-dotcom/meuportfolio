document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usuarioInput = document.getElementById('usuario').value;
    const senhaInput = document.getElementById('senha').value;
    const erroMsg = document.getElementById('erroMsg');

    // Simulação de credenciais para o projeto escolar
    const usuarioCorreto = "admin";
    const senhaCorreta = "123456";

    if (usuarioInput === usuarioCorreto && senhaInput === senhaCorreta) {
        window.location.href = "dashboard.html";
    } else {
        erroMsg.textContent = "Usuário ou senha incorretos. Tente novamente.";
    }
});
