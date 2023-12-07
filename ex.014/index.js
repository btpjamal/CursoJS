function pageload(){
    var txt_hora = document.getElementById('mensagem_hora')
    var img= document.getElementById('imagem')
    var data= new Date()
    var hora=data.getHours()
    var min= data.getMinutes()
    txt_hora.innerHTML= (`agora são ${hora} horas e ${min} minutos`)
    
    if(hora >= 0 && hora < 12){
        img.src= 'paisagem_manha.jfif'
        document.body.style.background= '#2ECCFA'
    }else if(hora >=12 &&hora <18){
        img.src= 'paisagem_tarde.jfif'
        document.body.style.background= '#DBA901'
    }else{
        img.src= 'paisagem_noite.jfif'
        document.body.style.background= '#240B3B'
    }




}


