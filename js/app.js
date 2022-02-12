let IPN = '3261900854'
IPN = IPN.split('').map (i => +i);
let [a,b,c,d,e]=IPN;
let arr = [a,b,c,d,e].join('');
console.log(arr);

let dFirst = new Date (1899, 11, 31, 12, 0, 0);
console.log (+dFirst);



let dBD = [arr]*60*60*1000*24 + dFirst;
console.log (dBD);





