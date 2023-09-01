let now = new Date()
let hora = now.getHours()
let minutes = now.getMinutes()
console.log(`Olá. Agora, são ${hora} horas e ${minutes} minutos. `)
if (hora >= 0 && hora <= 3){
  console.log('É madrugada. Descanse para não perder a hora de acordar.')
} else if (hora <= 11){
  console.log('Bom dia!')
} else if (hora <= 17){
  console.log('Boa tarde!')
} else {
  console.log('Boa noite!')
}
