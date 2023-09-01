var idade = 18
console.log(`Você tem ${idade} anos.`)
if (idade <= 15) {
    console.log('Você não vota.')
} else if (idade >= 16 && idade <= 17 || idade >= 65){
  console.log('Seu voto é facultativo.')
} else {
  console.log('Seu voto é obrigatório.')
}