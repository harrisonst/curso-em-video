

function contar(){ // 1 - primerio passo, pegar os controles. Significa dizer ao js que os controles existem(caixas de inserção dos números) abaixo:
  let from = document.getElementById('from')
  let to = document.getElementById('to')
  let path = document.getElementById('path')
  let result = document.getElementById('result')//3 - terceiro passo. Criar a relação de div com o código
  

  /* 2 - verificar se os dados estão faltando, se falta digitar algum número.
   Para isso, vamos criar o alert dentro do if. Escreva e teste o código pra ver se está ok*/
  if (from.value.length == 0 || to.value.length == 0 || path.value.length == 0){  
      window.alert(`[ERRO] Faltam dados.`)
      result.innerHTML = `Impossível contar` // 9 - nono passo. Receber este avisoo.
  } else {
      result.innerHTML = `Contando: ` //3 - terceiro passo(continuação). Fazer o algorítimo de contagem de maneira simples.
      /*4 - quarto passo, fazer com que as caixas de texto sejam convertidas para 
      que recebam valores númericos. Pego o valor de from, to e path e converto para 
      número através do .value*/
      let fim = Number(to.value) 
      let passo = Number(path.value)
      let inicio = Number(from.value)
      if (passo <= 0){ //10 - décimo passo
        window.alert(`Passo inválido. Considerando Passo 1`)
        passo = 1
      }
      if (inicio < fim) { 
        /*5 - quinto passo, fazer o algoritmo da contagem. O mais simples é contar do início ao fim
        somando o passo. Neste caso, podemos usar o while, do while ou o for. Para a aula, 
        o escolhido é o for */
        for (let count = inicio; count <= fim; count += passo){
          result.innerHTML += ` ${count} \u{1f449} `//6 - sexto passo, será apresentado o result concatenado (+=) com a string formatada. Para colocar o unicode, acesse o site unicode.org/emoji/charts... Detalhe: o emoji só funciona entre crases ``.
        }
        /*result.innerHTML += `\u{1F3C1}` //6- sexto passo(continuação), não esquecer de concatenar o inner com o emoji */
        } else { /*7 -sétimo passo(continuação): preparar para o Contador de Reversão(do maior para o menor). Fazer o if e encaixar quinto e sexto passos dentro do if.*/
            for (let count = inicio; count >= fim; count -= passo){ // contador regressivo
              result.innerHTML += ` ${count} \u{1f449} `
          }
          result.innerHTML += `\u{1F3C1}` //8- oitavo passo, deixar só essa mensagem final (eliminando o sexto passo) para deixar o código mais limpo          
        }  
    }
  }


  
/*
 
function contar(){
  let from = document.getElementById('from')
  let to = document.getElementById('to')
  let path = document.getElementById('path')
  let result = document.getElementById('result')

  if (from.value.length == 0 || to.value.length == 0 || path.value.length == 0){  
        window.alert(`[ERRO] Faltam dados.`)
    } else {
        result.innerHTML = `Contando: `
        let fim = Number(to.value) 
        let passo = Number(path.value)
        let inicio = Number(from.value)
        if (passo <= 0){ //10 - décimo passo
        window.alert(`Passo inválido. Considerando Passo 1`)
          passo = 1
      }
        if (inicio < fim) { 
            for (let count = inicio; count <= fim; count += passo){
          result.innerHTML += ` ${count} \u{1f449} `
        }
        } else {
           for (let count = inicio; count >= fim; count -= passo){ 
              result.innerHTML += ` ${count} \u{1f449} `
          }
          result.innerHTML += `\u{1F3C1}`
        }
      }
  }
   
  Dicas: veja o Inspecionar no navedor para encontrar enventuais erros de código.

  */