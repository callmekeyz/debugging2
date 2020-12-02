/*
1. Add up numbers of likes for a single post.
2. Each number in the array os the number of likes on a post.

*/

// const likes = require('./numbers.json');
// console.log(likes)

if (Array.isArray(likes)){
    console.log('yeo that is n array');

}else{
    console.log('nope');
}

console.log(likes[0]);

if ((likes[0]%2)===0){
    console.log('that is even.totally even');
}else{
    console.log('odd. it is odd!');
}

function isEven(n) {
    return(n % 2) === 0;
}

console.log(`likes[0] is even? ${isEven(likes[0])}`);