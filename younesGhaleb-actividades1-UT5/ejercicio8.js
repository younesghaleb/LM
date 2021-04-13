let num1 = +(prompt("introduce num1"));
let num2 = +(prompt("introduce num2"));
let num3 = +(prompt("introduce num3"));

if (num1>num2 && num1>num3){
    console.log("num1 es mayor");
}else if(num2>num1 && num2>num3){
    console.log("num2 es mayor");

}else if(num3>num1 && num3>num2){
    console.log("num3 es mayor");

}if (num1<num2 && num1<num3){
    console.log("num1 es menor");
}else if(num2<num1 && num2<num3){
    console.log("num2 es menor");

}else if(num3<num1 && num3<num2){
    console.log("num3 es menor");

};