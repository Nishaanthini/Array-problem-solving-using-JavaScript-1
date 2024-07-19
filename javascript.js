//7.Array joining and splitting
//join()
const fruits = ["Apple", "Mango"];
let text = fruits.join(" and ");
console.log(text);
//split()
let text1 = "Fullstack";
console.log(text1.split(""));

//8.Array destructing
let num= [25, 5 , 45, 100];
console.log(num[0]); 
console.log(num[3]); 

//22.Array Manipulation with slice
function func() {
    let arr = [23, 56, 87, 32, 75, 13];
    let arr1 = arr.slice(2, 5);
    console.log(arr1);
}
func();

//11.Flattening Array
const Arr = [[1,2],[3,4],[5,6]];
const Arr1 = Arr.flat();
console.log(Arr1);

//9.Array Spreading
let num1 = [4,5,6];
let num2 = [7,8,9];
let value = [...num1, ...num2];
console.log(value);