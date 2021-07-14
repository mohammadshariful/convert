"use strict";
let result = document.querySelector("#result");
document.querySelector("#submit").addEventListener("click",function (event) {
event.preventDefault();
const num =document.querySelector("#number").value;

if (num === "") {
    alert("Please enter a number");
} else if (num <0) {
    alert("Please enter a positive number");
} else{
    result.style.visibility = "visible";
}
 let binaryNumber = Number(num).toString(2);
 result.innerText =binaryNumber;
    
});
