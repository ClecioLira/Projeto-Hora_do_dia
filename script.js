function carregar() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas. <br>`
    if (hora >= 5 && hora < 12) {
        //Bom dia
        msg.innerHTML += `Bom dia!`
        img.src = 'fotoManha.jpg'
        document.body.style.backgroundColor = '#E0B23C'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        msg.innerHTML += `Boa tarde!`
        img.src = 'fotoTarde.jpg'
        document.body.style.backgroundColor = '#FE6802'
    } else {
        //Boa noite
        msg.innerHTML += `Boa noite!`
        img.src = 'fotoNoite.jpg'
        document.body.style.backgroundColor = '#053469' 
    }
}