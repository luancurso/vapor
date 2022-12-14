function excluirJogo(idJogo) {
    let excluirJogo = confirm("Realmente desejaria excluir esse jogo?")

    if (excluirJogo == true) {
        window.open("excluir-jogo.php?id=" + idJogo, "_SELF")
    }
}

function removeElementoPorId(idElemento) {
    let elemento = document.getElementById(idElemento)

    if (elemento != null) {
        elemento.remove()
    }
}


function initClock() {
    let dateTime = new Date()
    let month = dateTime.getMonth() + 1
    let year = dateTime.getFullYear()
    let day = dateTime.getDate()
    let hour = dateTime.getHours()
    let minutes = dateTime.getMinutes()
    let seconds = dateTime.getSeconds()


    if (hour < 10) {
        hour = "0" + hour
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if (month < 10) {
        month = "0" + month
    }
    if (day < 10) {
        day = "0" + day
    }

    return day + "/" + month + "/" + year + " - " + hour + ":" + minutes + ":" + seconds
}

function updateClock() {
    const clock = document.getElementById("clock")
    clock.innerHTML = initClock()
    setInterval(function(){clock.innerHTML = initClock()}, 1000)
}

function fetchMessageNumber() {
    const messageNumberDisplay = document.getElementById("message-number")
    fetch('ajax/message-number.php').then(function(resposta) {
        return resposta.json()
    }).then(function(resposta) {
        const quantidade_mensagens = resposta.quantidade_mensagens
        if(quantidade_mensagens == 0){
            messageNumberDisplay.style.display = 'none';
        }else{
            messageNumberDisplay.style.display = "inline"
            messageNumberDisplay.innerHTML = quantidade_mensagens
        }
    })
}

function updateMessageNumber() {
    fetchMessageNumber()
    setInterval(fetchMessageNumber, 1000)
}

function numberRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function messageDados(){
    const messagesTable = document.getElementById("dados-message").querySelector("tbody")
    const updateTableMessages = messagesTable.querySelector("#header-messages").outerHTML
    fetch('ajax/search-message.php').then(function(result) {
         return result.json()
     }).then(function(result){
        messagesTable.innerHTML = updateTableMessages
        for(let i = 0; i <= result.length - 1; i++){
            if(result[i]['visualizado'] == 0){
                messagesTable.innerHTML = messagesTable.innerHTML + "<tr> <td class=nao_visualizado>" + result[i]['nome'] + "</td>" + "<td class='actions nao_visualizado'>" + result[i]['assunto'] + "</td>" + "<td class='actions nao_visualizado'><a href=visualizar-mensagens.php?id=" + result[i]['id'] + ">Visualizar</a></td>" + "</td>" + "<td class='actions nao_visualizado'><a href=arquivar-mensagem.php?id=" + result[i]['id'] + ">Arquivar</a></td></tr>"
            }else{
                messagesTable.innerHTML = messagesTable.innerHTML + "<tr> <td>" + result[i]['nome'] + "</td>" + "<td class=actions>" + result[i]['assunto'] + "</td>" + "<td class=actions><a href=visualizar-mensagens.php?id=" + result[i]['id'] + ">Visualizar</a></td>" + "</td>" + "<td class=actions><a href=arquivar-mensagem.php?id=" + result[i]['id'] + ">Arquivar</a></td></tr>"
            }
        }
     })
}

function updateMessagesDados(){ 
    messageDados()
    setInterval(messageDados, 10000)
}

function upperCaseInput(){
    let inputUpper = document.getElementById("input_prin")
    console.log(inputUpper)
}

function capsLock(elemento){

    elemento.value = elemento.value.toUpperCase()
} 

function primeira_capslock(elemento){
    elemento.value = elemento.value[0].toUpperCase() + elemento.value.slice(1).toLowerCase()
}

 