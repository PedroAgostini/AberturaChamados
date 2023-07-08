document.getElementById('chamadoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    var nome = document.getElementById('nome').value;
    var setor = document.getElementById('setor').value;
    var descricao = document.getElementById('descricao').value;
    var importancia = document.getElementById('prioridade').value;
  
    // Substitua "seu_numero" pelo número de telefone para o qual deseja enviar a mensagem
    var numeroWhatsApp = "+5514991084904";
  
    // Crie o link com os dados do formulário
    var mensagem = "*CHAMADO ABERTO!*" + "%0A*PRIORIDADE: " + encodeURIComponent(importancia) + "*" + "%0A" + "%0ANome: " + encodeURIComponent(nome) + "%0ASetor: " + encodeURIComponent(setor) + "%0ADescrição: " + encodeURIComponent(descricao);
    var linkWhatsApp = "https://api.whatsapp.com/send?phone=" + numeroWhatsApp + "&text=" + mensagem;
  
    // Redireciona para o link do WhatsApp
    window.location.href = linkWhatsApp;

  alert("Chamado aberto com sucesso!");
});
  