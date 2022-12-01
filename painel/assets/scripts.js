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

function excluirIdioma(idIdioma){
    let excluirIdioma = confirm("Realmente deseja excluir esse Idioma ?")

    if (excluirIdioma == true){
        window.open("excluir-idioma.php?id=" + idIdioma, "_SELF")
    }
}