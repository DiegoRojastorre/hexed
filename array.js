let a1 = [1, 2, 3, 4, 5];
let a2 = a1;  


for (let i = 0; i < a2.length; i++) {
  a2[i] = a2[i] + 1;
}


for (let i = 0; i < a1.length; i++) {
  console.log("a1[" + i + "] = " + a1[i]);
}