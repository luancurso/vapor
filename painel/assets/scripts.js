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

function excluirPlataforma(idPlataforma){
    let excluirPlataforma = confirm("Realmente deseja excluir esse Plataforma ?")

    if (excluirPlataforma == true){
        window.open("excluir-plataforma.php?id=" + idPlataforma, "_SELF")
    }
}

function excluirCategoria(idCategoria){
    let excluirCategoria = confirm("Realmente deseja excluir esse Categoria ?")

    if (excluirCategoria == true){
        window.open("excluir-categoria.php?id=" + idCategoria, "_SELF")
    }
}