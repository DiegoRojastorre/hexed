let rand = Math.floor(Math.random() * 20);  
let a = new Array(rand);  

console.log("length of a = " + a.length);


for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * 500);
}


console.log(a);