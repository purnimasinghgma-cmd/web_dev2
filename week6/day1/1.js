// lexical scope


// hello()
// function hello(){
//      console.log(name);
//      console.log("error");

//      if(true){
//         var name = "syam";
//         let age = "21";

//         cpnsole.log(name);
//         console.log(age);

//      }
//      console.log(name);
//      console.log(age);  

// }

// console.log(one());
// console.log("start");

// function one(){
//     console.log(name);
//     var name = "ram";


//     three();
//     console.log(name);
//     return "shyam"
// }
// console.log("mid");

// function three(){
//     return "hello devlopers"

// }
// function two(){
//     console.log("error");
//     let age =21;
//     comsole.log(three());
//     console.log(age);
// }
// console.log(two());
// console.log("end");
// one()

// 5. Timer

// console.log("start");

// setTimer(() => {
//     console.log("mid");

// },5000);
// console.log("end");

// setInterval(() => {  
//     console.log("chup ho jao varna ...");


// },3000)

//
console.log("start");

setInterval(() => {
    three()
},1000)

function one(){
    console.log(name);
    var name = "love";

    return name;
    console.log(one());

}
setTimeout(() => {
    console.log(one());

},3000)
