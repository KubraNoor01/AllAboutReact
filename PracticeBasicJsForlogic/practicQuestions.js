//double the array
let arr=[1,2,3,4];
let doubledArr= arr.map((num,arr)=>{

return num*2;

});
console.log("The doubled array is : "+ doubledArr);


//square of an array
let arr1=[1,2,3,4];
let squareArr= arr1.map((num,arr1)=>{
return num*num;

});
console.log("the square array: "+ squareArr);


//even no
let arr2=[1,2,3,4];
let evenarr=arr2.filter((num,arr2)=>{
return num%2==0;
});

console.log("even :" + evenarr);


//greater than 10
let arr3=[10,20,3,4];
let greaterarr=arr3.filter((num,arr3)=>{
return num>10 && num%5==0;
});

console.log("greater and multiple of 5: " + greaterarr);

// Scenario:
// Tere paas products ka array hai aur tu user ko 
// "Show products under 1000 PKR" ka filter deti hai.

let products=[
{name: "shoes",price : 2000 },
{name: "bag",price : 2500 },
{name: "watch",price : 1000 }

];

let productInRange=products.filter((num,products)=>{
return num.price>2000;
});
console.log(productInRange);

//search 
let members=["Bunny ", "Maddy ","sweetie"];
let inputSearch='a';
let searchedName=members.filter((names,members)=>{
return names.toLowerCase().includes(inputSearch.toLowerCase());
});
console.log(searchedName);

