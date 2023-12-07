var inicio= document.getElementById('inicio')
var fim= document.getElementById('fim')
var passo= document.getElementById('passo')
var botao= document.getElementById('botao_contar')
var resposta= document.getElementById('resposta')

function gerar_resultado(){
    let i= Number(inicio.value)
    let f= Number(fim.value)
    let p= Number(passo.value)
    resposta.innerHTML=('')
    if(i==0 || f==0 || p<=0){
        window.alert('dados inválidos, considerando passo como 1')
        p =1
    }
    if(i < f){ //ordem crescente
        for(let contagem= i; contagem <= f; contagem += p){
            resposta.innerHTML+=(`${contagem} < `)
        } 
    }else{    // ordem decrescente
        for(let contagem = i; contagem >= f; contagem -= p){
            resposta.innerHTML+=(`${contagem} > `)
        }
    }
    resposta.innerHTML+=('**')
}