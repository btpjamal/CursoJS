       // 0 1 2 3 4 // posições do indice
let num= [5,4,3,2,1]
num[5]=6 // no que seria o indice 5, adiciona o número 6, automaticamente ele cria o indice 5
num.push(7) // push() adiciona o valor na ultima posição do indice, automaticamente cria mais uma posição
// num.length // para saber o comprimento do vetor, não vai parenteses pois não é um método
// num.sort() // para sortear todos os elementos em ordem crescente
// num.indexOf() // para procurar em qual valor do indice o número se encontra
console.log(`nosso vetor é ${num}`)
console.log(`o comprimento do vetor é ${num.length}`)
console.log(`o vetor em ordem crescente: ${num.sort()}`)
console.log(`o primeiro valor do vetor é ${num[0]}, o ultimo é ${num[6]}`)

let pos= num.indexOf(8) // <--- alterar para procurar o número!!!!!
if(pos == -1){
       console.log('o valor não foi encontrado')
}else{
       console.log(`o numero está na posição ${pos}`)
}
