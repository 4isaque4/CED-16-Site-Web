document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo os valores dos campos do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();

    // Validação simples
    if (name === "" || email === "" || comment === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Cancela o envio se algum campo estiver vazio
    }

    // Validação de formato de e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false; // Cancela o envio se o e-mail não for válido
    }

    // Se todas as validações passarem, exibe uma mensagem de sucesso
    alert("Formulário enviado com sucesso!");

    // Aqui você pode adicionar lógica para enviar os dados para um servidor, se necessário
    // Por exemplo, usando fetch() ou XMLHttpRequest

    // Limpa os campos do formulário após o envio
    document.getElementById('contactForm').reset();
};