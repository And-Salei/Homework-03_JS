let IPN = '3261900854'
IPN = IPN.split('').map (i => +i);
let [a,b,c,d,e]=IPN;
let arr = [a,b,c,d,e].join('');
console.log(+arr);


let dFirst = new Date (1899, 11, 31, 12, 0, 0);
console.log (+dFirst);
let dFirst1 = +dFirst/60/60/1000/24/365;
console.log (dFirst1);


let dCount = (arr-dFirst1)/365;
console.log (dCount);



