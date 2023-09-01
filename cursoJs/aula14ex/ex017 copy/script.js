function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  
  
  
  if (num.value.length == 0) {
    alert('Digite um número para validar o gerador de tabuada.')
  } else {
    let n = Number(num.value) 
    tab.innerHTML = ''
    
    for(let c = 1; c <= 10; c++) { 
      let item = document.createElement('option') // option criado para ser usado de forma dinâmica
      item.text = `${n} x ${c} = ${n*c} `   // parte interna do option 
      tab.value = `${n} ${c}` //para o PHP
      tab.appendChild(item)
    }
  }
}