function verificar(){
    var ano_nascimento= document.getElementById('txtano')
    var botaoM= document.getElementById('botaoM')
    var botaoF= document.getElementById('botaoF')
    var resultado= document.getElementById('resultado')
    var img= document.getElementById('foto')
    var data= new Date()
    var ano= data.getFullYear()
    var idade= ano - ano_nascimento.value
    var genero= ''


    if(ano_nascimento.value.length == 0 || ano_nascimento.value > ano){
        alert('[ERRO] verifique os dados e tente novamente')
    }else if(botaoM.checked){
        genero='Homem'
        if(idade >=0 && idade <15){
            //criança
            img.setAttribute('src', 'criança_M.jfif')
        }else if(idade >=15 && idade <25){
            //jovem
            img.setAttribute('src', 'jovem_M.jfif')
        }else if(idade >=25 && idade <55){
            //adulto
            img.setAttribute('src', 'adulto_M.jfif')
        }else{
            //idoso
            img.setAttribute('src', 'idoso_M.jfif')
        }
    }else if(botaoF.checked){
        genero='Mulher'
        if(idade >=0 && idade <15){
            //criança
            img.setAttribute('src', 'criança_F.jfif')
        }else if(idade >=15 && idade <25){
            //jovem
            img.setAttribute('src', 'jovem_F.jfif')
        }else if(idade >=25 && idade <55){
            //adulto
            img.setAttribute('src', 'adulto_F.jfif')
        }else{
            //idoso
            img.setAttribute('src', 'idoso_F.jfif')
        }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML=(`Detectamos ${genero}, com ${idade} anos`)
    resultado.appendChild(img)
}