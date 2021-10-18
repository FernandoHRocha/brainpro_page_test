function handleSubmit(){
    nome = document.getElementById('it_nome').value
    email = document.getElementById('it_email').value
    Email.send({
        Host: host,
        Username : sender,
        Password : sender_password,
        To : sender,
        From : sender,
        Subject : "Teste de implementação de formulário.",
        Body : "Este e-mail foi enviado utilizando js e html.\n"+nome+"\n"+email,
        }).then(
            message => console.log(message)
        );
}