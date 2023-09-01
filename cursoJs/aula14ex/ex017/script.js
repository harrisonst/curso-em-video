function tabuada (){
  let num = document.getElementById('txtn')
  let tab = document.getElementById('selectab')
  

  if (num.value.length == 0){
      alert('Por favor, digite um número.')
  } else {
      let number = Number(num.value)
      let c = 1
      tab.innerHTML = '' //limpa a tabuada antes de gerar outra
      while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${number} x ${c} = ${number * c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
      }

  }
  
  

 
}

