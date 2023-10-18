


/*let matn = "Sen gapir men esa sen bilan yozib boramiz"*/
/*let birinchiSenIndeksi = matn.indexOf('sen');*/
/*console.log(matn.lastIndexOf('sen',birinchiSenIndeksi+1));*/

let matn = "Quyosh sharqdan chiqib g'arbga botadi";
/*console.log(matn.replace(/salom|hammaga|berdim/gi,'alik'))*/

/*
let yangiMatn = matn.replace(/salom|hammaga/gi,function (soz){
    if (soz == 'Salom' || soz == 'salom'){
        return 'alik'
    }
    else if(soz == 'hammaga'){
        return 'barchaga';
    }
})
*/
/*console.log(matn.slice(-15));*/

/*
let list = [];
list.push('Dell');
list.push('45');
list.push('HP');
list.push('78');
list.push('Sony');
list.push('89');
console.log(list.length);
console.log(list);
console.log(list.pop);*/

/*
let list = [];

list.unshift('Iphone');
list.unshift('15');
list.unshift('Samsung');
list.unshift('23');
list.unshift('Redmi');
list.unshift('13');

console.log(list)

console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
*/

let sonlar = [110,95,65,121,19,9,445,32,47]
let tartiblangansonlar = sonlar.sort(function (a, b){
    return b-a;
})

console.log(tartiblangansonlar.reverse());


