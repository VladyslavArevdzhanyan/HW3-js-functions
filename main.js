console.log('------------- # 4')
function sum(a, b) {
    return a += b
}
console.log(sum(50, 80));

function minus(a, b) {
    return a -= b
}
console.log(minus(50, 80));

function multiplication(a, b) {
    return a *= b
}
console.log(multiplication(50, 80));

function share(a, b) {
    return a /= b
}
console.log(share(50, 80));



console.log('------------- # 5')
function range(n) {
    for (let i = 1; i <= n;i++) {
        console.log(i)
    }
}
range(5);



console.log('------------- # 6')
function range(n) {
    for (let i = 5; i >= n;i--) {
        console.log(i)
    }
}
range(1);


console.log('------------- # 7')
function pow(x, n) {
    return x**n;
}
console.log(pow(20, 3));


console.log('------------- # 8')
function isBigger (a, b) {
    return (a > b) ? true : false;
}
isBigger(5, -1);    


console.log('------------- # 9')
function isSmaller (a, b) {
    return (a < b) ? true : false;
}
isSmaller(5, -1);    

