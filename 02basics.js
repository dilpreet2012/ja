/*let, const and var
let=block scope(recommnended)
var=global scope(not recommended)
const=use to declare constant*/
var a=45;
console.log(a);
//let a=5//(can't define because a is already defined)
const b=34;
console.log(b);
//b=b+4;(can't change because it is declared as constant)
console.log(b);
{
    const b=45;
    console.log(b);
}