const dinero = 200;
const totalAPagar = 500;
const tarjeta = false;
const cheque = true;

if(dinero >= totalAPagar){
    console.log(`Puede comprar`)
} else if(tarjeta) {
    console.log('Si puedo pagar con tarjeta')
} else if(cheque){
    console.log('Si tengo un cheque')
}

else {
    console.log(`Fondos insuficiente`);

}