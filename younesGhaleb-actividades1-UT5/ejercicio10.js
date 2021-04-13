let precio = +(prompt("precio "));
let cantidad = +(prompt("cantidad"));

if (cantidad>0 && cantidad<=10){
    console.log("el precio" +precio );
}else if (cantidad>=11 && cantidad<=30){
    console.log("el precio" + precio*0.05);

}else if ( cantidad>=31 && cantidad<=50){
    console.log("el precio" + precio*0.1);

}else if (cantidad>50){
    console.log("el precio" + precio*0.15);

};

