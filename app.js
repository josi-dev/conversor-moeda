let selectUm = document.getElementById("selecao1")
let selectDois = document.getElementById("selecao2")
let bandeiras = document.querySelectorAll("#boxResultados img")
let valor = document.getElementById("valor")
let resultado1 = document.getElementById("resultado1")
let resultado2 = document.getElementById("resultado2")



async function calcular() {
    
    var tipo1 = selectUm.value.substring(0,3)
    var tipo2 = selectDois.value.substring(0,3)
    var tipos = tipo1 + tipo2
    
    
    let api = await fetch('https://economia.awesomeapi.com.br/last/' + tipo1 + '-' + tipo2).then(res => res.json())
    
    
    let calculo = valor.value * api[tipos].bid
    
    
    
    formatacao(calculo,tipo1,tipo2)
    
}




function troca() {
    
    switch (selectUm.value) {
        case "BRL Real Brasileiro" :
            bandeiras[0].setAttribute("src","https://st.depositphotos.com/2274151/2437/i/380/depositphotos_24372663-stock-photo-brazil-flag-button.jpg")
            
            break;
        case "USD Dólar americano":
            bandeiras[0].setAttribute("src","https://static4.depositphotos.com/1002188/277/i/380/depositphotos_2772765-stock-photo-usa-flag-button.jpg")
            break;
        case "ARS Peso Argentino":
            bandeiras[0].setAttribute("src","https://st.depositphotos.com/2274151/2828/i/380/depositphotos_28286525-stock-photo-argentina-round-glass-button.jpg")
            break;
        case "EUR Euro":
            bandeiras[0].setAttribute("src","https://static3.depositphotos.com/1002188/257/i/380/depositphotos_2574012-stock-photo-european-union-button.jpg")
            break;
        
        default:
            //bandeiras.setAttribute("src","")
      }
    
    
    
    
    
    
    switch (selectDois.value) {
        case "BRL Real Brasileiro" :
            bandeiras[1].setAttribute("src","https://st.depositphotos.com/2274151/2437/i/380/depositphotos_24372663-stock-photo-brazil-flag-button.jpg")
            
            break;
        case "USD Dólar americano":
            bandeiras[1].setAttribute("src","https://static4.depositphotos.com/1002188/277/i/380/depositphotos_2772765-stock-photo-usa-flag-button.jpg")
            break;
        case "ARS Peso Argentino":
            bandeiras[1].setAttribute("src","https://st.depositphotos.com/2274151/2828/i/380/depositphotos_28286525-stock-photo-argentina-round-glass-button.jpg")
            break;
        case "EUR Euro":
            bandeiras[1].setAttribute("src","https://static3.depositphotos.com/1002188/257/i/380/depositphotos_2574012-stock-photo-european-union-button.jpg")
            break;
        
        default:
            //bandeiras.setAttribute("src","")
      }
    
    
    
    
}





function formatacao(calculo,type1,type2) {
    
    var input = Number(document.getElementById("valor").value)
    
    
    
    switch (type1) {
        case 'BRL' :
            resultado1.innerHTML = input.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            
            break;
        case 'USD':
        resultado1.innerHTML = input.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
            break;
            
        case 'ARS':
        resultado1.innerHTML = input.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})
            break;
            
        case 'EUR':
        resultado1.innerHTML = input.toLocaleString('EUR', {style: 'currency', currency: 'EUR'})
            break;
        default:
            
      }
    
    
    
    
    switch (type2) {
        case 'BRL' :
            resultado2.innerHTML = calculo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            
            break;
        case 'USD':
        resultado2.innerHTML = calculo.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
            break;
            
        case 'ARS':
        resultado2.innerHTML = calculo.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})
            break;
            
        case 'EUR':
        resultado2.innerHTML = calculo.toLocaleString('EUR', {style: 'currency', currency: 'EUR'})
            break;
            
        default:
            
      }
    
    
    
    
}





