function carregar(){
  let msg = window.document.getElementById('msg')

  let foto = window.document.getElementById ('imagem')

  let data = new Date()
  let hora = data.getHours()
  let minutos = data.getMinutes()

  msg.innerHTML = `Agora, são ${hora} horas e ${minutos} minutos.`

  if (hora >= 6 && hora <= 12) {
    //BOM DIA
    msg.innerHTML += ' Bom dia.'
    foto.src = 'foto-manha.png'
    document.body.style.background = '#fcfced'
    
    
  }  else if (hora >= 12 && hora <= 17){
    //BOA TARDE
    msg.innerHTML += ' Boa tarde.'
    foto.src = 'foto-tarde.png'
    document.body.style.background = '#edc092'
        
  } else if (hora >= 18 && hora >= 0) {
    //BOA NOITE
    msg.innerHTML += ' Boa noite.'  
    foto.src = "foto-noite.png"
    document.body.style.background = '#23555e'

  } else {
    // BOA MADRUGADA
    msg.innerHTML += ' Boa madrugada.'  
    foto.src = "foto-noite.png"
    document.body.style.background = '#1c2c78'    
}
}
