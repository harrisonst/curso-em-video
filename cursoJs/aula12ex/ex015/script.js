function verificar() {
 let data = new Date()
 let ano = data.getFullYear()
 let formAno = window.document.getElementById('txtano')
 let res = document.querySelector('div#res')

  if(formAno.value.length == 0 || Number(formAno.value) > ano){
    window.alert('[ERRO]Verifique os dados e tente novamente.')
  } else {
      let fsex = document.getElementsByName('radsex')
      let idade = ano - Number(formAno.value)
      let genero = ''
      let img = document.createElement('img')
      img.setAttribute('id', 'foto') //semelhante a criar a tag <img id='foto'>
      if (fsex[0].checked) {
        genero = 'homem'
        document.body.style.background = '#a75c54'
        if (idade >= 0 && idade <10) {
            //criança
            img.setAttribute('src','homem-crianca.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src','homem-jovem.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src','homem-adulto.png')
        } else if (idade < 110){
          //idoso
          img.setAttribute('src', 'homem-idoso.png')
        } else {
          img.setAttribute('src', 'mummy.png')
        }
      } else if (fsex[1].checked){
        genero = 'mulher'
        document.body.style.background = 'rgb(240, 196, 239)'
        if (idade >=0 && idade <10){
            //criança
            img.setAttribute('src','mulher-crianca.png')
        } else if (idade <21) {
            //jovem
            img.setAttribute('src','mulher-jovem.png')
        } else if (idade <50) {
            //adulto
            img.setAttribute('src','mulher-adulta.png')
        } else if (idade <110){
            //idoso
            img.setAttribute('src','mulher-idosa.png')
        } else {
            img.setAttribute('src', 'mummy.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
      res.appendChild(img)
  }

}