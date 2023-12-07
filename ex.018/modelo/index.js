let numerotxt= document.getElementById('numerotxt')
let adicionar= document.getElementById('adicionar')
let resultado= document.getElementById('resultado')
let msg= document.getElementById('optionmsg')
let formulario= document.getElementById('formulario')
let lista= []
function adicionar_lista(){
    
    let numero= Number(numerotxt.value);

    if(numerotxt.value === '' || numerotxt.value === 0 && numerotxt.value <= 0 || numerotxt.value > 100){
        window.alert('digite um número válido')
        return // para a execução do bloco
    }
    if(lista.includes(numero)){
        window.alert('O número já foi adicionado')
        return // para a execução do bloco
    }else{
        msg.innerHTML=('')
        lista.push(numero)
        }
            
        let option= document.createElement('option');
        option.text= (`Número ${numero} adicionado`);
        resultado.appendChild(option);
}

function preencher_formulario(){
    let p1= document.getElementById('1')
    let p2= document.getElementById('2')
    let p3= document.getElementById('3')
    let p4= document.getElementById('4')
    let p5= document.getElementById('5')

    if(numerotxt.value === ''){
        window.alert('adicione valores antes de finalizar!')
        return
    }else{
        p1.innerHTML=(`Ao todo, temos ${lista.length} números cadastrados`)
        p2.innerHTML=(`O menor número é ${Math.min(...lista)}`)
        p3.innerHTML=(`O maior número é ${Math.max(...lista)}`)
        
        let soma= lista.reduce((total, valor_atual)=> total + valor_atual, 0)
        p4.innerHTML=(`Somando todos os valores, temos ${soma}`)
        let media= soma / lista.length
        p5.innerHTML=(`A média dos valores digitados é: ${media}`)
    }

}

