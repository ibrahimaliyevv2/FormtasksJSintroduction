let num1;
let num2;

while(true){
do{
    num1=prompt("Birinci ededi daxil edin:");
}while(isNaN(num1));

do{
    num2=prompt("Ikinci ededi daxil edin:");
}while(isNaN(num2));

alert(Number(num1)+Number(num2));
}