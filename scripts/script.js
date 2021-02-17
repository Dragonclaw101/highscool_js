//JS loops
//In an infinite-loop, use ctl-C

let n = 0;

while (n < 3){
    n++; //Adds one to n
}

console.log(n);

let str = ' ';

for (let i = 0; i <= 9; i++){
    console.log(str + ' at the ' + i + ' iteration');
    str = str+i;
}