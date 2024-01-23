alert("Hello World!");
let numberOne = 1;
let numberTwo = 2;
let soma = numberOne + numberTwo;
console.log(`Valor da soma ${soma}\n`);

let variable = 3;
if (typeof variable == Number ){
    console.log(`Eh numero\n`);
}else{
    console.log(`Nao eh um numero\n`);
}

let variable2 = 'Ola';
if (typeof variable == String ){
    console.log(`Eh string\n`);
}else{
    console.log(`Nao eh um string\n`);
}

let variable3= true;
if (typeof variable == Boolean ){
    console.log(`Eh Bolleano\n`);
}else{
    console.log(`Nao eh Booleano\n`);
}

const sub = numberOne - numberTwo

alert(sub);

const mult = numberOne * numberTwo

alert(mult)

const div = numberOne / numberTwo

alert(div)

const isEvenNumber = 4

if (isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}

const isOddNumber = 5

if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}
