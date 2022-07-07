



function converter() {
var selecaoCima = document.getElementById("select-top").value
var selecaoBaixo = document.getElementById("select-bottom").value
var valor = document.getElementById("valor").value
var textoValor1 = document.getElementById("textoValor1")
var textoValor2 = document.getElementById("textoValor2")




let real = 5.42
let dolar = 0.19

    if (selecaoCima == "dolar americano" && selecaoBaixo == "real brasileiro") {
        var calculo = valor * real
        textoValor1.innerHTML = "$ " + valor
        textoValor2.innerHTML = calculo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
    }
    if (selecaoCima == "real brasileiro" && selecaoBaixo == "dolar americano") {
        var calculo = valor * dolar
textoValor1.innerHTML = "R$ " + valor
textoValor2.innerHTML = calculo.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
    
    
    
}








function troca() {

var selecaoCima = document.getElementById("select-top").value

var selecaoBaixo = document.getElementById("select-bottom").value

var imgCima = document.getElementById("img-top")
var imgBaixo = document.getElementById("img-bottom")




    if (selecaoCima == "dolar americano") {
        document.getElementById("img-top").src ="https://st2.depositphotos.com/1049549/9883/i/950/depositphotos_98833140-stock-photo-the-usa-flag.jpg"
        
    }
    
    if (selecaoCima == "real brasileiro") {
        document.getElementById("img-top").src ="https://st.depositphotos.com/1049549/1396/i/950/depositphotos_13961394-stock-photo-the-brazilian-flag.jpg"
        console.log("segundo")
    }
    
    if (selecaoBaixo == "dolar americano") {
        document.getElementById("img-bottom").src ="https://st2.depositphotos.com/1049549/9883/i/950/depositphotos_98833140-stock-photo-the-usa-flag.jpg"
    }
    
    if (selecaoBaixo == "real brasileiro") {
        document.getElementById("img-bottom").src ="https://st.depositphotos.com/1049549/1396/i/950/depositphotos_13961394-stock-photo-the-brazilian-flag.jpg"
    }
    
}




