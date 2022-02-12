let IPN = '3330613005';
IPN = IPN.split('').map (i => +i);
let [a,b,c,d,e]=IPN;
let arr = [a,b,c,d,e].join('');
let arrMS = (+arr)*60*60*1000*24;
let dateCount = new Date (1899, 11, 31, 12, 0, 0);
let dateCountMS = +dateCount;
let dCountMS = (arrMS+dateCountMS);
let DateBD = new Date(dCountMS);
console.log (`Дата рождения: ${DateBD}`);

let DNow = new Date ();
let diff = DNow - DateBD;
diff = Math.round (diff/1000/60/60/24/365);
console.log(`Количество полных лет: ${diff}`);


if (IPN [8] % 2 == 0) {
    console.log (`Пол обладателя ИНН: Женский`);}
else {console.log (`Пол обладателя ИНН: Мужской`);}


let X = ((IPN[0]*(-1) + IPN[1]*(5) + IPN[2]*(7) + IPN[3]*(9) + IPN[4]*(4) + IPN[5]*(6) + IPN[6]*(10) + IPN[7]*(5) + IPN[8]*(7))%11)%10;
if (X === IPN[9]) {
    console.log (`ИНН существует`);
}
else {console.log (`Такого ИНН не существует!!!Это подделка!`)}
