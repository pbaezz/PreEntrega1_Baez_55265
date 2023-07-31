let anioVigen = 2023
let barril20 = 25000
let barril5 = 10000
let growler = 5000
let pago = 0
let precio = 0
let cervezaSel = 0
let presSel = 0
let stockdisp = 3
let compra = 0

alert ("Somos THE CAVE BEER presiona aceptar para continuar")
let anioDeNac = parseInt(prompt("Ingresa tu año de nacimiento AAAA"))

let edad = anioVigen - anioDeNac

if (edad >= 18){
    let nombre = prompt("Ingresa tu nombre")
    alert ("Bienvenido " +nombre+" Presiona enter o aceptar para continuar")
}else{
    alert("Sos menor de edad NO! podes comprar")
}
while (stockdisp>0){
    comprar()
}

function comprar(){
    alert("Stock de Cervezas disponibles  >>"+stockdisp+"<<  Unidades presiona Aceptar para continuar")
    let cerveza = prompt("Ingresa el Nombre de la cerveza de tu gusto **RUBIA NEGRA IPA ROJA**")
        if (cerveza=="rubia"||cerveza=="RUBIA"||cerveza=="negra"||cerveza=="NEGRA"||cerveza=="ipa"||cerveza=="IPA"||cerveza=="roja"||cerveza=="ROJA"){
            cervezaSel = cerveza.toUpperCase();
            alert("Seleccionaste " + cervezaSel +" **Presione Enter o Aceptar para comprar**")
        }else{
        alert("No vendemos esa Cerveza")
        comprar()
        }

    let presentacion = parseInt(prompt("Ingresa el nombre de la presentacion que vas a comprar **1-BARRIL 20LTS // 2-BARRIL 5LTS // 3-GROWLER 3LTS**"))
        if (presentacion == 1){
            presSel = "BARRIL x 20L"
            let pago20 = parseInt(prompt("BARRIL 20LTS su precio es $" +barril20+ " Ingresa con cuanto $ Abonas"))
            if (pago20 >= barril20){
                precio = barril20
                pago = pago20
                pagoTotal()
            }else{
                alert("Dinero Insuficiente")
                comprar()
            }
        }else if (presentacion == 2){
            presSel = "BARRIL x 5L"
            let pago5 = parseInt(prompt("BARRIL 5LTS su precio es $" +barril5+ " Ingresa con cuanto $ Abonas"))
            if (pago5 >= barril5){
                precio = barril5
                pago = pago5
                pagoTotal()
            }else{
                alert("Dinero Insuficiente")
                comprar()
            }
        }else if (presentacion == 3){
            presSel = "GROWLER x 3L"
            let pago3 = parseInt(prompt("GROWLER 3LTS su precio es $" +growler+ " Ingresa con cuanto $ Abonas"))
            if (pago3 >= growler){
                precio = growler
                pago = pago3
                pagoTotal()
            }else{
                alert("Dinero Insuficiente")
                comprar()
            }
        }else{
            alert("No vendemos esa presentacion")
        }
    }  

function pagoTotal (){
    let cambio = pago - precio
    console.log ("***THE CAVE BEER***")
    console.log ("Detalle de su compra")
    console.log ("1 "+presSel+" de Cerveza "+cervezaSel+ " $"+precio)
    console.log ("Ud Abono $"+pago)
    console.log ("Su cambio es $"+cambio)
    console.log (" ")
    compra++;
    stockdisp = stockdisp-compra;
}

