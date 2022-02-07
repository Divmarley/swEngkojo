const car1 = "Saab";
const car2 = "Volvo";
const car3 = "BMW";

// const cars = ["Saab", "Volvo", "BMW", "BMW"]; 
// // let x= cars[1];
// cars[-1]
// console.log(cars); 
// console.log(cars.length); 

// const friends = ['kofi','ama', 'kwame',['sika','crownie']];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[3][1]);
// console.log(friends[friends.length-1][1]);
// friends.push('kojo')
// console.log(friends);
// console.log(friends.length-1);

// for(let i =0; i < friends.length; i++){
//     console.log(friends[i]);
// }





let schoolFriends = ['kofi','ama', 'kwame',['sika','crownie'],];
let churchFriends = ['nii', 'pastor',['brain','ola']];

// const listAllFriends =schoolFriends + churchFriends;
// console.log(listAllFriends);

// schoolFriends+=churchFriends;
// console.log(schoolFriends);

const listAllFriends =[];

// listAllFriends.push(schoolFriends);
// console.log(listAllFriends);


// listAllFriends.concat(schoolFriends ,churchFriends);

// console.log(listAllFriends);


// for (let i = 0; i < schoolFriends.length; i++) {
//     listAllFriends.push(schoolFriends[i]);
    
// }
// console.log(listAllFriends);

// console.log(churchFriends.pop());
// console.log(churchFriends.pop());
// console.log(churchFriends.pop());
// console.log(churchFriends.shift());
// console.log(churchFriends.shift());
// console.log(churchFriends.shift());
// console.log(churchFriends.shift());
// console.log(churchFriends.shift());
//  churchFriends.splice(1,2,'jajaj');

// console.log(churchFriends);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// slice()
/*
 The slice() method slices out 
 a piece of an array into a new array.


*/

// let oo = fruits.slice(-1);
// console.log(oo);
// console.log(Array.isArray(fruits));
// console.log(typeof(fruits));
 
// fruits.sort();
// console.log();


const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];
// movements.forEach(function (array,i,arr) {
//     console.log(array,i,arr);
// });

// const myfunction = function(v,i,arr){
//     return `${v<0}    ----${}`;
//     }

// const a =movements.filter(function() {
    
// })


// console.log(a);



let s= movements.reduce(function (total,value,index,arry) {
    return arry
})

console.log(s);
