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

function removerElementoPorId(idElemento){
    let elemento = document.getElementById(idElemento)

    if (elemento != null){
        elemento.remove()
    }
}


