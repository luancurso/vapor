function excluirJogo(idJogo){
    let excluirJogo = confirm("Realmente deseja excluir esse jogo ?")

    if (excluirJogo == true){
        window.open("excluir-jogo.php?id=" + idJogo, "_SELF")
    }
}

function removeErrorMensagem(){
    let errormensagem = document.getElementById("error")
    

    if (errormensagem != null){
        setTimeout(function(){
            errormensagem.remove()
        }, 2000)   
    } 
}

function removeErrorMensagemPainel(){
    let errormensagempainel = document.getElementById("error_message")
    

    if (errormensagempainel != null){
        setTimeout(function(){
            errormensagempainel.remove()
        }, 2000)   
    } 
}