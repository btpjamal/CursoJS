let numero= document.getElementById('numero')
let gerar_tabuada= document.getElementById('gerar_tabuada')
let resultado= document.getElementById('resultado')

function gerar_resultado(){
    resultado.innerHTML=('')
    if(numero.value.length == 0){
        window.alert('Nenhum número inserido, tabuada do 0 sendo considerada...')
    }
    let n= Number(numero.value)
    for(let contador= 1; contador <= 10; contador += 1){
        let res= n * contador;
        resultado.innerHTML+=(`${n} * ${contador} = ${res}
`)
    }
}