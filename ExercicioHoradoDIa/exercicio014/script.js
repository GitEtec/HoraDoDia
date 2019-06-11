function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=0 && hora < 12) {
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#8bdbe6'
    }else if (hora >=12 && hora < 18) {
        //Boa tarde   
        img.src = 'tarde.png'
        document.body.style.background = '#f4a719'
    }else {
        //Boa noite
        document.body.style.background = '#014b54'
        img.src = 'noite.png'
    }
    
}   
