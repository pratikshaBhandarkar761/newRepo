'use strict';

// function calcAge(birthYear) {
//     const age = 2021 - birthYear;
//     // console.log(firstName);
//     function printAge() {
//         let output = `${firstName} you are ${age},born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1986) {
//             var millanial = true;
//             const firstName = 'jonas';
//             const str = `Oh you're millanial,${firstName}`;
//             // console.log(str);//error
//             console.log(millanial)
//             console.log(str);
//             //blocked scope function and can not be called outside the block
//             function add(a, b) {
//                 console.log(a + b);
//             }
//             add(5, 8);
//             output = 'New Output';
//         }
//         console.log(output)
//     }
//     printAge();
//     return age;
// }
// const firstName = "radha";
// calcAge(1982)
//     // console.log(output)
//     //variable
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
//     //Hoisting
// var a = "name";
// let b = "job";
// const c = 1991;

// //functions
// // console.log(addDecl(5, 8));
// // console.log(addExp(1, 1));
// // console.log(addArrow(2, 2))

// function addDecl(a, b) {
//     return a + b;
// }

// const addExp = function(a, b) {
//     return a + b;
// }
// const addArrow = (a, b) => a + b;
// // ---------------------

// if (!numproducts) deleteShoppingCart();

// var numproducts = 10;

// function deleteShoppingCart() {
//     console.log("All Products deleted");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2022 - birthYear);
//     console.log(this);
// }
// calcAge(2000);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAgeArrow(1996)

// const jonas = {
//     year: 2005,
//     name: "rani",
//     calcAge: function() {
//         console.log(this);
//         console.log(2032 - this.year);
//     },
// };

// jonas.calcAge();

// const matilda = {
//     year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f()


const jonas = {
    year: 2005,
    name: "rani",
    calcAge: function() {
        console.log(this);
        console.log(2032 - this.year);
    },
};