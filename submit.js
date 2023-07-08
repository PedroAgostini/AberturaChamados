document.getElementById('chamadoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var nome = document.getElementById('nome').value;
    var setor = document.getElementById('setor').value;
    var descricao = document.getElementById('descricao').value;

    var mensagem = 'Nome: ' + nome + '\n'
                 + 'Setor: ' + setor + '\n'
                 + 'Descrição: ' + descricao + '\n'

    // Envie a mensagem por e-mail usando um serviço de envio de e-mail (exemplo: EmailJS)
    // Substitua as variáveis a seguir pelas suas próprias informações de configuração do EmailJS
    emailjs.send('service_lxoj94l', 'template_8g5c8gs', {message: mensagem}, '2UjrnuaRAx3hIYiuQ')
        .then(function(response) {
            alert('Chamado aberto com sucesso!'); // Exibe uma mensagem de sucesso
            document.getElementById('chamadoForm').reset(); // Limpa o formulário
        }, function(error) {
            alert('Ocorreu um erro ao abrir o chamado.'); // Exibe uma mensagem de erro
        });
});
