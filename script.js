function converter() {
var selectUm = document.getElementById("selecao1").value
var selecaoDois = document.getElementById("selecao2").value
var valorInput = Number(document.getElementById("valor-moeda").value)
var money1 = document.getElementById("money1")
var money2 = document.getElementById("money2")


        if(selectUm == "(BRL) Real brasileiro") {
            switch (selectUm && selecaoDois) {
                case '(BRL) Real brasileiro' && '(USD) Dolar americano':
                 var calculo = valorInput * "0.18"
              money1.innerHTML = valorInput.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
              money2.innerHTML = calculo.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                    break;
                case '(BRL) Real brasileiro' && '(EUR) Euro':
                var calculo = valorInput * "0.19"
              money1.innerHTML = valorInput.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
              money2.innerHTML = calculo.toLocaleString('eu', {style: 'currency', currency: 'EUR'})
                   break;
                case '(BRL) Real brasileiro' && '(ARS) Peso Argentino':
                var calculo = valorInput * "27.21"
                money1.innerHTML = valorInput.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                money2.innerHTML = calculo.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})
                
                   break;
                case '(BRL) Real brasileiro' && '(JPY) lene Japonês':
                var calculo = valorInput * "26.72"
                money1.innerHTML = valorInput.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                   money2.innerHTML = calculo.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})
                   break;
                case '(BRL) Real brasileiro' && '(GBP) Libra Esterbina':
                var calculo = valorInput * "0.17"
                money1.innerHTML = valorInput.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                money2.innerHTML = calculo.toLocaleString('en-RU', {style: 'currency', currency: 'GBP'})
                   break;
                default:
                    console.log("nao esta no real")
              }
        }/* fim if real */

           if(selectUm == "(USD) Dolar americano") {
               switch (selectUm && selecaoDois) {
                   case '(USD) Dolar americano' && '(BRL) Real brasileiro':
                var calculo = valorInput * "5.41"
                money1.innerHTML = valorInput.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                money2.innerHTML = calculo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                       break;
                  case '(USD) Dolar americano' && '(EUR) Euro':
                var calculo = valorInput * "1.02"
                money1.innerHTML = valorInput.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                money2.innerHTML = calculo.toLocaleString('eu', {style: 'currency', currency: 'EUR'})
                       break;
                  case '(USD) Dolar americano' && '(ARS) Peso Argentino':
                var calculo = valorInput * "147.37"
                money1.innerHTML = valorInput.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                money2.innerHTML = calculo.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})
                       break;
                 case '(USD) Dolar americano' && '(JPY) lene Japonês':
                var calculo = valorInput * "144.72"
                money1.innerHTML = valorInput.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                money2.innerHTML = calculo.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})
                       break;
                case '(USD) Dolar americano' && '(GBP) Libra Esterbina':
                var calculo = valorInput * "0.89"
                money1.innerHTML = valorInput.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                money2.innerHTML = calculo.toLocaleString('en-RU', {style: 'currency', currency: 'GBP'}) 
                       break;
                   default:
                  console.log("nao esta no dolar")
                 }
           }  /* fim if dolar */

          
          if(selectUm == "(EUR) Euro") {
              switch (selectUm && selecaoDois) {
                case '(EUR) Euro' && '(BRL) Real brasileiro':
                var calculo = valorInput * "5.30"
                money1.innerHTML = valorInput.toLocaleString('eu', {style: 'currency', currency: 'EUR'})
                money2.innerHTML = calculo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                        break;
                case '(EUR) Euro' && '(USD) Dolar americano':
                var calculo = valorInput * "0.98"
                money1.innerHTML = valorInput.toLocaleString('eu', {style: 'currency', currency: 'EUR'})
                money2.innerHTML = calculo.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                       break;
                case '(EUR) Euro' && '(ARS) Peso Argentino':
                var calculo = valorInput * "144.40"
                money1.innerHTML = valorInput.toLocaleString('eu', {style: 'currency', currency: 'EUR'})
                money2.innerHTML = calculo.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})
                       break;
                case '(EUR) Euro' && '(JPY) lene Japonês':
                var calculo = valorInput * "141.78"
                money1.innerHTML = valorInput.toLocaleString('eu', {style: 'currency', currency: 'EUR'})
                money2.innerHTML = calculo.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})
                       break;
                case '(EUR) Euro' && '(GBP) Libra Esterbina':
                var calculo = valorInput * "0.88"
                money1.innerHTML = valorInput.toLocaleString('eu', {style: 'currency', currency: 'EUR'})
                money2.innerHTML = calculo.toLocaleString('en-RU', {style: 'currency', currency: 'GBP'})
                       break;
                  default:
               console.log("nao esta no euro")
                }
          }/* nao esta no if euro */

             if(selectUm == "(ARS) Peso Argentino") {
                 switch (selectUm && selecaoDois) {
                case '(ARS) Peso Argentino' && '(BRL) Real brasileiro':
                var calculo = valorInput * "0.035"
                money1.innerHTML = valorInput.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})
                money2.innerHTML = calculo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                       break;
                case '(ARS) Peso Argentino' && '(USD) Dolar americano':
                var calculo = valorInput * "0.0067"
                money1.innerHTML = valorInput.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})
                money2.innerHTML = calculo.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                       break;
                case '(ARS) Peso Argentino' && '(EUR) Euro':
                var calculo = valorInput * "0.0069"
                money1.innerHTML = valorInput.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})
                money2.innerHTML = calculo.toLocaleString('eu', {style: 'currency', currency: 'EUR'})
                       break;
                case '(ARS) Peso Argentino' && '(JPY) lene Japonês':
                var calculo = valorInput * "0.98"
                money1.innerHTML = valorInput.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})
                money2.innerHTML = calculo.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})
                       break;
                case '(ARS) Peso Argentino' && '(GBP) Libra Esterbina':
                var calculo = valorInput * "0.0060"
                money1.innerHTML = valorInput.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})
                money2.innerHTML = calculo.toLocaleString('en-RU', {style: 'currency', currency: 'JPY'})
                       break;
                     default:
                console.log("nao esta no peso argentino")
                   }
             }/* fim do if peso argentino */

            if(selectUm == "(JPY) lene Japonês") {
                switch (selectUm && selecaoDois) {
                case '(JPY) lene Japonês' && '(BRL) Real brasileiro':
                var calculo = valorInput * "0.036"
                money1.innerHTML = valorInput.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})
                money2.innerHTML = calculo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                        break;
                case '(JPY) lene Japonês' && '(USD) Dolar americano':
                var calculo = valorInput * "0.0069"
                money1.innerHTML = valorInput.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})
                money2.innerHTML = calculo.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                        break;
                case '(JPY) lene Japonês' && '(EUR) Euro':
                var calculo = valorInput * "0.0070"
                money1.innerHTML = valorInput.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})
                money2.innerHTML = calculo.toLocaleString('eu', {style: 'currency', currency: 'EUR'})
                        break;
                case '(JPY) lene Japonês' && '(GBP) Libra Esterbina':
                var calculo = valorInput * "0.0061"
                money1.innerHTML = valorInput.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})
                money2.innerHTML = calculo.toLocaleString('en-RU', {style: 'currency', currency: 'GBP'})
                        break;
                case '(JPY) lene Japonês' && '(ARS) Peso Argentino':
                var calculo = valorInput * '' 
                money1.innerHTML = valorInput.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})
                money2.innerHTML = calculo.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})
                        break;
                    default:
                 console.log("nao encontrou no lene japones")
                  }
            }/* fim if lene japonês */

             if(selectUm == "(GBP) Libra Esterbina") {
                 switch (selectUm && selecaoDois) {
                case '(GBP) Libra Esterbina' && '(BRL) Real brasileiro':
                var calculo = valorInput * "5.84"
                money1.innerHTML = valorInput.toLocaleString('en-RU', {style: 'currency', currency: 'GBP'})
                money2.innerHTML = calculo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                         break;
                case '(GBP) Libra Esterbina' && '(USD) Dolar americano':
                var calculo = valorInput * "1.13"
                money1.innerHTML = valorInput.toLocaleString('en-RU', {style: 'currency', currency: 'GBP'})
                money2.innerHTML = calculo.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                         break;
                case '(GBP) Libra Esterbina' && '(EUR) Euro':
                var calculo = valorInput * "1.15"
                money1.innerHTML = valorInput.toLocaleString('en-RU', {style: 'currency', currency: 'GBP'})
                money2.innerHTML = calculo.toLocaleString('eu', {style: 'currency', currency: 'EUR'})
                         break;
                case '(GBP) Libra Esterbina' && '(JPY) lene Japonês':
                var calculo = valorInput * "163.70"
                money1.innerHTML = valorInput.toLocaleString('en-RU', {style: 'currency', currency: 'GBP'})
                money2.innerHTML = calculo.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY'})
                         break;
                     default:
                 console.log("nao esta no libra esterbina")
                   }
             }/* fim if libra esterbina */
             
}










function mudanca() {
var selectUm = document.getElementById("selecao1").value
var selecaoDois = document.getElementById("selecao2").value
var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var money1 = document.getElementById("money1")
var money2 = document.getElementById("money2")
var valor = 0

    switch (selectUm) {
        case '(BRL) Real brasileiro' :
            img1.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGdQR17__6A580d4sseAFE8cgO_V1n42PxqHpmCr3GLtWYZht86ACVgY&s=10'
            money1.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(valor)
            break;
            case '(USD) Dolar americano':
            img1.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc49x2OqldtRPR5Tb9fn8N_ww7UqA4O-5lA-VzETeGwu_uU4fBtILvRD4&s=10'
            money1.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' }).format(valor)
            break;
            case '(EUR) Euro':
            img1.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqitNclQ1bqsjtbTb_I9s1hGMM3irFnrD9cvtu_ap3zxPYgkk0-BozL1q&s=10'
            money1.innerHTML = new Intl.NumberFormat('eu', {style: 'currency', currency: 'EUR' }).format(valor)
            break;
            case '(ARS) Peso Argentino':
            img1.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGGUcqplb4DPrUosLC-5l18TH0qcyZ7I9KJ_hmvu4oVuZqKMg17pAg7M&s=10'
            money1.innerHTML = new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS' }).format(valor)
            break;
            case '(JPY) lene Japonês':
            img1.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyF7-ro8vZ6A4I2FytqVVgdK-c_kzP2OTb_T_KKbST3SWAxHBbJjf6TM&s=10'
            money1.innerHTML = new Intl.NumberFormat('ja-JP', {style: 'currency', currency: 'JPY' }).format(valor)
            break;
            case '(GBP) Libra Esterbina':
            img1.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JzDImmNFYKxX3cIVt9AIa1y4YhhaSUmv7P-sf8bJFT7fbmXCRfgkWqGV&s=10'
            money1.innerHTML = new Intl.NumberFormat('en-RU', {style: 'currency', currency: 'GBP' }).format(valor)
            break;
        default:
            console.log("caiu aqui")
      }
      
      
      switch (selecaoDois) {
          case '(BRL) Real brasileiro' :
              img2.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGdQR17__6A580d4sseAFE8cgO_V1n42PxqHpmCr3GLtWYZht86ACVgY&s=10'
              money2.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor)
              break;
              case '(USD) Dolar americano':
              img2.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc49x2OqldtRPR5Tb9fn8N_ww7UqA4O-5lA-VzETeGwu_uU4fBtILvRD4&s=10'
              money2.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' }).format(valor)
              break;
              case '(EUR) Euro':
              img2.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqitNclQ1bqsjtbTb_I9s1hGMM3irFnrD9cvtu_ap3zxPYgkk0-BozL1q&s=10'
              money2.innerHTML = new Intl.NumberFormat('eu', {style: 'currency', currency: 'EUR' }).format(valor)
              break;
              case '(ARS) Peso Argentino':
              img2.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGGUcqplb4DPrUosLC-5l18TH0qcyZ7I9KJ_hmvu4oVuZqKMg17pAg7M&s=10'
              money2.innerHTML = new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS' }).format(valor)
              break;
              case '(JPY) lene Japonês':
              img2.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyF7-ro8vZ6A4I2FytqVVgdK-c_kzP2OTb_T_KKbST3SWAxHBbJjf6TM&s=10'
              money2.innerHTML = new Intl.NumberFormat('ja-JP', {style: 'currency', currency: 'JPY' }).format(valor)
              break;
              case '(GBP) Libra Esterbina':
              img2.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JzDImmNFYKxX3cIVt9AIa1y4YhhaSUmv7P-sf8bJFT7fbmXCRfgkWqGV&s=10'
              money2.innerHTML = new Intl.NumberFormat('en-RU', {style: 'currency', currency: 'GBP' }).format(valor)
              break;
          default:
              
        }
}
