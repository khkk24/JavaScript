function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'foto_manha.jpg'
    }
    else if (hora >= 12 && hora <= 18){
        img.src = 'foto_tarde.jpg'
    }
    else {
        img.src = 'foto_noite.jpg'
    }
}