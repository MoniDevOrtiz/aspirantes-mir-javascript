// escribe la función suma acá
function sum (numero){
    if(numero <= 1){
        return numero;   
    }
return numero + sum(numero-1)
}


// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120