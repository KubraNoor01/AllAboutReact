////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//_______________Day 2_________________________

let nums=[1,2,3,4,5,6,7,8,9,0];
for(let i=0 ;i<10;i++){
    console.log(nums[i]);
}


/*Scenario : //for.......in  
Tere paas ek API se user profile data aata hai.
Tu har property aur uski value ko dynamically 
display karna chahti hai (taake code static na ho)*/

const userPorfile={
    name:"Bunny",
    emaiil: "buuny@gmail.com",
    age:21,
    country:"Pakistan"

};

for (let key in userPorfile){
    console.log(`${key}: ${userPorfile[key]}`);
}

//foreach
let  numbers=[1,2,3,4,5];
let no= numbers.forEach((num,index)=>{
console.log(`${index}:${num*num}`)
})

//function

function sum( a ,  b){
return a+b;
}
const result=sum(4,5);
console.log(result);

function square(num){
    return num*num;
};
const result1=square(5);
console.log(result1);